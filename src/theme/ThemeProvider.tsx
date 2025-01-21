'use client';

import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import React, { ReactNode } from 'react';
import theme from './theme';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
