import ProjectsPage from "@/components/projects/ProjectsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Projects | Steelora - Luxury Stainless Steel Railings & PVD Products",
  description: "Explore Steelora’s diverse portfolio of projects showcasing our premium stainless steel railings, PVD profiles, and sheets. As part of the renowned Sunrise Group of Industries, we bring over 30 years of excellence in quality and craftsmanship to every project.",
  openGraph: {
    title: "Our Projects | Steelora - Luxury Stainless Steel Railings & PVD Products",
    description: "Explore Steelora’s diverse portfolio of projects showcasing our premium stainless steel railings, PVD profiles, and sheets. As part of the renowned Sunrise Group of Industries, we bring over 30 years of excellence in quality and craftsmanship to every project.",
    images: [
      {
        url: "/assets/navbar/nav-logo.svg",
        width: 800,
        height: 600,
        alt: "Projects",
      },
    ],
  },
};

const page = () => {
  return (
    <>
      <ProjectsPage />
    </>
  );
};

export default page;
