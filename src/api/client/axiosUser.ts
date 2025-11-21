import axios from "axios";

export let userAuthToken: string | null = null;

export const setUserAxiosToken = (token: string | null) => {
  userAuthToken = token;
};

const axiosUser = axios.create({
  baseURL: process.env.EXPO_PUBLIC_ZIRAAT_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

axiosUser.interceptors.request.use((config) => {
  if (userAuthToken) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${userAuthToken}`;
  }
  return config;
});

export default axiosUser;
