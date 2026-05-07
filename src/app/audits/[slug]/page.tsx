import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BarChart3, ClipboardCheck, LineChart, SearchCheck, ShieldCheck, Target } from "lucide-react";
import { AuditScorecard } from "@/components/visuals";
import { Button, CheckList, Container, GlassCard, LeadForm, SectionHeading } from "@/components/ui";
import { audits } from "@/lib/content";

export function generateStaticParams() {
  return audits.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = audits.find((x) => x.slug === slug);
  return { title: `${a?.title ?? "Audit"} | Global Digital Growth Agency`, description: `Request ${a?.title}.` };
}

const phases = [
  ["Collect", "Website, ads, SEO, CRM and analytics access or screenshots are reviewed."],
  ["Diagnose", "We identify broken journeys, tracking gaps, wasted spend and conversion weaknesses."],
  ["Prioritize", "Findings are ranked by business impact, urgency and ease of implementation."],
  ["Plan", "You receive a practical growth roadmap with next actions and expected outcomes."],
];

export default async function AuditPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = audits.find((x) => x.slug === slug);
  if (!a) notFound();
  const Icon = a.icon;

  return (
    <>
      <section className="relative overflow-hidden bg-grid py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(251,191,36,0.16),transparent_32rem),radial-gradient(circle_at_85%_15%,rgba(34,211,238,0.16),transparent_32rem)]" />
        <Container className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-2 text-sm font-semibold text-amber-100">
              <Icon className="h-4 w-4" /> Audit landing page
            </div>
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl">{a.title} that shows what is blocking growth.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Before spending more on websites, ads, SEO or automation, the business needs a clear diagnosis. This audit identifies the gaps, prioritizes fixes and turns confusion into an action plan.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button href="/book-consultation">Book Consultation</Button><Button href="/contact" variant="secondary">Send Details</Button></div>
          </div>
          <AuditScorecard />
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <GlassCard>
            <SearchCheck className="h-8 w-8 text-cyan-200" />
            <h2 className="mt-5 mb-5 text-2xl font-semibold">What we check</h2>
            <CheckList items={a.checks} />
          </GlassCard>
          <div className="grid gap-4 sm:grid-cols-2">
            {phases.map(([title, text], index) => (
              <GlassCard key={title} className="lg:p-5">
                <span className="font-mono text-xs font-bold text-cyan-200">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 text-slate-950">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">What you receive</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">A practical report that helps management make decisions.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[[ClipboardCheck, "Findings summary", "Clear explanation of what is working, broken or missing."], [ShieldCheck, "Risk areas", "Tracking, conversion, follow-up and spend risks highlighted clearly."], [Target, "Priority roadmap", "Fixes ranked by impact so the team knows what to do first."], [BarChart3, "KPI framework", "Recommended metrics for monthly reporting and accountability."]].map(([IconCmp, title, text]) => {
              const CardIcon = IconCmp as typeof ClipboardCheck;
              return <div key={title as string} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6"><CardIcon className="h-7 w-7 text-blue-600" /><h3 className="mt-5 text-xl font-semibold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text as string}</p></div>;
            })}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="After the audit" title="Turn findings into website, campaign, CRM and reporting improvements." text="The audit is designed to motivate action. Once the gaps are visible, we can build the required pages, campaigns, automations and dashboards." />
            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"><LineChart className="h-8 w-8 text-cyan-200" /><p className="mt-4 text-sm leading-6 text-slate-300">Typical next steps include conversion page improvements, SEO fixes, campaign restructuring, CRM lead routing and dashboard setup.</p></div>
          </div>
          <LeadForm title={`Request ${a.title}`} />
        </Container>
      </section>
    </>
  );
}
