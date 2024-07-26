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
    const data = await getCategoryByRoute(
      `railings-manufactures-suppliers-india/${categories[0]}`
    );
    return {
      title: `Steelora | ${data.data[0]?.attributes?.title}`,
      description: data?.data[0]?.attributes?.description || "",
      openGraph: {
        images: [
          {
            url:
              data?.data[0]?.attributes?.catogeries?.data[0]?.attributes
                ?.imageUrl?.data?.attributes?.url || "",
            width: 300,
            height: 100,
            alt: data?.data[0]?.attributes?.title,
          },
        ],
      },
    };
  } else if (categories.length === 2) {
    const data = await getSubCategoryDataByRoute(
      `railings-manufactures-suppliers-india/${categories[0]}/${categories[1]}`
    );
    return {
      title: `Steelora | ${data?.data[0]?.attributes?.title}`,
      description: data?.data[0]?.attributes?.description || "",
      openGraph: {
        images: [
          {
            url:
              data?.data[0]?.attributes?.imageUrl?.data?.attributes?.url || "",
            width: 500,
            height: 300,
            alt: data.data[0]?.attributes.title,
          },
        ],
      },
    };
  }
}

const page = async ({ params }: { params: { categories: string } }) => {
  const { categories } = params;
  let data;

  try {
    if (categories.length === 1) {
      data = await getCategoryByRoute(
        `railings-manufactures-suppliers-india/${categories[0]}`
      );
    } else if (categories.length === 2) {
      data = await getSubCategoryDataByRoute(
        `railings-manufactures-suppliers-india/${categories[0]}/${categories[1]}`
      );
    }
    if (data.length <= 0) {
      throw new Error("Data not found");
    }
    // new api call
  } catch (error) {
    notFound();
  }
  console.log(data);

  return (
    <>
      {categories.length === 1 && <CategoryPage data={data} />}
      {categories.length === 2 && <ProductsListPage typeData={data} />}
    </>
  );
};

export default page;
