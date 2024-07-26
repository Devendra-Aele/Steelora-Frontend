import { projectAssets } from "@/public/assets/projects";
import Image from "next/image";

const PageHeadingWithImage = ({
  data,
  imageOrder,
}: {
  data: any;
  imageOrder: any;
}) => {
  // Set the order of the text content and the image based on imageOrder prop

  const textOrder = imageOrder === 2 ? 1 : 2;
  return (
    <div className="section-y-padding section-x-padding bg-section-heading">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-18 xl:gap-28">
        <div
          className={`flex flex-col gap-3 order-2 lg:order-${textOrder} xl:order-${textOrder}`}
        >
          {/* <h2 className="sub_heading3 ">Aluminium Railings</h2> */}
          <h1 className={`sub_heading3 ${data.image === "" && "text-center"} `}>
            {data.name}
          </h1>
          <p className={`para ${data.image === "" && "text-center"}`}>
            {data.description}
          </p>
        </div>
        {data.image && (
          <div
            className={`w-[22.4rem] h-[22.4rem] lg:h-[24rem] lg:w-[24rem] xl:h-[30rem] xl:w-[30rem] flex-shrink-0 lg:order-${imageOrder} xl:order-${imageOrder}`}
          >
            <Image
              src={projectAssets.alu}
              width={1000}
              height={300}
              className="border-2 border-white h-full w-full object-cover"
              alt="Aluminium Railings"
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default PageHeadingWithImage;
