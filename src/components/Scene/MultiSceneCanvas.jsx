'use client';

import { useEffect, useRef } from 'react';
import Experience from '@/lib/threejs/Experience';
export default function MultiSceneCanvas({ viewRefs }) {
  const canvasRef = useRef();

  useEffect(() => {
    if (!canvasRef.current || viewRefs.length===0) return;
    const threeJSEntryPoint = new Experience(canvasRef.current, viewRefs);;
    return () => {
        if(threeJSEntryPoint) {
            threeJSEntryPoint.destroy();
        }
    };
  }, [viewRefs]);

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