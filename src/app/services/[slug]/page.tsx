import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BarChart3, CheckCircle2, Cpu, Layers3, LineChart, MonitorSmartphone, MousePointerClick, Palette, Target, Workflow } from "lucide-react";
import { Button, CheckList, Container, GlassCard, LeadForm, SectionHeading } from "@/components/ui";
import { services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return { title: `${s?.title ?? "Service"} | Global Digital Growth Agency`, description: s?.short };
}

type ServiceDetail = {
  promise: string;
  narrative: string;
  buyerQuestions: string[];
  execution: string[];
  proofBlocks: string[];
  stack: string[];
  conversionRules: string[];
  reporting: string[];
};

const serviceDetails: Record<string, ServiceDetail> = {
  "website-development": {
    promise: "Design and build websites that make prospects believe the business is credible, capable and ready for serious growth.",
    narrative: "A good website is not just pages and animation. It must explain the offer, show industry understanding, build trust, answer objections, capture leads, connect to CRM and make the business look premium enough for customers to take action. We design websites as conversion systems with strategy, UX, copy, visual direction, SEO structure, analytics and sales follow-up built in from day one.",
    buyerQuestions: ["Will this agency understand my industry and customer journey?", "Can the website look premium enough for my target customers?", "Will it generate leads or only look nice?", "Can service, industry and landing pages be built in a scalable way?", "Will tracking, SEO and CRM be connected properly?"],
    execution: ["Audit the current website, competitor sites, customer journey, SEO visibility and conversion gaps", "Create a page architecture for homepage, service pages, industry pages, case-study style pages, landing pages and lead capture", "Write conversion copy with clear headlines, proof, FAQs, objections, process and CTA logic", "Design premium visual systems with cards, dashboards, mockups, imagery direction, icons, typography and responsive layouts", "Build the website with performance, accessibility, schema, metadata, sitemap, analytics and CRM-ready forms", "Launch, measure, improve and add new landing pages for campaigns, SEO and industry-specific growth"],
    proofBlocks: ["Homepage that explains positioning in the first screen", "Service pages with deliverables, process, examples and outcomes", "Industry pages with use cases, platform playbooks and sector-specific CTAs", "Campaign landing pages for Google, Meta, TikTok and LinkedIn traffic", "Audit/lead magnet pages that convert visitors before they are ready to buy", "Dashboard/reporting pages that show the agency thinks about ROI"],
    stack: ["Next.js / React or CMS-ready builds", "Tailwind design system and reusable components", "SEO metadata, schema, sitemap and robots setup", "GA4, GTM, Meta Pixel, LinkedIn Insight Tag and TikTok Pixel placeholders", "CRM, email, WhatsApp and Google Sheet lead routing", "Vercel deployment and GitHub version control"],
    conversionRules: ["Every page needs a clear job: educate, prove, capture, route or convert", "Hero sections must explain value in seconds, not just look beautiful", "Industry pages must feel customized, not copied", "Forms must connect to a follow-up process", "Mobile layout must be designed first for speed and clarity", "Trust proof, process and FAQs must appear before the final CTA"],
    reporting: ["Traffic by page and channel", "Form submissions and WhatsApp clicks", "Top converting service and industry pages", "Campaign landing page conversion rate", "Scroll depth and CTA engagement", "Lead source and CRM follow-up status"],
  },
  "mobile-app-development": {
    promise: "Turn manual customer journeys into useful mobile products that improve convenience, retention and revenue.",
    narrative: "Apps should not be built just because the business wants an app. We first define the user problem, commercial goal, core workflows and retention logic. Then we design app screens, user journeys, push/WhatsApp/email touchpoints, analytics events and admin requirements so the product is useful after launch.",
    buyerQuestions: ["What type of app makes sense for my business?", "What features should be in version one versus later?", "How will customers sign up, book, buy, track or return?", "How will the app connect to website, CRM, payments or operations?", "How will we measure usage and retention?"],
    execution: ["Define app strategy, user personas, business objectives and MVP scope", "Map user flows for onboarding, browsing, booking, ordering, support, payments and notifications", "Design polished mobile UI screens with clear hierarchy, states, empty screens and microcopy", "Build front-end and backend flows or prepare a developer-ready product specification", "Connect analytics, CRM, push notifications, payment or booking systems where required", "Launch iteratively and improve using user behavior, retention and conversion data"],
    proofBlocks: ["Booking apps for clinics, salons, training centers and hospitality", "E-commerce apps with product discovery, carts, offers and loyalty", "Customer portals for real estate, logistics, education or service businesses", "Internal team apps for leads, tasks, inspections, approvals and reporting", "Marketplace or directory apps with profiles, filters, chats and payments", "AI-assisted app features such as recommendations, support bots and summaries"],
    stack: ["React Native / Expo or suitable cross-platform approach", "API and backend planning", "Authentication and user profile flows", "Push notifications and lifecycle messaging", "Analytics events and conversion funnels", "Payment, booking, CRM or operational integrations"],
    conversionRules: ["Start with one clear repeated-use case", "Keep onboarding short and useful", "Design empty, loading, error and success states properly", "Make primary actions thumb-friendly", "Use notifications only where they add value", "Measure activation, retention and revenue events"],
    reporting: ["Installs and activations", "Signup completion", "Feature usage", "Booking/order conversion", "Retention by cohort", "Push notification performance"],
  },
};

