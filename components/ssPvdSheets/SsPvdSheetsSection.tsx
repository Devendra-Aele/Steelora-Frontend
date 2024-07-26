import { projectAssets } from "@/public/assets/projects";
import Image from "next/image";
import React from "react";
import "./sspvdStyles.css";
import FeaturesSection from "../reusables/features/FeaturesSection";
import { featuresData } from "@/constants/featuresData";
import Link from "next/link";
import {
  SSPVD_SHEET_PAGE,
  SSPVD_SHEET_TYPE_PAGE,
} from "@/types/sspv_sheets.types";

const SsPvdSheetsSection = ({ data }: { data: any }) => {
  console.log("this is data===>",data);
  
  const { title, description, product_types } = data;

  return (
    <div>
      <section>
        {/* HEADING START */}
        <div className="bg-section-heading  py-10 lg:py-14">
          <h1 className="section-heading mb-2">{title}</h1>
          <p className="para !text-center w-[96.102%]  md:w-[88%] lg:w-[70%] xl:w-[60%] mx-auto">
            {description}
          </p>
        </div>
        {/* HEADING END */}

        <div className="section-y-padding section-x-padding">
          {/* 1ST SECTION */}
          <div className="flex flex-col lg:flex-row  gap-6 lg:gap-16 xl:gap-28 items-center justify-between mb-14">
            <div className="flex flex-col gap-3 order-2 lg:order-1">
              <h2 className="sub_heading2">
                {product_types.data[0]?.attributes.title}
              </h2>
              <p className="para">
                {product_types.data[0].attributes.description}
              </p>

              <div className="inline-block">
                <Link href={`/stainless-steel-pvd-sheets/water-ripple-series`}>
                  <button className="primary-button">Explore Products</button>
                </Link>
              </div>
            </div>
            <div className="h-[22.37rem] w-[22.37rem] lg:w-[30rem] lg:h-[30rem] order-1 lg:order-2 flex-shrink-0">
              <Image
                src={
                  product_types.data[0]?.attributes.titleImageurl.data
                    .attributes?.url
                }
                width={350}
                height={450}
                alt="SS PVD Plain Sheets"
                className="w-full h-full object-cover border border-white"
              />
            </div>
          </div>
          {/* 1ST SECTION END */}

          {/* 2ND SECTION */}
          <div className="flex flex-col lg:flex-row  gap-6 lg:gap-16 xl:gap-28 items-center justify-between">
            <div className="h-[22.37rem] w-[22.37rem] lg:w-[30rem] lg:h-[30rem] flex-shrink-0">
              <Image
                src={
                  product_types.data[1]?.attributes.titleImageurl.data
                    .attributes?.url
                }
                width={350}
                height={450}
                alt="SSPVD Water Ripple Series"
                className="w-full h-full object-cover border border-white"
              />
            </div>

            <div>
              <h2 className="sub_heading2 mb-3">
                {product_types.data[1]?.attributes.title}
              </h2>
              <p className="para mb-4">
                {product_types.data[1]?.attributes.description}
              </p>
              <div className="inline-block">
                <Link
                  href={`/stainless-steel-pvd-sheets/stainless-steel-plain-sheets`}
                >
                  <button className="primary-button">Explore Products</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <FeaturesSection
        data={featuresData}
        description="Explore our range of Water Ripple and Stainless Steel Plain Sheets to find the perfect solution for your project. Contact us for more information or to request a quote."
      /> */}
    </div>
  );
};

export default SsPvdSheetsSection;
