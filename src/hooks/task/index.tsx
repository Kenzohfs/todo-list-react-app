import { useMutation, useQuery, UseQueryResult } from '@tanstack/react-query';
import React, { createContext, useContext, useEffect } from 'react';
import { time } from '../../consts/time';
import { wsTopics } from '../../consts/wsTopics';
import { IApiError } from '../../interfaces/IApiError';
import { ITask, ITaskData, ITaskResponse } from '../../interfaces/ITask';
import { api } from '../../services/api';
import { queryClient, QueryKeys } from '../../services/queryClient';
import { useSocket } from '../socket';
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
  const socket = useSocket();

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

      socket?.emit(wsTopics.taskCreated, data);
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

      socket?.emit(wsTopics.taskUpdated, data);
      return data;
    },
    onMutate: async ({ id, task }) => {
      await queryClient.cancelQueries({ queryKey: [QueryKeys.GET_TASKS] });

      const previousTasks = queryClient.getQueryData<ITaskResponse[]>([
        QueryKeys.GET_TASKS,
      ]);

      queryClient.setQueryData<ITaskResponse[]>(
        [QueryKeys.GET_TASKS],
        (oldTasks) => {
          if (!oldTasks) return [];
          return oldTasks.map((taskItem) =>
            taskItem.id === id
              ? { ...taskItem, ...task, updating: true }
              : taskItem
          );
        }
      );

      return { previousTasks };
    },
    onError: (error: IApiError, _, context) => {
      if (context?.previousTasks) {
        queryClient.setQueryData<ITaskResponse[]>(
          [QueryKeys.GET_TASKS],
          context.previousTasks
        );
      }
      const errDescription = error.response?.data.message || error.message;
      addToast({ type: 'error', description: errDescription });

      queryClient.invalidateQueries({ queryKey: [QueryKeys.GET_TASKS] });
    },
  }).mutateAsync;

  useEffect(() => {
    if (!socket) return;

    socket.on(wsTopics.taskCreated, (_) => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.GET_TASKS] });
    });

    socket.on(wsTopics.taskUpdated, (_) => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.GET_TASKS] });
    });

    socket.on(wsTopics.taskDeleted, (_) => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.GET_TASKS] });
    });

    return () => {
      socket.off(wsTopics.taskCreated);
      socket.off(wsTopics.taskUpdated);
      socket.off(wsTopics.taskDeleted);
    };
  }, [socket, queryClient]);

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
