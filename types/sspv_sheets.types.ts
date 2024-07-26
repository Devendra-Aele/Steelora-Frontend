import { CATEGORY } from "./category.types";

export type SSPVD_SHEET_PAGE = {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
  product_types: {
    data: {
      id: number;
      attributes: {
        title: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        description: string;
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
    }[];
  };
};

export type SSPVD_SHEET_TYPE_PAGE = {
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
