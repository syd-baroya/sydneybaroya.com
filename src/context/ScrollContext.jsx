'use client';

import { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const [wrapper, setWrapper] = useState(null);
  return (
    <ScrollContext.Provider value={{ wrapper, setWrapper }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll() {
  return useContext(ScrollContext);
}
