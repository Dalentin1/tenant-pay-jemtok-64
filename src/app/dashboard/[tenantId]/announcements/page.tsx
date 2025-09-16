'use client';

import { useEffect, useState } from 'react';
import { getAnnouncements, getTenantById } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Megaphone } from 'lucide-react';
import { notFound, useParams } from 'next/navigation';
import { format } from 'date-fns';
import { Announcement, Tenant } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

export default function AnnouncementsPage() {
  const params = useParams();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [tenant, setTenant] = useState<Tenant | null | undefined>(null);
  const [loading, setLoading] = useState(true);

  const tenantId = params.tenantId as string;

  useEffect(() => {
    if (!tenantId) return;

    async function fetchData() {
      try {
        const tenantData = await getTenantById(tenantId);
        if (!tenantData) {
          notFound();
          return;
        }

        const announcementsData = await getAnnouncements();

        setTenant(tenantData);
        setAnnouncements(announcementsData);

        if (typeof window !== 'undefined' && announcementsData.length > 0) {
            const storageKey = `readAnnouncementIds_${tenantId}`;
            const readAnnouncementIds = new Set(JSON.parse(localStorage.getItem(storageKey) || '[]'));
            announcementsData.forEach(ann => readAnnouncementIds.add(ann.id));
            localStorage.setItem(storageKey, JSON.stringify(Array.from(readAnnouncementIds)));
            window.dispatchEvent(new Event('announcements-read'));
        }

      } catch (error) {
        console.error("Failed to fetch data:", error);
        setTenant(undefined);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [tenantId]);

  if (loading) {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline hidden md:flex items-center gap-2">
                <Megaphone className="text-primary w-8 h-8" />
                Announcements
            </h1>
            <div className="space-y-6">
                {[...Array(3)].map((_, i) => (
                    <Card key={i}>
                        <CardHeader>
                            <Skeleton className="h-6 w-3/4" />
                            <Skeleton className="h-4 w-1/4 mt-2" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-4 w-full" />
                             <Skeleton className="h-4 w-5/6 mt-2" />
                        </CardContent>
                    </Card>
                ))}
            </div>
      </div>
    );
  }

  if (tenant === undefined) {
    notFound();
  }

  return (
      <div className="space-y-8">
         <h1 className="text-3xl font-bold font-headline hidden md:flex items-center gap-2">
            <Megaphone className="text-primary w-8 h-8" />
            Announcements
        </h1>
        {announcements.length > 0 ? (
            <div className="space-y-6">
                {announcements.map(ann => (
                    <Card key={ann.id}>
                        <CardHeader>
                            <CardTitle>{ann.title}</CardTitle>
                            <CardDescription>{format(new Date(ann.date), 'PPP')}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="whitespace-pre-wrap">{ann.content}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        ) : (
          <div className='text-center py-16'>
            <p className='text-lg text-muted-foreground'>No announcements have been posted yet.</p>
          </div>
        )}
      </div>
  );
}
