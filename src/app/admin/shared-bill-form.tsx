'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { addSharedBillAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Adding & Distributing...' : 'Add Shared Bill'}
    </Button>
  );
}

export default function SharedBillForm() {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useActionState(addSharedBillAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.message && !state.errors?.name && !state.errors?.amount && !state.errors?.month) {
      toast({
        title: 'Success',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state?.message) {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={dispatch} className="space-y-4">
      <div>
        <Label htmlFor="name">Bill Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="e.g., Electricity"
        />
        {state.errors?.name && (
          <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="amount">Total Amount (₦)</Label>
        <Input
          id="amount"
          name="amount"
          type="number"
          step="0.01"
          placeholder="e.g., 50000.00"
        />
        {state.errors?.amount && (
          <p className="text-sm text-destructive mt-1">{state.errors.amount[0]}</p>
        )}
      </div>
       <div>
        <Label htmlFor="month">For Month</Label>
        <Input id="month" name="month" type="month" />
        {state.errors?.month && (
          <p className="text-sm text-destructive mt-1">{state.errors.month[0]}</p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}
