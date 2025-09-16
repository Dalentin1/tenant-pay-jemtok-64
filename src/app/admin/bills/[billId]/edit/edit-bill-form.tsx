'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { updateBillAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Bill } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Updating...' : 'Update Bill'}
    </Button>
  );
}

export default function EditBillForm({ bill }: { bill: Bill }) {
  const router = useRouter();
  const updateBillActionWithIds = updateBillAction.bind(null, bill.id, bill.tenantId);
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useActionState(updateBillActionWithIds, initialState);
  const { toast } = useToast();

  const baseAmount = bill.amount - (bill.carriedOverAmount || 0);

  useEffect(() => {
    if (state?.message && !state.errors?.amount) {
      toast({
        title: 'Success',
        description: state.message,
      });
      router.push(`/admin/tenants/${bill.tenantId}`);
    } else if (state?.message && state.errors?.amount) {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast, router, bill.tenantId]);

  return (
    <div className="space-y-6">
      <form action={dispatch} className="space-y-4">
        <div>
          <Label htmlFor="amount">Bill Amount for this Month (₦)</Label>
          <Input
            id="amount"
            name="amount"
            type="number"
            step="0.01"
            defaultValue={baseAmount}
            required
            className="text-lg"
          />
          {state.errors?.amount && (
            <p className="text-sm text-destructive mt-1">{state.errors.amount[0]}</p>
          )}
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
          <SubmitButton />
        </div>
      </form>
      
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-lg">Billing Summary</CardTitle>
          <CardDescription>This is how the total bill is calculated.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
           <div className="flex justify-between items-center">
            <p className="text-muted-foreground">Carried-Over Balance:</p>
            <p className="font-medium">₦{(bill.carriedOverAmount || 0).toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-muted-foreground">Current Month's Bill:</p>
            <p className="font-medium">₦{baseAmount.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center border-t pt-2 mt-2">
            <p className="font-bold">Total Amount Due:</p>
            <p className="font-bold text-primary text-xl">₦{bill.amount.toFixed(2)}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
