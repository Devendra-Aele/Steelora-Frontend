import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  describe: string;
  image: string;
  linkedin: string;
  instagram: string;
  isImageRight: boolean;
  designation: string;
};

function FounderCard(Props: Props) {
  return (
    <div className=" section-x-padding w-full  flex flex-col lg:flex-row justify-between items-center gap-5 max-width ">
      <div className="left-section flex flex-col justify-between items-start lg:w-[46%]">
        <h5 className="font-RidleyGrotesk  text-primary-text capitalize font-light text-3xl lg:text-[32px] leading-7">
          {Props.title}
        </h5>
        <p className="font-RidleyGrotesk  text-primary-text capitalize font-light text-xl leading-7">
          ({Props.designation})
        </p>
        <p className="font-Montserrat ont-light text-sm lg:text-lg leading-5 lg:leading-7 text-secondary-500 mt-2 text-left">
          {Props.describe}
        </p>
        <div className="flex justify-start items-center gap-1 mt-6">
          {Props.linkedin && (
            <Link href={Props.linkedin} target="_blank">
              <Image
                src="/assets/social/linkedinIcon.svg"
                width={36}
                height={36}
                alt="linkedin-icon"
              />
            </Link>
          )}
          {Props.instagram && (
            <Link href={Props.instagram} target="_blank">
              <Image
                src="/assets/social/instaIcon.svg"
                width={36}
                height={36}
                alt="instagram"
              />
            </Link>
          )}
        </div>
      </div>
      <div
        className={`right-section order-first ${
          Props.isImageRight ? "lg:order-last " : "lg:order-first "
        } w-[22.5rem] lg:w-[30.125rem] h-[22.5rem] lg:h-[30.125rem] object-center object-cover border-[1px] border-white`}
      >
        <Image
          src={Props.image || "/assets/navbar/hero-img2.jpeg"}
          alt="hero-img"
          className="w-full h-full"
          width={482}
          height={482}
        />
      </div>
    </div>
  );
}

export default FounderCard;
