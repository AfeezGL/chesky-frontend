import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.data?.data?.error?.status?.errors[0]?.details)
      throw new Error(error.response.data.data.error.status.errors[0].details);

    return Promise.reject('An error occured.');
  }
);

export default axiosClient;
