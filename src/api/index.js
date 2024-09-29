import axios from "axios";

export const Axios = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: import.meta.env.VITE_API_URL,
  // params: {
  //   apikey: import.meta.env.VITE_API_KEY,
  // },
});

