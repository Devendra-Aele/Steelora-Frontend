import Image from "next/image";
import React from "react";

type Props = {};

function HeroSection({}: Props) {
  return (
    <>
      <div className="relative w-screen h-[50vh] md:h-auto xl:pb-10">
        <Image
          src={"/assets/navbar/about-us-banner.jpeg"}
          alt="hero-img"
          className="w-full h-full"
          width={1440}
          height={1000}
        />
        <div className="absolute inset-0 hero-section-gradient"></div>
        <div className="absolute section-x-padding inset-0 transform w-full left-1/2 top-[42%] xl:top-[53%] 2xl:top-[55%] -translate-x-1/2 -translate-y-1/2 z-[10]  sm:space-y-2">
          <h1 className="hero-section-title">Our Story</h1>
          <p className="home-para">
            Steelora is the newest entrant in the luxury market backbone by the
            pioneer of stainless steel production. With adopting experience, in
            parting skills and manufacturing excellence- these describe Steelora
            and its existence best. Pioneer in the stainless-steel industry we
            are the renowned name under the Sunrise Group of Industries which is
            leading the stainless-steel world in the past 30 years. Transcend in
            quality, commitments, and pricing, we are recognized for our quality
            and craftsmanship which is beyond comparison. Our state of the art
            manufacturing facility is in Gujarat which stretches over 60 acres
            of land.
          </p>
          <div className="section-x-padding max-width hidden lg:flex  md:flex-row flex-col  justify-center items-center gap-20 mb-10 pt-16 ">
            <div className="bg-black w-[17.5rem] h-[17.5rem] lg:w-[20.875rem] lg:h-[20.875rem] object-cover object-center">
              <Image
                src={"/assets/aboutus/aboutus-img1.png"}
                alt="hero-img"
                className="w-full h-full"
                width={340}
                height={340}
              />
            </div>
            <div className="w-[17.5rem] h-[17.5rem] lg:w-[20.875rem] lg:h-[20.875rem] object-cover object-center">
              <Image
                src={"/assets/aboutus/aboutus-img2.svg"}
                alt="hero-img"
                className="w-full h-full"
                width={340}
                height={340}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-x-padding max-width flex  md:flex-row flex-col  justify-center items-center gap-20 mb-10 lg:hidden  ">
        <div className="bg-black w-[17.5rem] h-[17.5rem] lg:w-[20.875rem] lg:h-[20.875rem] object-cover object-center">
          <Image
            src={"/assets/aboutus/aboutus-img1.png"}
            alt="hero-img"
            className="w-full h-full"
            width={340}
            height={340}
          />
        </div>
        <div className="w-[17.5rem] h-[17.5rem] lg:w-[20.875rem] lg:h-[20.875rem] object-cover object-center">
          <Image
            src={"/assets/aboutus/aboutus-img2.svg"}
            alt="hero-img"
            className="w-full h-full"
            width={340}
            height={340}
          />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
