import React from "react";
import MarqueSlider from "../reusables/MarqueSlider";
import AluminiumRailingSecondSection from "../railings/AluminiumRailingSecondSection";
import PageHeadingWithImage from "../pageHeading/PageHeadingImage";
import CategoriesList from "./CategoriesList";

const CategoryPage = ({ data }: { data: any }) => {
  const sliderImage: string[] = data.data[0]?.attributes?.imagesUrl?.data?.map(
    (image: any) => image?.attributes?.url ?? ""
  );

  const headingData = {
    name: data.data[0]?.attributes?.title,
    description: data.data[0]?.attributes?.description,
    image: "",
    // typeData.data.attributes.titleImageurl.data.attributes.formats?.thumbnail
    //   .url,
  };

  const categoriesList = data?.data[0]?.attributes?.catogeries?.data;

  return (
    <>
      {sliderImage?.length > 0 && (
        <div className="section-y-padding pt-16 md:pt-20  lg:pt-32 xl:pt-36">
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

export default CategoryPage;
