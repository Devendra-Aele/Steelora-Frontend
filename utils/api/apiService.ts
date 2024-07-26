import axios from "axios";

export const apiService = axios.create({
  baseURL: process.env.BASE_URL,
});
