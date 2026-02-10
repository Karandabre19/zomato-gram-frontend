import axios, { AxiosRequestConfig } from "axios";
import { error } from "console";
import { Underline } from "lucide-react";

const TOKEN_KEY = "za_access_token";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const TIMEOUT = Number(process.env.NEXT_PUBLIC_API_TIMEOUT_M);

const zgAPI = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getToken = (): string | null => {
  if (typeof window === undefined) {
    return null;
  }
  return window.localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token: string): void => {
  if (typeof window === undefined) {
    return;
  }
  window.localStorage.setItem(TOKEN_KEY, token);
};

export const clearToken = (): void => {
  if (typeof window === undefined) {
    return;
  }
  window.localStorage.removeItem(TOKEN_KEY);
};

zgAPI.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

zgAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error?.response?.data?.message ?? "Something went wrong";
    return Promise.reject(new Error(message));
  },
);

export const zgApiGet = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await zgAPI.get(url, config);
  return response?.data;
};

export const zgApiPost = async <T, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await zgAPI.post(url, body, config);
  return response?.data;
};
export const zgApiPut = async <T, B = unknown>(
  url: string,
  body?: B,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await zgAPI.put(url, body, config);
  return response?.data;
};

export const zgApiDelete = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  const response = await zgAPI.delete(url, config);
  return response?.data;
};

export default zgAPI;