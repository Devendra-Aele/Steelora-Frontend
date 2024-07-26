import MeshPage from "@/components/mesh/MeshPage";
import { getProductType } from "@/utils/api/product-type";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Steelora - High-Quality Steel Mesh Products",

  description:
    "Explore Steelora's versatile steel mesh products: strength, reliability for construction, agriculture, landscaping, residential use. Mesh Rigid, Blind Elegance, Flexible Series, Link Weave, & more.",

  openGraph: {
    title: "Steelora - High-Quality Steel Mesh Products",

    description:
      "Explore Steelora's versatile steel mesh products: strength, reliability for construction, agriculture, landscaping, residential use. Mesh Rigid, Blind Elegance, Flexible Series, Link Weave, & more.",

    images: [
      {
        url: "https://wip.steelora.com/assets/navbar/nav-logo-2.png",
        width: 100,
        height: 50,
        alt: "Steelora",
      },
    ],
  },
};
const page = async () => {
  const data = await getProductType(4);
  // CHANGE ID HERE

  return (
    <div>
      <MeshPage data={data?.data.attributes} />
    </div>
  );
};

export default page;
