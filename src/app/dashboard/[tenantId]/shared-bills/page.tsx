import { getAllSharedBills, getTenantById } from '@/lib/data';
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Receipt } from 'lucide-react';
import { notFound } from 'next/navigation';
import { SharedBill } from '@/lib/types';

export default async function SharedBillsPage({
  params,
}: {
  params: { tenantId: string };
}) {
  const tenantId = params.tenantId;
  const tenant = await getTenantById(tenantId);
  const allSharedBills = await getAllSharedBills();

  if (!tenant) {
    notFound();
  }

  const billsByMonth = allSharedBills.reduce((acc, bill) => {
    const month = new Date(bill.date).toLocaleString('default', { month: 'long', year: 'numeric' });
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(bill);
    return acc;
  }, {} as Record<string, SharedBill[]>);

  const sortedMonths = Object.keys(billsByMonth).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Receipt className="text-primary" />
            Shared Bills History
          </CardTitle>
          <CardDescription>
            A record of all shared utility bills for the house, grouped by month.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {sortedMonths.length > 0 ? (
            <Accordion type="single" collapsible className="w-full">
              {sortedMonths.map(month => {
                const bills = billsByMonth[month];
                const monthlyTotal = bills.reduce((total, bill) => total + bill.amount, 0);
                return (
                  <AccordionItem value={month} key={month}>
                    <AccordionTrigger>
                      <div className='flex justify-between w-full pr-4'>
                        <span>{month}</span>
                        <span className='font-normal text-muted-foreground'>Total: ₦{monthlyTotal.toFixed(2)}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Bill Name</TableHead>
                            <TableHead className='text-right'>Amount</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {bills.map(bill => (
                            <TableRow key={bill.id}>
                              <TableCell>{bill.name}</TableCell>
                              <TableCell className='text-right'>₦{bill.amount.toFixed(2)}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          ) : (
            <p className='text-center text-muted-foreground py-12'>No shared bills have been posted yet.</p>
          )}
        </CardContent>
      </Card>
  );
}
