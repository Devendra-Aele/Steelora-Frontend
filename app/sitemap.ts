import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wip.steelora.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://wip.steelora.com/category/*",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: "https://wip.steelora.com/contact-us",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://wip.steelora.com/about-us",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://wip.steelora.com/facade",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://wip.steelora.com/facade/*",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.75,
    },
    {
      url: "https://wip.steelora.com/mesh",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: "https://wip.steelora.com/mesh/*",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.65,
    },
    {
      url: "https://wip.steelora.com/product/*",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.6,
    },
    {
      url: "https://wip.steelora.com/products-list/*",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.55,
    },
    {
      url: "https://wip.steelora.com/projects",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: "https://wip.steelora.com/railings",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.45,
    },
    {
      url: "https://wip.steelora.com/railings/*",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.4,
    },
    {
      url: "https://wip.steelora.com/railings/stainless-steel-railings",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.35,
    },
    {
      url: "https://wip.steelora.com/railings/aluminium-railings",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.3,
    },
    {
      url: "https://wip.steelora.com/request-samples",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.25,
    },
    {
      url: "https://wip.steelora.com/stainless-steel-pvd-profiles",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.2,
    },
    {
      url: "https://wip.steelora.com/stainless-steel-pvd-sheets",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.15,
    },
    {
      url: "https://wip.steelora.com/stainless-steel-pvd-profiles/*",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.1,
    },
    {
      url: "https://wip.steelora.com/stainless-steel-pvd-sheets/*",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.05,
    },
  ];
}
