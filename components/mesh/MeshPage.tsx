import React from "react";
import "./mesh.css";
import CategoriesList from "../categories/CategoriesList";
import { categoriesList } from "@/constants/categoriesList";
import MarqueSlider from "../reusables/MarqueSlider";
import { sliderData } from "@/constants/sliderImages";
import { MESH_PAGE } from "@/types/mesh.types";

const MeshPage = ({ data }: { data: MESH_PAGE }) => {
const sliderImage: string[] = data?.imagesUrl?.data?.map(
    (image:any) => image?.attributes?.formats?.thumbnail?.url ?? ""
  );

  return (
    <>
      {/* <div className="h-[50vh] lg:h-[80vh] mesh_hero"></div> */}
      <section className="section-y-padding mt-16 lg:mt-20">
        <MarqueSlider data={sliderImage} />
        <div className="bg-section-heading  py-10 lg:py-14">
          <h1 className="section-heading mb-2">{data?.title}</h1>
          <p className="para !text-center w-[96.102%]  md:w-[88%] lg:w-[70%] xl:w-[65%] mx-auto">
            {data?.description}
          </p>
        </div>
      </section>

      <CategoriesList list={data?.catogeries.data} />
    </>
  );
};

export default MeshPage;
