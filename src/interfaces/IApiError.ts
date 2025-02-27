import { AxiosError } from "axios";

export interface IApiError extends AxiosError<{ message: string }> { };