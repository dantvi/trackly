'use client';

import {
  Home,
  List,
  Wallet,
  PiggyBank,
  CalendarCheck,
  ChevronLeft,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useUiStore } from '@/lib/store/uiStore';

const navItems = [
  { label: 'Overview', href: '/dashboard', icon: <Home size={20} /> },
  { label: 'Transactions', href: '/transactions', icon: <List size={20} /> },
  { label: 'Budgets', href: '/budget', icon: <Wallet size={20} /> },
  { label: 'Pots', href: '/pots', icon: <PiggyBank size={20} /> },
  {
    label: 'Recurring Bills',
    href: '/recurring-bills',
    icon: <CalendarCheck size={20} />,
  },
];

export default function SidebarNavigation() {
  const pathname = usePathname();
  const { sidebarCollapsed, toggleSidebar } = useUiStore();

  return (
    <aside
      className={clsx(
        'flex h-screen flex-col justify-between bg-[#201F24] px-4 py-6 text-white rounded-tr-[16px] rounded-br-[16px] transition-all duration-300',
        sidebarCollapsed ? 'w-16' : 'w-64'
      )}
      aria-expanded={!sidebarCollapsed}
    >
      {/* Top section */}
      <div>
        <div className='mb-8 text-2xl font-bold tracking-tight'>
          {sidebarCollapsed ? 'T' : 'Trackly'}
        </div>
        <nav className='space-y-1'>
          {navItems.map(({ label, href, icon }) => (
            <Link
              key={href}
              href={href}
              title={sidebarCollapsed ? label : undefined}
              className={clsx(
                'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#2A2A2D]',
                sidebarCollapsed ? 'justify-center' : 'gap-3',
                pathname === href ? 'bg-[#2A2A2D] text-white' : 'text-zinc-300'
              )}
            >
              <span className='flex-shrink-0'>{icon}</span>
              {!sidebarCollapsed && <span>{label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom button */}
      <button
        onClick={toggleSidebar}
        aria-pressed={sidebarCollapsed}
        aria-label={sidebarCollapsed ? 'Expand menu' : 'Minimize menu'}
        className={clsx(
          'flex items-center rounded-md px-3 py-2 text-sm text-zinc-400 hover:bg-[#2A2A2D] hover:text-white transition-colors',
          sidebarCollapsed ? 'justify-center' : 'gap-2'
        )}
      >
        <span className='flex-shrink-0'>
          <ChevronLeft
            size={18}
            className={clsx(
              'transition-transform duration-300',
              sidebarCollapsed && 'rotate-180'
            )}
          />
        </span>
        {!sidebarCollapsed && 'Minimize Menu'}
      </button>
    </aside>
  );
}
