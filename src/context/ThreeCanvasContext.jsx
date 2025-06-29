'use client';

import { createContext, useContext, useRef, useState } from 'react';

const ThreeCanvasContext = createContext(null);

export function ThreeCanvasProvider({ children }) {
  const [version, setVersion] = useState(0);
  const viewRefs = useRef([]);

  const triggerUpdate = () => setVersion(v => v + 1);


  return (
    <ThreeCanvasContext.Provider value={{ viewRefs, version, triggerUpdate }}>
      {children}
    </ThreeCanvasContext.Provider>
  );
}

export function useThreeCanvasRefs() {
  return useContext(ThreeCanvasContext);
}
