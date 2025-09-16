import { getTenantById } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import EditTenantForm from './edit-tenant-form';
import { Users } from 'lucide-react';

export default async function EditTenantPage({ params }: { params: { tenantId: string } }) {
  const tenant = await getTenantById(params.tenantId);

  if (!tenant) {
    notFound();
  }

  return (
      <div className="space-y-8 p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl font-bold font-headline">Edit Tenant</h1>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-primary" />
              Update Tenant Information
            </CardTitle>
            <CardDescription>
              Editing details for {tenant.name}.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EditTenantForm tenant={tenant} />
          </CardContent>
        </Card>
      </div>
  );
}
