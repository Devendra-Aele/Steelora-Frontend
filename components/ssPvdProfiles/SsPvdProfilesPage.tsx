import React from "react";
import "./ssPvdProfiles.css";
import CategoriesList from "../categories/CategoriesList";
import { categoriesList } from "@/constants/categoriesList";
import MarqueSlider from "../reusables/MarqueSlider";
import { sliderData } from "@/constants/sliderImages";
import { SSPVD_PROFILES_PAGE } from "@/types/sspvdProfiles.types";

const SsPvdProfilesPage = ({ data }: { data: any }) => {
  // console.log(data);

  const sliderImages = data.imagesUrl.data.map(
    (item : any) => item.attributes.url
  );

  return (
    <>
      {/* <div className="h-[50vh] lg:h-[80vh] sspvd_profiles_hero"></div> */}
      <section className="section-y-padding mt-16 lg:mt-20">
        <MarqueSlider data={sliderImages} />
        <div className="bg-section-heading  py-10 lg:py-14">
          <h1 className="section-heading mb-2">{data?.title}</h1>
          <p className="para !text-center w-[96.102%]  md:w-[88%] lg:w-[70%] xl:w-[65%] mx-auto">
            {data?.description}
          </p>
        </div>
      </section>

      <CategoriesList list={data?.catogeries?.data} />
    </>
  );
};

export default SsPvdProfilesPage;
