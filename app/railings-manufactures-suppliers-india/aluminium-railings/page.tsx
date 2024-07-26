import AluminiumRailingsPage from "@/components/railings/AluminiumRailing";
import { getSSPvdSheetTypeData } from "@/utils/api/sspvdSheets";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Steelora - Premium Aluminium Railings | Safety & Durability",

  description:
    "Elevate safety & aesthetics with Steelora's sleek aluminium railings. Durable, low maintenance for residential, commercial, and industrial spaces.",

  openGraph: {
    title: "Steelora - Premium Aluminium Railings | Safety & Durability",

    description:
      "Elevate safety & aesthetics with Steelora's sleek aluminium railings. Durable, low maintenance for residential, commercial, and industrial spaces.",

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
  const sheetData = await getSSPvdSheetTypeData(1);

  return (
    <div>
      <AluminiumRailingsPage typeData={sheetData} />
    </div>
  );
};

export default page;
