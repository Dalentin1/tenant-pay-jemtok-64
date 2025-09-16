import { getBillsByTenantId, getDelegates, getTenantById, getTenants } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileText, History, Users, AlertTriangle } from 'lucide-react';
import PaymentDialog from './payment-dialog';
import { notFound } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default async function TenantDashboardPage({
  params,
}: {
  params: { tenantId: string };
}) {
  const { tenantId } = params;
  const [tenant, allTenantBills, delegates, tenants] = await Promise.all([
    getTenantById(tenantId),
    getBillsByTenantId(tenantId),
    getDelegates(),
    getTenants()
  ]);

  if (!tenant) {
    notFound();
  }

  const unpaidBill = allTenantBills.find(b => b.status === 'unpaid');
  const outstandingBills = allTenantBills.filter(b => b.status === 'carried-over');
  
  const formattedMonth = unpaidBill ? new Date(`${unpaidBill.month}-01`).toLocaleString('default', { month: 'long', year: 'numeric' }) : '';


  const tenantMap = new Map(tenants.map(t => [t.id, t]));


  return (
      <div className="space-y-8">
        <h1 className="text-3xl font-bold font-headline hidden md:block">
          Welcome, {tenant.name}
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="text-primary" />
                Current Bill
              </CardTitle>
              <CardDescription>
                Your outstanding bill for this month.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {unpaidBill ? (
                <>
                  <div>
                    <p className="text-sm text-muted-foreground">Amount Due</p>
                    <p className="text-4xl font-bold text-primary">
                      ₦{unpaidBill.amount.toFixed(2)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">For</p>
                    <p className="font-semibold">{formattedMonth}</p>
                  </div>
                  <PaymentDialog tenantId={tenantId} bill={unpaidBill} />
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-lg text-muted-foreground">
                    You have no outstanding bills.
                  </p>
                  <p className="text-green-500 font-bold">All caught up!</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="text-primary" />
                Payment History
              </CardTitle>
              <CardDescription>
                View your past payments and receipts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={`/dashboard/${tenantId}/history`}>
                  View History
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {outstandingBills.length > 0 && (
          <Card className="border-warning">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-warning-foreground">
                <AlertTriangle className="text-warning" />
                Outstanding Balances
              </CardTitle>
              <CardDescription>
                You have outstanding balances from previous months that have been carried over to your current bill.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead className="text-right">Outstanding Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {outstandingBills.map(bill => (
                    <TableRow key={bill.id}>
                      <TableCell className="font-medium">
                        {new Date(`${bill.month}-01`).toLocaleString('default', { month: 'long', year: 'numeric' })}
                      </TableCell>
                      <TableCell className="text-right font-semibold">₦{bill.amount.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Users className="text-primary" />
                    Delegated Tasks
                </CardTitle>
                <CardDescription>
                    Tenants responsible for handling house tasks.
                </CardDescription>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableBody>
                        {delegates.length > 0 ? (
                            delegates.map(delegate => {
                                const delegatedTenant = tenantMap.get(delegate.tenantId);
                                return (
                                    <TableRow key={delegate.id}>
                                        <TableCell>{delegate.task}</TableCell>
                                        <TableCell className="font-medium flex items-center justify-end gap-3 text-right">
                                            {delegatedTenant && (
                                                <>
                                                    <span className="truncate">{delegatedTenant.name}</span>
                                                    <Avatar className="h-8 w-8">
                                                        <AvatarImage src={delegatedTenant.imageUrl} alt={delegatedTenant.name} />
                                                        <AvatarFallback>{delegatedTenant.name.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                </>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        ) : (
                            <TableRow>
                                <TableCell colSpan={2} className="text-center h-24">
                                    No tasks have been delegated yet.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>

      </div>
  );
}
