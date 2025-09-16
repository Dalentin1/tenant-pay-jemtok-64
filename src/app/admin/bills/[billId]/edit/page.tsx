import { getBillById, getTenantById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import EditBillForm from './edit-bill-form';
import { FileText } from 'lucide-react';

export default async function EditBillPage({ params }: { params: { billId: string } }) {
  const bill = await getBillById(params.billId);

  if (!bill) {
    notFound();
  }
  
  const tenant = await getTenantById(bill.tenantId);
  
  if (!tenant) {
      notFound();
  }

  const billMonth = new Date(`${bill.month}-02`).toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
      <div className="space-y-8 p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl font-bold font-headline">Edit Bill</h1>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="text-primary" />
              Update Bill Details
            </CardTitle>
            <CardDescription>
              Editing bill for {tenant.name} for the month of {billMonth}.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EditBillForm bill={bill} />
          </CardContent>
        </Card>
      </div>
  );
}

    