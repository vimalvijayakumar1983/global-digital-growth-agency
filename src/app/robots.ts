import type { MetadataRoute } from "next";
import { agency } from "@/lib/content";
export default function robots(): MetadataRoute.Robots { return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${agency.baseUrl}/sitemap.xml` }; }
