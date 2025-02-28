import axios from "axios";
import { env } from "../config/env";
import { StorageKeys } from "../consts/storageKeys";
import PublicPaths from "../routes/publicPaths";

export const api = axios.create({
  baseURL: `${env.API_URL}/api/v1`,
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(StorageKeys.token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem(StorageKeys.token);
      window.location.href = PublicPaths.LOGIN;
    }
    return Promise.reject(error);
  }
);