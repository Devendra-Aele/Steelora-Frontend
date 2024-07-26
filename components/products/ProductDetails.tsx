"use client";

import React, { useState } from "react";
import "./products.css";
import Image from "next/image";
import OutlinedButton from "../reusables/OutlinedButton";
import Link from "next/link";
import Modal from "../reusables/Modal";
import ImageCarousel from "../reusables/Carousel";

const ProductDetails = ({ details }: { details: any }) => {
  console.log("*************** details", details);
  const [isCarouselOpen, setIsCarouselOpen] = useState<boolean>(false);
  const [initialImage, setInitialImage] = useState(details?.images[0]);

  const handleModalOpen = () => {
    setIsCarouselOpen(true);
  };
  

  const handleModalClose = () => {
    setIsCarouselOpen(false);
  };
  console.log(details.images);

  return (
    <div>
      {/* <div
        className="h-[50vh] lg:h-[80vh] product_details_hero"
        style={{
          backgroundImage: `url(${details.bgImg})`,
        }}
      ></div> */}
      <section className="mt-16 lg:mt-24">
        <div className="bg-section-heading  py-10 lg:py-14">
          <h1 className="section-heading ">{details.type}</h1>
        </div>
        <div className="section-x-padding section-y-padding ">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-6 lg:gap-12 mb-4">
            <div className="flex flex-col gap-4 justify-center">
              <div className="h-[22rem] w-[22rem] lg:h-[32rem] lg:w-[32rem]">
                {/* <Image
                  src={initialImage}
                  alt={details.name}
                  height={200}
                  width={200}
                  className="h-full w-full object-fill border border-white"
                /> */}
                <img src={initialImage} alt={details.name} className="h-full w-full object-fill border border-white" />
              </div>
              <div className="flex gap-5">
                {details.images
                  .slice(0, 4)
                  .map((item: string, index: number) => {
                    if (index === 3) {
                      return (
                        <div
                          onClick={handleModalOpen}
                          key={index}
                          className="relative h-[4.6rem] w-[4.6rem] lg:h-28 lg:w-28 border border-white cursor-pointer"
                        >
                          {/* <Image
                            src={item}
                            height={100}
                            width={100}
                            alt={item}
                            className="h-full w-full object-cover border border-white"
                          /> */}
                          <img src={item} alt={item} className="h-full w-full object-cover border border-white" />
                          {details.images.length > 4 && (
                            <div className="absolute flex justify-center items-center inset-0 bg-black bg-opacity-70 text-lg text-white font-Montserrat font-medium">
                              +8
                            </div>
                          )}
                        </div>
                      );
                    }
                    return (
                      <div
                        key={index}
                        className="h-[4.6rem] w-[4.6rem] lg:h-28 lg:w-28 cursor-pointer"
                        onClick={() => setInitialImage(item)}
                      >
                        {/* <Image
                          src={item}
                          height={100}
                          width={100}
                          alt={item}
                          className="h-full w-full object-cover"
                        /> */}
                        <img src={item} alt={item} className="h-full w-full object-cover" />
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="flex flex-col flex-grow gap-3 self-center lg:self-start">
              <h3 className="sub_heading2 text-center lg:text-left">
                {details.productName}
              </h3>
              <p className="para lg:mb-4">{details.description}</p>
              <p className="para lg:mb-8">{details.seoField}</p>

              <div className="mb-5">
                {details.isTable ? (
                  <div className="w-full flex justify-center lg:block">
                    <table className="text-para-text  border-collapse w-full lg:w-[90%]">
                      <tbody>
                        {Object.entries(details.detailsTable).map(
                          ([key, value]) => (
                            <tr key={key}>
                              <th className="w-1/2 py-2  border border-primary-text uppercase font-Poppins font-normal  text-xs md:text-base text-center">
                                {key} {}
                              </th>
                              <td className="w-1/2 py-2  border border-primary-text   text-center text-xs md:text-base">
                                {`${value}`}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <ul className="list-disc text-sub-heading-white">
                    {Object.entries(details.detailsTable).map(
                      ([key, value]) => (
                        <li
                          key={key}
                          className="text-xs text-black sm:text-sm md:text-base leading-6 md:leading-9 ml-4 font-bold"

                          // className="text-xs text-black  sm:text-sm md:text-base leading-6 md:leading-9 ml-4"
                        >
                          {`${value}`}
                        </li>
                      )
                    )}

                    {/* {details.detailsTable.map((item: string, index: number) => {
                      return (
                        <li
                          key={index}
                          className="text-xs sm:text-sm md:text-base leading-6 md:leading-9 ml-4"
                        >
                          {item}
                        </li>
                      );
                    })} */}
                  </ul>
                )}
              </div>

              <div className="hidden lg:flex lg:gap-7">
                {/* {details.isCustomizable ? (
                  <button type="button" className="primary-button">
                    Customization
                  </button>
                ) : null} */}
                <Link className="" href={`/request-samples/${details.id}`}>
                  {/* <OutlinedButton type="button">Request Samples</OutlinedButton> */}
                  <button type="button" className="primary-button">
                    Request Samples
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:hidden flex flex-col items-center">
            <Link className="" href={`/request-samples/${details.id}`}>
              <OutlinedButton type="button">Request Samples</OutlinedButton>
            </Link>

            {/* {details.isCustomizable ? (
              <button type="submit" className="primary-button !w-[180px]">
                Customization
              </button>
            ) : null} */}
          </div>
        </div>
      </section>

      <Modal isOpen={isCarouselOpen} close={handleModalClose}>
        <div className="w-full h-full flex justify-center items-center">
          <ImageCarousel
            images={details.images.filter(
              (item: string) => item != null || item !== undefined
            )}
          />
        </div>
      </Modal>
      {/* <ImageCarousel images={details.images} /> */}
    </div>
  );
};

export default ProductDetails;
