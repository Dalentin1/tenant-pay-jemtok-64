'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { addBill, addPayment, addSharedBill, deleteSharedBill, getTenantById, getUnpaidBillForTenant, addAnnouncement, updateTenant, addDelegate, deleteDelegate, updateBillStatus, getTenants, updateAllocatedBill, updateBill, updateAdminPassword } from '@/lib/data';
import { generatePaymentReceipt } from '@/ai/flows/generate-payment-receipt';
import { Bill, SharedBill, Announcement, Delegate } from '@/lib/types';

const billSchema = z.object({
  tenantId: z.string().min(1, 'Tenant is required'),
  amount: z.coerce.number().min(0.01, 'Amount must be positive'),
  month: z.string().min(1, 'Month is required'),
});

const updateBillSchema = z.object({
    amount: z.coerce.number().min(0, "Amount can't be negative"),
});

const sharedBillSchema = z.object({
    name: z.string().min(1, 'Bill name is required'),
    amount: z.coerce.number().min(0.01, 'Amount must be positive'),
    month: z.string().min(1, 'Month is required'),
});

const announcementSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    content: z.string().min(1, 'Content is required'),
});

const tenantSchema = z.object({
    name: z.string().min(1, "Name is required"),
    flatNumber: z.string().min(1, "Flat number is required"),
    imageUrl: z.string().url("Must be a valid URL").optional().or(z.literal('')),
});

const delegateSchema = z.object({
    task: z.string().min(1, 'Task description is required'),
    tenantId: z.string().min(1, 'Tenant is required'),
});

const paymentSchema = z.object({
    tenantId: z.string(),
    amount: z.coerce.number().positive("Payment amount must be positive."),
    paystackReference: z.string().min(1, "Paystack reference is required."),
});

const allocatedBillSchema = z.object({
    allocationId: z.string(),
    amount: z.coerce.number().min(0, "Amount can't be negative"),
});

const loginSchema = z.object({
    password: z.string().min(1, 'Password is required'),
});

const changePasswordSchema = z.object({
    oldPassword: z.string().min(1, 'Old password is required'),
    newPassword: z.string().min(6, 'New password must be at least 6 characters long'),
    confirmPassword: z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "New passwords don't match",
    path: ["confirmPassword"],
});


export async function adminLoginAction(prevState: any, formData: FormData) {
    const validatedFields = loginSchema.safeParse({
        password: formData.get('password'),
    });

    if (!validatedFields.success) {
        return { message: 'Password is required.' };
    }

    const { password } = validatedFields.data;

    if (password === process.env.ADMIN_PASSWORD) {
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
        cookies().set('session', 'admin_logged_in', { expires, httpOnly: true });
        redirect('/admin');
    } else {
        return { message: 'Invalid password.' };
    }
}

export async function adminLogoutAction() {
    cookies().delete('session');
    redirect('/');
}

export async function changePasswordAction(prevState: any, formData: FormData) {
    const validatedFields = changePasswordSchema.safeParse(Object.fromEntries(formData));

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Invalid data provided.',
        };
    }

    const { oldPassword, newPassword } = validatedFields.data;

    if (oldPassword !== process.env.ADMIN_PASSWORD) {
        return { message: 'The old password you entered is incorrect.', errors: { oldPassword: ['Incorrect password.'] } };
    }
    
    if (oldPassword === newPassword) {
        return { message: 'The new password cannot be the same as the old password.', errors: { newPassword: ['New password must be different.'] } };
    }

    try {
        await updateAdminPassword(newPassword);
        // Invalidate session and force re-login
        cookies().delete('session');
        return { success: true, message: 'Password updated successfully! The server needs to restart for the change to take full effect. Please log in again with your new password after the restart.'};

    } catch (error) {
        const message = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { message: `Error updating password: ${message}`, errors: {} };
    }
}


