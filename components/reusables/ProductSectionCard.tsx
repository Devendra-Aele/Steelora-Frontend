import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  navigationLinks: string;
  imageSrc: string;
  isImageOnRight: boolean;
};

function ProductSectionCard(data: Props) {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-center ">
      <div
        className={`w-full lg:w-[50%]   ${
          data.isImageOnRight && " lg:order-last "
        }   `}
      >
        <div className="w-full h-[400px] lg:h-[778px] border-white border-[1px]  object-cover ">
          <Image
            src={data.imageSrc}
            alt="product-img"
            width={720}
            height={778}
            className="w-full h-full object-cover "
          />
        </div>
      </div>
      <div className="flex flex-col justify-between items-start lg:w-[50%]  gap-3 p-4 md:p-12 lg:p-20">
        <p className="font-RidleyGrotesk  font-medium text-2xl lg:text-3xl leading-7 lg:leading-10 text-primary-text capitalize">
          {data.title}
        </p>
        <p className="font-Montserrat font-normal text-sm lg:text-lg  leading-5 lg:leading-7 gap-3 lg:gap-6 text-black-400">
          {data.description}
        </p>
        <Link href={data.navigationLinks} className="primary-button lg:mt-3">
          {data.buttonText}
        </Link>
      </div>
    </div>
  );
}

export default ProductSectionCard;
