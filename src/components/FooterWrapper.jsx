'use client';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic'; // Import dynamic
import { useActiveCard } from '@/lib/hooks/useActiveCard';

const DynamicAnimatedFooter = dynamic(() => import('./animations/AnimatedFooter'), { ssr: false });

export default function FooterWrapper() {
  const pathname = usePathname();
  const { activeSlug } = useActiveCard();

  if (pathname === '/work/shader-playground' || activeSlug) {
    return null; // Do not render the footer on this page or when a card is active
  }

  return <DynamicAnimatedFooter />;
}
