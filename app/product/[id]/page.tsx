import ProductDetails from "@/components/products/ProductDetails";
import ProductDetailsPage from "@/components/products/ProductDetailsPage";
import { getRelatedProductDetailsType } from "@/utils/api/getRealatedProject";
import { getProductDetailsType } from "@/utils/api/product-details";
import { Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";

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

const page = async ({ params }: { params: { id: number } }) => {
  const { id } = params;

  let product;
  let relatedProduct;

  try {
    product = await getProductDetailsType(id);
    // console.log(product);
  } catch (error: any) {
    if (error.message === "Request failed with status code 404") {
      notFound();
    } else {
      console.log("Something went wrong");
    }
  }

  try {
    relatedProduct = await getRelatedProductDetailsType(
      product.data.attributes.catogery.data.id
    );
  } catch (error) {
    console.log("Related Products Not Found");
  }

  return (
    <>
      <ProductDetailsPage typeData={product} relatedProduct={relatedProduct} />
    </>
  );
};

export default page;
