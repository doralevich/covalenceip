import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({ url: `${site.url}${path}` }));
}
