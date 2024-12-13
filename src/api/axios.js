import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://lipila.tech/smartskool',
});

export default axiosInstance;
