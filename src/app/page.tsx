import SidebarNavigation from '@/components/layout/SidebarNavigation';
import BottomNavigation from '@/components/layout/BottomNavigation';

export default function HomePage() {
  return (
    <div className='flex h-screen'>
      {/* Sidebar - lg+ */}
      <SidebarNavigation />

      {/* Main content */}
      <div className='flex-1 flex items-center justify-center'>
        <h1 className='text-2xl font-semibold'>Main content preview</h1>
      </div>

      {/* Bottom nav - <lg */}
      <BottomNavigation />
    </div>
  );
}
