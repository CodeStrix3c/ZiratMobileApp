import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_ZIRAAT_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     // ⛔ BLOCK real calls in mock mode
//     if (USE_MOCK_API) {
//       return Promise.reject({ mock: true, url: config.url });
//     }

//     // Auth logic (except when disabled)
//     if (config.auth !== false) {
//       const token = await AsyncStorage.getItem("token");

//       if (token) {
//         config.headers = config.headers || {};
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default axiosInstance;
