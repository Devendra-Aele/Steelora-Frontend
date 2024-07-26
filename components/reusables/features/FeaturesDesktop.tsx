"use client";
import React, { FC, useEffect, useState } from "react";
import { Product } from "./FeaturesSection";

type PROPS = {
  data: Product[];
};

const FeaturesDesktop: FC<PROPS> = (props) => {
  const { data } = props;
  // console.log(data);
  // State to store the height of the parent div
  const [parentHeight, setParentHeight] = useState(0);

  // Effect to update the parent height state whenever the component mounts or updates
  useEffect(() => {
    const parentDiv = document.getElementById("parentDiv");
    if (parentDiv) {
      setParentHeight(parentDiv.clientHeight);
    }
  }, [data]);

  return (
    <div
      className=" hidden lg:block relative w-full my-9  text-para-text"
      id="parentDiv"
    >
      <div className="flex items-center justify-between ">
        {data.map((item) => (
          <div
            key={item.name}
            className="text-primary-text w-[30%] text-center flex justify-center items-center font-RidleyGrotesk  font-medium text-2xl leading-8 "
          >
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      {/* <hr className="w-full p-0 border-b border-black mt-8 " /> */}
      <hr
        className=" rotate-90 w-full h-[1px] z-[0] absolute inset-0 top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2  border-black border-r"
        style={{ width: `${parentHeight}px ` }}
      />
      <div className="w-full flex flex-col justify-between items-center gap-[5.875rem] pt-[5.5rem] pb-7 border-t border-black mt-8 ">
        {data[0]?.features.map((item, index) => (
          <div className="w-full flex justify-between items-center" key={index}>
            <p className="w-[30%] text-center font-Montserrat text-base leading-6">
              {item.desc}
            </p>
            <div className="w-[30%] relative  py-2 flex justify-center items-center ">
              <p className=" font-RidleyGrotesk  z-[2] px-2 bg-white text-3xl text-primary-text leading-10">
                {item.featureName}
              </p>
              <hr className="w-[70%] mx-auto h-[0.5px] z-[1] border-r border-black absolute inset-0  top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>

            <p className=" w-[30%] text-center font-Montserrat text-base leading-6">
              {data[1].features[index].desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesDesktop;
