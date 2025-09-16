
'use client';

import { useState, useEffect } from 'react';
import { useActionState, useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import { getAllocatedBillsBySharedBillId } from '@/lib/data';
import { AllocatedBill, SharedBill, Tenant } from '@/lib/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Pencil, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { updateAllocatedBillAction } from '../actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';


function AllocationRow({ allocation, tenant }: { allocation: AllocatedBill, tenant: Tenant | undefined}) {
    const initialState = { message: '', errors: {}, success: false };
    const [state, dispatch] = useActionState(updateAllocatedBillAction, initialState);
    const { toast } = useToast();

    useEffect(() => {
        if (state.message && state.success) {
            toast({ title: 'Success', description: state.message });
        } else if (state.message && !state.success) {
            toast({ title: 'Error', description: state.message, variant: 'destructive' });
        }
    }, [state, toast]);

    function SubmitButton() {
      const { pending } = useFormStatus();
      return (
          <Button type="submit" disabled={pending}>
              {pending ? (
                  <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Updating...
                  </>
              ) : 'Save Changes'}
          </Button>
      )
    }

    if (!tenant) return null;

    return (
        <form action={dispatch} className="grid grid-cols-3 items-center gap-4">
            <input type="hidden" name="allocationId" value={allocation.id} />
            <div className="flex items-center gap-3">
                 <Avatar className="h-8 w-8">
                    <AvatarImage src={tenant.imageUrl} alt={tenant.name} />
                    <AvatarFallback>{tenant.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <Label htmlFor={`amount-${allocation.id}`} className="truncate">{tenant.name}</Label>
            </div>
            <Input
                id={`amount-${allocation.id}`}
                name="amount"
                type="number"
                step="0.01"
                defaultValue={allocation.amount}
                className="col-span-1"
            />
            <div className="col-span-1 text-right">
                 <SubmitButton />
            </div>
             {state.errors?.amount && <p className="text-sm text-destructive mt-1 col-span-3">{state.errors.amount[0]}</p>}
        </form>
    );
}

export default function EditAllocationsDialog({ sharedBill, tenants }: { sharedBill: SharedBill; tenants: Tenant[] }) {
  const [allocations, setAllocations] = useState<AllocatedBill[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const tenantMap = new Map(tenants.map(t => [t.id, t]));

  useEffect(() => {
    if (isOpen) {
      async function fetchAllocations() {
        setLoading(true);
        const fetchedAllocations = await getAllocatedBillsBySharedBillId(sharedBill.id);
        setAllocations(fetchedAllocations);
        setLoading(false);
      }
      fetchAllocations();
    }
  }, [isOpen, sharedBill.id]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Allocations for "{sharedBill.name}"</DialogTitle>
          <DialogDescription>
            Modify the amount allocated to each tenant. The total must equal the bill amount of ₦{sharedBill.amount.toFixed(2)}. Changes will affect each tenant's outstanding balance.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] p-1">
            <div className="space-y-4 pr-4">
            {loading ? (
                <p>Loading allocations...</p>
            ) : allocations.length > 0 ? (
                allocations.map(alloc => (
                    <AllocationRow key={alloc.id} allocation={alloc} tenant={tenantMap.get(alloc.tenantId)} />
                ))
            ) : (
                <p>No allocations found for this bill.</p>
            )}
            </div>
        </ScrollArea>
        <DialogFooter>
            <DialogClose asChild>
                <Button variant="outline">Close</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
