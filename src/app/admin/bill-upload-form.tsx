'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { uploadBillAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Tenant } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Uploading...' : 'Upload Bill'}
    </Button>
  );
}

export default function BillUploadForm({ tenants }: { tenants: Tenant[] }) {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useActionState(uploadBillAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.message && !state.errors?.amount && !state.errors?.month && !state.errors?.tenantId) {
      toast({
        title: 'Success',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state?.message && (state.errors?.amount || state.errors?.month || state.errors?.tenantId)) {
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
        <Label htmlFor="tenantId">Tenant</Label>
        <Select name="tenantId">
          <SelectTrigger id="tenantId">
            <SelectValue placeholder="Select a tenant" />
          </SelectTrigger>
          <SelectContent>
            {tenants.map((tenant) => (
              <SelectItem key={tenant.id} value={tenant.id}>
                {tenant.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {state.errors?.tenantId && (
          <p className="text-sm text-destructive mt-1">{state.errors.tenantId[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="amount">Amount (₦)</Label>
        <Input
          id="amount"
          name="amount"
          type="number"
          step="0.01"
          placeholder="e.g., 150000.00"
        />
        {state.errors?.amount && (
          <p className="text-sm text-destructive mt-1">{state.errors.amount[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="month">Month</Label>
        <Input id="month" name="month" type="month" />
        {state.errors?.month && (
          <p className="text-sm text-destructive mt-1">{state.errors.month[0]}</p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}
