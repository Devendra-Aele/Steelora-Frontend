import SsPvdProfilesPage from "@/components/ssPvdProfiles/SsPvdProfilesPage";
import { getProductType } from "@/utils/api/product-type";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Steelora - SS PVD Coated Profiles | Durable & Sleek Finishes",

  description:
    "Steelora's innovative stainless steel PVD profiles for sleek finishes. Choose from box, corner, Z, skirtings, T, U, stair nosing profiles to enhance your space with style and strength.",

  openGraph: {
    title: "Steelora - SS PVD Coated Profiles | Durable & Sleek Finishes",

    description:
      "Steelora's innovative stainless steel PVD profiles for sleek finishes. Choose from box, corner, Z, skirtings, T, U, stair nosing profiles to enhance your space with style and strength.",

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
  const data = await getProductType(3);
  // change id of api call

  return (
    <div>
      <SsPvdProfilesPage data={data?.data?.attributes} />
    </div>
  );
};

export default page;
