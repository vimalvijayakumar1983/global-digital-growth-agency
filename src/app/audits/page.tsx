import Link from "next/link";
import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { audits } from "@/lib/content";
export const metadata: Metadata = { title: "Audits", description: "Free website, SEO, Google Ads, Meta Ads, CRM and full digital growth audits." };
export default function AuditsPage(){return <section className="py-20"><Container><SectionHeading eyebrow="Audits" title="Start with clarity before spending more money." text="Audit landing pages built for SEO, ads and consultation conversion."/><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{audits.map((a)=><Link key={a.slug} href={`/audits/${a.slug}`} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]"><a.icon className="h-8 w-8 text-amber-200"/><h2 className="mt-5 text-2xl font-semibold text-white">{a.title}</h2><p className="mt-3 text-sm leading-6 text-slate-300">Checks: {a.checks.join(", ")}.</p><p className="mt-5 text-sm font-bold text-cyan-200">Request Audit →</p></Link>)}</div></Container></section>}
