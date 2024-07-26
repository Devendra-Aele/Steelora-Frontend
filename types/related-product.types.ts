export interface RelatedProductData {
  data: {
    id: number;
    attributes: {
      title: string;
      description: string;
      buttonText?: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      imageUrl: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: string | null;
            caption: string | null;
            width: number;
            height: number;
            formats: {
              thumbnail: {
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
              };
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: string | null;
            provider: string;
            provider_metadata: any | null;
            createdAt: string;
            updatedAt: string;
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
            imagesUrl: {
              data: {
                id: number;
                attributes: {
                  name: string;
                  alternativeText: string | null;
                  caption: string | null;
                  width: number;
                  height: number;
                  formats: {
                    thumbnail: {
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
                    };
                  };
                  hash: string;
                  ext: string;
                  mime: string;
                  size: number;
                  url: string;
                  previewUrl: string | null;
                  provider: string;
                  provider_metadata: any | null;
                  createdAt: string;
                  updatedAt: string;
                };
              }[];
            };
            seoField: string;
          };
        }[];
      };
    };
  };
  meta: Record<string, unknown>;
}
