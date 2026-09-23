import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Only production is indexable, so preview deployments never compete with
// the live site in search results.
export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV !== "production") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
