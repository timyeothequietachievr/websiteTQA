import type { NextConfig } from "next";

const designSystemOrigin =
  process.env.NEXT_PUBLIC_DESIGN_SYSTEM_URL ?? "https://designsystem-weld-six.vercel.app";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: "/design-system",
        destination: `${designSystemOrigin}/design-system`,
        permanent: true,
      },
      {
        source: "/visual-library",
        destination: `${designSystemOrigin}/visual-library`,
        permanent: true,
      },
      {
        source: "/preview/:code",
        destination: `${designSystemOrigin}/preview/:code`,
        permanent: true,
      },
      {
        source: "/component-catalog.json",
        destination: `${designSystemOrigin}/component-catalog.json`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
