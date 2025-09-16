import { getPaymentsByTenantId, getTenantById } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { History } from 'lucide-react';
import { notFound } from 'next/navigation';
import ReceiptViewer from './receipt-viewer';

export default async function PaymentHistoryPage({
  params,
}: {
  params: { tenantId: string };
}) {
  const tenantId = params.tenantId;
  const [tenant, payments] = await Promise.all([
    getTenantById(tenantId),
    getPaymentsByTenantId(tenantId)
  ]);

  if (!tenant) {
    notFound();
  }

  return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="text-primary" />
            Payment History
          </CardTitle>
          <CardDescription>
            A record of all your past payments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Receipt</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.length > 0 ? (
                payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">
                      {new Date(payment.paymentDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell>₦{payment.amount.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge variant="default" className='bg-green-500 hover:bg-green-600'>Paid</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                        <ReceiptViewer receiptText={payment.receiptText} />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center h-24">
                    No payment history found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
  );
}
