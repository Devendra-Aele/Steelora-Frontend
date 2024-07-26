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
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any; // Assuming it can be any data type
  createdAt: string;
  updatedAt: string;
}

export interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

export interface ItemAttributes {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imagesUrl: {
    data: ImageData[];
  };
}

export interface ItemData {
  id: number;
  attributes: ItemAttributes;
}

export interface DataAttributes {
  title: string;
  description: string;
  buttonText: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imageUrl: {
    data: ImageData;
  };
  items: {
    data: ItemData[];
  };
}

export interface Data {
  id: number;
  attributes: DataAttributes;
}

export interface Meta {
  // Define meta fields if available
}

export interface ProductListResponse {
  data: Data;
  meta: Meta;
}
