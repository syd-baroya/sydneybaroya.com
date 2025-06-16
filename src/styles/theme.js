
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#0070f3' },
          background: {
            default: '#f5f5f5',
            paper: '#fff',
          },
        }
      : {
          primary: { main: '#90caf9' },
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
        }),
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});