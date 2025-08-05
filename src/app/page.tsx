import SidebarNavigation from '@/components/layout/SidebarNavigation';

export default function HomePage() {
  return (
    <div className='flex h-screen'>
      <SidebarNavigation />
      <div className='flex-1 flex items-center justify-center'>
        <h1 className='text-2xl font-semibold'>Main content preview</h1>
      </div>
    </div>
  );
}
