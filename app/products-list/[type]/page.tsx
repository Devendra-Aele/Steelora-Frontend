import ProductsListPage from "@/components/products/ProductsListPage";
import { getProductListType } from "@/utils/api/product-list";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://wip.steelora.com/"),
  title: "Steelora ",

  description:
    "Our Products offer durability and versatility, suitable for fencing, screening, or decorative purposes. With various sizes, patterns, and finishes available, choose the perfect  product for your project's design.",

  openGraph: {
    title: "Steelora ",
    description:
      "Our Products offer durability and versatility, suitable for fencing, screening, or decorative purposes. With various sizes, patterns, and finishes available, choose the perfect  product for your project's design.",
    images: [
      {
        url: "/assets/navbar/nav-logo.svg",
        width: 800,
        height: 600,
        alt: "Steelora",
      },
    ],
  },
};
const page = async ({ params }: { params: { type: string } }) => {
  const { type } = params;

  let typeData;

  try {
    typeData = await getProductListType(+type);
  } catch (error) {
    notFound();
  }

  return (
    <div>
      <ProductsListPage typeData={typeData} type={type} />
    </div>
  );
};

export default page;
