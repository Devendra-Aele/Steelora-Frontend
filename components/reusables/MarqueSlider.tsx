import Image from "next/image";
import React from "react";

type Props = {
  data: string[];
};

const MarqueSlider = (props: Props) => {
  let { data } = props;
  const images = [];
  data = [...data, ...data];
  console.log("Loading images",data);
  
  for (let i = 0; i < data.length - 2; i++) {
    if (i % 2 === 0) {
      const img1 = (
        <div
          className="w-full h-[47.5%] lg:h-[47%] xl:h-[48%] border-white border-[1px] object-cover rounded-xl overflow-hidden"
          key={i}
        >
          {/* <Image
            src={data[i]}
            alt="img"
            width={220}
            height={350}
            quality={100}
            className="w-full h-full"
          /> */}
           <img src={data[i]} alt={`Image ${data[i]}`} className="w-full h-full" />
        </div>
      );

      let img2 = null;
      if (i + 1 < data.length) {
        img2 = (
          <div
            className="w-full h-[47.5%] lg:h-[47%]  xl:h-[48%] border-white border-[1px] object-cover rounded-xl overflow-hidden"
            key={i + 1}
          >
            {/* <Image
              src={data[i + 1]}
              alt="img"
              width={220}
              height={350}
              quality={100}
              className="w-full h-full"
            /> */}
            <img src={data[i + 1]} alt={`Image ${data[i + 1]}`} className="w-full h-full" />
          </div>
        );
      }

      images.push(
        <div
          className="marque-elements mx-[5px] md:mx-[10px] space-y-4 lg:space-y-5  w-[50%] md:w-[35%] lg:w-[25%] h-full "
          key={i}
        >
          {img1}
          {img2}
        </div>
      );
    } else {
      i = i + 2;
      images.push(
        <div
          className="marque-elements mx-[5px] flex flex-col justify-between items-center md:mx-[10px] w-[50%] md:w-[35%] lg:w-[25%] h-full"
          key={i}
        >
          <div className="w-full h-full border-white border-[1px] object-cover rounded-xl overflow-hidden ">
            {/* <Image
              src={data[i]}
              alt="img"
              width={220}
              height={350}
              quality={100}
              className="w-full h-full"
            /> */}
            <img src={data[i]} alt={`Image ${data[i]}`} className="w-full h-full" />
          </div>
        </div>
      );
    }
  }
  images.push(
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images
  );

  return (
    <div className="marque-body w-screen">
      <div className="marque w-full h-[21.563rem] xl:h-[33.75rem] ">
        {images}
      </div>
    </div>
  );
};

export default MarqueSlider;
