import RequestSamplesPage from "@/components/requestSamples/RequestSamplesPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Steelora | Request Samples",
  description: "Request Samples",
  openGraph: {
    title: "Steelora | Request Samples",
    description: "Request Samples",
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

const page = async ({ params }: { params: { id: number } }) => {
  const { id } = params;

  return (
    <div>
      <RequestSamplesPage productId={id} />
    </div>
  );
};

export default page;
