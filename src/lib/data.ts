'use server';

import type { Tenant, Bill, Payment, SharedBill, Announcement, Delegate, AllocatedBill } from '@/lib/types';
import fs from 'fs/promises';
import path from 'path';

const tenantsFilePath = path.join(process.cwd(), 'src', 'lib', 'tenants.json');
const sharedBillsFilePath = path.join(process.cwd(), 'src', 'lib', 'shared-bills.json');
const announcementsFilePath = path.join(process.cwd(), 'src', 'lib', 'announcements.json');
const delegatesFilePath = path.join(process.cwd(), 'src', 'lib', 'delegates.json');
const billsFilePath = path.join(process.cwd(), 'src', 'lib', 'bills.json');
const paymentsFilePath = path.join(process.cwd(), 'src', 'lib', 'payments.json');
const allocatedBillsFilePath = path.join(process.cwd(), 'src', 'lib', 'allocated-bills.json');
const envFilePath = path.join(process.cwd(), '.env');


// --- JSON File I/O Functions ---

async function readJsonFile<T>(filePath: string): Promise<T[]> {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        // If the file is empty, JSON.parse will fail, so we return an empty array.
        if (!data.trim()) {
            return [];
        }
        return JSON.parse(data) as T[];
    } catch (error) {
        // If the file doesn't exist, create it with an empty array and return the empty array.
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
            await fs.writeFile(filePath, '[]', 'utf-8');
            return [];
        }
        // For any other errors, re-throw them.
        throw error;
    }
}

async function writeJsonFile<T>(filePath: string, data: T[]): Promise<void> {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

const readTenants = () => readJsonFile<Tenant>(tenantsFilePath);
const writeTenants = (data: Tenant[]) => writeJsonFile<Tenant>(tenantsFilePath, data);
const readSharedBills = () => readJsonFile<SharedBill>(sharedBillsFilePath);
const writeSharedBills = (data: SharedBill[]) => writeJsonFile<SharedBill>(sharedBillsFilePath, data);
const readAnnouncements = () => readJsonFile<Announcement>(announcementsFilePath);
const writeAnnouncements = (data: Announcement[]) => writeJsonFile<Announcement>(announcementsFilePath, data);
const readDelegates = () => readJsonFile<Delegate>(delegatesFilePath);
const writeDelegates = (data: Delegate[]) => writeJsonFile<Delegate>(delegatesFilePath, data);
const readBills = () => readJsonFile<Bill>(billsFilePath);
const writeBills = (data: Bill[]) => writeJsonFile<Bill>(billsFilePath, data);
const readPayments = () => readJsonFile<Payment>(paymentsFilePath);
const writePayments = (data: Payment[]) => writeJsonFile<Payment>(paymentsFilePath, data);
const readAllocatedBills = () => readJsonFile<AllocatedBill>(allocatedBillsFilePath);
const writeAllocatedBills = (data: AllocatedBill[]) => writeJsonFile<AllocatedBill>(allocatedBillsFilePath, data);

// --- .env File Functions ---
async function readEnvFile(): Promise<string> {
    try {
        return await fs.readFile(envFilePath, 'utf-8');
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
            return ''; // Return empty string if file doesn't exist
        }
        throw error;
    }
}

async function writeEnvFile(content: string): Promise<void> {
    await fs.writeFile(envFilePath, content, 'utf-8');
}

export async function updateAdminPassword(newPassword: string): Promise<void> {
    let envContent = await readEnvFile();
    const passwordKey = 'ADMIN_PASSWORD';
    const newEntry = `${passwordKey}=${newPassword}`;

    if (envContent.includes(passwordKey)) {
        // Replace existing password
        envContent = envContent.replace(new RegExp(`^${passwordKey}=.*`, 'm'), newEntry);
    } else {
        // Add new password entry
        envContent += `\n${newEntry}`;
    }

    await writeEnvFile(envContent);
}


// --- Data Access Functions ---

export async function getTenants(): Promise<Tenant[]> {
  return await readTenants();
}

export async function getTenantById(id: string): Promise<Tenant | undefined> {
  const tenants = await readTenants();
  return tenants.find((t) => t.id === id);
}

export async function updateTenant(id: string, data: { name: string; flatNumber: string, imageUrl?: string }): Promise<Tenant> {
    const tenants = await readTenants();
    const tenantIndex = tenants.findIndex((t) => t.id === id);
    if (tenantIndex === -1) {
        throw new Error('Tenant not found');
    }

    const tenant = tenants[tenantIndex];
    const streetAddress = "64 Jemtok street, Ago-Palace way, Lagos Nigeria";

    tenants[tenantIndex] = {
        ...tenant,
        name: data.name,
        propertyAddress: `${streetAddress}, ${data.flatNumber}`,
        imageUrl: data.imageUrl || tenant.imageUrl,
    };

    await writeTenants(tenants);
    return tenants[tenantIndex];
}

export async function getBillsByTenantId(tenantId: string): Promise<Bill[]> {
  const bills = await readBills();
  return bills.filter((b) => b.tenantId === tenantId).sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime());
}

