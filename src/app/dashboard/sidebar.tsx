'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { AppLogo } from '@/components/app-logo';
import {
  LayoutDashboard,
  History,
  Receipt,
  Megaphone,
  KeyRound,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut } from 'lucide-react';
import AnnouncementBadge from './announcement-badge';
import LogoutButton from '../admin/logout-button';

type DashboardSidebarProps = {
  userType: 'admin' | 'tenant';
  tenantId?: string;
  userName: string;
  imageUrl?: string;
};

export default function DashboardSidebar({
  userType,
  tenantId,
  userName,
  imageUrl,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  const tenantLinks = [
    {
      href: `/dashboard/${tenantId}`,
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      href: `/dashboard/${tenantId}/shared-bills`,
      label: 'Shared Bills',
      icon: Receipt,
    },
    {
      href: `/dashboard/${tenantId}/announcements`,
      label: 'Announcements',
      icon: Megaphone,
      badge: <AnnouncementBadge />,
    },
    {
      href: `/dashboard/${tenantId}/history`,
      label: 'Payment History',
      icon: History,
    },
  ];

  const adminLinks = [
      { href: '/admin', label: 'Admin Dashboard', icon: LayoutDashboard},
  ]


  return (
    <>
      <SidebarHeader>
        <AppLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {userType === 'admin' ? (
            adminLinks.map(link => (
                <SidebarMenuItem key={link.href}>
                    <SidebarMenuButton
                        asChild
                        isActive={pathname === link.href}
                        tooltip={link.label}
                    >
                        <Link href={link.href}>
                            <link.icon/>
                            <span>{link.label}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))
          ) : (
            tenantLinks.map((link) => (
                <SidebarMenuItem key={link.href}>
                  <SidebarMenuButton
                      asChild
                      isActive={pathname === link.href}
                      tooltip={link.label}
                  >
                      <Link href={link.href}>
                        <link.icon />
                        <span>{link.label}</span>
                      </Link>
                  </SidebarMenuButton>
                  {link.badge}
                </SidebarMenuItem>
            ))
          )}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="flex flex-col gap-4">
        <SidebarSeparator />
         <div className="flex items-center gap-3 px-2">
            <Avatar>
                <AvatarImage src={imageUrl} alt={userName} />
                <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
                <span className="text-sm font-semibold text-sidebar-foreground">{userName}</span>
                <span className="text-xs text-muted-foreground">{userType === 'admin' ? 'Administrator' : 'Tenant'}</span>
            </div>
        </div>
        <SidebarMenu>
           {userType === 'admin' && (
             <SidebarMenuItem>
                 <SidebarMenuButton asChild tooltip="Change Password">
                    <Link href="/admin/change-password">
                        <KeyRound />
                        <span>Change Password</span>
                    </Link>
                 </SidebarMenuButton>
             </SidebarMenuItem>
            )}
           <SidebarMenuItem>
            {userType === 'admin' ? (
              <LogoutButton />
            ) : (
              <SidebarMenuButton asChild tooltip="Switch User">
                <Link href="/">
                  <LogOut />
                  <span>Switch User</span>
                </Link>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
