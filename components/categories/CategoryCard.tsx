import React from "react";
import OutlinedButton from "../reusables/OutlinedButton";
import Link from "next/link";
import Image from "next/image";
import { CATEGORY } from "@/types/category.types";
export function seoFunction(arr: string[]): string {
  if (arr.length === 0) {
    return "";
  } else {
    let newStringOfmodified =
      arr[0] == "mesh" || arr[0] == "stainless-steel-pvd-sheets" || arr[0] == "stainless-steel-pvd-profiles"
        ? arr.slice(1, -1).join(",")
        : arr.slice(1, -1).join(",");
    if (newStringOfmodified.includes("pvd")) {
      const words = newStringOfmodified.split("-");
      const capitalizedWords = words.map((word) => {
        if (word == "pvd") {
          return "PVD";
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
      });
      return capitalizedWords.join(" ");
    } else if (newStringOfmodified.includes("railings")) {
      newStringOfmodified = newStringOfmodified + "-system";
    }

    const words = newStringOfmodified.split("-");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    return capitalizedWords.join(" ");
  }
}
const CategoryCard = ({ category }: { category: CATEGORY }) => {
  const route = category.attributes.routeField.split("/");
  const seoFieldData = seoFunction(route);
  // console.log("******** category", category);
  route.length > 2 && route.shift();
  const url = route.join("/");
  // console.log("********", url);
  // console.log(seoFieldData);

  return (
    <div className="flex flex-col">
      <div className="h-[300px] w-[300px] mx-auto mb-4">
        <Image
          src={category?.attributes?.imageUrl?.data?.attributes?.url}
          alt={category?.attributes?.title}
          height={300}
          width={300}
          className="h-full w-full object-fill border-2 border-white"
        />
      </div>

      <div className="mb-6">
        <h2 className=" text-primary-text font-RidleyGrotesk font-medium text-center text-lg leading-9 md:text-xl md:leading-9">
          {category.attributes.title}
          {/* {category.attributes.seoField
            ? `/ ${category.attributes.seoField}`
            :seoFieldData} */}
        </h2>
        <p className="category_card_description">{seoFieldData || category.attributes.description}</p>
      </div>

      <div className="flex-grow flex items-end justify-center">
        <div className="flex justify-center">
          <Link
            // target="_blank"
            // href={`/category/${category.id}`}
            // href={`/products-list/${category?.id}`}
            href={url}
            className="text-center"
          >
            {/* <OutlinedButton type="button">Explore Products</OutlinedButton> */}
            <button className="primary-button">Explore Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
