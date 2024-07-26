import React from "react";
import Image from "next/image";

const Imges = [
  {
    id: 1,
    image: "/assets/aluminium_railings/railings1.svg",
    txt: "40+ Aluminium Railing System",
  },
  {
    id: 2,
    image: "/assets/aluminium_railings/railings2.svg",
    txt: "100% Weather Proof System",
  },
  {
    id: 3,
    image: "/assets/aluminium_railings/railings3.svg",
    txt: "20+ Aluminium Handrails",
  },
  {
    id: 4,
    image: "/assets/aluminium_railings/bulb.svg",
    // txt: "304 SS Modular Railing System",
    txt: "LED / Non-LED options available",
  },
  {
    id: 5,
    image: "/assets/aluminium_railings/railings5.svg",
    txt: "System With Multicolor Options",
  },
];

const AluminiumRailingSecondSection = () => {
  return (
    <>
      <div className="section-y-padding grid gap-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-5  lg:w-[100%] xl:w-[100%] w-[90%] m-auto mb-0 mt-0 lg:divide-x lg:divide-primary-text bg-white">
        {Imges.map((img) => (
          <div
            key={img.id}
            className={`
           
            min-h-full px-7 py-7 lg:px-10 lg:py-14 flex flex-col gap-6 items-center justify-start`}
          >
            <div className="h-32 w-32">
              <Image
                src={img.image}
                alt={`hero-${img.id}-img`}
                width={126}
                height={126}
                className="w-full h-full"
              />
            </div>

            <p className="text-center font-Montserrat font-light text-para-text">
              {img.txt}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AluminiumRailingSecondSection;
