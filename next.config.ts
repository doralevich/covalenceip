import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // WordPress served every page with a trailing slash (/about-us/). Keeping
  // it means every indexed URL stays exactly the same.
  trailingSlash: true,

  // WordPress URLs that don't exist as pages here. The site only ever had
  // two real pages; these cover the feeds and the menu-item URLs WordPress
  // generated, which search engines may have picked up.
  async redirects() {
    return [
      { source: "/feed", destination: "/", permanent: true },
      { source: "/comments/feed", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/about", destination: "/about-us/", permanent: true },
      { source: "/about-3", destination: "/about-us/", permanent: true },
      { source: "/investment-strategy", destination: "/#investment", permanent: true },
      { source: "/investment", destination: "/#investment", permanent: true },
      { source: "/execution", destination: "/#execution", permanent: true },
      { source: "/environmental-stewardship", destination: "/#environmental", permanent: true },
      { source: "/environmental-stewardship-2", destination: "/#environmental", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/contact-2", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
