import type { Metadata } from "next";
import { BrainCircuit, Compass, Globe2, LineChart, ShieldCheck, Users, Workflow } from "lucide-react";
import { Container, GlassCard, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "About", description: "A UAE-rooted, globally capable digital growth agency built for strategy, creative, technology, media, automation and analytics." };

const principles = [
  [Compass, "Strategy before activity", "Every website, campaign, content plan and automation flow starts with positioning, customer journey and business outcome."],
  [Globe2, "Global-first execution", "Built for UAE, GCC and international companies that need premium presentation and measurable digital growth."],
  [Workflow, "Connected systems", "Websites, ads, SEO, CRM, WhatsApp, analytics and AI workflows are planned together instead of separately."],
  [BrainCircuit, "AI-powered, human-led", "AI improves speed and analysis, while senior judgment protects strategy, brand, compliance and quality."],
  [LineChart, "Measured performance", "Dashboards and reporting make it clear what is working, what is wasting money and what to improve next."],
  [ShieldCheck, "Trust and accountability", "The agency is built to be a serious growth partner with clear process, transparent priorities and business-focused communication."],
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_34rem),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.16),transparent_32rem)]" />
        <Container className="relative">
          <SectionHeading eyebrow="About" title="A global-first agency built for connected digital growth." text="The agency is designed for businesses that need more than fragmented vendors. We bring strategy, creative, technology, performance media, CRM, automation, analytics and AI-powered workflows into one growth system." />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["UAE-rooted", "Global delivery", "AI-powered"].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-lg font-semibold text-white">{item}</div>)}
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Operating principles" title="How we think about client growth." text="These principles make the agency feel like a strategic partner, not a vendor delivering isolated tasks." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {principles.map(([Icon, title, text]) => {
              const CardIcon = Icon as typeof Users;
              return <GlassCard key={title as string}><CardIcon className="h-8 w-8 text-cyan-200" /><h2 className="mt-5 text-2xl font-semibold">{title as string}</h2><p className="mt-3 text-sm leading-6 text-slate-300">{text as string}</p></GlassCard>;
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
