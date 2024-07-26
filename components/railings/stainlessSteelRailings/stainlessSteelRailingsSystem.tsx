"use client";

import React, { useEffect, useState } from "react";
import "./stainlessSteelRailingsSystem.css";
import CategoriesList from "@/components/categories/CategoriesList";
import { categoriesList } from "@/constants/categoriesList";
import PageHeadingWithImage from "@/components/pageHeading/PageHeadingImage";
import { stainlessSteelRailingHeading } from "@/constants/aluminiumRailing";
import MarqueSlider from "@/components/reusables/MarqueSlider";
import { marqueSliderImages } from "@/constants/stainlessSteelSliderImage";
import { RailingApiResponse } from "@/types/railing.types";
import ProductsList from "@/components/products/ProductsList";
import { notFound } from "next/navigation";
import { getProductListType } from "@/utils/api/product-list";

const StainlessSteelRailings = ({
  type,
  typeData,
}: {
  type?: string;
  typeData: RailingApiResponse;
}) => {
  const [productsList, setProductsList] = useState<any>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductListType(14);
        setProductsList(res);
        // console.log(res);
      } catch (error) {
        notFound();
      }
    };

    fetchProducts();
  }, []);

  const headingData = {
    name: typeData.data.attributes.title,
    description: typeData.data.attributes.description,
    image:
      typeData.data.attributes.titleImageurl.data.attributes.formats?.thumbnail
        .url,
  };
  const sliderImage: string[] = typeData.data.attributes.imagesUrl.data.map(
    (image) => image.attributes?.url ?? ""
  );

  const productList = productsList?.data?.attributes?.items?.data?.map(
    (item: any) => ({
      id: item.id,
      name: item.attributes.title,
      description: item.attributes.description,
      image:
        item.attributes.imagesUrl.data?.[0].attributes.formats?.thumbnail?.url,
    })
  );

  const categoriesList = typeData.data.attributes.catogeries.data;
  return (
    <div>
      {/* hero sction */}
      {/* <div className="h-[50vh] lg:h-[80vh] sspvd_sheets_hero"></div> */}
      {/* Page heading*/}
      {sliderImage.length > 0 && (
        <div className=" pt-16 md:pt-20  lg:pt-32 xl:pt-36">
          <MarqueSlider data={sliderImage} />
        </div>
      )}
      <PageHeadingWithImage data={headingData} imageOrder={2} />
      {/* <CategoriesList list={categoriesList} /> */}

      <h2 className="sub_heading2 text-center section-x-padding pt-10">
        Products
      </h2>

      <ProductsList products={productList} />
    </div>
  );
};

export default StainlessSteelRailings;
