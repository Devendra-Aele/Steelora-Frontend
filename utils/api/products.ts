import axios from "axios";
import { apiService } from "./apiService";
import { BASE_URL } from "@/constants/baseUrl";

export const getProductById = async (id: number) => {
  const res = await axios.get(`${BASE_URL}/items/${id}?populate[0]=imagesUrl`);
  return res.data;
};
