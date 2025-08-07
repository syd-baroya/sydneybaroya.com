'use client';

import { useEffect, useRef } from 'react';
import { useThreeCanvasRefs } from '@/context/ThreeCanvasContext';
import { useColorMode } from '@/app/themeRegistry';
import { useResolvedCssVar } from '@/lib/hooks/useResolvedCssVar';
import * as SceneManager from '@/lib/threejs/SceneManager';
import Resources from '@/lib/threejs/utils/Resources';
import sources from '@/lib/scenes/sources';

export default function MultiSceneCanvas({ }) {
  const canvasRef = useRef(null);
  const sceneSetupRef = useRef(false);
  const { viewRefs, version } = useThreeCanvasRefs();
  const { mode } = useColorMode();
  const backgroundColor = useResolvedCssVar('--background-color', [mode]);
  const resources = new Resources(sources);

useEffect(() => {
  if (!canvasRef.current) return;
  const validRefs = viewRefs.current.filter(ref => ref?.current);
  if (viewRefs.length === 0 || validRefs.length === 0) return;
  if (sceneSetupRef.current) return;

  let bgColor = backgroundColor;
  if (bgColor === undefined || bgColor === null || bgColor === '') {
    bgColor = '#000000';
  }

  SceneManager.init(canvasRef.current, bgColor, resources);
  
  validRefs.forEach((ref) => {
    ref.current.scene.init(bgColor, ref.current);
    SceneManager.registerScene(ref.current.scene);
  });

  sceneSetupRef.current = true;

  return () => {
    resources.off('ready');
    SceneManager.destroy();
    SceneManager.unregisterAllScenes();
    sceneSetupRef.current = false;
  };
}, [version]);

 useEffect(() => {
    if(sceneSetupRef.current && backgroundColor !== '') SceneManager.setBackgroundColor(backgroundColor);
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
