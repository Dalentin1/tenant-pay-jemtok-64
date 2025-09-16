'use client';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { adminLoginAction } from '@/app/admin/actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AppLogo } from '@/components/app-logo';
import { KeyRound } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Signing In...' : 'Sign In'}
    </Button>
  );
}

export default function AdminLoginPage() {
  const initialState = { message: '' };
  const [state, formAction] = useActionState(adminLoginAction, initialState);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 bg-[length:400%_400%] animate-gradient">
      <Card className="w-full max-w-sm shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <AppLogo />
          </div>
          <CardTitle className="flex items-center justify-center gap-2">
            <KeyRound className="text-primary" /> Admin Login
          </CardTitle>
          <CardDescription>Enter the password to access the dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="••••••••"
              />
            </div>
            {state?.message && (
              <p className="text-sm text-destructive text-center">{state.message}</p>
            )}
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
