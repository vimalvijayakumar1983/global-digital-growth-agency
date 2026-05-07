import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/site-shell";
import { agency } from "@/lib/content";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(agency.baseUrl),
  title: {
    default: "Global Digital Growth Agency | 360° AI-Powered Growth Partner",
    template: "%s | Global Digital Growth Agency",
  },
  description:
    "A UAE-rooted, global-first 360° digital growth agency for websites, apps, SEO, paid media, CRM, automation, analytics and AI-powered marketing.",
  keywords: [
    "global digital marketing agency",
    "360 digital growth agency",
    "AI marketing agency",
    "performance marketing agency",
    "SEO agency",
    "website development agency",
    "CRM automation agency",
  ],
  openGraph: {
    title: "Global Digital Growth Agency",
    description: "Build, market, automate and measure growth for ambitious businesses.",
    url: agency.baseUrl,
    siteName: agency.name,
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: agency.name, description: "Your 360° AI-powered digital growth partner." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: agency.name,
    url: agency.baseUrl,
    email: agency.email,
    telephone: agency.phone,
    areaServed: ["UAE", "GCC", "United States", "United Kingdom", "India", "Global"],
    description: "A global 360° digital growth agency for strategy, websites, apps, SEO, paid media, CRM, automation, analytics and AI marketing.",
    sameAs: [],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-slate-950 text-white">
        <Script id="schema-organization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Script id="tracking-placeholders" strategy="afterInteractive">
          {`// Tracking placeholders: add production IDs before launch.\nwindow.GA4_ID = 'G-XXXXXXXXXX';\nwindow.GTM_ID = 'GTM-XXXXXXX';\nwindow.META_PIXEL_ID = '000000000000000';\nwindow.LINKEDIN_PARTNER_ID = '000000';\nwindow.TIKTOK_PIXEL_ID = 'XXXXXXXXXXXX';`}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
