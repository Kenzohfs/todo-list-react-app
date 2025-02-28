import axios from "axios";
import { env } from "../config/env";
import { StorageKeys } from "../consts/storageKeys";

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