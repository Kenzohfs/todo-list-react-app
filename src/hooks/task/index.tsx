import { useMutation, useQuery, UseQueryResult } from '@tanstack/react-query';
import React, { createContext, useContext } from 'react';
import { time } from '../../consts/time';
import { IApiError } from '../../interfaces/IApiError';
import { ITask, ITaskData, ITaskResponse } from '../../interfaces/ITask';
import { api } from '../../services/api';
import { queryClient, QueryKeys } from '../../services/queryClient';
import { useToast } from '../toast';

interface ITaskContextData {
  GetTasks(): UseQueryResult<ITask[]>;
  CreateTask(task: ITaskData): Promise<ITaskResponse>;
  UpdateTask(params: ITaskUpdateMutationParams): Promise<ITaskResponse>;
}

const TaskContext = createContext<ITaskContextData>({} as ITaskContextData);

interface ITaskProviderProps {
  children: React.ReactNode;
}

interface ITaskUpdateMutationParams {
  id: string;
  task: Partial<ITaskData>;
}

const TaskProvider: React.FC<ITaskProviderProps> = ({ children }) => {
  const { addToast } = useToast();

  const GetTasks = (): UseQueryResult<ITask[]> =>
    useQuery({
      queryKey: [QueryKeys.GET_TASKS],
      queryFn: async () => {
        try {
          const { data } = await api.get<ITask[]>('/tasks/get-tasks');

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

  const CreateTask = useMutation({
    mutationFn: async (task: ITaskData) => {
      const { data } = await api.post<ITaskResponse>(
        '/tasks/insert-tasks',
        task
      );

      queryClient.invalidateQueries({ queryKey: [QueryKeys.GET_TASKS] });

      addToast({ type: 'success', description: 'Tarefa criada com sucesso' });

      return data;
    },
    onError: (error: IApiError) => {
      console.error('Error creating task', error);
      const errDescription = error.response?.data.message || error.message;

      addToast({ type: 'error', description: errDescription });
    },
  }).mutateAsync;

  const UpdateTask = useMutation({
    mutationFn: async ({ id, task }: ITaskUpdateMutationParams) => {
      const { data } = await api.put<ITaskResponse>(`/tasks/${id}`, task);

      queryClient.invalidateQueries({ queryKey: [QueryKeys.GET_TASKS] });

      addToast({
        type: 'success',
        description: 'Tarefa atualizada com sucesso',
      });

      return data;
    },
    onError: (error: IApiError) => {
      console.error('Error updating task', error);
      const errDescription = error.response?.data.message || error.message;

      addToast({ type: 'error', description: errDescription });
    },
  }).mutateAsync;

  return (
    <TaskContext.Provider value={{ GetTasks, CreateTask, UpdateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTask = (): ITaskContextData => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error('useTask must be used within a TaskProvider');
  }

  return context;
};

export { TaskProvider, useTask };
