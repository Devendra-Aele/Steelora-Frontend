import { CATEGORY } from "./category.types";

export type FACADE_PAGE = {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
  catogeries: {
    data: CATEGORY[];
  };
  imagesUrl:any,
  titleImageurl: {
    data: {
      id: number;
      attributes: {
        formats: {
          thumbnail: {
            url: string;
          };
        };
      };
    };
  };
};
