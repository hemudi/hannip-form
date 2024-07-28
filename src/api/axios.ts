// import getTokenCooke from '@utils/cookie';
// import axios, { AxiosRequestHeaders } from 'axios';

// const axiosInstance = axios.create({
//   url: process.env.NEXT_PUBLIC_API_URL,
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = getTokenCooke();
//     if (token) {
//       config.headers = config.headers || {};
//       (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     console.error(error);
//     return Promise.reject(error);
//   },
// );

// export default axiosInstance;
