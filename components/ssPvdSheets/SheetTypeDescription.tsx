import { SSPVD_SHEET_TYPE_PAGE } from "@/types/sspv_sheets.types";
import Image from "next/image";
import React from "react";

const SheetTypeDescription = ({ data }: { data: SSPVD_SHEET_TYPE_PAGE }) => {
  // console.log(data);

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 xl:gap-28">
        <div className="h-[21.5rem] w-[21.5rem] lg:h-[25rem] lg:w-[25rem] xl:h-[30rem] xl:w-[30rem] flex-shrink-0 lg:order-2">
          <Image
            src={data?.titleImageurl?.data?.attributes.formats?.thumbnail?.url}
            width={500}
            height={500}
            alt={data?.title}
            className="border-2 border-white h-full w-full object-cover"
          />
        </div>

        <div className="lg:order-1">
          <h2 className="section-heading !text-left mb-3 !font-medium">
            {data?.title}
          </h2>
          <p className="para">{data?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SheetTypeDescription;
