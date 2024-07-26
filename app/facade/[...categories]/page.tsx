import CategoryPage from "@/components/categories/CategoryPage";
import ProductsListPage from "@/components/products/ProductsListPage";
import {
  getCategoryByRoute,
  getSubCategoryDataByRoute,
} from "@/utils/api/categories";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { categories: string };
}) {
  const { categories } = params;
  if (categories.length === 1) {
    const data = await getCategoryByRoute(`facade/${categories[0]}`);
    return {
      title: `Steelora - Modern & Durable Solutions | Innovative Steel ${data.data[0]?.attributes?.title}`,
      description: data?.data[0]?.attributes?.description || "",
    };
  } else if (categories.length === 2) {
    const data = await getSubCategoryDataByRoute(
      `facade/${categories[0]}/${categories[1]}`
    );
    return {
      title: `Steelora - Modern & Durable Solutions | Innovative Steel ${data.data[0]?.attributes?.title}`,
      description: data?.data[0]?.attributes?.description || "",
    };
  }
}

const page = async ({ params }: { params: { categories: string } }) => {
  const { categories } = params;
  // console.log(categories);
  let data;

  try {
    if (categories.length === 1) {
      data = await getCategoryByRoute(`facade/${categories[0]}`);
    } else if (categories.length === 2) {
      data = await getSubCategoryDataByRoute(
        `facade/${categories[0]}/${categories[1]}`
      );
    }
    if (data.data.length <= 0) {
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
