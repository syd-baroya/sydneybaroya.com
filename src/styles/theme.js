
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#2B2D42' },
          secondary: { main: '#ffeded' },
          background: {
            default: '#F3F3F3',
          },
        }
      : {
          primary: { main: '#F3F3F3' },
          secondary: { main: '#0a0a0a' },
          background: {
            default: '#2B2D42',
          },
        }),
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});