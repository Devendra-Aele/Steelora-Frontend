import RequestSamplesPage from "@/components/requestSamples/RequestSamplesPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Request Samples | Steelora - Luxury Stainless Steel Railings & PVD Products",
  description: "Request samples of our premium stainless steel railings, PVD profiles, and sheets from Steelora. Experience the unmatched quality and craftsmanship of our products, backed by over 30 years of industry excellence under the Sunrise Group of Industries.",
  openGraph: {
    title: "Request Samples | Steelora - Luxury Stainless Steel Railings & PVD Products",
    description: "Request samples of our premium stainless steel railings, PVD profiles, and sheets from Steelora. Experience the unmatched quality and craftsmanship of our products, backed by over 30 years of industry excellence under the Sunrise Group of Industries.",
    images: [
      {
        url: "/assets/navbar/nav-logo.svg",
        width: 800,
        height: 600,
        alt: "Request Samples",
      },
    ],
  },
};

const page = () => {
  return (
    <div>
      <RequestSamplesPage />
    </div>
  );
};

export default page;
