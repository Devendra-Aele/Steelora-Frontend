export type CATEGORY = {
  id: number;
  attributes: {
    title: string;
    description: string;
    buttonText: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    seoField?: string;
    routeField: string;
    imageUrl: {
      data: {
        id: number;
        attributes: {
          name: string;
          ext: ".png";
          url: string;
          previewUrl: string;
        };
      };
    };
  };
};

export type CATEGORY_LIST_PAGE = {
  id: number;
  attributes: {
    title: string;
    description: string;
    buttonText: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    imageUrl: {
      data: {
        id: number;
        attributes: {
          name: string;
          ext: ".png";
          url: string;
          previewUrl: string;
        };
      };
    };

    items: {
      data: {
        id: number;
        attributes: {
          title: string;
          description: string;
          createdAt: string;
          updatedAt: string;
          publishedAt: string;
          imageUrl: {
            data: {
              id: number;
              attributes: {
                name: string;
                ext: ".png";
                url: string;
                previewUrl: string;
              };
            };
          };
        };
      }[];
    };
  };
};
