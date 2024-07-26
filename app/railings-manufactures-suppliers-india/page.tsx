import RailingsPage from "@/components/railings/RailingsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Railings - Premium Aluminium, and Stainless Steel Railings",

  description:
    "Elevate your space with Steelora's expertly crafted aluminium and stainless steel railings. Durable, safe, and aesthetically pleasing for any setting.",

  openGraph: {
    title: "Railings - Premium Aluminium, and Stainless Steel Railings",

    description:
      "Elevate your space with Steelora's expertly crafted aluminium and stainless steel railings. Durable, safe, and aesthetically pleasing for any setting.",

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

const page = () => {
  return (
    <div>
      <RailingsPage />
    </div>
  );
};

export default page;
