import { Home } from 'lucide-react';

export function AppLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-primary text-primary-foreground p-2 rounded-lg">
        <Home className="h-6 w-6" />
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold font-headline text-primary">
          Jemtok 64
        </span>
        <span className="text-lg font-bold font-headline text-accent">
          TenantPay
        </span>
      </div>
    </div>
  );
}
