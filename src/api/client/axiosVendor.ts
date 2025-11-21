import axios from "axios";

export let vendorAuthToken: string | null = null;

export const setVendorAxiosToken = (token: string | null) => {
  vendorAuthToken = token;
};

const axiosVendor = axios.create({
  baseURL: process.env.EXPO_PUBLIC_ZIRAAT_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

axiosVendor.interceptors.request.use((config) => {
  if (vendorAuthToken) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${vendorAuthToken}`;
  }
  return config;
});

export default axiosVendor;
