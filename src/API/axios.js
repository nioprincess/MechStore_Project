import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: { "Content-Type": "application/json" },
});

export const userAxios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  // withCredentials: true,
});
