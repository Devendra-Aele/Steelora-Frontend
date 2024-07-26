"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fadeAnimationHandler } from "@/utils/fadeAnimationHandler";

const HeroCarousel = ({
  data,
}: {
  data: { link: string; image: string }[];
}) => {
  return (
    <div className="mt-16 lg:mt-24">
      <Carousel
        autoPlay
        infiniteLoop
        transitionTime={500}
        interval={5000}
        showThumbs={false}
        stopOnHover={false}
        animationHandler={fadeAnimationHandler}
      >
        {data.map((item, index) => {
          return (
            <Link href={item.link} key={item.link}>
              <div className="h-full">
                <Image
                  src={item.image}
                  alt={item.link}
                  width={1220}
                  height={388}
                  className="w-full h-full"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
