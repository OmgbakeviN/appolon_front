import axios from 'axios';

const API = axios.create({
  baseURL: 'https://musicstream-backend-bed9.onrender.com/api/',
});

// Ajout du token JWT automatiquement aux requêtes
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
