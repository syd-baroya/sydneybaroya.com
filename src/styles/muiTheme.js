import { lightPalette, darkPalette } from './themeColors';

export const getDesignTokens = (mode) => {
  const palette = mode === 'light' ? lightPalette : darkPalette;

  return {
    palette: {
      mode,
      primary: { main: palette.primary },
      secondary: { main: palette.secondary },
      background: {
        default: palette.background,
      },
    },
    typography: {
      fontFamily: `var(--font-quicksand), Roboto, Arial, sans-serif`,
    },
  };
};
