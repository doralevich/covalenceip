import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old WordPress URLs that don't map 1:1 onto the new routes. Fill this in
  // from the WordPress inventory before the domain cuts over, so existing
  // links and search results keep working.
  async redirects() {
    return [];
  },
};

export default nextConfig;
