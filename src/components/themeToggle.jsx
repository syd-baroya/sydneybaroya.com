'use client';

import { IconButton } from '@mui/material';
import { useColorMode } from '@/app/themeRegistry';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function ThemeToggle() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <IconButton onClick={toggleColorMode} color="default">
      {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
