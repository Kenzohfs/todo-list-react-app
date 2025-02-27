import axios from "axios";
import { env } from "../config/env";

export const api = axios.create({
  baseURL: `${env.API_URL}/api/v1`,
  withCredentials: false
})