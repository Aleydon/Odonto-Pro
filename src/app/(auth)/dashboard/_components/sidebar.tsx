'use client';

import clsx from 'clsx';
import {
  Banknote,
  CalendarCheck2,
  ChevronLeft,
  ChevronRight,
  Folder,
  List,
  Settings
} from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible';
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

  return (
    <div className="flex min-h-screen w-full">
      <aside
        className={clsx('bg-background flex h-screen flex-col border-r p-4', {
          'w-20': isCollapsed,
          'w-64': !isCollapsed,
          'hidden md:fixed md:block': !isCollapsed
        })}
      >
        <div className="mt-4 mb-6">
          {!isCollapsed && (
            <Image
              src="/logo-odonto.png"
              alt="Logo odontoPRO"
              priority
              quality={100}
              width={200}
              height={200}
            />
          )}
        </div>
        <div className="flex items-center justify-end">
          <Button
            className="cursor-pointer bg-gray-200 text-zinc-900 hover:bg-gray-100"
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            {isCollapsed ? (
              <ChevronRight className="h-6 w-6" />
            ) : (
              <ChevronLeft className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Sidebar when is collapsed */}
        {isCollapsed && (
          <Collapsible open={isCollapsed}>
            <nav className="mt-2 flex flex-col gap-1 overflow-hidden">
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
          </Collapsible>
        )}

        {/* Sidebar when is not collapsed */}
        <Collapsible open={!isCollapsed}>
          <CollapsibleContent>
            <nav className="flex flex-col gap-1 overflow-hidden">
              <span className="mt-1 text-sm font-medium text-gray-400 uppercase">
                Dashboard
              </span>
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
              <span className="mt-1 text-sm font-medium text-gray-400 uppercase">
                My Account
              </span>
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
          </CollapsibleContent>
        </Collapsible>
      </aside>
      <div
        className={clsx('flex flex-1 flex-col transition-all duration-300', {
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
