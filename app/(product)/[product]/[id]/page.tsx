import ProductDetailsPage from "@/components/products/ProductDetailsPage";
import { BASE_URL } from "@/constants/baseUrl";
import { getRelatedProductDetailsType } from "@/utils/api/getRealatedProject";
import { getProductDetailsType } from "@/utils/api/product-details";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { product: string; id: number };
}) {
  const product = await getProductDetailsType(params.id);

  return {
    title: `Steelora | ${product?.data?.attributes?.title}`,
    description: product?.data?.attributes?.description,
    openGraph: {
      images: product?.data?.attributes?.imagesUrl.data[0].attributes.url,
    },
    canonical: `/${params?.product}/${params?.id}`,
  };
}

const page = async ({
  params,
}: {
  params: { product: string; id: number };
}) => {
  const { id } = params;

  let product;
  let relatedProduct;

  try {
    product = await getProductDetailsType(id);
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

  // console.log(product);

  return (
    <>
      <ProductDetailsPage typeData={product} relatedProduct={relatedProduct} />
    </>
  );
};

export default page;
