import React from "react";
import WhoWeAreCard from "./WhoWeAreCard";
import Image from "next/image";

type Props = {};

const WhoWeAre = (props: Props) => {
  const data = [
    {
      id: 3,
      content: "Years in Industry",
      sign: "+",
      number: "10",
    },
    {
      id: 2,

      content: "Quality Control Process",
      sign: "",
      number: "6",
    },
    {
      id: 1,
      content: "Exported to Countries & Regions",
      sign: "+",
      number: "4",
    },
  ];
  return (
    <section className="  section-x-padding section-y-padding  ">
      <div className=" w-full   ">
        <h4>Who We Are</h4>
        <p className="home-para mt-2 w-[70%] mx-auto">
          Steelora is a canvas where ideas come to life in stainless steel.
          Drawing inspiration from the world around us, we craft bespoke
          solutions that elevate spaces to new heights of sophistication. With a
          passion for innovation and a dedication to excellence, we invite you
          to explore the endless possibilities of stainless steel with us.
        </p>
        <div className="w-full mx-auto    mt-8 ">
          <Image
            alt="img"
            src={"/assets/home/whoWeAre.png"}
            width={1400}
            height={500}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
