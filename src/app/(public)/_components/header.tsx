'use client';

import { LogIn, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const session = false; // Replace with actual session management logic

  function Navigation() {
    const navItems = [
      {
        href: '#',
        label: 'Professionals'
      }
    ];

    return (
      <>
        {navItems.map(item => (
          <Button
            asChild
            key={item.href}
            variant="ghost"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Link className="text-base" href={item.href}>
              {item.label}
            </Link>
          </Button>
        ))}
        {session ? (
          <Link
            className="flex items-center justify-center gap-2"
            href="/dashboard"
          >
            Access clinic
          </Link>
        ) : (
          <Button
            className="bg-zinc-900 text-white hover:bg-zinc-800 hover:text-white"
            asChild
            variant="ghost"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Link href="/login">
              <LogIn className="mr-2 h-4 w-4" />
              Clinic portal
            </Link>
          </Button>
        )}
      </>
    );
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-[999] bg-white px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="text-3xl font-bold text-zinc-900" href="/">
          Odonto<span className="font-bold text-emerald-500">Pro</span>
        </Link>
        <nav className="hidden items-center space-x-4 md:flex">
          <Navigation />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="text-zinc-900 md:hidden" asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="z-[1000] w-[240px] sm:w-[300px]">
            <SheetHeader className="flex flex-col items-center">
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>See our links</SheetDescription>
            </SheetHeader>
            <nav className="mt-6 flex flex-col space-y-4">
              <Navigation />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
