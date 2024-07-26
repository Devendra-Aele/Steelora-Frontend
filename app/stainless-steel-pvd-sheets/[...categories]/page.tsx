import CategoryPage from "@/components/categories/CategoryPage";
import ProductsListPage from "@/components/products/ProductsListPage";
import {
  getCategoryByRoute,
  getSubCategoryDataByRoute,
} from "@/utils/api/categories";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({params,}: {params: { categories: string };}) {
  const { categories } = params;
return {
  title: " Stainless Steel PVD Sheets | Steelora - Premium Quality",
  description: `Discover the finest stainless steel PVD sheets at Steelora. Experience unmatched quality and craftsmanship from the leading name in stainless steel production, part of the renowned Sunrise Group of Industries.`,
  openGraph: {
    title: "Stainless Steel PVD Sheets | Steelora - Premium Quality",
    description: `Discover the finest stainless steel PVD sheets at Steelora. Experience unmatched quality and craftsmanship from the leading name in stainless steel production, part of the renowned Sunrise Group of Industries.`,
    canonical: "/stainless-steel-pvd-sheets/" + "categories[0]ww",
    images: [
      {
        url: "/assets/navbar/nav-logo.svg",
        width: 800,
        height: 600,
        alt: "Projects",
      },
    ],
  },
  canonical: "/stainless-steel-pvd-sheets/",
}
}


const page = async ({ params }: { params: { categories: string } }) => {
  const { categories } = params;
  let data;
  console.log("categories",categories[0]);
  try {
    if (categories.length === 1) {
      data = await getCategoryByRoute(
        `stainless-steel-pvd-sheets/${categories[0]}`
      );
    } else if (categories.length === 2) {
      data = await getSubCategoryDataByRoute(
        `stainless-steel-pvd-sheets/${categories[0]}/${categories[1]}`
      );
    }
    if (data.length <= 0) {
      throw new Error("Data not found");
    }
    // new api call
  } catch (error) {
    notFound();
  }

  return (
    <>
      {categories.length === 1 && <CategoryPage data={data} />}
      {categories.length === 2 && <ProductsListPage typeData={data} />}
    </>
  );
};

export default page;
