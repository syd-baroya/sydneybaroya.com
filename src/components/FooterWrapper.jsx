'use client';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic'; // Import dynamic

const DynamicAnimatedFooter = dynamic(() => import('./animations/AnimatedFooter'), { ssr: false });

export default function FooterWrapper() {
  const pathname = usePathname();

  if (pathname === '/work/shader-playground') {
    return null; // Do not render the footer on this page
  }

  return <DynamicAnimatedFooter />;
}
