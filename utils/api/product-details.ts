import axios from "axios";
import { apiService } from "./apiService";

export const getProductDetailsType = async (id: number) => {
  const res = await axios.get(
    `https://cms.steelora.com/api/items/${id}?populate=*`
    // `/items/${id}?populate=*`
  );
  // console.log("product by id *********************",res.data?.data?.attributes?.catogery?.data?.attributes?.routeField);
  return res.data;
};
