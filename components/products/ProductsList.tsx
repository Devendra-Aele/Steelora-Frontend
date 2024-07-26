import React from "react";
import ProductCard from "./ProductCard";

export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  seoField: string | null;
  hierarchy?: string;
};

const ProductsList = ({ products }: { products: Product[] }) => {
  // console.log('********************product',products)
  return (
    <div className="section-y-padding px-10 xl:px-0 max-w-[75rem] mx-auto">
      {products?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-self-center gap-x-10 gap-y-20">
          {products?.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      ) : (
        <h3 className="text-center font-medium font-RidleyGrotesk text-xl">
          No Products Found!
        </h3>
      )}
    </div>
  );
};

export default ProductsList;
