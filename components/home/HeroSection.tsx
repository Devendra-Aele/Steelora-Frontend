"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./home.css";
import { weServe } from "@/public/assets/home";
import Link from "next/link";

type Props = {};

function HeroSection({}: Props) {
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  const data = [
    {
      id: 1,
      images: [
        weServe.slider1a,
        weServe.slider1b,
        weServe.slider1c,
        weServe.slider1d,
      ],
      link: "/railings",
    },
    {
      id: 2,
      images: [
        weServe.slider2a,
        weServe.slider2b,
        weServe.slider2c,
        weServe.slider2d,
      ],
      link: "/stainless-steel-pvd-profiles",
    },
    {
      id: 3,
      images: [
        weServe.slider2a,
        weServe.slider2b,
        weServe.slider2c,
        weServe.slider2d,
      ],
      link: "/stainless-steel-pvd-sheets",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [data.length]);
  return (
    <header className="section-x-padding section-y-padding md:mt-16 lg:mt-24">
      <div className="flex flex-row max-[1100px]:flex-col items-center justify-center gap-7 lg:gap-12 xl:gap-24">
        <div className="flex flex-col order-2 min-[1150px]:order-1">
          <h2 className="text-primary-text font-Montserrat font-normal text-lg lg:text-xl">
            In Steel We Trust
          </h2>
          <h3 className="font-RidleyGrotesk font-semibold text-primary-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.1] mb-3 lg:mb-6">
            Discover the Strength of Steel with Steelora
          </h3>
          <p className="text-para-text leading-8 mb-5 lg:mb-10">
            Discover now how our premium railings seamlessly fuse style,
            utility, and resilience, setting the standard for modern design and
            safety. Explore our range to find the perfect complement for your
            space, whether it's a sleek aluminium solution or a timeless
            stainless steel masterpiece.
          </p>

          <div className="inline">
            <Link href={data[sliderIndex].link}>
              <button className="primary-button">Discover Now</button>
            </Link>
          </div>
        </div>

        <div className="flex-grow order-1 min-[1100px]:order-2 ">
          <div className="flex gap-3 lg:gap-7">
            <div className="flex flex-col gap-7">
              <div className="clippedDiv h-[8.5rem] w-[8.5rem] md:h-[10.5rem] md:w-[10.5rem] lg:h-[15rem] lg:w-[15rem] xl:h-[19.8rem] xl:w-[19.8rem]">
                <Image
                  src={data[sliderIndex].images[0]}
                  height={300}
                  width={300}
                  className="h-full w-full "
                  alt=""
                />
              </div>
              <div className="clippedDiv h-[8.5rem] w-[8.5rem] md:h-[10.5rem] md:w-[10.5rem] lg:h-[15rem] lg:w-[15rem] xl:h-[19.8rem] xl:w-[19.8rem]">
                {" "}
                <Image
                  src={data[sliderIndex].images[1]}
                  height={300}
                  width={300}
                  className="h-full w-full"
                  alt=""
                />
              </div>
            </div>

            <div className=" flex flex-col gap-7 mt-10">
              <div className="clippedDiv h-[8.5rem] w-[8.5rem] md:h-[10.5rem] md:w-[10.5rem] lg:h-[15rem] lg:w-[15rem] xl:h-[19.8rem] xl:w-[19.8rem]">
                {" "}
                <Image
                  src={data[sliderIndex].images[2]}
                  height={300}
                  width={300}
                  className="h-full w-full"
                  alt=""
                />
              </div>
              <div className="clippedDiv h-[8.5rem] w-[8.5rem] md:h-[10.5rem] md:w-[10.5rem] lg:h-[15rem] lg:w-[15rem] xl:h-[19.8rem] xl:w-[19.8rem]">
                <Image
                  src={data[sliderIndex].images[3]}
                  height={300}
                  width={300}
                  className="h-full w-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center z-20 gap-2">
        {data.map((slide, index) => (
          <div
            key={index}
            className={`${
              sliderIndex !== index
                ? " bg-gray-500  w-2 "
                : "bg-primary-text w-6 "
            }  h-2 rounded-full cursor-pointer`}
            onClick={() => setSliderIndex(index)}
          ></div>
        ))}
      </div>
    </header>
  );
}

export default HeroSection;
