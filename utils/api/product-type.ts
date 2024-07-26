import { apiService } from "./apiService";

export const getProductType = async (id: number) => {
  try {
    console.log(`Fetching product type with id: ${id}`);
    
    const res = await apiService.get(
      `https://cms.steelora.com/api/product-types/${id}?populate[0]=catogeries,imagesUrl,titleImageurl&populate[1]=catogeries.imageUrl`
    );

    console.log('API response:', res);
    return res.data;
  } catch (error) {
    console.error("Error fetching product type:", error);
    throw error;
  }
};
