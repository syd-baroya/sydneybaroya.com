'use client';

import { createContext, useContext, useRef } from 'react';

const ThreeCanvasContext = createContext(null);

export function ThreeCanvasProvider({ children }) {
  const viewRefs = useRef([]);

  return (
    <ThreeCanvasContext.Provider value={viewRefs}>
      {children}
    </ThreeCanvasContext.Provider>
  );
}

export function useThreeCanvasRefs() {
  return useContext(ThreeCanvasContext);
}
