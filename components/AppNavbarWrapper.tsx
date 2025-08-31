'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

const AppNavbarWrapper = () => {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';
  
  // Only show the app navbar for non-landing pages
  if (isLandingPage) {
    return null;
  }
  
  return <Navbar />;
};

export default AppNavbarWrapper;
