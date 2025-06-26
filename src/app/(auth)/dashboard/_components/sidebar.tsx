'use client';

import clsx from 'clsx';
import { Banknote, CalendarCheck2, Folder, List, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';

import { SidebarLink } from './sidebarLink';

export function Sidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  console.log(setIsCollapsed);

  return (
    <div className="flex min-h-screen w-full">
      <div
        className={clsx('durarion-300 flex flex-1 flex-col transition-all', {
          'md:ml-20': isCollapsed,
          'md:ml-64': !isCollapsed
        })}
      >
        <header className="md:px6 sticky top-0 z-10 flex h-14 w-full items-center justify-between border-b bg-white p-4 md:hidden">
          <Sheet>
            <div className="flex items-center gap-4">
              <SheetTrigger asChild>
                <Button className="md:hidden" size="icon" variant="outline">
                  <List className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <h1 className="text-base font-semibold md:text-lg">
                Menu OdontoPRO
              </h1>
            </div>

            <SheetContent className="px-6 py-6 text-black sm:max-w-xs">
              <SheetTitle>odontoPRO</SheetTitle>
              <SheetDescription>Administrative menu</SheetDescription>
              <nav className="grid gap-2 pt-5 text-base">
                <SidebarLink
                  href="/dashboard"
                  label="Appointments"
                  icon={<CalendarCheck2 className="h-6 w-6" />}
                  pathname={pathname}
                  isCollapsed={isCollapsed}
                />
                <SidebarLink
                  href="/dashboard/services"
                  label="Services"
                  icon={<Folder className="h-6 w-6" />}
                  pathname={pathname}
                  isCollapsed={isCollapsed}
                />
                <SidebarLink
                  href="/dashboard/profile"
                  label="Profile"
                  icon={<Settings className="h-6 w-6" />}
                  pathname={pathname}
                  isCollapsed={isCollapsed}
                />
                <SidebarLink
                  href="/dashboard/plans"
                  label="Plans"
                  icon={<Banknote className="h-6 w-6" />}
                  pathname={pathname}
                  isCollapsed={isCollapsed}
                />
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <main className="flex-1 px-2 py-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
