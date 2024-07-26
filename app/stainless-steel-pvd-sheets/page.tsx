import SsPvdSheetsPage from "@/components/ssPvdSheets/SsPvdSheetsPage";
import { getSSPvdSheetPageData } from "@/utils/api/sspvdSheets";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Steelora - SS PVD Sheets | Water Ripple & Plain Series",

  description:
    "Explore Steelora's premium SS PVD sheets: Water Ripple Series & Stainless Steel Plain Sheets. Durable, captivating aesthetics, corrosion-resistant, ideal for diverse applications.",

  openGraph: {
    title: "Steelora - SS PVD Sheets | Water Ripple & Plain Series",

    description:
      "Explore Steelora's premium SS PVD sheets: Water Ripple Series & Stainless Steel Plain Sheets. Durable, captivating aesthetics, corrosion-resistant, ideal for diverse applications.",

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
  const data = await getSSPvdSheetPageData();

  return (
    <div>
      <SsPvdSheetsPage data={data?.data?.attributes} />
    </div>
  );
};

export default page;
