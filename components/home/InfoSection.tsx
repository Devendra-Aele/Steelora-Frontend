import React from "react";

type Props = {};

const InfoSection = (props: Props) => {
  return (
    <section className=" section-y-padding section-x-padding ">
      <div className="w-[100%] lg:w-[80%] bg-white mx-auto border-gradient px-4 py-14 lg:py-16 lg:px-44 flex flex-col justify-between items-center gap-8 rounded-lg">
        <h1 className="h3 whitespace-nowrap !text-primary-text xl:!text-[5.37rem] lg:!text-[4rem]">
          Let Ideas Meet Steel
        </h1>
        <p className="para text-justify">
          Sunrise Group stands as India’s 2nd largest stainless-steel mill. It
          has indeed been successful in living up to its vision of “Initiating a
          new era of Stainless Steel” with the launch of Steelora. Steelora
          specializes in three core sectors:Architecture, Building and
          Construction. Steelora has been catering to India’s biggest
          construction house and builders along with the government projects. As
          India's largest railing company we offer stainless steel and aluminium
          railings systems. In the architecture and interior segment, Steelora
          manufactures SS PVD sheets & profiles, SS mesh, and metal cladding. At
          Steelora, our commitment to quality extends to our state-of-the-art,
          in-house manufacturing unit equipped with the latest machinery. Here,
          we handle all fabrication processes, including laser cutting, bending,
          V-grooving, and more.
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
