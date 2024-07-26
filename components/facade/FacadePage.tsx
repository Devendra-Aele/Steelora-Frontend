import React from "react";
import "./facade.css";
import CategoriesList from "../categories/CategoriesList";
import MarqueSlider from "../reusables/MarqueSlider";

import { FACADE_PAGE } from "@/types/facade.types";

const FacadePage = ({ data }: { data: FACADE_PAGE }) => {

  const sliderImage: string[] = data.imagesUrl.data.map(
    (image:any) => image.attributes.formats?.thumbnail?.url ?? ""
  );
  return (
    <>
      {/* <div className="h-[50vh] lg:h-[80vh] facade_hero"></div> */}
      {/* console.log("************************************ **********************",data); */}
      <section className="section-y-padding mt-16 lg:mt-20">
        <MarqueSlider data={sliderImage} />
        <div className="bg-section-heading  py-10 lg:py-14">
          <h1 className="section-heading mb-2">{data.title}</h1>
          <p className="para !text-center w-[96.102%]  md:w-[88%] lg:w-[70%] xl:w-[58%] mx-auto">
            {data.description}
          </p>
        </div>
      </section>

      <CategoriesList list={data.catogeries.data} />
    </>
  );
};

export default FacadePage;
