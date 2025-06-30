// app/themeRegistry.jsx
'use client';

import { useEffect, useMemo, useState, createContext, useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { getDesignTokens } from '@/styles/muiTheme';
import { setCSSVariables } from '@/styles/setCssVariables';
import { lightPalette, darkPalette } from '@/styles/themeColors';
import NavBar from '@/components/NavBar/NavBar';
import SECTIONS from './sections';
import FontWrapper from '@/components/FontWrapper';
import MultiSceneCanvas from '@/components/Scene/MultiSceneCanvas';
import { ThreeCanvasProvider } from '@/context/ThreeCanvasContext';
import { ActiveCardProvider } from "@/lib/hooks/useActiveCard";

const ColorModeContext = createContext();
export const useColorMode = () => useContext(ColorModeContext);

export default function ThemeRegistry({ children }) {
  const [mode, setMode] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem('theme');
    if (storedMode === 'light' || storedMode === 'dark') {
      setMode(storedMode);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(prefersDark ? 'dark' : 'light');
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.body.setAttribute('data-theme', mode);
    const palette = mode === 'light' ? lightPalette : darkPalette;
    setCSSVariables(palette);
  }, [mode, mounted]);

  const toggleColorMode = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  if (!mounted) return null;

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FontWrapper>
          <ThreeCanvasProvider>
            <MultiSceneCanvas />
            <NavBar items={SECTIONS} />
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
