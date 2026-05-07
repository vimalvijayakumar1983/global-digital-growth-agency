import type { MetadataRoute } from "next";
import { agency, audits, industries, services } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = agency.baseUrl;
  const staticRoutes = ["", "/about", "/services", "/industries", "/audits", "/contact", "/book-consultation", "/insights"];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: new Date() })),
    ...industries.map((i) => ({ url: `${base}/industries/${i.slug}`, lastModified: new Date() })),
    ...audits.map((a) => ({ url: `${base}/audits/${a.slug}`, lastModified: new Date() })),
  ];
}
