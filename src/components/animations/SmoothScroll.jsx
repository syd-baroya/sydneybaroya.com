'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import time from '@/lib/threejs/utils/Time.js';
import { useScroll } from '@/context/ScrollContext';

export default function SmoothScroll() {
  const { wrapper } = useScroll();

  useEffect(() => {
    const lenis = new Lenis({
        wrapper: wrapper || window,
    });

    const tick = () => {
      lenis.raf(time.elapsed * 1000);
    }

    time.on('tick.smoothscroll', tick);

    return () => {
      time.off('tick.smoothscroll');
      lenis.destroy();
    }
  }, [wrapper]);

  return null;
}