export async function getAllBillsByTenantId(tenantId: string): Promise<Bill[]> {
  const bills = await readBills();
  return bills.filter((b) => b.tenantId === tenantId).sort((a, b) => new Date(b.month).getTime() - new Date(a.month).getTime());
}

export async function getBillById(billId: string): Promise<Bill | undefined> {
    const bills = await readBills();
    return bills.find((b) => b.id === billId);
}

export async function getUnpaidBillForTenant(tenantId: string): Promise<Bill | undefined> {
    const tenantBills = await getBillsByTenantId(tenantId);
    return tenantBills.find(b => b.status === 'unpaid');
}

export async function getPaymentsByTenantId(tenantId: string): Promise<Payment[]> {
    const payments = await readPayments();
    return payments.filter((p) => p.tenantId === tenantId).sort((a,b) => new Date(b.paymentDate).getTime() - new Date(a.paymentDate).getTime());
}

export async function getAllSharedBills(): Promise<SharedBill[]> {
    const bills = await readSharedBills();
    return [...bills].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function addBill(billData: Omit<Bill, 'id' | 'carriedOverAmount'>, outstandingBalance: number = 0): Promise<Bill> {
  const bills = await readBills();
  const newBill: Bill = {
    ...billData,
    id: `b-${Date.now()}`,
    amount: billData.amount + outstandingBalance,
    carriedOverAmount: outstandingBalance,
  };
  bills.push(newBill);
  await writeBills(bills);
  return newBill;
}

export async function updateBillStatus(billId: string, status: 'paid' | 'unpaid' | 'carried-over'): Promise<void> {
    const bills = await readBills();
    const billIndex = bills.findIndex(b => b.id === billId);
    if (billIndex === -1) {
        throw new Error('Bill not found');
    }
    bills[billIndex].status = status;
    await writeBills(bills);
}

export async function updateBill(billId: string, newBaseAmount: number): Promise<void> {
    const bills = await readBills();
    const billIndex = bills.findIndex(b => b.id === billId);
    if (billIndex === -1) {
        throw new Error('Bill not found');
    }
    const carriedOverAmount = bills[billIndex].carriedOverAmount || 0;
    bills[billIndex].amount = newBaseAmount + carriedOverAmount;
    await writeBills(bills);
}

export async function addSharedBill(billData: Omit<SharedBill, 'id'>): Promise<SharedBill> {
    const allBills = await readBills();
    const allTenants = await readTenants();
    const allAllocatedBills = await readAllocatedBills();

    const newSharedBill: SharedBill = {
        ...billData,
        id: `sb-${Date.now()}`,
    };
    
    // Distribute the shared bill among all tenants
    const tenantCount = allTenants.length;
    if (tenantCount === 0) {
        // Only write the shared bill if there are no tenants
        const currentSharedBills = await readSharedBills();
        await writeSharedBills([...currentSharedBills, newSharedBill]);
        return newSharedBill;
    }
    
    const amountPerTenant = billData.amount / tenantCount;

    for (const tenant of allTenants) {
        // Create an allocation record
        const newAllocation: AllocatedBill = {
            id: `ab-${Date.now()}-${tenant.id}`,
            sharedBillId: newSharedBill.id,
            tenantId: tenant.id,
            amount: amountPerTenant,
        };
        allAllocatedBills.push(newAllocation);

        // Find and update the tenant's unpaid bill or create a new one
        let unpaidBill = allBills.find(b => b.tenantId === tenant.id && b.status === 'unpaid');
        
        if (unpaidBill) {
            unpaidBill.amount += amountPerTenant;
        } else {
            // If no unpaid bill, create a new one for the shared amount
            const newTenantBill: Bill = {
                id: `b-${Date.now()}-${tenant.id}`,
                tenantId: tenant.id,
                amount: amountPerTenant,
                month: newSharedBill.date.substring(0, 7), // "YYYY-MM"
                status: 'unpaid',
                dueDate: new Date().toISOString(),
                carriedOverAmount: 0,
            };
            allBills.push(newTenantBill);
        }
    }

    const currentSharedBills = await readSharedBills();
    await writeSharedBills([...currentSharedBills, newSharedBill]);
    await writeAllocatedBills(allAllocatedBills);
    await writeBills(allBills);
    
    return newSharedBill;
}

export async function deleteSharedBill(billId: string): Promise<void> {
    const currentBills = await readSharedBills();
    const billToDelete = currentBills.find(bill => bill.id === billId);

    if (!billToDelete) {
        throw new Error('Bill not found.');
    }

    const now = new Date();
    // Set 'now' to the beginning of the current month
    now.setDate(1);
    now.setHours(0, 0, 0, 0);

    const billDate = new Date(billToDelete.date);
     // Set 'billDate' to the beginning of its month for a clean comparison
    billDate.setDate(1);
    billDate.setHours(0, 0, 0, 0);
    
    if (billDate < now) {
        throw new Error('Cannot delete bills from past months.');
    }

    const updatedBills = currentBills.filter(bill => bill.id !== billId);
    await writeSharedBills(updatedBills);
}


export async function addPayment(paymentData: Omit<Payment, 'id' | 'receiptId' | 'receiptText'>, receiptText: string): Promise<Payment> {
  const payments = await readPayments();
  const newPayment: Payment = {
    ...paymentData,
    id: `p-${Date.now()}`,
    receiptId: `rec_p-${Date.now()}`,
    receiptText,
  };
  payments.push(newPayment);
  await writePayments(payments);

  // Update bill status
  const bills = await readBills();
  const billIndex = bills.findIndex(b => b.id === newPayment.billId);
  if (billIndex !== -1) {
    const bill = bills[billIndex];
    bill.amount -= newPayment.amount;
    
    // Use a small tolerance for floating point comparison
    if (bill.amount < 0.01) {
        bill.status = 'paid';
        bill.amount = 0; // Set to 0 to avoid negative balances
    }
    
    await writeBills(bills);
  }
  
  return newPayment;
}

export async function getAnnouncements(): Promise<Announcement[]> {
    const announcements = await readAnnouncements();
    return [...announcements].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function addAnnouncement(announcementData: Omit<Announcement, 'id' | 'date'>): Promise<Announcement> {
    const currentAnnouncements = await readAnnouncements();
    const newAnnouncement: Announcement = {
        ...announcementData,
        id: `ann-${Date.now()}`,
        date: new Date().toISOString(),
    };
    const updatedAnnouncements = [newAnnouncement, ...currentAnnouncements];
    await writeAnnouncements(updatedAnnouncements);
    return newAnnouncement;
}

export async function getDelegates(): Promise<Delegate[]> {
    return await readDelegates();
}

export async function addDelegate(delegateData: Omit<Delegate, 'id'>): Promise<Delegate> {
    const currentDelegates = await readDelegates();
    const newDelegate: Delegate = {
        ...delegateData,
        id: `del-${Date.now()}`,
    };
    const updatedDelegates = [...currentDelegates, newDelegate];
    await writeDelegates(updatedDelegates);
    return newDelegate;
}

export async function deleteDelegate(delegateId: string): Promise<void> {
    const currentDelegates = await readDelegates();
    const updatedDelegates = currentDelegates.filter(d => d.id !== delegateId);
    if (currentDelegates.length === updatedDelegates.length) {
        // If the delegate was not found, do nothing, which is a success state for deletion.
        return;
    }
    await writeDelegates(updatedDelegates);
}

export async function getAllocatedBillsBySharedBillId(sharedBillId: string): Promise<AllocatedBill[]> {
    const allocatedBills = await readAllocatedBills();
    return allocatedBills.filter(ab => ab.sharedBillId === sharedBillId);
}

export async function updateAllocatedBill(allocationId: string, newAmount: number): Promise<void> {
    const allAllocatedBills = await readAllocatedBills();
    const allBills = await readBills();

    const allocationIndex = allAllocatedBills.findIndex(ab => ab.id === allocationId);
    if (allocationIndex === -1) {
        throw new Error('Allocation not found.');
    }

    const originalAllocation = allAllocatedBills[allocationIndex];
    const amountDifference = newAmount - originalAllocation.amount;
    
    // Update the allocation amount
    allAllocatedBills[allocationIndex].amount = newAmount;

    // Find the corresponding tenant bill to update
    // This assumes that the shared bill was added to an unpaid bill for that month.
    // This logic might need to be more robust depending on how bills are structured.
    const sharedBill = (await readSharedBills()).find(sb => sb.id === originalAllocation.sharedBillId);
    if (!sharedBill) {
        throw new Error('Original shared bill not found.');
    }
    const billMonth = sharedBill.date.substring(0, 7);

    // Find the tenant's bill for that month, prioritizing unpaid.
    let tenantBill = allBills.find(b => 
        b.tenantId === originalAllocation.tenantId && 
        b.month === billMonth &&
        b.status === 'unpaid'
    );

    // If no unpaid bill, find any bill for that month (e.g., carried-over)
    if (!tenantBill) {
        tenantBill = allBills.find(b => 
            b.tenantId === originalAllocation.tenantId && 
            b.month === billMonth
        );
    }
    
    if (tenantBill) {
        tenantBill.amount += amountDifference;
        // Ensure amount doesn't go negative
        if (tenantBill.amount < 0) tenantBill.amount = 0;
    } else {
        // This case should be rare if the bill was added correctly
        console.warn(`Could not find bill for tenant ${originalAllocation.tenantId} for month ${billMonth} to apply update.`);
    }

    await writeAllocatedBills(allAllocatedBills);
    await writeBills(allBills);
}

export async function clearAllData(): Promise<void> {
    await writeAnnouncements([]);
    await writeBills([]);
    await writeSharedBills([]);
    await writeDelegates([]);
    await writePayments([]);
    await writeAllocatedBills([]);
}
