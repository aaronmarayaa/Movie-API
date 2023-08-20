// axiosConfig.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: 
  { "ngrok-skip-browser-warning": "true"}
});

export default api;