export async function updateTenantAction(tenantId: string, prevState: any, formData: FormData) {
  const validatedFields = tenantSchema.safeParse({
    name: formData.get('name'),
    flatNumber: formData.get('flatNumber'),
    imageUrl: formData.get('imageUrl'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid data. Please check the fields.',
    };
  }

  const { name, flatNumber, imageUrl } = validatedFields.data;

  try {
    await updateTenant(tenantId, { name, flatNumber, imageUrl: imageUrl || undefined });
    revalidatePath('/admin');
    revalidatePath(`/admin/tenants/${tenantId}/edit`);
    revalidatePath('/');
    return { message: 'Tenant updated successfully.', errors: {} };
  } catch (error) {
    return { message: 'Database Error: Failed to update tenant.', errors: {} };
  }
}

export async function uploadBillAction(prevState: any, formData: FormData) {
  const validatedFields = billSchema.safeParse({
    tenantId: formData.get('tenantId'),
    amount: formData.get('amount'),
    month: formData.get('month'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid data. Please check the fields.',
    };
  }
  
  const { tenantId, amount, month } = validatedFields.data;

  try {
    const outstandingBill = await getUnpaidBillForTenant(tenantId);
    let outstandingBalance = 0;
    if (outstandingBill) {
        outstandingBalance = outstandingBill.amount;
        await updateBillStatus(outstandingBill.id, 'carried-over');
    }

    const billData: Omit<Bill, 'id' | 'carriedOverAmount'> = {
      tenantId,
      amount,
      month,
      status: 'unpaid',
      dueDate: new Date().toISOString(),
    };
    await addBill(billData, outstandingBalance);
    
    revalidatePath('/admin');
    revalidatePath('/dashboard', 'layout');
    return { message: `Bill for ${month} uploaded successfully.`, errors: {} };
  } catch (error) {
    return { message: 'Database Error: Failed to upload bill.', errors: {} };
  }
}

export async function updateBillAction(billId: string, tenantId: string, prevState: any, formData: FormData) {
    const validatedFields = updateBillSchema.safeParse({
        amount: formData.get('amount'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Invalid data provided.',
        };
    }

    const { amount } = validatedFields.data;

    try {
        await updateBill(billId, amount);
        revalidatePath(`/admin/tenants/${tenantId}`);
        revalidatePath(`/admin/bills/${billId}/edit`);
        return { message: 'Bill updated successfully.', errors: {} };
    } catch (error) {
        const message = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { message: `Database Error: Failed to update bill. ${message}`, errors: {} };
    }
}


export async function addSharedBillAction(prevState: any, formData: FormData) {
    const validatedFields = sharedBillSchema.safeParse({
        name: formData.get('name'),
        amount: formData.get('amount'),
        month: formData.get('month'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Invalid data. Please check the fields.',
        };
    }

    const { name, amount, month } = validatedFields.data;

    try {
        const sharedBillData: Omit<SharedBill, 'id'> = {
            name,
            amount,
            date: new Date(month).toISOString(),
        };
        await addSharedBill(sharedBillData);
        revalidatePath('/admin');
        revalidatePath('/dashboard', 'layout');
        return { message: `Shared bill "${name}" added and distributed successfully.`, errors: {} };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { message: `Database Error: Failed to add shared bill. ${errorMessage}`, errors: {} };
    }
}

export async function deleteSharedBillAction(billId: string) {
    try {
        await deleteSharedBill(billId);
        revalidatePath('/admin');
        revalidatePath('/dashboard', 'layout');
        return { success: true, message: 'Shared bill deleted successfully.' };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, message: `Database Error: Failed to delete shared bill. ${errorMessage}` };
    }
}

export async function updateAllocatedBillAction(prevState: any, formData: FormData) {
    const validatedFields = allocatedBillSchema.safeParse({
        allocationId: formData.get('allocationId'),
        amount: formData.get('amount'),
    });

    if (!validatedFields.success) {
        return {
            message: 'Invalid data submitted.',
            errors: validatedFields.error.flatten().fieldErrors,
            success: false,
        };
    }
    
    const { allocationId, amount } = validatedFields.data;

    try {
        await updateAllocatedBill(allocationId, amount);
        revalidatePath('/admin');
        revalidatePath('/dashboard', 'layout');
        return { success: true, message: 'Allocation updated successfully.' };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, message: `Database Error: Failed to update allocation. ${errorMessage}` };
    }
}


export async function addAnnouncementAction(prevState: any, formData: FormData) {
    const validatedFields = announcementSchema.safeParse({
        title: formData.get('title'),
        content: formData.get('content'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Invalid data. Please check the fields.',
        };
    }

    const { title, content } = validatedFields.data;

    try {
        const announcementData: Omit<Announcement, 'id' | 'date'> = {
            title,
            content,
        };
        await addAnnouncement(announcementData);
        revalidatePath('/admin');
        revalidatePath('/dashboard', 'layout');
        return { message: 'Announcement posted successfully.', errors: {} };
    } catch (error) {
        return { message: 'Database Error: Failed to post announcement.', errors: {} };
    }
}

export async function addDelegateAction(prevState: any, formData: FormData) {
    const validatedFields = delegateSchema.safeParse({
        task: formData.get('task'),
        tenantId: formData.get('tenantId'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Invalid data. Please check the fields.',
        };
    }

    const { task, tenantId } = validatedFields.data;

    try {
        const delegateData: Omit<Delegate, 'id'> = {
            task,
            tenantId,
        };
        await addDelegate(delegateData);
        revalidatePath('/admin');
        return { message: 'Task delegated successfully.', errors: {} };
    } catch (error) {
        return { message: 'Database Error: Failed to delegate task.', errors: {} };
    }
}

export async function deleteDelegateAction(delegateId: string) {
    try {
        await deleteDelegate(delegateId);
        revalidatePath('/admin');
        return { success: true, message: 'Delegation removed successfully.' };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, message: `Database Error: Failed to remove delegation. ${errorMessage}` };
    }
}


export async function processPaymentAction(prevState: any, formData: FormData) {
    const validatedFields = paymentSchema.safeParse({
        tenantId: formData.get('tenantId'),
        amount: formData.get('amount'),
        paystackReference: formData.get('paystackReference'),
    });

    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Invalid data provided.',
          success: false,
        };
    }

    const { tenantId, amount, paystackReference } = validatedFields.data;

    try {
        const tenant = await getTenantById(tenantId);
        const unpaidBill = await getUnpaidBillForTenant(tenantId);

        if (!tenant || !unpaidBill) {
            return { success: false, message: 'No outstanding bill found for this tenant.' };
        }
        
        if (amount > unpaidBill.amount) {
            return { success: false, message: `Payment amount cannot be greater than the outstanding bill of ₦${unpaidBill.amount.toFixed(2)}.` };
        }

        // Simulate payment processing delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        const paymentDate = new Date();

        // Generate receipt using GenAI
        const receiptTextData = await generatePaymentReceipt({
            tenantName: tenant.name,
            paymentAmount: amount,
            paymentDate: paymentDate.toISOString().split('T')[0],
            propertyAddress: tenant.propertyAddress,
            receiptId: `rec_${unpaidBill.id}_${Date.now()}`,
            paystackReference,
        });

        await addPayment(
            {
                tenantId: tenant.id,
                billId: unpaidBill.id,
                amount: amount,
                paymentDate: paymentDate.toISOString(),
            },
            receiptTextData.receiptText
        );

        revalidatePath(`/dashboard/${tenantId}`);
        revalidatePath(`/dashboard/${tenantId}/history`);
        revalidatePath('/dashboard', 'layout');


        return { success: true, message: 'Payment successful!' };
    } catch (error) {
        const message = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, message: `Payment failed: ${message}` };
    }
}
