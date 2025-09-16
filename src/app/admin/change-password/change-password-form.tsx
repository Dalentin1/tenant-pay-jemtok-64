
'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';
import { changePasswordAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Updating Password...' : 'Update Password'}
    </Button>
  );
}

export default function ChangePasswordForm() {
  const initialState = { message: '', errors: {}, success: false };
  const [state, formAction] = useActionState(changePasswordAction, initialState);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (state.message && state.success) {
      toast({
        title: 'Success!',
        description: 'Password updated. Please log in again.',
      });
      // Redirect to login page after a short delay
      setTimeout(() => router.push('/admin/login'), 2000);

    } else if (state.message && !state.success) {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast, router]);

  if (state.success) {
    return (
        <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Password Update Successful</AlertTitle>
            <AlertDescription>
                {state.message} You will be redirected to the login page shortly.
            </AlertDescription>
        </Alert>
    );
  }


  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="oldPassword">Old Password</Label>
        <Input
          id="oldPassword"
          name="oldPassword"
          type="password"
          required
          placeholder="••••••••"
        />
        {state.errors?.oldPassword && (
          <p className="text-sm text-destructive mt-1">{state.errors.oldPassword[0]}</p>
        )}
      </div>
       <div className="space-y-2">
        <Label htmlFor="newPassword">New Password</Label>
        <Input
          id="newPassword"
          name="newPassword"
          type="password"
          required
          placeholder="••••••••"
        />
         {state.errors?.newPassword && (
          <p className="text-sm text-destructive mt-1">{state.errors.newPassword[0]}</p>
        )}
      </div>
       <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm New Password</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
          placeholder="••••••••"
        />
         {state.errors?.confirmPassword && (
          <p className="text-sm text-destructive mt-1">{state.errors.confirmPassword[0]}</p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}

    