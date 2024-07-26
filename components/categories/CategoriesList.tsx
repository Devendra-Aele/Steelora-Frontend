import React from "react";
import CategoryCard from "./CategoryCard";
import { CATEGORY } from "@/types/category.types";

const CategoriesList = ({ list }: { list: CATEGORY[] }) => {
  // console.log(list);

  return (
    <section className=" section-y-padding   max-w-[66rem] mx-auto">
      <h2 className="sub_heading2 text-center mb-10">Categories</h2>
      {list&&list.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 lg:gap-y-20 gap-x-[3rem] xl:gap-x-[4.8rem] ">
          {list?.map((item) => {
            return <CategoryCard key={item.id} category={item} />;
          })}
        </div>
      ) : (
        <h3 className="text-center font-medium font-RidleyGrotesk text-xl text-primary-text">
          No Categories Found!
        </h3>
      )}
    </section>
  );
};

export default CategoriesList;
