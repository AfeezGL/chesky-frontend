import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status.errors[0].details)
      throw new Error(error.response.status.errors[0].details);

    if (error.response.data.detail) {
      throw new Error(error.response.data.detail);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
