'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, List, Wallet, PiggyBank, CalendarCheck } from 'lucide-react';
import clsx from 'clsx';

type NavItem = { label: string; href: string; icon: React.ReactNode };

const navItems: NavItem[] = [
  { label: 'Overview', href: '/dashboard', icon: <Home size={20} /> },
  { label: 'Transactions', href: '/transactions', icon: <List size={20} /> },
  { label: 'Budgets', href: '/budget', icon: <Wallet size={20} /> },
  { label: 'Pots', href: '/pots', icon: <PiggyBank size={20} /> },
  {
    label: 'Recurring bills',
    href: '/recurring-bills',
    icon: <CalendarCheck size={20} />,
  },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav
      role='navigation'
      aria-label='Primary'
      className={clsx(
        // visible on tablet+mobile only
        'lg:hidden',
        // bar container
        'fixed inset-x-0 bottom-0 z-40',
        'bg-[#201F24] text-white',
        'rounded-t-[16px]',
        'border-t border-black/10'
      )}
      // safe area for iOS home indicator
      style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
    >
      <ul className='mx-auto grid max-w-screen-md grid-cols-5 gap-1 px-3 py-2'>
        {navItems.map(({ label, href, icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/');
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? 'page' : undefined}
                className={clsx(
                  'flex flex-col items-center justify-center',
                  'rounded-md px-2 py-2',
                  'text-xs md:text-[13px] font-medium',
                  active ? 'text-white' : 'text-zinc-300',
                  active && 'bg-[#2A2A2D]'
                )}
              >
                <span className='flex-shrink-0'>{icon}</span>
                {/* label: hidden on mobile, shown on tablet */}
                <span className='mt-1 hidden md:inline'>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
