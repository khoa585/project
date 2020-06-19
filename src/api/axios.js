import axios from 'axios';
const BASE_URL ="http://localhost:4000"
const instance  = axios.create({
    baseURL:BASE_URL
})
instance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });
export default instance ;