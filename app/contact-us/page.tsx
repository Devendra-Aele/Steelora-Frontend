import ContactUsPage from "@/components/contactUs/ContactUsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://wip.steelora.com/"),
  title: "Contact Us | Steelora - Luxury Stainless Steel Railings & PVD Products",

  description:
    "Get in touch with Steelora – the epitome of luxury stainless steel craftsmanship. Reach out to our expert team for inquiries, collaborations, or any assistance. Discover the essence of excellence through our contact page.",

  openGraph: {
    title: "Contact Us | Steelora - Luxury Stainless Steel Railings & PVD Products",
    description:
      "Get in touch with Steelora – the epitome of luxury stainless steel craftsmanship. Reach out to our expert team for inquiries, collaborations, or any assistance. Discover the essence of excellence through our contact page.",
    images: [
      {
        url: "/assets/navbar/nav-logo.svg",
        width: 800,
        height: 600,
        alt: "Steelora",
      },
    ],
  },
};

const page = () => {
  return (
    <>
      <ContactUsPage />
    </>
  );
};

export default page;
