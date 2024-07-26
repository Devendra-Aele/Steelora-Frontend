import { CATEGORY } from "./category.types";

export type SSPVD_PROFILES_PAGE = {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
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
