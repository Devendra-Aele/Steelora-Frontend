import { fadeAnimationHandler } from "@/utils/fadeAnimationHandler";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images }: { images: string[] }) => {
  // console.log(images);

  return (
    <Carousel
      // animationHandler={fadeAnimationHandler}
      autoPlay
      infiniteLoop
      transitionTime={500}
      interval={1500}
      className="h-[50vh] w-[90vw] sm:h-[50vh] sm:w-[80vw] md:h-[70vh] md:w-[70vw] lg:h-[70vh] lg:w-[60vw]"
    >
      {images.map((item, index) => {
        return (
          <div
            key={index}
            className="h-[50vh] w-[90vw] sm:h-[50vh] sm:w-[90vw] md:h-[70vh] md:w-[70vw] lg:h-[70vh] lg:w-[50vw] mx-auto"
          >
            {/* <Image
              src={item}
              height={1000}
              width={1000}
              alt={item}
              className="h-full w-full object-fill"
            /> */}
            <img src={item} alt={item} className="h-full w-full object-fill" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;
