import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // disableStaticImages: true,
    remotePatterns: [
      { hostname: "source.unsplash.com" },
      { hostname: "dedicated-bubble-5f3c9f5995.media.strapiapp.com" },
      { hostname: "cms.steelora.com" },
      { hostname: "steelora-strapi-media.s3.ap-south-1.amazonaws.com" },
      { hostname: "md-aqil.github.io" },
    ],
    // unoptimized: true,
  },
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
