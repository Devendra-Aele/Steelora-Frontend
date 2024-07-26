import { apiService } from "./apiService";

export const getSSPvdSheetPageData = async () => {
  // const res = await apiService.get(
  //   "/products/5?populate[0]=imageUrl&populate[1]=product_types.catogeries,product_types.imagesUrl,product_types.titleImageurl"
  // );
  // return res.data;
  try{
    const res = await apiService.get(
        "/products/5?populate[0]=imageUrl&populate[1]=product_types.catogeries,product_types.imagesUrl,product_types.titleImageurl"
      );
      return res.data;
  }catch(error){
    // console.log("********************",error);
     return [];
  }
};

export const getSSPvdSheetTypeData = async (id: number) => {
  const res = await apiService.get(
    `https://cms.steelora.com/api/product-types/${id}?populate[0]=catogeries,imagesUrl,titleImageurl&populate[1]=catogeries.imageUrl`
  );
  return res.data;
};
