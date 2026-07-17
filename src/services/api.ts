import axios from "axios";

const api = axios.create({
  baseURL: "https://stayease-api-production-0afc.up.railway.app/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Otomatis kirim token ke semua request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
