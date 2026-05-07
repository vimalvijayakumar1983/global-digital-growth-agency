import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AuditScorecard } from "@/components/visuals";
import { Button, CheckList, Container, GlassCard, LeadForm, SectionHeading } from "@/components/ui";
import { audits } from "@/lib/content";
export function generateStaticParams(){return audits.map((a)=>({slug:a.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const a=audits.find((x)=>x.slug===slug);return {title:a?.title??"Audit",description:`Request ${a?.title}.`};}
export default async function AuditPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const a=audits.find((x)=>x.slug===slug);if(!a) notFound();return <><section className="bg-grid py-20"><Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center"><div><SectionHeading eyebrow="Audit landing page" title={a.title} text="Find the gaps in your current website, campaigns, CRM and reporting before committing more budget."/><div className="mt-8 flex gap-3"><Button href="/book-consultation">Book Consultation</Button></div></div><AuditScorecard/></Container></section><section className="py-20"><Container className="grid gap-8 lg:grid-cols-[0.8fr_1fr]"><GlassCard><h2 className="mb-5 text-2xl font-semibold">What we check</h2><CheckList items={a.checks}/></GlassCard><LeadForm title={`Request ${a.title}`}/></Container></section></>}
