"use client";

import Image from "next/image";
import React from "react";

const ClientCard = ({ img, isActive }: { img: string; isActive?: boolean }) => {
  return (
    <div
      className={`h-32 w-32 mb-2 rounded-lg flex justify-center items-center group`}
      style={{
        background: isActive
          ? `linear-gradient(136.72deg, #FF600D -21.14%, #FFFEFD 131.43%)`
          : "#FFF2ED",
        transition: ".5s ease",
      }}
    >
      <div
        className={`h-16 w-16 group-hover:scale-150 transition-all duration-500 ${
          isActive ? "scale-150" : ""
        } `}
      >
        <Image
          src={img}
          height={80}
          width={80}
          className="h-full w-full object-contain"
          alt="Client logo"
          priority={true} // Ensures image is prioritized for loading
        />
      </div>
    </div>
  );
};

export default ClientCard;
