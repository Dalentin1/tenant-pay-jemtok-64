'use server';

import { PrismaClient } from '@/generated/prisma-client';
import { withAccelerate } from '@prisma/extension-accelerate';
import type { Tenant, Bill, Payment, SharedBill, Announcement, Delegate, AllocatedBill } from '@/lib/types';

// --- Prisma Client Initialization with Accelerate ---
const prisma = new PrismaClient().$extends(withAccelerate());

// --- Initial Data for Seeding ---
const initialTenants = [
    { "id": "1", "name": "Speedo Nnodu 1", "propertyAddress": "64 Jemtok street, Ago-Palace way, Lagos Nigeria, Apt 1", "imageUrl": "https://picsum.photos/seed/1/200/200" },
    { "id": "2", "name": "Tried", "propertyAddress": "64 Jemtok street, Ago-Palace way, Lagos Nigeria, Apt 2", "imageUrl": "https://picsum.photos/seed/2/200/200" },
    { "id": "3", "name": "Charlie Brown", "propertyAddress": "64 Jemtok street, Ago-Palace way, Lagos Nigeria, Unit A", "imageUrl": "https://picsum.photos/seed/3/200/200" },
    { "id": "4", "name": "Diana Miller", "propertyAddress": "64 Jemtok street, Ago-Palace way, Lagos Nigeria, Unit B", "imageUrl": "https://picsum.photos/seed/4/200/200" },
    { "id": "5", "name": "Ethan Davis", "propertyAddress": "64 Jemtok street, Ago-Palace way, Lagos Nigeria, Apt 3", "imageUrl": "https://picsum.photos/seed/5/200/200" },
    { "id": "6", "name": "Fiona Garcia", "propertyAddress": "64 Jemtok street, Ago-Palace way, Lagos Nigeria, Apt 4", "imageUrl": "https://picsum.photos/seed/6/200/200" },
    { "id": "7", "name": "George Rodriguez", "propertyAddress": "64 Jemtok street, Ago-Palace way, Lagos Nigeria, #101", "imageUrl": "https://picsum.photos/seed/7/200/200" },
    { "id": "8", "name": "Hannah Martinez", "propertyAddress": "64 Jemtok street, Ago-Palace way, Lagos Nigeria, #102", "imageUrl": "https://picsum.photos/seed/8/200/200" }
];

// --- Data Access Functions ---

export async function getTenants(): Promise<Tenant[]> {
    try {
        const count = await prisma.tenant.count();
        if (count === 0) {
            await prisma.tenant.createMany({
                data: initialTenants.map(t => ({...t, id: undefined})), // Let Prisma handle ID generation
            });
        }
        return await prisma.tenant.findMany();
    } catch (error) {
        console.error("Error fetching tenants:", error);
        // Fallback to initial tenants if DB is not available
        return initialTenants;
    }
}

export async function getTenantById(id: string): Promise<Tenant | null> {
  return await prisma.tenant.findUnique({ where: { id } });
}

export async function updateTenant(id: string, data: { name: string; flatNumber: string, imageUrl?: string }): Promise<Tenant> {
    const streetAddress = "64 Jemtok street, Ago-Palace way, Lagos Nigeria";
    return await prisma.tenant.update({
        where: { id },
        data: {
            name: data.name,
            propertyAddress: `${streetAddress}, ${data.flatNumber}`,
            imageUrl: data.imageUrl,
        },
    });
}

export async function getBillsByTenantId(tenantId: string): Promise<Bill[]> {
  const bills = await prisma.bill.findMany({
    where: { tenantId },
    orderBy: { dueDate: 'desc' },
  });
  return bills as Bill[];
}

export async function getAllBillsByTenantId(tenantId: string): Promise<Bill[]> {
  const bills = await prisma.bill.findMany({
    where: { tenantId },
    orderBy: { month: 'desc' },
  });
  return bills as Bill[];
}

export async function getBillById(billId: string): Promise<Bill | null> {
    const bill = await prisma.bill.findUnique({ where: { id: billId }});
    return bill as Bill | null;
}

export async function getUnpaidBillForTenant(tenantId: string): Promise<Bill | null> {
    const bill = await prisma.bill.findFirst({
        where: { tenantId, status: 'unpaid' },
    });
    return bill as Bill | null;
}

export async function getPaymentsByTenantId(tenantId: string): Promise<Payment[]> {
    return await prisma.payment.findMany({
        where: { tenantId },
        orderBy: { paymentDate: 'desc' },
    });
}

export async function getAllSharedBills(): Promise<SharedBill[]> {
    return await prisma.sharedBill.findMany({
        orderBy: { date: 'desc' },
    });
}

export async function addBill(billData: Omit<Bill, 'id' | 'carriedOverAmount' | 'status' | 'dueDate'>, outstandingBalance: number = 0): Promise<Bill> {
  const newBill = await prisma.bill.create({
      data: {
          tenantId: billData.tenantId,
          amount: billData.amount + outstandingBalance,
          month: billData.month,
          status: 'unpaid',
          dueDate: new Date().toISOString(),
          carriedOverAmount: outstandingBalance,
      }
  });
  return newBill as Bill;
}

export async function updateBillStatus(billId: string, status: 'paid' | 'unpaid' | 'carried-over'): Promise<void> {
    await prisma.bill.update({
        where: { id: billId },
        data: { status },
    });
}

