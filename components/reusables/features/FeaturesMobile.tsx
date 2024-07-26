import React, { FC, Fragment } from "react";
import { Product } from "./FeaturesSection";

type PROPS = {
  data: Product[];
};

const FeaturesMobile: FC<PROPS> = (props) => {
  const { data } = props;

  return (
    <div className="block lg:hidden relative text-para-text">
      {data.map((item, index) => {
        return (
          <div className="py-5" key={index}>
            <h2 className="font-RidleyGrotesk text-primary-text font-medium text-lg mb-5 text-center">
              {item.name}
            </h2>

            <div className="border-b border-black"></div>

            <div className="grid grid-cols-2 ">
              {item.features.map((feat, index) => {
                return (
                  <Fragment key={index}>
                    <p className="para border-r border-black py-6">
                      {feat.featureName}
                    </p>
                    <p className="para !text-xs py-6 pl-5">{feat.desc}</p>
                  </Fragment>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesMobile;
