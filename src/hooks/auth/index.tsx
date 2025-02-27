import { useMutation } from '@tanstack/react-query';
import React, { createContext, useContext } from 'react';
import { StorageKeys } from '../../consts/storageKeys';
import { IApiError } from '../../interfaces/IApiError';
import {
  ILoginData,
  ILoginResponse,
  IRegisterData,
  IRegisterResponse,
} from '../../interfaces/IAuth';
import { api } from '../../services/api';
import { useToast } from '../toast';

interface IAuthContextData {
  signIn(loginData: ILoginData): Promise<ILoginResponse>;
  register(registerData: IRegisterData): Promise<IRegisterResponse>;
  isAuthenticated: () => boolean;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const { addToast } = useToast();

  const signIn = useMutation({
    mutationFn: async (loginData: ILoginData) => {
      const { data } = await api.post<ILoginResponse>('/auth/login', loginData);
      handleLoginToken(data.token);

      addToast({ type: 'success', description: 'Login realizado com sucesso' });

      return data;
    },
    onError: (error: IApiError) => {
      console.error('Error signing in', error);
      const errDescription = error.response?.data.message || error.message;

      addToast({ type: 'error', description: errDescription });
    },
  }).mutateAsync;

  const handleLoginToken = (token: string) => {
    localStorage.setItem(StorageKeys.token, token);
  };

  const register = useMutation({
    mutationFn: async (registerData: IRegisterData) => {
      const { data } = await api.post<IRegisterResponse>(
        '/auth/register',
        registerData
      );

      addToast({
        type: 'success',
        description: 'Cadastro realizado com sucesso',
      });

      return data;
    },
    onError: (error: IApiError) => {
      console.error('Error creating user', error);
      const errDescription = error.response?.data.message || error.message;

      addToast({ type: 'error', description: errDescription });
    },
  }).mutateAsync;

  const isAuthenticated = () => {
    return !!localStorage.getItem(StorageKeys.token);
  };

  return (
    <AuthContext.Provider value={{ signIn, register, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};

export { AuthProvider, useAuth };
