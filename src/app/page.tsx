import Link from "next/link";
import { ArrowRight, BrainCircuit, CheckCircle2, Globe2, Sparkles } from "lucide-react";
import { AuditScorecard, DashboardVisual, FragmentedSystemVisual, LeadJourneyVisual } from "@/components/visuals";
import { Button, CheckList, Container, Eyebrow, GlassCard, LeadForm, SectionHeading, WhatsAppButton } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { audits, growthScenarios, industries, pillars, services } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_34rem)]" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Eyebrow>Global-first • UAE-rooted • AI-powered</Eyebrow>
            <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
              Your 360° Digital Growth Partner — From Brand to Leads to Dashboards
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              We help businesses build premium websites, launch high-performing campaigns, automate lead follow-up, connect CRM systems and measure every growth decision with transparent dashboards.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/book-consultation">Book a Growth Consultation</Button>
              <Button href="/audits/free-website-audit" variant="secondary">Get a Free Audit</Button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-400 sm:grid-cols-4">
              {["Websites", "Campaigns", "CRM", "Analytics"].map((item) => (
                <span key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> {item}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}><DashboardVisual /></Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="The problem" title="Most businesses don’t have a marketing problem. They have a disconnected growth system." text="The website agency is separate. The ads agency is separate. SEO is separate. CRM is separate. Reports are unclear. Leads are not followed up properly. Owners cannot see true ROI." />
          <Reveal className="mt-10"><FragmentedSystemVisual /></Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="The solution" title="One accountable partner for strategy, creative, technology, media, automation and analytics." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.04}>
                <GlassCard className="h-full">
                  <pillar.icon className="h-8 w-8 text-cyan-200" />
                  <h3 className="mt-5 text-2xl font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{pillar.text}</p>
                  <Link href="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">Explore pillar <ArrowRight className="h-4 w-4" /></Link>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 text-slate-950">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Service pillars</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Built like a global agency platform, not a freelancer website.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl">
                <service.icon className="h-7 w-7 text-blue-600" />
                <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.short}</p>
                <div className="mt-5 text-sm font-bold text-blue-700">Explore Service →</div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Audit-first" title="We start with clarity before spending your money." text="Audit → Findings → Growth Plan → Campaign Launch → CRM Automation → Dashboard Reporting → Optimization." />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {audits.map((audit) => (
                <Link href={`/audits/${audit.slug}`} key={audit.slug} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]">
                  {audit.title}
                </Link>
              ))}
            </div>
          </div>
          <Reveal><AuditScorecard /></Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="AI-powered, human-led" title="AI gives speed. Senior human judgment gives results." />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <GlassCard><h3 className="text-xl font-semibold">AI helps with</h3><CheckList items={["Content drafts", "Creative variations", "Campaign analysis", "SEO research", "Reporting summaries", "Lead scoring", "Workflow automation"]} /></GlassCard>
              <GlassCard><h3 className="text-xl font-semibold">Humans protect</h3><CheckList items={["Strategy", "Brand voice", "Creative direction", "Media judgment", "Compliance", "Cultural nuance", "Business outcomes"]} /></GlassCard>
            </div>
          </div>
          <Reveal>
            <GlassCard className="min-h-[420px] overflow-hidden">
              <div className="flex items-center justify-between">
                <BrainCircuit className="h-10 w-10 text-violet-200" />
                <span className="rounded-full bg-violet-300/10 px-3 py-1 text-xs font-bold text-violet-200">AI growth engine</span>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-3">
                {Array.from({ length: 18 }).map((_, i) => <div key={i} className="h-16 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-cyan-300/[0.03]" />)}
              </div>
            </GlassCard>
          </Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="CRM + WhatsApp + reporting" title="Leads should not disappear after the form is submitted." text="Website forms connect to CRM, ad leads route to sales, WhatsApp auto-responses trigger, owners are assigned and management can see pipeline status." align="center" />
          <Reveal className="mt-12"><LeadJourneyVisual /></Reveal>
        </Container>
      </section>

      <section className="bg-white py-20 text-slate-950">
        <Container>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Industries</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Growth plans for the sectors that need serious digital execution.</h2></div>
            <Button href="/industries" className="self-start lg:self-auto">View Industries</Button>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="rounded-[1.6rem] border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-xl">
                <industry.icon className="h-7 w-7 text-blue-600" />
                <h3 className="mt-4 font-semibold">{industry.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{industry.intro}</p>
                <p className="mt-4 text-sm font-bold text-blue-700">See Growth Plan →</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Dashboard & analytics" title="Know what is working, what is wasting money, and what to do next." align="center" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[["Leads by source", "Google, Meta, SEO, LinkedIn and WhatsApp pipeline clarity."], ["Revenue attribution", "Connect spend, enquiries, proposals and closed deals."], ["Missed follow-ups", "See response delays, owner assignment and next action gaps."]].map(([title, text]) => (
              <GlassCard key={title}><Sparkles className="h-7 w-7 text-amber-200" /><h3 className="mt-5 text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{text}</p></GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Proof previews" title="Sample growth scenarios until real case studies are ready." text="These are consulting-style previews for how the agency can build funnels by industry without using fake testimonials." />
          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {growthScenarios.map((scenario) => (
              <GlassCard key={scenario.title} className="lg:p-5"><h3 className="font-semibold text-white">{scenario.title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{scenario.outcome}</p><p className="mt-4 text-sm font-bold text-emerald-200">{scenario.metric}</p></GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Process" title="Built for leads from day one." text="SEO, Google Ads, Meta Ads, LinkedIn, TikTok, referrals and WhatsApp outreach route into consultation, audit and proposal journeys." />
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Discover", "Audit", "Strategy", "Build", "Launch", "Optimize"].map((step, i) => <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><p className="text-xs text-cyan-200">0{i + 1}</p><p className="mt-2 font-semibold">{step}</p></div>)}
            </div>
          </div>
          <LeadForm />
        </Container>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-300/15 via-blue-500/15 to-violet-500/20 p-8 text-center shadow-2xl sm:p-14">
          <Globe2 className="mx-auto h-10 w-10 text-cyan-200" />
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Ready to build a growth system, not just a website?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Create a premium digital platform that impresses international clients and turns traffic into measurable business growth.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button href="/book-consultation">Book a Growth Consultation</Button><Button href="/audits/free-website-audit" variant="secondary">Request Free Audit</Button><WhatsAppButton /></div>
        </div>
      </section>
    </>
  );
}
