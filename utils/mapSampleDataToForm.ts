import { SAMPLE_FORM } from "@/components/requestSamples/SampleForm";

export const mapSampleDataToForm = (data: any): SAMPLE_FORM => {
  const title = data?.data?.attributes?.title ?? "";
  const description = data?.data?.attributes?.description ?? "";

  const details =
    title && description ? `${title} : ${description}` : title || description;

  return {
    // address: "",
    address1: "",
    address2: "",
    city: "",
    pincode: "",
    state: "",
    companyName: "",
    email: "",
    name: "",
    phoneNumber: "",
    projectName: "",
    relevantSector: null,
    details: details,
  };
};
