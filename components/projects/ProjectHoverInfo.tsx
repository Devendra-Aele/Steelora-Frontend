import React from "react";

const ProjectHoverInfo = ({
  title,
  features,
  size,
}: {
  title: string;
  features: string[];
  size: "sm" | "md" | "lg";
}) => {
  return (
    <>
      <div className="absolute hidden group-hover:block inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute hidden  p-3 group-hover:flex group-hover:items-end h-full w-full inset-0 z-10">
        <div>
          <h2
            className={`${
              size === "sm"
                ? "text-base"
                : size === "md"
                ? "text-lg"
                : size === "lg"
                ? "text-2xl"
                : ""
            } capitalize mb-2 text-white`}
          >
            {title}
          </h2>
          <div className="flex gap-2">
            {features?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`border border-white  ${
                    size === "sm" ? "text-xs p-1" : "text-sm p-2"
                  }  text-white`}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHoverInfo;
