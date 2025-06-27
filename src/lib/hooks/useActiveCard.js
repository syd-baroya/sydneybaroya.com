'use client';
import { createContext, useContext, useState } from 'react';

const ActiveCardContext = createContext();

export function ActiveCardProvider({ children }) {
  const [activeSlug, setActiveSlug] = useState(null);
  return (
    <ActiveCardContext.Provider value={{ activeSlug, setActiveSlug }}>
      {children}
    </ActiveCardContext.Provider>
  );
}

export function useActiveCard() {
  return useContext(ActiveCardContext);
}
