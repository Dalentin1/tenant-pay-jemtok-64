import Link from 'next/link';
import { getAllSharedBills, getAnnouncements, getDelegates, getTenants } from '@/lib/data';
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
import BillUploadForm from './bill-upload-form';
import { Users, FilePlus2, Receipt, Megaphone, Pencil, Handshake, Eye, AlertTriangle } from 'lucide-react';
import SharedBillForm from './shared-bill-form';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { SharedBill } from '@/lib/types';
import DeleteBillButton from './delete-bill-button';
import AnnouncementForm from './announcement-form';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DelegateTaskForm from './delegate-task-form';
import CurrentDelegates from './current-delegates';
import EditAllocationsDialog from './edit-allocations-dialog';
import ClearDataButton from './clear-data-button';


export default async function AdminPage() {
  const tenants = await getTenants();
  const allSharedBills = await getAllSharedBills();
  const announcements = await getAnnouncements();
  const delegates = await getDelegates();

  const billsByMonth = allSharedBills.reduce((acc, bill) => {
    const month = new Date(bill.date).toLocaleString('default', { month: 'long', year: 'numeric' });
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(bill);
    return acc;
  }, {} as Record<string, SharedBill[]>);

  const sortedMonths = Object.keys(billsByMonth).sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
  
  const now = new Date();
  now.setDate(1);
  now.setHours(0, 0, 0, 0);
  const currentMonthStr = now.toLocaleString('default', { month: 'long', year: 'numeric' });


  return (
      <div className="space-y-8 p-4 sm:p-6 lg:p-8 ">
        <h1 className="text-3xl font-bold font-headline hidden md:block">Admin Dashboard</h1>
        <div className="grid gap-8 md:grid-cols-2">
            <Card>
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Handshake className="text-primary" />
                    Delegate Task
                </CardTitle>
                <CardDescription>
                    Assign a task to a tenant.
                </CardDescription>
                </CardHeader>
                <CardContent>
                    <DelegateTaskForm tenants={tenants} />
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Users className="text-primary" />
                        Current Delegates
                    </CardTitle>
                    <CardDescription>
                        Tenants currently assigned to tasks.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <CurrentDelegates delegates={delegates} tenants={tenants} />
                </CardContent>
            </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="text-primary" />
                Add Shared Utility Bill
              </CardTitle>
              <CardDescription>
                Add a utility bill to be split among all tenants.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SharedBillForm />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                    <Receipt className="text-primary" />
                    Shared Bills History
                </CardTitle>
                <CardDescription>A record of all shared bills by month.</CardDescription>
            </CardHeader>
            <CardContent>
                {sortedMonths.length > 0 ? (
                    <Accordion type="single" collapsible className="w-full" defaultValue={currentMonthStr}>
                        {sortedMonths.map(month => {
                            const bills = billsByMonth[month];
                            const monthlyTotal = bills.reduce((total, bill) => total + bill.amount, 0);
                            
                            const firstBillDate = new Date(bills[0].date);
                            firstBillDate.setDate(1);
                            firstBillDate.setHours(0,0,0,0);
                            const isEditable = firstBillDate >= now;

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
                                                    <TableHead>Total Amount</TableHead>
                                                    <TableHead className='text-right'>Actions</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {bills.map(bill => (
                                                    <TableRow key={bill.id}>
                                                        <TableCell>{bill.name}</TableCell>
                                                        <TableCell>₦{bill.amount.toFixed(2)}</TableCell>
                                                         <TableCell className='text-right space-x-2'>
                                                            {isEditable && (
                                                              <>
                                                                <DeleteBillButton billId={bill.id} />
                                                              </>
                                                            )}
                                                        </TableCell>
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
                    <p className='text-center text-muted-foreground'>No shared bills have been added yet.</p>
                )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FilePlus2 className="text-primary" />
                Upload Individual Bill
              </CardTitle>
              <CardDescription>
                Create and assign a new monthly rent bill to a tenant.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <BillUploadForm tenants={tenants} />
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Megaphone className="text-primary" />
                Post Announcement
              </CardTitle>
              <CardDescription>
                Post an announcement for all tenants to see.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnnouncementForm />
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-primary" />
                All Tenants
              </CardTitle>
              <CardDescription>
                A list of all tenants in the building.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Flat Number</TableHead>
                    <TableHead className='text-right'>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tenants.map((tenant) => (
                    <TableRow key={tenant.id}>
                      <TableCell className="font-medium flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src={tenant.imageUrl} alt={tenant.name} />
                            <AvatarFallback>{tenant.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {tenant.name}
                      </TableCell>
                      <TableCell>{tenant.propertyAddress.split(',').pop()?.trim()}</TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button asChild variant="outline" size="sm">
                            <Link href={`/admin/tenants/${tenant.id}`}>
                                <Eye className="mr-2 h-4 w-4" /> View Details
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon">
                            <Link href={`/admin/tenants/${tenant.id}/edit`}>
                                <Pencil className="h-4 w-4" />
                            </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle />
                Danger Zone
              </CardTitle>
              <CardDescription>
                These actions are permanent and cannot be undone.
              </CardDescription>
            </CardHeader>
            <CardContent>
                <ClearDataButton />
            </CardContent>
          </Card>
        </div>
      </div>
  );
}