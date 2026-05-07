import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { agency } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
      <Sparkles className="h-3.5 w-3.5 text-amber-300" /> {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, text, align = "left" }: { eyebrow?: string; title: string; text?: string; align?: "left" | "center" }) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{text}</p> : null}
    </Reveal>
  );
}

export function Button({ href, children, variant = "primary", className = "" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "ghost"; className?: string }) {
  const styles = {
    primary: "bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 text-slate-950 shadow-[0_18px_60px_rgba(56,189,248,0.28)] hover:brightness-110",
    secondary: "border border-white/15 bg-white/[0.06] text-white hover:border-cyan-300/50 hover:bg-cyan-300/10",
    ghost: "text-cyan-200 hover:text-white",
  };
  return (
    <Link href={href} className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${styles[variant]} ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </Link>
  );
}

export function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-xl ${className}`}>{children}</div>;
}

export function LeadForm({ compact = false, title = "Request a growth consultation" }: { compact?: boolean; title?: string }) {
  return (
    <form className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 shadow-2xl backdrop-blur-xl" action="mailto:hello@example.com" method="post">
      <div className="mb-5">
        <p className="text-lg font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm text-slate-400">Ready to connect with CRM, email, WhatsApp and Google Sheets.</p>
      </div>
      <div className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
        {["Name", "Company", "Website", "Phone / WhatsApp", "Email", "Monthly Marketing Budget"].map((label) => (
          <input key={label} aria-label={label} name={label.toLowerCase().replaceAll(" ", "-")} placeholder={label} className="min-h-12 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none ring-cyan-300/40 transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-4" />
        ))}
        <select name="service" aria-label="Service Needed" className="min-h-12 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 text-sm text-slate-300 outline-none ring-cyan-300/40 transition focus:border-cyan-300/60 focus:ring-4">
          <option>Service Needed</option>
          <option>Website Development</option>
          <option>SEO & Content</option>
          <option>Performance Marketing</option>
          <option>CRM & WhatsApp Automation</option>
          <option>Full Growth Audit</option>
        </select>
        <textarea name="message" placeholder="Message" className="min-h-28 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none ring-cyan-300/40 transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-4 sm:col-span-2" />
      </div>
      <button type="submit" className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 px-5 text-sm font-bold text-slate-950 transition hover:brightness-110">
        Send enquiry <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-3 text-xs leading-5 text-slate-500">Tracking placeholders: GA4, GTM, Meta Pixel, LinkedIn Insight Tag and TikTok Pixel.</p>
    </form>
  );
}

export function WhatsAppButton({ label = "WhatsApp Us", className = "" }: { label?: string; className?: string }) {
  const link = `https://wa.me/${agency.whatsapp}?text=${encodeURIComponent(agency.whatsappText)}`;
  return (
    <a href={link} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-5 py-3 text-sm font-bold text-emerald-100 transition hover:bg-emerald-300/20 ${className}`}>
      <MessageCircle className="h-4 w-4" /> {label}
    </a>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
