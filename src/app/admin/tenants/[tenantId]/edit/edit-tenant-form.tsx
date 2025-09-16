'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { updateTenantAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Tenant } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Updating...' : 'Update Tenant'}
    </Button>
  );
}

export default function EditTenantForm({ tenant }: { tenant: Tenant }) {
  const router = useRouter();
  const updateTenantActionWithId = updateTenantAction.bind(null, tenant.id);
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useActionState(updateTenantActionWithId, initialState);
  const { toast } = useToast();

  const flatNumber = tenant.propertyAddress.split(',').slice(1).join(',').trim();

  useEffect(() => {
    if (state?.message && !state.errors?.name && !state.errors?.flatNumber && !state.errors?.imageUrl) {
      toast({
        title: 'Success',
        description: state.message,
      });
      router.push('/admin');
    } else if (state?.message && (state.errors?.name || state.errors?.flatNumber || state.errors?.imageUrl)) {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast, router]);

  return (
    <form action={dispatch} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          defaultValue={tenant.name}
          required
        />
        {state.errors?.name && (
          <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="flatNumber">Flat Number / Unit</Label>
        <Input
          id="flatNumber"
          name="flatNumber"
          type="text"
          defaultValue={flatNumber}
          required
        />
        {state.errors?.flatNumber && (
          <p className="text-sm text-destructive mt-1">{state.errors.flatNumber[0]}</p>
        )}
      </div>
      <div>
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          type="url"
          defaultValue={tenant.imageUrl}
          placeholder="https://example.com/image.png"
        />
        {state.errors?.imageUrl && (
          <p className="text-sm text-destructive mt-1">{state.errors.imageUrl[0]}</p>
        )}
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
        <SubmitButton />
      </div>
    </form>
  );
}
