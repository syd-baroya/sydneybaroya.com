'use client';

import { IconButton } from '@mui/material';
import { useColorMode } from '@/app/themeRegistry';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';

export default function ThemeToggle() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <IconButton onClick={toggleColorMode} color={'primary'}>
      {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
