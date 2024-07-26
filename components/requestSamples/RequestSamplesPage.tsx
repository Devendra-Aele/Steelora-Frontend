import React from "react";
import "./sample.css";
import SampleForm from "./SampleForm";
import { getProductById } from "@/utils/api/products";
import { mapSampleDataToForm } from "@/utils/mapSampleDataToForm";

const RequestSamplesPage = async ({ productId }: { productId?: number }) => {
  let data = "";
  if (productId) {
    data = await getProductById(productId);
  }

  return (
    <>
      {/* <div className="h-[50vh] lg:h-[80vh] samples_hero "></div> */}
      <section className="section-y-padding mt-16 lg:mt-24">
        <div className=" lg:py-0 lg:bg-transparent">
          <h1 className="section-heading">Request Samples</h1>
        </div>
        {/* MAIN BODY */}
        <div className="section-x-padding">
          <SampleForm sampleData={mapSampleDataToForm(data)} />
        </div>
      </section>
    </>
  );
};

export default RequestSamplesPage;