function getDetail(slug: string, title: string, deliverables: string[], outcomes: string[]): ServiceDetail {
  return serviceDetails[slug] ?? {
    promise: `Turn ${title.toLowerCase()} into a clear, measurable growth capability instead of a disconnected marketing activity.`,
    narrative: `This service is planned as part of the full growth system: strategy, creative, execution, automation and measurement. The page explains what we do, how it works, what the client can expect, and how performance will be evaluated so prospects feel they are dealing with a serious agency, not a vendor selling generic tasks.`,
    buyerQuestions: ["What exactly will be delivered?", "How will this help my business generate better leads or revenue?", "How does this connect with website, campaigns, CRM and reporting?", "What will happen in the first 30 to 90 days?", "How will success be measured?"],
    execution: ["Audit the current state and identify the biggest growth gaps", "Define objectives, audience, offer, channel role and conversion path", `Create the core assets: ${deliverables.slice(0, 3).join(", ")}`, "Launch in a controlled way with tracking and clear ownership", "Review performance weekly and prioritize improvements", "Scale what works into repeatable campaigns, content or automation systems"],
    proofBlocks: deliverables.concat(outcomes).slice(0, 6),
    stack: ["Strategy workshop and audit", "Creative and copy direction", "Campaign or page buildout", "CRM/WhatsApp/email integration where relevant", "Analytics and dashboard setup", "Ongoing optimization rhythm"],
    conversionRules: ["Make the offer easy to understand", "Show process before asking for trust", "Connect the service to business outcomes", "Use proof, FAQs and objection handling", "Measure real conversion events", "Keep every CTA clear and action-oriented"],
    reporting: outcomes.concat(["Lead source", "Conversion rate", "Cost per result", "Pipeline impact", "Next action priorities"]).slice(0, 6),
  };
}

