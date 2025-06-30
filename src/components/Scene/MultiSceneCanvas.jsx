'use client';

import { useEffect, useRef } from 'react';
import Experience from '@/lib/threejs/Experience';
import { useThreeCanvasRefs } from '@/context/ThreeCanvasContext';
import { useColorMode } from '@/app/themeRegistry';
import { useResolvedCssVar } from '@/lib/hooks/useResolvedCssVar';

export default function MultiSceneCanvas({ }) {
  const canvasRef = useRef();
  const experienceRef = useRef();
  const { viewRefs, version } = useThreeCanvasRefs();
  const { mode } = useColorMode();
  const backgroundColor = useResolvedCssVar('--background-color', [mode]);

useEffect(() => {
  if (!canvasRef.current) return;
  const validRefs = viewRefs.current.filter(ref => ref?.current);
  if (viewRefs.length === 0 || validRefs.length === 0) return;
  if (experienceRef.current) return;

  const threeJSEntryPoint = new Experience(canvasRef.current, validRefs, backgroundColor);

  experienceRef.current = threeJSEntryPoint;

  return () => {
    experienceRef.current?.destroy();
    experienceRef.current = null;
  };
}, [version]);

 useEffect(() => {
  if (experienceRef.current && backgroundColor) {
      experienceRef.current.setBackgroundColor(backgroundColor);
    }
  }, [backgroundColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
      }}
    />
  );
}
