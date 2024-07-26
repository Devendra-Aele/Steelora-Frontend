import React from "react";
import "./railings.css";
import RailingsSection from "./RailingsSection";

import HeroCarousel from "../reusables/HeroCarousel";

const RailingsPage = () => {
  const data = [
    {
      link: "/railings-manufactures-suppliers-india/aluminium-railings",
      image: `/assets/railings/railingsBanner1.png`,
    },
    {
      link: "/railings-manufactures-suppliers-india/stainless-steel-aluminium-railings",
      image: `/assets/railings/railingsBanner2.png`,
    },
  ];

  return (
    <>
      {/* <div className="h-[50vh] lg:h-[80vh] railings_hero "></div> */}
      <HeroCarousel data={data} />
      <RailingsSection />
    </>
  );
};
export default RailingsPage;
