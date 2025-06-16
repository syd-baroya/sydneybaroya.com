'use client';

import { useEffect, useMemo, useState, createContext, useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { getDesignTokens } from '@/styles/theme';

const ColorModeContext = createContext();

export const useColorMode = () => useContext(ColorModeContext);

export default function ThemeRegistry({ children }) {
  const [mode, setMode] = useState('light');

  // Load from localStorage or use system preference
  useEffect(() => {
    const storedMode = localStorage.getItem('theme');
    if (storedMode === 'light' || storedMode === 'dark') {
      setMode(storedMode);
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleColorMode = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', next);
      return next;
    });
  };

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
