import { type Metadata } from 'next';

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
      <h2>Dashboard Layout</h2>
      {children}
    </>
  );
}
