
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ChangePasswordForm from "./change-password-form";
import { KeyRound } from "lucide-react";

export default function ChangePasswordPage() {
  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl font-bold font-headline">Change Admin Password</h1>
         <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <KeyRound className="text-primary" />
                    Update Your Password
                </CardTitle>
                <CardDescription>
                    Enter your old password and a new password to secure your admin account. You will be logged out and need to restart the server after this change.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChangePasswordForm />
            </CardContent>
        </Card>
    </div>
  );
}

    