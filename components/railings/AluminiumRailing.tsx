import React from "react";
import HeroSection from "../home/HeroSection";
import "@/components/ssPvdSheets/sspvdStyles.css";
import CategoriesList from "../categories/CategoriesList";
// import { categoriesList } from "@/constants/categoriesList";
import AluminiumRailingSecondSection from "./AluminiumRailingSecondSection";
import PageHeadingWithImage from "../pageHeading/PageHeadingImage";
import { aluminiumRailingHeading } from "@/constants/aluminiumRailing";
import MarqueSlider from "../reusables/MarqueSlider";
import { RailingApiResponse } from "@/types/railing.types";

const AluminiumRailingsPage = ({
  type,
  typeData,
}: {
  type?: string;
  typeData: RailingApiResponse;
}) => {
  const data = [
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
    "/assets/projects/project2.png",
  ];

  const headingData = {
    name: typeData.data.attributes.title,
    description: typeData.data.attributes.description,
    image: "",
    // typeData.data.attributes.titleImageurl.data.attributes.formats?.thumbnail
    //   .url,
  };
  const sliderImage: string[] = typeData.data.attributes.imagesUrl.data.map(
    (image) => image.attributes?.url ?? ""
  );

  const categoriesList = typeData.data.attributes.catogeries.data;
  return (
    <>
      {sliderImage.length > 0 && (
        <div className=" pt-16 md:pt-20  lg:pt-32 xl:pt-36">
          <MarqueSlider data={sliderImage} />
        </div>
      )}
      {/* <div className="h-[50vh] lg:h-[80vh] sspvd_sheets_hero"></div> */}
      {headingData.name === "Aluminium Railings" ? (
        <AluminiumRailingSecondSection />
      ) : null}
      <PageHeadingWithImage data={headingData} imageOrder={2} />
      <CategoriesList list={categoriesList} />
    </>
  );
};
export default AluminiumRailingsPage;
