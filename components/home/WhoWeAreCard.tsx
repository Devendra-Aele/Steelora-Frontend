import Image from "next/image";
import React from "react";

type Props = {
  number: string;
  sign: string;
  content: string;
  index: number;
};

const WhoWeAreCard = (props: Props) => {
  return (
    <div className="w-[70%]  px-7 py-8 lg:p-14 xl:w-[30%] max-w-[258px] flex-1 xl:h-[250px] object-cover border-stroke flex flex-col justify-center items-center border ">
      <div className="font-RidleyGrotesk  text-[3.813rem] xl:text-[5.875rem] text-center text-stroke flex justify-center gap-3 items-baseline">
        <p>{props.number}</p>
        {props.sign && <p> {" " + props.sign}</p>}
      </div>

      <p
        className={`${
          props.index === 0 ? " w-[80%] " : " w-full "
        } mx-auto font-RidleyGrotesk  font-light text-sm lg:text-base lg:leading-7 text-center text-[#CACACA]`}
      >
        {props.content}
      </p>
    </div>
  );
};

export default WhoWeAreCard;
