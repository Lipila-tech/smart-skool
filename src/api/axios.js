import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.SS_DEV_API_BASE_URL || 'http://localhost:8000/smartskool',
});

export default axiosInstance;
