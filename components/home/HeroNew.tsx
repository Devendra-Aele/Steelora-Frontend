import React from "react";

import HeroCarousel from "../reusables/HeroCarousel";

const HeroNew = () => {
  const data = [
    {
      link: "/stainless-steel-pvd-sheets/water-ripple-series",
      image: `/assets/home/homeHeroBanner1.png`,
    },
    {
      link: "/stainless-steel-pvd-profiles",
      image: `/assets/home/homeHeroBanner2.png`,
    },
    {
      link: "/railings",
      image: `/assets/home/homeHeroBanner3.webp`,
    },
  ];

  return (
    <section className="">
      <HeroCarousel data={data} />
    </section>
  );
};
export default HeroNew;
