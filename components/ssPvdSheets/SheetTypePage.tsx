import React from "react";
import "@/components/ssPvdSheets/sspvdStyles.css";
import SheetTypeDescription from "./SheetTypeDescription";
import { sspvdSheetTypes1, sspvdSheetTypes2 } from "@/constants/sspvdSheets";
import CategoriesList from "../categories/CategoriesList";
import { categoriesList } from "@/constants/categoriesList";
import MarqueSlider from "../reusables/MarqueSlider";
import { SSPVD_SHEET_TYPE_PAGE } from "@/types/sspv_sheets.types";

const SheetTypePage = ({
  type,
  typeData,
}: {
  type?: string;
  typeData: SSPVD_SHEET_TYPE_PAGE;
}) => {
  //FETCH DATA BASED ON TYPE AND PASS TO SECTION

  const data = [
    "/assets/projects/project1.webp",
    "/assets/projects/project2.png",
    "/assets/projects/project3.webp",
    "/assets/projects/project4.webp",
    "/assets/projects/project5.webp",
    "/assets/projects/project1.webp",
    "/assets/projects/project2.png",
    "/assets/projects/project3.webp",
    "/assets/projects/project4.webp",
    "/assets/projects/project5.webp",
    "/assets/projects/project1.webp",
    "/assets/projects/project2.png",
    "/assets/projects/project3.webp",
    "/assets/projects/project4.webp",
    "/assets/projects/project5.webp",
    "/assets/projects/project1.webp",
    "/assets/projects/project2.png",
    "/assets/projects/project3.webp",
    "/assets/projects/project4.webp",
    "/assets/projects/project5.webp",
    "/assets/projects/project1.webp",
    "/assets/projects/project2.png",
    "/assets/projects/project3.webp",
    "/assets/projects/project4.webp",
    "/assets/projects/project5.webp",
  ];

  return (
    <>
      <div className="h-[50vh] lg:h-[80vh] sspvd_sheets_hero"></div>

      <section className="section-x-padding section-y-padding">
        {/* {type === "water ripple" ? (
          <SheetTypeDescription data={sspvdSheetTypes1} />
        ) : (
          <SheetTypeDescription data={sspvdSheetTypes2} />
        )} */}
        <SheetTypeDescription data={typeData} />

        {/* SLIDER PENDING HERE */}
      </section>

      <MarqueSlider data={data} />

      <CategoriesList list={typeData.catogeries.data} />
    </>
  );
};

export default SheetTypePage;
