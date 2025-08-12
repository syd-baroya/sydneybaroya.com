'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import time from '@/lib/threejs/utils/Time.js';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis();

    const tick = () => {
      lenis.raf(time.elapsed * 1000);
    }

    time.on('tick.smoothscroll', tick);

    return () => {
      time.off('tick.smoothscroll');
    }
  }, []);

  return null;
}
