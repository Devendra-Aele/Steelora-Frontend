import { CATEGORY } from "./category.types";

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface ImageAttributes {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats?: {
      thumbnail: ImageFormat;
      small?: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any; // Adjust this if you have a specific type for provider_metadata
    createdAt: string;
    updatedAt: string;
  };
}

export interface CategoryAttributes {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imageUrl: ImageAttributes;
}

export interface Data {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    description: string;
    catogeries: {
      data: CATEGORY[];
    };
    imagesUrl: {
      data: ImageAttributes[];
    };
    titleImageurl: {
      data: ImageAttributes;
    };
  };
}

export interface Meta {}

export interface RailingApiResponse {
  data: Data;
  meta: Meta;
}
