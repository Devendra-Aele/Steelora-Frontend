import HeroNew from "@/components/home/HeroNew";
import InfoSection from "@/components/home/InfoSection";
import OurApplication from "@/components/home/OurApplication";
import OurClient from "@/components/home/OurClient";
import ProductsSection from "@/components/home/ProductsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Manufacturer and Supplier of Stainless Steel Railings, Aluminum Railings, Stainless Steel PVD Sheets, Stainless Steel PVD Profiles, Stainless Steel Decorative Mesh and Facade | Steelora",

  description:
    "A Premiunt Manufacturer and Supplier of high-quality stainless steel railings, aluminum railings, PVD sheets, profiles, decorative mesh, and facade solutions | Steelora",

  openGraph: {
    title:
      "Manufacturer and Supplier of Stainless Steel Railings, Aluminum Railings, Stainless Steel PVD Sheets, Stainless Steel PVD Profiles, Stainless Steel Decorative Mesh and Facade | Steelora",

    description:
      "A Premiunt Manufacturer and Supplier of high-quality stainless steel railings, aluminum railings, PVD sheets, profiles, decorative mesh, and facade solutions | Steelora",
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
export default function Home() {
  return (
    <main className="">
      <HeroNew />
      <InfoSection />
      <ProductsSection />
      <OurApplication />
      <OurClient />
    </main>
  );
}