export async function updateBill(billId: string, newBaseAmount: number): Promise<void> {
    const bill = await getBillById(billId);
    if (!bill) throw new Error("Bill not found");
    const carriedOverAmount = bill.carriedOverAmount || 0;
    await prisma.bill.update({
        where: { id: billId },
        data: { amount: newBaseAmount + carriedOverAmount },
    });
}

export async function addSharedBill(billData: Omit<SharedBill, 'id'>): Promise<SharedBill> {
    const allTenants = await getTenants();
    const tenantCount = allTenants.length;
    
    return await prisma.$transaction(async (tx) => {
        const newSharedBill = await tx.sharedBill.create({ data: billData });
        
        if (tenantCount > 0) {
            const amountPerTenant = billData.amount / tenantCount;
            const allocations = allTenants.map(tenant => ({
                sharedBillId: newSharedBill.id,
                tenantId: tenant.id,
                amount: amountPerTenant,
            }));
            await tx.allocatedBill.createMany({ data: allocations });
        }
        
        return newSharedBill;
    });
}

export async function deleteSharedBill(billId: string): Promise<void> {
    const billToDelete = await prisma.sharedBill.findUnique({ where: { id: billId }});
    if (!billToDelete) throw new Error('Bill not found.');

    const now = new Date();
    now.setDate(1);
    now.setHours(0, 0, 0, 0);

    const billDate = new Date(billToDelete.date);
    billDate.setDate(1);
    billDate.setHours(0, 0, 0, 0);
    
    if (billDate < now) {
        throw new Error('Cannot delete bills from past months.');
    }
    
    await prisma.$transaction([
        prisma.allocatedBill.deleteMany({ where: { sharedBillId: billId }}),
        prisma.sharedBill.delete({ where: { id: billId }}),
    ]);
}

export async function addPayment(paymentData: Omit<Payment, 'id' | 'receiptId' | 'receiptText'>, receiptText: string): Promise<Payment> {
  return await prisma.$transaction(async (tx) => {
      const newPayment = await tx.payment.create({
          data: {
              ...paymentData,
              receiptId: `rec_p-${Date.now()}`,
              receiptText,
          }
      });
      
      const bill = await tx.bill.findUnique({ where: { id: newPayment.billId }});
      if (bill) {
          const newAmount = bill.amount - newPayment.amount;
          await tx.bill.update({
              where: { id: newPayment.billId },
              data: {
                  amount: newAmount < 0.01 ? 0 : newAmount,
                  status: newAmount < 0.01 ? 'paid' : bill.status,
              }
          });
      }
      
      return newPayment;
  });
}

export async function getAnnouncements(): Promise<Announcement[]> {
    return await prisma.announcement.findMany({
        orderBy: { date: 'desc' },
    });
}

export async function addAnnouncement(announcementData: Omit<Announcement, 'id' | 'date'>): Promise<Announcement> {
    return await prisma.announcement.create({
        data: {
            ...announcementData,
            date: new Date().toISOString(),
        }
    });
}

export async function getDelegates(): Promise<Delegate[]> {
    return await prisma.delegate.findMany();
}

export async function addDelegate(delegateData: Omit<Delegate, 'id'>): Promise<Delegate> {
    return await prisma.delegate.create({ data: delegateData });
}

export async function deleteDelegate(delegateId: string): Promise<void> {
    await prisma.delegate.delete({ where: { id: delegateId }});
}

export async function getAllocatedBillsBySharedBillId(sharedBillId: string): Promise<AllocatedBill[]> {
    return await prisma.allocatedBill.findMany({ where: { sharedBillId }});
}

export async function updateAllocatedBill(allocationId: string, newAmount: number): Promise<void> {
    await prisma.$transaction(async (tx) => {
        const originalAllocation = await tx.allocatedBill.findUnique({ where: { id: allocationId }});
        if (!originalAllocation) throw new Error('Allocation not found.');

        const amountDifference = newAmount - originalAllocation.amount;
        
        await tx.allocatedBill.update({
            where: { id: allocationId },
            data: { amount: newAmount },
        });
        
        const sharedBill = await tx.sharedBill.findUnique({ where: { id: originalAllocation.sharedBillId }});
        if (!sharedBill) throw new Error('Shared bill not found.');

        const billMonth = new Date(sharedBill.date).toISOString().substring(0, 7);

        const tenantBill = await tx.bill.findFirst({
            where: {
                tenantId: originalAllocation.tenantId,
                month: billMonth
            }
        });
        
        if (tenantBill) {
            const newBillAmount = tenantBill.amount + amountDifference;
            await tx.bill.update({
                where: { id: tenantBill.id },
                data: { amount: newBillAmount < 0 ? 0 : newBillAmount },
            });
        }
    });
}

export async function updateAdminPassword(newPassword: string): Promise<void> {
    // This is a placeholder. In a real app, you would securely store and update this.
    // For this example, we'll just log it. A real implementation needs a proper user/admin table.
    console.log(`Admin password would be updated to: ${newPassword}`);
}

export async function clearAllData(): Promise<void> {
    await prisma.$transaction([
        prisma.allocatedBill.deleteMany(),
        prisma.payment.deleteMany(),
        prisma.sharedBill.deleteMany(),
        prisma.bill.deleteMany(),
        prisma.delegate.deleteMany(),
        prisma.announcement.deleteMany(),
        // We are not deleting tenants to preserve the base data
    ]);
}
