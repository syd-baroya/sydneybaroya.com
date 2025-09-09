'use client';

import { IconButton } from '@mui/material';
import { useColorMode } from '@/app/ThemeRegistry';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import { useTheme } from '@mui/material/styles';

export default function ThemeToggle() {
  const { mode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  return (
    <IconButton
      onClick={toggleColorMode}
      color={'primary'}
      sx={{
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.secondary.main,
        },
      }}
    >
      {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
