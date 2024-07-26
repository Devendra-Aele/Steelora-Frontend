import axios from "axios";
import { apiService } from "./apiService";
import { BASE_URL } from "@/constants/baseUrl";

export const getCategoryDetailsWithProductList = async (id: number) => {
  const res = await apiService.get(
    `/catogeries/${id}?populate[0]=imageUrl&populate[1]=items.imagesUrl`
  );
  return res.data;
};

export const getCategoryData = async (id: number) => {
  const res = await axios.get(
    `${BASE_URL}/product-types/${id}?populate[0]=catogeries,imagesUrl,titleImageurl&populate[1]=catogeries.imageUrl`
  );
  return res.data;
};

export const getCategoryByRoute = async (route: string) => {
  const res = await axios.get(
    `${BASE_URL}/product-types?filters[routeField][$eq]=${route}&populate[0]=catogeries,imagesUrl,titleImageurl&populate[1]=catogeries.imageUrl`
  );
  return res.data;
};

export const getSubCategoryDataByRoute = async (route: string) => {
  const res = await axios.get(
    `${BASE_URL}/catogeries?filters[routeField][$eq]=${route}&populate[0]=imageUrl,items.imagesUrl`
  );
  return res.data;
};
