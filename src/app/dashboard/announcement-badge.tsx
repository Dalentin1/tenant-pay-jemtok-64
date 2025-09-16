'use client';

import { useState, useEffect, useCallback } from 'react';
import { getAnnouncements } from '@/lib/data';
import { SidebarMenuBadge } from '@/components/ui/sidebar';

export default function AnnouncementBadge({ tenantId }: { tenantId?: string }) {
  const [unreadCount, setUnreadCount] = useState(0);

  const calculateUnreadCount = useCallback(async () => {
    if (!tenantId) return;

    try {
      const allAnnouncements = await getAnnouncements();
      if (typeof window !== 'undefined') {
        const storageKey = `readAnnouncementIds_${tenantId}`;
        const readAnnouncementIds: string[] = JSON.parse(
          localStorage.getItem(storageKey) || '[]'
        );
        const newCount = allAnnouncements.filter(
          (ann) => !readAnnouncementIds.includes(ann.id)
        ).length;
        setUnreadCount(newCount);
      }
    } catch (error) {
      console.error('Failed to fetch announcements for badge:', error);
    }
  }, [tenantId]);

  useEffect(() => {
    calculateUnreadCount();

    const handleStorageChange = () => {
      calculateUnreadCount();
    };

    window.addEventListener('storage', handleStorageChange);
    // Also add a custom event listener for when announcements are viewed on the page
    window.addEventListener('announcements-read', handleStorageChange);


    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('announcements-read', handleStorageChange);
    };
  }, [calculateUnreadCount]);

  if (unreadCount === 0) {
    return null;
  }

  return <SidebarMenuBadge>{unreadCount}</SidebarMenuBadge>;
}
