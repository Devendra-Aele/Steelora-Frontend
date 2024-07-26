import StainlessSteelRailings from "@/components/railings/stainlessSteelRailings/stainlessSteelRailingsSystem";
import React from "react";

import { getSSPvdSheetTypeData } from "@/utils/api/sspvdSheets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steelora: Stainless Steel Railings | Durable & Stylish Designs",

  description:
    "Discover Steelora's stainless steel railings: stylish, sophisticated solutions for homeowners, architects, and industries. Elevate your project with our expert installations.",

  openGraph: {
    title: "Steelora: Stainless Steel Railings | Durable & Stylish Designs",

    description:
      "Discover Steelora's stainless steel railings: stylish, sophisticated solutions for homeowners, architects, and industries. Elevate your project with our expert installations.",

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
  const sheetData = await getSSPvdSheetTypeData(2);
  return (
    <div>
      <StainlessSteelRailings typeData={sheetData} />
    </div>
  );
};

export default page;
