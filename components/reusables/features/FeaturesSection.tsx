import React, { FC } from "react";
import FeaturesMobile from "./FeaturesMobile";
import FeaturesDesktop from "./FeaturesDesktop";

export interface Product {
  name: string;
  features: {
    featureName: string;
    desc: string;
  }[];
}

type PROPS = {
  data: Product[];
  description: string;
};

const FeaturesSection: FC<PROPS> = (props) => {
  const { data, description } = props;

  return (
    <>
      <section className="section-x-padding section-y-padding bg-white-500">
        <h2 className="section-heading">
          Aluminium Railings Vs Stainless Steel Railings
        </h2>

        {/* <p className="category_desc text-center w-[96.102%]  md:w-[88%] lg:w-[70%] xl:w-[65%] mx-auto mb-5 lg:mb-14">
          {description}
        </p> */}

        <FeaturesDesktop data={data} />

        <FeaturesMobile data={data} />
      </section>
    </>
  );
};

export default FeaturesSection;
