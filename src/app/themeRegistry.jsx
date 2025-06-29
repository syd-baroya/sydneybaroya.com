'use client';

import { useEffect, useMemo, useState, createContext, useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { getDesignTokens } from '@/styles/theme';
import NavBar from '@/components/NavBar/NavBar';
import SECTIONS from './sections';
import FontWrapper from '@/components/FontWrapper';
import MultiSceneCanvas from '@/components/Scene/MultiSceneCanvas';
import { ThreeCanvasProvider } from '@/context/ThreeCanvasContext';
const ColorModeContext = createContext();
import { ActiveCardProvider } from "@/lib/hooks/useActiveCard";

export const useColorMode = () => useContext(ColorModeContext);

export default function ThemeRegistry({ children }) {
  const [mode, setMode] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Load from localStorage or use system preference
  useEffect(() => {
    const storedMode = localStorage.getItem('theme');
    if (storedMode === 'light' || storedMode === 'dark') {
      setMode(storedMode);
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
    setMounted(true);
  }, []);

  const toggleColorMode = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  if(!mounted) return null;

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FontWrapper>
          <ThreeCanvasProvider>
            <MultiSceneCanvas />
            <NavBar items={SECTIONS}></NavBar>
            <ActiveCardProvider>
              <AnimatePresence mode="wait">
                <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                >
                {children}
                </motion.main>
              </AnimatePresence>
            </ActiveCardProvider>
          </ThreeCanvasProvider>
        </FontWrapper>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
