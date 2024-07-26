import { CATEGORY } from "./category.types";

export type MESH_PAGE = {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
  imagesUrl:any;
  catogeries: {
    data: CATEGORY[];
  };
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
