import clsx from 'clsx';
import Link from 'next/link';

interface SidebarLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  pathname: string;
  isCollapsed: boolean;
}

export function SidebarLink({
  href,
  label,
  icon,
  pathname,
  isCollapsed
}: SidebarLinkProps) {
  return (
    <Link href={href}>
      <div
        className={clsx(
          'duration- flex items-center gap-2 rounded-md px-3 py-2 transition-colors',
          {
            'bg-blue-500 text-white': pathname === href,
            'text-gray-700 hover:bg-gray-100': pathname !== href
          }
        )}
      >
        <span className="h-6 w-6">{icon}</span>
        {!isCollapsed && <span>{label}</span>}
      </div>
    </Link>
  );
}
