import type { NextConfig } from "next";
import { LEGACY_SITE_REDIRECTS } from "./src/lib/site-redirects";

const designSystemOrigin =
  process.env.NEXT_PUBLIC_DESIGN_SYSTEM_URL ?? "https://designsystem-weld-six.vercel.app";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      ...LEGACY_SITE_REDIRECTS,
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
