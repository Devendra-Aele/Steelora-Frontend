import FacadePage from "@/components/facade/FacadePage";
import { getProductType } from "@/utils/api/product-type";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Steelora - Premium Facade Solutions | Glass Facade, Steel, Panel frame",

  description:
    "Transform your facade with Steelora's innovative solutions: steel, panel frame, curtain walling, steel & glass, and double-skin facades for durability and style.",

  openGraph: {
    title:
      "Steelora - Premium Facade Solutions | Glass Facade, Steel, Panel frame",

    description:
      "Transform your facade with Steelora's innovative solutions: steel, panel frame, curtain walling, steel & glass, and double-skin facades for durability and style.",

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
  const data = await getProductType(5);
  console.log("*********************facade data", data.data.attributes);
  return (
    <div>
      <FacadePage data={data.data.attributes} />
    </div>
  );
};

export default page;
