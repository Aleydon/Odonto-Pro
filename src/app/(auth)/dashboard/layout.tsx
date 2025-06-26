import { type Metadata } from 'next';

import { Sidebar } from './_components/sidebar';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Odonto-Pro - Dashboard'
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
}
