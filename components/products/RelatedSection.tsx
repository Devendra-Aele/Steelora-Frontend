import React from "react";
import ProductsList, { Product } from "./ProductsList";

const RelatedSection = ({ productList }: { productList: Product[] }) => {
  return (
    <div>
      {/* {productList.length > 0 && ( */}
      <section>
        <div className="section-x-padding section-y-padding">
          <h2 className="section-heading">Related Products</h2>

          {productList.length > 0 ? (
            <ProductsList products={productList} />
          ) : (
            <h3 className="text-primary-text text-xl text-center mt-10">
              No Related Products Found !!
            </h3>
          )}
        </div>
      </section>
      {/* )} */}
    </div>
  );
};

export default RelatedSection;