function WebsitePortfolioShowcase() {
  const concepts = [
    { industry: "Real Estate", caption: "Cinematic project pages, floor-plan CTAs, payment-plan sections and broker-ready enquiry routing.", color: "from-cyan-300/30 via-blue-500/10" },
    { industry: "Healthcare", caption: "Treatment pages, doctor profiles, appointment flows, patient FAQs and local trust signals.", color: "from-emerald-300/25 via-cyan-500/10" },
    { industry: "E-commerce", caption: "Product storytelling, collection UX, offer blocks, reviews, cart recovery and performance landing pages.", color: "from-violet-400/30 via-fuchsia-500/10" },
    { industry: "Hospitality", caption: "Ambience-led visuals, menus, packages, booking CTAs, reviews and event enquiry flows.", color: "from-amber-300/30 via-orange-500/10" },
    { industry: "Manufacturing", caption: "Product catalog UX, technical specs, certifications, RFQ forms and capability storytelling.", color: "from-slate-200/25 via-cyan-500/10" },
    { industry: "Professional Services", caption: "Authority pages, advisor profiles, thought leadership, consultation flows and lead magnets.", color: "from-blue-300/25 via-violet-500/10" },
  ];

  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="Website concepts" title="Show prospects how their website could look across industries." text="These portfolio-style visual blocks give buyers confidence that we can design serious websites for different sectors — not one generic template reused everywhere." align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => (
            <div key={concept.industry} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 shadow-2xl backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-200/40">
              <div className={`relative min-h-64 overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${concept.color} to-transparent p-4`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.18),transparent_14rem)]" />
                <div className="relative rounded-2xl border border-white/15 bg-slate-950/70 p-3 shadow-2xl">
                  <div className="mb-3 flex gap-1.5"><span className="h-2 w-2 rounded-full bg-red-300" /><span className="h-2 w-2 rounded-full bg-amber-300" /><span className="h-2 w-2 rounded-full bg-emerald-300" /></div>
                  <div className="h-24 rounded-xl bg-white/10" />
                  <div className="mt-3 h-3 w-3/4 rounded-full bg-white/20" />
                  <div className="mt-2 h-3 w-1/2 rounded-full bg-white/10" />
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="h-14 rounded-xl bg-white/10" />
                    <div className="h-14 rounded-xl bg-white/10" />
                    <div className="h-14 rounded-xl bg-white/10" />
                  </div>
                  <div className="mt-4 h-9 w-32 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-xl font-semibold text-white">{concept.industry} website</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{concept.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AppPossibilityShowcase() {
  const apps = [
    ["Clinic booking app", "Appointments, doctor profiles, reminders, prescriptions and follow-up care."],
    ["E-commerce app", "Product discovery, offers, cart, payments, loyalty and repeat purchase flows."],
    ["Real estate portal", "Property shortlists, viewing requests, document updates and agent chat."],
    ["Logistics tracker", "Shipment status, proof of delivery, support tickets and customer alerts."],
    ["Education app", "Course browsing, class schedules, progress, payments and student support."],
    ["Internal sales app", "Lead assignment, call notes, pipeline stages, reminders and manager dashboards."],
  ];

  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="App possibilities" title="Make the buyer imagine the product they could launch." text="For app projects, prospects need to see practical possibilities: what screens, workflows and business outcomes can be created for their industry." align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {apps.map(([title, caption], index) => (
            <GlassCard key={title} className="overflow-hidden p-5">
              <div className="mx-auto w-40 rounded-[2rem] border border-white/15 bg-slate-950 p-3 shadow-2xl">
                <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-white/20" />
                <div className="rounded-[1.4rem] bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-violet-500/20 p-3">
                  <div className="h-16 rounded-2xl bg-white/15" />
                  <div className="mt-3 space-y-2">
                    <div className="h-3 rounded-full bg-white/25" />
                    <div className="h-3 w-2/3 rounded-full bg-white/15" />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="h-12 rounded-xl bg-white/10" />
                    <div className="h-12 rounded-xl bg-white/10" />
                  </div>
                  <div className="mt-4 h-9 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" />
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-200/10 font-mono text-xs font-bold text-cyan-100">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">{caption}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CapabilityVisual({ title }: { title: string }) {
  const blocks = ["Strategy", "Copy", "Design", "Build", "Track", "Improve"];
  return (
    <GlassCard className="relative overflow-hidden">
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-violet-400/20 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <MonitorSmartphone className="h-12 w-12 text-cyan-200" />
          <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">Conversion system</span>
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-white">{title} delivery cockpit</h3>
        <div className="mt-8 grid grid-cols-2 gap-3">
          {blocks.map((block) => (
            <div key={block} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
              <p className="text-sm font-semibold text-white">{block}</p>
              <div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" /></div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

function DetailCard({ icon: Icon, title, items }: { icon: typeof Target; title: string; items: string[] }) {
  return (
    <GlassCard className="h-full">
      <Icon className="h-7 w-7 text-cyan-200" />
      <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
      <div className="mt-5"><CheckList items={items} /></div>
    </GlassCard>
  );
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const d = getDetail(s.slug, s.title, s.deliverables, s.outcomes);
  const Icon = s.icon;

  return (
    <>
      <section className="relative overflow-hidden bg-grid py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_34rem),radial-gradient(circle_at_85%_15%,rgba(139,92,246,0.16),transparent_32rem)]" />
        <Container className="relative grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              <Icon className="h-4 w-4" /> Service capability
            </div>
            <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl">{s.title} built to convert, prove value and scale.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{d.promise}</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">{d.narrative}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/book-consultation">Book Consultation</Button>
              <Button href="/audits/full-growth-audit" variant="secondary">Request Audit</Button>
            </div>
          </div>
          <CapabilityVisual title={s.title} />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Buyer confidence" title="Answer the questions prospects ask before they contact you." text="Every service page needs enough detail for a serious buyer to understand the value, process, expectations and business reason to work with the agency." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {d.buyerQuestions.map((question, index) => (
              <GlassCard key={question} className="lg:p-5">
                <span className="font-mono text-xs font-bold text-cyan-200">0{index + 1}</span>
                <p className="mt-4 text-sm font-semibold leading-6 text-white">{question}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      {s.slug === "website-development" ? <WebsitePortfolioShowcase /> : null}
      {s.slug === "mobile-app-development" ? <AppPossibilityShowcase /> : null}

      <section className="bg-white py-20 text-slate-950">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Execution plan</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">What happens when we deliver this service.</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">A serious page should show the plan clearly so the visitor can imagine how the work will happen and why it is structured.</p>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {d.execution.map((step, index) => (
              <div key={step} className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 sm:grid-cols-[4rem_1fr]">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-600 font-mono text-sm font-bold text-white">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-base leading-7 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="What we show on the page" title="Proof, deliverables and outcomes need to be visible before the lead form." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {d.proofBlocks.map((proof) => (
              <GlassCard key={proof} className="lg:p-6">
                <CheckCircle2 className="h-7 w-7 text-emerald-300" />
                <p className="mt-5 text-base font-semibold leading-7 text-white">{proof}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-5 lg:grid-cols-3">
          <DetailCard icon={Layers3} title="Key deliverables" items={s.deliverables} />
          <DetailCard icon={Target} title="Best-fit industries" items={s.industries} />
          <DetailCard icon={BarChart3} title="Business outcomes" items={s.outcomes} />
        </Container>
      </section>

      <section className="bg-white py-20 text-slate-950">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Operating system</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Tools, rules and reporting that make the work accountable.</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">The work should not end with delivery. It must be connected to tracking, improvement and management visibility.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[{ title: "Stack & setup", items: d.stack, icon: Cpu }, { title: "Conversion rules", items: d.conversionRules, icon: MousePointerClick }, { title: "Reporting view", items: d.reporting, icon: LineChart }, { title: "Creative quality", items: ["Premium typography", "Strong captions", "Industry-specific visuals", "Clear page hierarchy", "Mobile-first sections", "CTA consistency"], icon: Palette }].map((block) => (
              <div key={block.title} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <block.icon className="h-6 w-6 text-blue-600" />
                <h3 className="mt-4 text-xl font-semibold">{block.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                  {block.items.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Next step" title="Turn this service into a measurable growth plan." text="We can audit the current state, identify gaps, and recommend the best content, design, channel, build and automation priorities." />
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Audit", "Design", "Launch"].map((step) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <Workflow className="h-5 w-5 text-cyan-200" />
                  <p className="mt-3 font-semibold text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <LeadForm title={`Discuss ${s.title}`} />
        </Container>
      </section>
    </>
  );
}
