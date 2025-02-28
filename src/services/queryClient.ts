import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

export enum QueryKeys {
  GET_STATUS = 'GET_STATUS',
  GET_TASKS = 'GET_TASKS',
}