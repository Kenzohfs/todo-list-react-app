import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { queryClient } from '../services/queryClient';
import theme from '../style/theme';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

interface IHooksProviderProps {
  children: React.ReactNode;
}

const HooksProvider: React.FC<IHooksProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <AuthProvider>{children}</AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default HooksProvider;
