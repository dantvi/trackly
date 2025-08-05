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

  return (
    <aside className="flex h-screen w-64 flex-col justify-between bg-[#201F24] px-4 py-6 text-white rounded-tr-[16px] rounded-br-[16px]">
      <div>
        <div className='mb-8 text-2xl font-bold tracking-tight'>Trackly</div>
        <nav className='space-y-1'>
          {navItems.map(({ label, href, icon }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[#2A2A2D]',
                pathname === href ? 'bg-[#2A2A2D] text-white' : 'text-zinc-300'
              )}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <button
        className='flex items-center gap-2 rounded-md px-3 py-2 text-sm text-zinc-400 hover:bg-[#2A2A2D] hover:text-white'
        aria-label='Minimize menu'
      >
        <ChevronLeft size={18} />
        Minimize Menu
      </button>
    </aside>
  );
}
