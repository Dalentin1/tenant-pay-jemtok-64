export type Tenant = {
  id: string;
  name: string;
  propertyAddress: string;
  imageUrl?: string;
};

export type Bill = {
  id: string;
  tenantId: string;
  amount: number;
  month: string; // e.g., "July 2024"
  status: 'paid' | 'unpaid' | 'carried-over';
  dueDate: string; // ISO String
  carriedOverAmount?: number;
};

export type Payment = {
  id: string;
  tenantId: string;
  billId: string;
  amount: number;
  paymentDate: string; // ISO string
  receiptId: string;
  receiptText: string;
};

export type SharedBill = {
    id: string;
    name: string;
    amount: number;
    date: string; // ISO string for the month it applies to
};

export type AllocatedBill = {
    id: string;
    sharedBillId: string;
    tenantId: string;
    amount: number;
};


export type Announcement = {
  id: string;
  title: string;
  content: string;
  date: string; // ISO string
};

export type Delegate = {
  id: string;
  task: string;
  tenantId: string;
};
