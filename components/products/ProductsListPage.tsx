"use client";
import React from "react";
import "./products.css";
import ProductsList from "./ProductsList";
import { ProductListResponse } from "@/types/productList.types";
function seoFunctionForProduct(arr: string[]): string {
  console.log(arr);
  if (arr.length === 0) {
    return "";
  } else {
    let newStringOfmodified =
      arr[0] != "stainless-steel-pvd-profiles"
        ? arr.slice(1, -1).join("-")
        : arr.slice(0, -1).join("-");
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
  }
}
const ProductsListPage = ({
  type,
  typeData,
}: {
  type?: string;
  typeData: any;
}) => {
  // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&typeData",typeData?.data[0]?.attributes);
  //   MAKE API CALL FOR FETCHING PRODUCTS BY TYPE
  const route = typeData?.data[0]?.attributes.routeField.split("/");
  console.log(route);

  const seoFieledData = seoFunctionForProduct(route);
  // console.log("&&&&&&&&&&seoFieledData", seoFieledData);
  const productList = typeData?.data[0]?.attributes.items.data.map(
    (item: any) => ({
      id: item.id,
      name: item.attributes.title,
      description: item.attributes.description,
      image: item?.attributes?.imagesUrl?.data?.[0].attributes?.url,
      seoField: `${seoFieledData}, ${typeData.data[0]?.attributes?.title}`,
      hierarchy: `${typeData?.data[0]?.attributes?.title}`,
    })
  );

  return (
    <div>
      {/* <div className="h-[50vh] lg:h-[80vh] products_list_hero"></div> */}
      <section className="mt-16 lg:mt-24">
        <div className="bg-section-heading  py-10 lg:py-14">
          <h1 className="section-heading !w-[90%] mx-auto">
            {typeData.data[0]?.attributes?.title}
          </h1>
        </div>

        <ProductsList products={productList} />
        {/* {productList.length > 0 ? (
        ) : (
          <p className="text-sm text-primary-text text-center ">
            Products have not yet been added to this category.
          </p>
        )} */}
      </section>
    </div>
  );
};

export default ProductsListPage;
