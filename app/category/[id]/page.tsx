import CategoryPage from "@/components/categories/CategoryPage";
import { getCategoryData } from "@/utils/api/categories";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: {id: number };
}) {

  return {
    title: `Steelora - Modern & Durable Solutions | Category ${params?.id}`,
    description: `Steelora - Modern & Durable Solutions | ${params?.id}`,
    canonical: `/category/${params?.id}`,
  };
}

const page = async ({ params }: { params: { id: number } }) => {
  const { id } = params;

  let data;

  try {
    data = await getCategoryData(id);
  } catch (error) {
    notFound();
  }

  return <CategoryPage data={data} />;
};

export default page;
