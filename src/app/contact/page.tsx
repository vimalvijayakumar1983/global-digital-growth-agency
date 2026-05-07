import type { Metadata } from "next";
import { Container, LeadForm, SectionHeading, WhatsAppButton } from "@/components/ui";
import { agency } from "@/lib/content";
export const metadata: Metadata = { title: "Contact", description: "Contact Global Digital Growth Agency for websites, SEO, paid ads, CRM, automation and analytics." };
export default function ContactPage(){return <section className="py-20"><Container className="grid gap-10 lg:grid-cols-[0.9fr_1fr]"><div><SectionHeading eyebrow="Contact" title="Let’s understand your growth system." text="Tell us what you are trying to build, fix or scale. We can start with a consultation or a focused audit."/><div className="mt-8 space-y-3 text-slate-300"><p>{agency.phone}</p><p>{agency.email}</p><p>UAE-rooted. Global delivery.</p></div><div className="mt-8"><WhatsAppButton/></div></div><LeadForm title="Send a project enquiry"/></Container></section>}
