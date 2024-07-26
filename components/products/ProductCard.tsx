import React from "react";
import { Product } from "./ProductsList";
import Image from "next/image";
import Link from "next/link";
import { convertToKebabCase } from "@/utils/convertToKebabCase";
import { formatProductName } from "@/utils/formatProductName";

const ProductCard = ({ product }: { product: Product }) => {
  // console.log("product details ************88",product)
  const convertedName = formatProductName(product.name.trim());
  return (
    <div className="flex flex-col">
      <div className="h-64 w-64 mx-auto mb-4">
        {/* <Image
          src={product.image}
          alt={product.name}
          height={100}
          width={100}
          className="h-full w-full object-fill"
        /> */}
        <img src={product.image} alt={product.name} className="h-full w-full object-fill"/>
      </div>

      <div className="mb-6">
        <h2 className=" text-primary-text font-RidleyGrotesk font-medium text-center text-lg leading-9 md:text-xl md:leading-9 line-clamp-2">
          {product.name}
        </h2>
        <h3 className="product_card_description line-clamp-2">
          {/* {product.description} */}
          {product.seoField}
        </h3>
      </div>

      <div className="flex-grow flex items-end justify-center">
        <div className="flex justify-center">
          <Link
            // target="_blank"
            href={`/${convertedName}/${product.id}`}
            className="text-center"
          >
            {/* <OutlinedButton type="button">View Product</OutlinedButton> */}
            <button className="primary-button">View Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
