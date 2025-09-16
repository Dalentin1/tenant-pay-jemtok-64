import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
} from '@/components/ui/sidebar';
import DashboardSidebar from '../sidebar';
import { getTenantById } from '@/lib/data';
import { notFound, redirect } from 'next/navigation';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { PanelLeft } from 'lucide-react';

export default async function DashboardLayout({
  children,
  params,
  userType = 'tenant',
}: {
  children: React.ReactNode;
  params?: { tenantId: string };
  userType?: 'admin' | 'tenant';
}) {
  const { tenantId } = params || {};
  let userName = 'Admin';
  let userImageUrl: string | undefined = undefined;

  if (userType === 'tenant') {
    if (!tenantId) {
      // Should not happen if routes are correct
      return redirect('/');
    }
    const tenant = await getTenantById(tenantId);
    if (!tenant) {
      notFound();
    }
    userName = tenant.name;
    userImageUrl = tenant.imageUrl;
  }
  
  const headerTitle = userType === 'admin' ? 'Admin Dashboard' : `Welcome, ${userName}`;

  return (
    <div className="w-full  ">
      <SidebarProvider>
        <div className="flex min-h-screen w-full  ">
          <Sidebar>
            <DashboardSidebar
              userType={userType}
              tenantId={tenantId}
              userName={userName}
              imageUrl={userImageUrl}
            />
          </Sidebar>
          <SidebarInset className="flex-1 flex flex-col animated-gradient">
             <header className="flex items-center gap-4 border-b md:hidden p-4 bg-background">
                <SidebarTrigger>
                    <PanelLeft />
                </SidebarTrigger>
                <h1 className="text-xl font-bold">{headerTitle}</h1>
            </header>
            <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 bg-[length:400%_400%] animate-gradient ">{children}</main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
