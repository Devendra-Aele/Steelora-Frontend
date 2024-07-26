import axios from "axios";
import { apiService } from "./apiService";

export const getProductListType = async (id: number) => {
  const res = await axios.get(
    `	https://cms.steelora.com/api/catogeries/${id}?populate[0]=imageUrl&populate[1]=items.imagesUrl`
  );
  return res.data;
};
