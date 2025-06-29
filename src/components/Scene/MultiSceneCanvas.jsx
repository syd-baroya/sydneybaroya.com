'use client';

import { useEffect, useRef } from 'react';
import Experience from '@/lib/threejs/Experience';
import { useThreeCanvasRefs } from '@/context/ThreeCanvasContext';

export default function MultiSceneCanvas({ }) {
  const canvasRef = useRef();
  const experienceRef = useRef();
  const { viewRefs, version } = useThreeCanvasRefs();

useEffect(() => {
  if (!canvasRef.current) return;
  const validRefs = viewRefs.current.filter(ref => ref?.current);
  if (viewRefs.length === 0 || validRefs.length !== 2) return;
  if (experienceRef.current) return;

  const threeJSEntryPoint = new Experience(canvasRef.current, validRefs);
  experienceRef.current = threeJSEntryPoint;

  return () => {
    experienceRef.current?.destroy();
    experienceRef.current = null;
  };
}, [version]);

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
