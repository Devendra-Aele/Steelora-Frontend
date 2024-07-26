import CoreTeam from "@/components/aboutUs/CoreTeam";
import Founder from "@/components/aboutUs/Founder";
import HeroSection from "@/components/aboutUs/HeroSection";
import WhoWeAre from "@/components/home/WhoWeAre";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title:
    "Crafting Premium Stainless Steel & Aluminum Railings, Stainless Steel PVD Sheets, Stainless Steel PVD Profiles, Stainless Steel Decorative Mesh and Facade",

  description:
    "Learn about Steelora, a leading manufacturer of stainless steel and aluminum railings, Stainless Steel PVD sheets, decorative mesh, and facade solutions. Discover our commitment to quality and innovation.",

  openGraph: {
    title:
      "Crafting Premium Stainless Steel & Aluminum Railings, Stainless Steel PVD Sheets, Stainless Steel PVD Profiles, Stainless Steel Decorative Mesh and Facade",

    description:
      "Learn about Steelora, a leading manufacturer of stainless steel and aluminum railings, Stainless Steel PVD sheets, decorative mesh, and facade solutions. Discover our commitment to quality and innovation.",

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

function page({}: Props) {
  return (
    <section className="about-us-main-page ">
      <HeroSection />
      <Founder />
      <WhoWeAre />
      {/* <CoreTeam /> */}
    </section>
  );
}

export default page;
