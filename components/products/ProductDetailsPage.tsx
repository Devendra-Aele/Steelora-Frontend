import React from "react";
import ProductDetails from "./ProductDetails";
import {
  productDetailsWithTable,
  productDetailsWithList,
} from "@/constants/products";
import RelatedSection from "./RelatedSection";
import { ProductData } from "@/types/product-details.types";
import { RelatedProductData } from "@/types/related-product.types";

 function seoFunctionForProduct(arr: string[]): string {
  if (arr.length === 0) {
    return "";
  } else {
    let newStringOfmodified =arr[0]=='stainless-steel-pvd-profiles'? arr.slice(0).join("-"):arr.slice(1).join("-");
    if (newStringOfmodified.includes("pvd")) {
      const words = newStringOfmodified.split("-");
      const capitalizedWords = words.map((word) => {
        if (word == "pvd") {
          return "PVD";
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
      });
      return capitalizedWords.join(" ");
    }
    const words = newStringOfmodified.split("-");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join(" ");
    // // Add comma before the last word
    // const lastSpaceIndex = result.lastIndexOf(" ");
    // return result.slice(0, lastSpaceIndex) + "," + result.slice(lastSpaceIndex);
  }
}

const ProductDetailsPage = ({
  typeData,
  relatedProduct,
}: {
  typeData: ProductData;
  relatedProduct: RelatedProductData;
}) => {
  // FETCH THE PRODUCT DETAILS BY ID
  const features = typeData.data.attributes.features;
  const route=typeData.data.attributes?.catogery?.data?.attributes?.routeField.split("/")
  const seoFieledData=seoFunctionForProduct(route)
 
  const firstKey = Object.keys(features)[0];
  const firstKeyIsNumber = !isNaN(parseInt(firstKey));
  const productDetails = {
    id: typeData.data.id,
    bgImg:
      typeData.data.attributes.imagesUrl.data?.[0].attributes.formats?.thumbnail
        .url || typeData.data.attributes.imagesUrl.data[0].attributes.url,
    productName: typeData.data.attributes.title,
    description: typeData.data.attributes.description,
    // detailsTable: {
    //   width: 3,
    //   length: 2440,
    //   thickness: "0.8, 1",
    //   colors: "All color options",
    // },
    detailsTable: typeData.data.attributes.features,
    seoField:seoFieledData,
    images: typeData.data.attributes.imagesUrl.data?.map(
      // (image) => image.attributes.formats?.thumbnail.url
      (image) => image.attributes?.url
    ),

    isTable: !firstKeyIsNumber,
    isCustomizable: false,
    type: typeData.data.attributes.title,
  };

const productList = relatedProduct?.data?.attributes?.items?.data
  ?.filter(item => item.id !== typeData?.data?.id) // Filter out items with id equal to typeData.data.id
  .map(item => ({
    id: item.id,
    name: item.attributes.title,
    description: item.attributes.description,
    image:
      item.attributes.imagesUrl.data[0].attributes.formats?.thumbnail?.url ||
      item.attributes.imagesUrl.data[0].attributes.url,
    seoField: seoFieledData,
    hierarchy: `${typeData?.data?.attributes?.title}`,
  }));


  return (
    <div>
      {/* <ProductDetails details={productDetailsWithTable} /> */}
      <ProductDetails details={productDetails} />

      <RelatedSection productList={productList.slice(0, 4)} />
    </div>
  );
};

export default ProductDetailsPage;
