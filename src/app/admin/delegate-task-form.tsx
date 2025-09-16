'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { addDelegateAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Tenant } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Delegating...' : 'Delegate Task'}
    </Button>
  );
}

export default function DelegateTaskForm({ tenants }: { tenants: Tenant[] }) {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useActionState(addDelegateAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.message && !state.errors?.task && !state.errors?.tenantId) {
      toast({
        title: 'Success',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state?.message && (state.errors?.task || state.errors?.tenantId)) {
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
        <Label htmlFor="task">Task Description</Label>
        <Input
          id="task"
          name="task"
          type="text"
          placeholder="e.g., Electricity Bill Payment"
        />
        {state.errors?.task && (
          <p className="text-sm text-destructive mt-1">{state.errors.task[0]}</p>
        )}
      </div>
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
      <SubmitButton />
    </form>
  );
}
