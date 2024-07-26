import { Product } from "@/components/products/ProductsList";
import { productsAssets } from "@/public/assets/products";
import { projectAssets } from "@/public/assets/projects";

export const productDetailsWithTable = {
  id: 1,
  bgImg: projectAssets.project1,
  productName: "SLTM-02 – Top Mounting Bracket With Full Cover",
  description:
    "This is an ideal solution for balconies, stairs and building enclosures for high architectural standards, offering an impressive and functional result with no view limit.",
  details: [
    "Perfect aesthetic result",
    "Unlimited view",
    "Easy cleaning",
    "Maintenance free",
    "Long life",
    "Quick Installation",
  ],
  images: [
    productsAssets.dummyProduct,
    productsAssets.dummyProduct,
    productsAssets.dummyProduct2,
    productsAssets.dummyProduct3,
    productsAssets.dummyProduct4,
    productsAssets.dummyProduct3,
    productsAssets.dummyProduct,
    productsAssets.dummyProduct,
    productsAssets.dummyProduct4,
  ],
  type: "Aluminium Railing Top Mounting System",
  isTable: false,
  isCustomizable: false,
};

export const productDetailsWithList = {
  id: 1,
  bgImg: projectAssets.project3,
  productName: "BS-001 Rose Gold Mirror – Stainless Steel PVD Sheets",

  description:
    "This is an ideal solution for balconies, stairs and building enclosures for high architectural standards, offering an impressive and functional result with no view limit.",
  detailsTable: {
    width: 3,
    length: 2440,
    thickness: "0.8, 1",
    colors: "All color options",
  },

  images: [
    productsAssets.dummyProduct4,
    productsAssets.dummyProduct2,
    productsAssets.dummyProduct,
    productsAssets.dummyProduct2,
    productsAssets.dummyProduct,
    productsAssets.dummyProduct2,
    productsAssets.dummyProduct,
    productsAssets.dummyProduct2,
    productsAssets.dummyProduct,
  ],
  type: "Aluminium Railing Top Mounting System",
  isTable: true,
  isCustomizable: true,
};

export const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Dummy 1",
    image: "https://source.unsplash.com/random/",
    description: "This is dummy description",
    seoField: "any",
  },
  {
    id: 2,
    name: "Dummy 2",
    image: "https://source.unsplash.com/random/",
    description: "This is dummy 2 description",
    seoField: "any",
  },
  {
    id: 3,
    name: "Dummy 3",
    image: "https://source.unsplash.com/random/",
    description: "This is dummy 3 description",
    seoField: "any",
  },
  {
    id: 4,
    name: "Dummy 4",
    image: "https://source.unsplash.com/random/",
    description: "This is dummy 4 description",
    seoField: "any",
  },
];
