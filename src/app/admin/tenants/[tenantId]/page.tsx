import { getAllBillsByTenantId, getPaymentsByTenantId, getTenantById } from '@/lib/data';
import { notFound } from 'next/navigation';
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { History, FileText, Pencil } from 'lucide-react';
import ReceiptViewer from '@/app/dashboard/[tenantId]/history/receipt-viewer';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function TenantFinancialsPage({ params }: { params: { tenantId: string } }) {
  const { tenantId } = params;
  const [tenant, payments, bills] = await Promise.all([
    getTenantById(tenantId),
    getPaymentsByTenantId(tenantId),
    getAllBillsByTenantId(tenantId),
  ]);

  if (!tenant) {
    notFound();
  }

  const getStatusVariant = (status: 'paid' | 'unpaid' | 'carried-over'): "default" | "destructive" | "secondary" => {
    switch (status) {
        case 'paid':
            return 'default';
        case 'unpaid':
            return 'destructive';
        case 'carried-over':
            return 'secondary';
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 border-2 border-primary">
          <AvatarImage src={tenant.imageUrl} alt={tenant.name} />
          <AvatarFallback>{tenant.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold font-headline">{tenant.name}</h1>
          <p className="text-muted-foreground">{tenant.propertyAddress}</p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="text-primary" />
              Bill History
            </CardTitle>
            <CardDescription>
              A record of all bills issued to {tenant.name}.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Month</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bills.length > 0 ? (
                  bills.map((bill) => (
                    <TableRow key={bill.id}>
                      <TableCell className="font-medium">
                        {new Date(`${bill.month}-02`).toLocaleString('default', { month: 'long', year: 'numeric' })}
                      </TableCell>
                      <TableCell>₦{bill.amount.toFixed(2)}</TableCell>
                      <TableCell>
                         <Badge 
                            variant={getStatusVariant(bill.status)} 
                            className={cn(bill.status === 'paid' && 'bg-green-500 hover:bg-green-600')}
                          >
                            {bill.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {bill.status === 'unpaid' && (
                            <Button asChild variant="ghost" size="icon">
                                <Link href={`/admin/bills/${bill.id}/edit`}>
                                    <Pencil className="h-4 w-4" />
                                </Link>
                            </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center h-24">
                      No bills found for this tenant.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="text-primary" />
              Payment History
            </CardTitle>
            <CardDescription>
              A record of all payments made by {tenant.name}.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
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
                      <TableCell className="text-right">
                        <ReceiptViewer receiptText={payment.receiptText} />
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center h-24">
                      No payment history found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
