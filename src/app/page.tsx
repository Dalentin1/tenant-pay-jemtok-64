import Link from 'next/link';
import Image from 'next/image';
import { getTenants } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AppLogo } from '@/components/app-logo';
import { Separator } from '@/components/ui/separator';
import { User, UserCog } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default async function SelectionPage() {
  const tenants = await getTenants();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 bg-[length:400%_400%] animate-gradient">
      <Card className="w-full max-w-4xl bg-transparent shadow-none border-none">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4">
            <AppLogo />
          </div>
          <CardTitle className="text-3xl font-headline">
            Welcome to Jemtok 64
          </CardTitle>
          <CardDescription>
            Select your profile to continue.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-1 flex flex-col justify-center items-center p-6">
            <h3 className="font-semibold text-lg flex items-center gap-2 mb-4">
              <UserCog className="text-primary" />
              Admin Access
            </h3>
            <Button asChild className="w-full">
              <Link href="/admin/login">Go to Admin Dashboard</Link>
            </Button>
          </Card>


          <div className="md:col-span-2">
             <h3 className="font-semibold text-lg flex items-center gap-2 mb-4 ml-1">
              <User className="text-primary" />
              Tenant Access
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {tenants.map((tenant) => (
                <Link href={`/dashboard/${tenant.id}`} key={tenant.id} className='group'>
                  <Card className='overflow-hidden hover:shadow-lg transition-shadow'>
                    <CardContent className='p-0'>
                       <div className="aspect-square relative w-full">
                         <Image 
                           src={tenant.imageUrl || `https://picsum.photos/seed/${tenant.id}/200`} 
                           alt={tenant.name} 
                           fill
                           className='object-cover group-hover:scale-105 transition-transform'
                           data-ai-hint="profile picture"
                          />
                       </div>
                    </CardContent>
                    <CardFooter className='p-2'>
                       <p className="text-sm font-medium text-center w-full truncate">{tenant.name}</p>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
