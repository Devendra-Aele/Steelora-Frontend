import { convertToKebabCase } from "./convertToKebabCase";

export type NAVLINKS = {
  id: number;
  name: string;
  route: string;
  categories: {
    id: number;
    name: string;
    route: string;
    subCategories: {
      id: number;
      name: string;
      route: string;
    }[];
  }[];
};

export const mapDataToNavbar = (data: any): NAVLINKS[] => {
  return data.map((item: any) => ({
    id: item.id,
    name: item.attributes.title,
    route: "/" + convertToKebabCase(item.attributes.routeField),
    categories: item.attributes.product_types.data.map((category: any) => ({
      id: category.id,
      name: category.attributes.title,
      // === "Stainless Steel Railing System"
      //   ? "Stainless Steel Railings"
      //   : category.attributes.title,
      route:
        // category.attributes.title === "Stainless Steel Railing System"
        //   ? "/railings/stainless-steel-railings"
        //   : "/" +
        //     convertToKebabCase(item.attributes.title) +
        //     "/" +
        //     convertToKebabCase(category.attributes.title),
        // `/category/${category.id}`,
        `/` + category.attributes.routeField,
      subCategories: category.attributes.catogeries?.data?.map(
        (subCategory: any) => ({
          id: subCategory.id,
          name: subCategory.attributes.title,
          route:
            // `/products-list/${subCategory.id}`,
            // "/" +
            // convertToKebabCase(item.attributes.title) +
            // "/" +
            // convertToKebabCase(category.attributes.title) +
            // "/" +
            // convertToKebabCase(subCategory.attributes.title),
            `/` + subCategory.attributes.routeField,
        })
      ),
    })),
  }));
};
