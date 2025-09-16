'use client';

import { useTransition } from 'react';
import { adminLogoutAction } from '@/app/actions';
import { SidebarMenuButton } from '@/components/ui/sidebar';
import { LogOut } from 'lucide-react';

export default function LogoutButton() {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      action={() => {
        startTransition(async () => {
          await adminLogoutAction();
        });
      }}
    >
      <SidebarMenuButton
        type="submit"
        disabled={isPending}
        className="w-full"
        tooltip="Logout"
      >
        <LogOut />
        <span>{isPending ? 'Logging out...' : 'Logout'}</span>
      </SidebarMenuButton>
    </form>
  );
}
