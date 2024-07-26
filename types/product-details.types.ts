export interface ProductData {
  data: {
    id: number;
    attributes: {
      title: string;
      description: string;
      features: any;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      catogery:any;
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
              small?: {
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
            } | null;
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
    };
  };
  meta: Record<string, unknown>;
}
