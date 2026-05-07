import Link from "next/link";
import { Globe2, Menu } from "lucide-react";
import { agency, navItems } from "@/lib/content";
import { Button, Container, WhatsAppButton } from "@/components/ui";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-2xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Go to homepage">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.18)]">
            <Globe2 className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-white">Global Growth</span>
            <span className="block text-xs text-slate-400">Agency name TBD</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <WhatsAppButton label="WhatsApp" />
          <Button href="/book-consultation">Book Consultation</Button>
        </div>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-white lg:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>
      </Container>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12">
      <Container className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-white">{agency.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">A UAE-rooted, global-first 360° digital growth agency for websites, campaigns, CRM, automation, analytics and AI-powered marketing.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Services</p>
          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <Link className="block hover:text-white" href="/services/performance-marketing">Performance Marketing</Link>
            <Link className="block hover:text-white" href="/services/seo-content">SEO & Content</Link>
            <Link className="block hover:text-white" href="/services/website-development">Website Development</Link>
            <Link className="block hover:text-white" href="/services/crm-whatsapp-automation">CRM & WhatsApp</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Audits</p>
          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <Link className="block hover:text-white" href="/audits/free-website-audit">Website Audit</Link>
            <Link className="block hover:text-white" href="/audits/seo-audit">SEO Audit</Link>
            <Link className="block hover:text-white" href="/audits/google-ads-audit">Google Ads Audit</Link>
            <Link className="block hover:text-white" href="/audits/full-growth-audit">Full Growth Audit</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Contact</p>
          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <p>{agency.phone}</p>
            <p>{agency.email}</p>
            <p>UAE-rooted. Global delivery.</p>
          </div>
        </div>
      </Container>
      <Container className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {agency.name}. All rights reserved.</p>
        <p>Tracking placeholders included for GA4, GTM, Meta, LinkedIn and TikTok.</p>
      </Container>
      <div className="fixed inset-x-4 bottom-4 z-50 lg:hidden">
        <Link href="/book-consultation" className="flex min-h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 px-5 text-sm font-bold text-slate-950 shadow-2xl">
          Book a Growth Consultation
        </Link>
      </div>
    </footer>
  );
}
