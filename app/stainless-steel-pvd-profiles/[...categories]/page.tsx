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
  const data = await getSubCategoryDataByRoute(
    `stainless-steel-pvd-profiles/${categories[0]}`
  );
  console.log(data?.data[0]?.attributes?.title);

  return {
    title: `Steelora | ${data?.data[0]?.attributes?.title}`,
    description: data?.data[0]?.attributes?.description || "",
    canonical: "/" + categories,
  };
}

const page = async ({ params }: { params: { categories: string } }) => {
  const { categories } = params;
  let data;

  try {
    if (categories.length === 1) {
      data = await getSubCategoryDataByRoute(
        `stainless-steel-pvd-profiles/${categories[0]}`
      );
    }

    if (data.data.length <= 0) {
      throw new Error("Data not found");
    }
  } catch (error) {
    notFound();
  }

  return (
    <>
      <ProductsListPage typeData={data} />
    </>
  );
};

export default page;
