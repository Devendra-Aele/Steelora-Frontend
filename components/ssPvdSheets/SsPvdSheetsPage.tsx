import React from "react";
import "./sspvdStyles.css";
import SsPvdSheetsSection from "./SsPvdSheetsSection";
import {
  SSPVD_SHEET_PAGE,
  SSPVD_SHEET_TYPE_PAGE,
} from "@/types/sspv_sheets.types";
import HeroCarousel from "../reusables/HeroCarousel";

const SsPvdSheetsPage = ({ data }: { data: SSPVD_SHEET_PAGE }) => {
  const sliderData = [
    {
      link: "/stainless-steel-pvd-sheets/stainless-steel-plain-sheets",
      image: `/assets/ssPvdSheets/sspvdHero1.png`,
    },
    {
      link: "/stainless-steel-pvd-sheets/water-ripple-series",
      image: `/assets/ssPvdSheets/sspvdHero2.png`,
    },
  ];

  return (
    <>
      {/* <div className="h-[50vh] lg:h-[80vh] sspvd_sheets_hero"></div> */}
      <HeroCarousel data={sliderData} />
      <SsPvdSheetsSection data={data} />
    </>
  );
};
export default SsPvdSheetsPage;
