import { useQuery, UseQueryResult } from '@tanstack/react-query';
import React, { createContext, useContext } from 'react';
import { time } from '../../consts/time';
import { IStatus } from '../../interfaces/IStatus';
import { api } from '../../services/api';
import { QueryKeys } from '../../services/queryClient';
import { useToast } from '../toast';

interface IStatusContextData {
  GetStatus: () => UseQueryResult<IStatus[]>;
}

const StatusContext = createContext<IStatusContextData>(
  {} as IStatusContextData
);

interface IStatusProviderProps {
  children: React.ReactNode;
}

const StatusProvider: React.FC<IStatusProviderProps> = ({ children }) => {
  const { addToast } = useToast();

  const GetStatus = (): UseQueryResult<IStatus[]> =>
    useQuery({
      queryKey: [QueryKeys.GET_STATUS],
      queryFn: async () => {
        try {
          const { data } = await api.get<IStatus[]>('/status');

          return data;
        } catch (err: any) {
          addToast({
            type: 'error',
            description: err.response?.data.message || err.message,
          });

          throw err;
        }
      },
      retry: false,
      staleTime: time.defaultStaleTime,
    });

  return (
    <StatusContext.Provider value={{ GetStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

const useStatus = (): IStatusContextData => {
  const context = useContext(StatusContext);

  if (!context) {
    throw new Error('useStatus must be used within a StatusProvider');
  }

  return context;
};

export { StatusProvider, useStatus };
