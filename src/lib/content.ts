import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  Car,
  ClipboardCheck,
  Code2,
  Compass,
  Factory,
  GraduationCap,
  HeartPulse,
  LineChart,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Search,
  ShoppingBag,
  Target,
  Truck,
  Users,
  Utensils,
  Video,
  WandSparkles,
  Workflow,
} from "lucide-react";

export const agency = {
  name: "Global Digital Growth Agency",
  shortName: "Growth Agency",
  descriptor: "Name TBD",
  email: "hello@example.com",
  phone: "+971 50 000 0000",
  whatsapp: "971500000000",
  whatsappText:
    "Hi, I want to book a growth consultation for my business.",
  baseUrl: "https://global-digital-growth-agency.vercel.app",
};

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Audits", href: "/audits" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  solves: string;
  deliverables: string[];
  industries: string[];
  outcomes: string[];
  hero: string;
};

export const services: Service[] = [
  { slug: "digital-marketing-strategy", title: "Digital Marketing Strategy", short: "Market research, funnel planning, competitor analysis and KPI frameworks.", icon: Compass, solves: "Disconnected marketing activity with no clear growth plan or ownership.", deliverables: ["Growth roadmap", "Competitor analysis", "Media plan", "KPI framework"], industries: ["SMEs", "Real estate", "Healthcare", "E-commerce"], outcomes: ["Clear priorities", "Smarter spend", "Better channel mix"], hero: "Turn scattered digital activity into one accountable growth plan." },
  { slug: "performance-marketing", title: "Performance Marketing", short: "Google, Meta, TikTok, LinkedIn, YouTube, landing pages and conversion tracking.", icon: Target, solves: "Ad spend that produces traffic but not enough qualified leads or revenue clarity.", deliverables: ["Campaign buildout", "Creative testing", "Retargeting", "Weekly optimization"], industries: ["Real estate", "Clinics", "E-commerce", "Automotive"], outcomes: ["Lower CPL", "Higher ROAS", "Cleaner attribution"], hero: "Launch smarter campaigns that connect ad spend to pipeline and revenue." },
  { slug: "seo-content", title: "SEO & Content", short: "Technical SEO, local SEO, keyword strategy, AEO content and Arabic/English content systems.", icon: Search, solves: "Websites that look fine but fail to rank, explain value or capture demand.", deliverables: ["SEO audit", "Keyword map", "Content calendar", "On-page optimization"], industries: ["Healthcare", "Professional services", "E-commerce", "Education"], outcomes: ["More organic traffic", "Better search visibility", "Higher authority"], hero: "Build search visibility that compounds beyond paid campaigns." },
  { slug: "website-development", title: "Website Development", short: "Premium corporate sites, landing pages, conversion systems and SEO-ready builds.", icon: MonitorSmartphone, solves: "Outdated websites that do not impress buyers or convert traffic into enquiries.", deliverables: ["UX architecture", "Responsive build", "CMS-ready pages", "Tracking setup"], industries: ["All industries", "Startups", "SMEs", "Enterprise"], outcomes: ["Premium credibility", "Better conversion", "Faster pages"], hero: "Create a website that behaves like a sales asset, not a static brochure." },
  { slug: "mobile-app-development", title: "Mobile App Development", short: "Customer apps, portals, booking flows, ecommerce apps and app analytics.", icon: Code2, solves: "Manual customer journeys that need a better digital product experience.", deliverables: ["Product scope", "UI/UX", "iOS/Android build", "Analytics"], industries: ["E-commerce", "Hospitality", "Healthcare", "Logistics"], outcomes: ["Better retention", "Digital convenience", "New revenue channels"], hero: "Design and build app experiences customers actually want to use." },
  { slug: "ui-ux-design", title: "UI/UX Design", short: "Wireframes, user journeys, design systems and conversion-focused interfaces.", icon: WandSparkles, solves: "Confusing customer journeys that cause drop-offs and low conversion rates.", deliverables: ["UX audit", "Wireframes", "Prototype", "Design system"], industries: ["SaaS", "E-commerce", "Healthcare", "Real estate"], outcomes: ["Less friction", "Cleaner journeys", "Higher conversion"], hero: "Make digital experiences clearer, faster and more persuasive." },
  { slug: "branding-creative", title: "Branding & Creative", short: "Brand identity, guidelines, campaign assets, social creative and presentation systems.", icon: Palette, solves: "Inconsistent brand visuals that weaken trust and campaign performance.", deliverables: ["Identity system", "Brand guidelines", "Ad creatives", "Social templates"], industries: ["Luxury", "Retail", "Hospitality", "Professional services"], outcomes: ["Stronger recall", "Premium look", "Reusable assets"], hero: "Build a brand system that looks premium everywhere it appears." },
  { slug: "social-media-management", title: "Social Media Management", short: "Content calendars, community, reels, LinkedIn, TikTok and platform reporting.", icon: Megaphone, solves: "Social channels that publish regularly but do not support business objectives.", deliverables: ["Content calendar", "Creative production", "Community management", "Reports"], industries: ["Restaurants", "Clinics", "Retail", "Education"], outcomes: ["Better consistency", "Audience growth", "More enquiries"], hero: "Turn social presence into a credible growth and trust channel." },
  { slug: "video-ai-creative", title: "Video & AI Creative", short: "Short-form video, scripts, motion graphics, AI concepts and ad creative variations.", icon: Video, solves: "Campaigns that need more creative testing without slowing production down.", deliverables: ["Video scripts", "Reels concepts", "Motion graphics", "AI variations"], industries: ["Automotive", "Real estate", "Hospitality", "E-commerce"], outcomes: ["Faster creative cycles", "Better engagement", "More tests"], hero: "Scale creative output while protecting brand quality and strategy." },
  { slug: "crm-whatsapp-automation", title: "CRM & WhatsApp Automation", short: "WhatsApp lead flows, CRM pipelines, automated follow-ups and sales team alerts.", icon: MessageCircle, solves: "Leads that disappear after forms, ads or WhatsApp messages are submitted.", deliverables: ["CRM setup", "WhatsApp flows", "Lead routing", "Follow-up reminders"], industries: ["Real estate", "Clinics", "Automotive", "Education"], outcomes: ["Faster response", "Fewer missed leads", "Better close rate"], hero: "Make every enquiry visible, assigned and followed up on time." },
  { slug: "marketing-automation", title: "Marketing Automation", short: "Email, CRM, lead scoring, lifecycle journeys and workflow automation.", icon: Workflow, solves: "Manual marketing operations that depend on people remembering every step.", deliverables: ["Journey mapping", "Automation flows", "Segmentation", "Lifecycle reporting"], industries: ["E-commerce", "Education", "B2B", "Healthcare"], outcomes: ["Less manual work", "Better nurture", "More predictable sales"], hero: "Automate the follow-up and nurture that turns interest into revenue." },
  { slug: "analytics-bi-reporting", title: "Analytics & BI Reporting", short: "GA4, GSC, ad platform dashboards, lead source attribution and management reports.", icon: BarChart3, solves: "Marketing reports that do not show what is working, wasting money or next.", deliverables: ["GA4 setup", "Looker dashboards", "Attribution", "Monthly BI reports"], industries: ["All industries", "E-commerce", "Lead gen", "Enterprise"], outcomes: ["Clear ROI", "Better decisions", "Management visibility"], hero: "Know what is working, what is wasting money and what to do next." },
  { slug: "ai-marketing-solutions", title: "AI Marketing Solutions", short: "AI content workflows, reporting summaries, lead scoring, chatbots and creative operations.", icon: Bot, solves: "Teams that want AI advantage but need practical workflows and quality control.", deliverables: ["AI workflow audit", "Prompt systems", "Automation design", "Training"], industries: ["Global SMEs", "Agencies", "E-commerce", "B2B"], outcomes: ["Faster execution", "Lower busywork", "Scalable operations"], hero: "Use AI to increase speed without losing strategic control." },
  { slug: "audit-growth-consulting", title: "Audit & Growth Consulting", short: "Website, SEO, ads, CRM and full-funnel digital growth audits with action plans.", icon: ClipboardCheck, solves: "Unclear performance problems before more money is spent on campaigns.", deliverables: ["Audit scorecard", "Findings report", "Growth plan", "Priority roadmap"], industries: ["All industries", "SMEs", "Founders", "CMOs"], outcomes: ["Clarity", "Prioritization", "Better investment decisions"], hero: "Start with diagnosis before committing budget to execution." },
];

export const pillars = [
  { title: "Strategy", icon: Compass, text: "Market research, funnel planning, KPI frameworks and growth roadmaps." },
  { title: "Build", icon: MonitorSmartphone, text: "Websites, apps, landing pages, UX systems and conversion architecture." },
  { title: "Brand", icon: Palette, text: "Identity, messaging, creative systems, video and campaign assets." },
  { title: "Market", icon: Megaphone, text: "SEO, paid media, content, social, retargeting and lead generation." },
  { title: "Automate", icon: Workflow, text: "CRM, WhatsApp, lifecycle journeys, lead routing and sales follow-up." },
  { title: "Measure", icon: LineChart, text: "Dashboards, attribution, GA4/GSC, ad reports and management BI." },
];

export type Industry = { slug: string; title: string; icon: LucideIcon; painPoints: string[]; services: string[]; kpis: string[]; intro: string; };
export const industries: Industry[] = [
  { slug: "real-estate-digital-marketing", title: "Real Estate", icon: Building2, intro: "Full-funnel campaigns for developers, brokers, communities and property launches.", painPoints: ["Low-quality leads", "Slow broker follow-up", "High CPL", "Poor landing pages"], services: ["Landing pages", "Google & Meta Ads", "WhatsApp CRM", "Retargeting"], kpis: ["Qualified leads", "CPL", "Site visits", "Bookings"] },
  { slug: "healthcare-clinic-marketing", title: "Healthcare & Clinics", icon: HeartPulse, intro: "Patient acquisition systems for clinics, hospitals, dental, aesthetic and wellness brands.", painPoints: ["Weak local visibility", "Missed enquiries", "Unclear patient acquisition cost", "Generic content"], services: ["Local SEO", "Google Ads", "Content", "Appointment flows"], kpis: ["Calls", "Appointments", "CPL", "Local ranking"] },
  { slug: "ecommerce-growth-agency", title: "E-commerce", icon: ShoppingBag, intro: "Growth systems for D2C brands, marketplaces and subscription businesses.", painPoints: ["Low conversion", "Poor tracking", "Ad fatigue", "Cart abandonment"], services: ["CRO", "Performance ads", "Email automation", "Analytics"], kpis: ["ROAS", "AOV", "CVR", "Revenue"] },
  { slug: "restaurant-hospitality-marketing", title: "Hospitality & Restaurants", icon: Utensils, intro: "Local visibility, bookings, content and reputation systems for restaurants and hotels.", painPoints: ["Low bookings", "Weak reviews", "Inconsistent content", "Poor local SEO"], services: ["Local SEO", "Reels", "Meta Ads", "Review campaigns"], kpis: ["Bookings", "Map views", "Calls", "Engagement"] },
  { slug: "automotive-digital-marketing", title: "Automotive", icon: Car, intro: "Campaigns for dealerships, service centers, EV brands and automotive parts businesses.", painPoints: ["Unqualified enquiries", "No CRM visibility", "Weak service booking funnel", "High ad waste"], services: ["Search Ads", "Service funnels", "CRM", "Video creatives"], kpis: ["Bookings", "Lead quality", "CPL", "Showroom visits"] },
  { slug: "logistics-marketing", title: "Logistics", icon: Truck, intro: "B2B digital growth for shipping, freight, warehousing and last-mile providers.", painPoints: ["Low inbound demand", "Complex sales cycles", "Weak B2B content", "No attribution"], services: ["LinkedIn", "SEO", "B2B landing pages", "CRM"], kpis: ["MQLs", "Pipeline", "Demo requests", "Organic traffic"] },
  { slug: "education-marketing", title: "Education & Training", icon: GraduationCap, intro: "Enrollment growth systems for institutes, universities, training centers and edtech.", painPoints: ["Seasonal leads", "Poor nurture", "Weak course pages", "Low conversion"], services: ["Lead funnels", "WhatsApp nurture", "SEO", "Meta/Google Ads"], kpis: ["Applications", "Course enquiries", "CPL", "Enrollment rate"] },
  { slug: "retail-fmcg-marketing", title: "Retail & FMCG", icon: ShoppingBag, intro: "Brand awareness, retail demand, ecommerce and social commerce growth systems.", painPoints: ["Weak brand recall", "Retail-to-online gap", "Creative inconsistency", "Limited reporting"], services: ["Brand campaigns", "Social commerce", "Influencer", "Dashboards"], kpis: ["Reach", "Sales", "Engagement", "Retail uplift"] },
  { slug: "manufacturing-marketing", title: "Manufacturing", icon: Factory, intro: "B2B visibility and enquiry generation for manufacturers, suppliers and industrial companies.", painPoints: ["Outdated websites", "Low inbound leads", "Poor technical content", "Long sales cycle"], services: ["Website", "SEO", "Catalog UX", "LinkedIn"], kpis: ["RFQs", "Organic traffic", "MQLs", "Pipeline value"] },
  { slug: "professional-services-marketing", title: "Professional Services", icon: Users, intro: "Trust-building digital systems for consultancies, legal, finance and advisory firms.", painPoints: ["Low authority", "Unclear positioning", "Weak lead capture", "No thought leadership"], services: ["Positioning", "Website", "Content", "LinkedIn"], kpis: ["Qualified calls", "Content leads", "Ranking", "Pipeline"] },
];

export const audits = [
  { slug: "free-website-audit", title: "Free Website Audit", icon: MonitorSmartphone, checks: ["UX clarity", "Page speed", "SEO basics", "Lead capture", "Tracking", "Mobile experience"], score: ["UX", "SEO", "Speed", "Tracking", "Conversion"] },
  { slug: "seo-audit", title: "SEO Audit", icon: Search, checks: ["Technical SEO", "Indexing", "Keyword gaps", "On-page structure", "Content quality", "GSC issues"], score: ["Technical", "Content", "Keywords", "Authority", "Local"] },
  { slug: "google-ads-audit", title: "Google Ads Audit", icon: Target, checks: ["Campaign structure", "Wasted spend", "Search terms", "Conversions", "Landing pages", "Bidding"], score: ["Structure", "Waste", "Quality", "Tracking", "CPL"] },
  { slug: "meta-ads-audit", title: "Meta Ads Audit", icon: Activity, checks: ["Pixel health", "Creative quality", "Audience overlap", "Lead quality", "Retargeting", "CPL trend"], score: ["Pixel", "Creative", "Audience", "CPL", "Funnel"] },
  { slug: "crm-audit", title: "CRM Audit", icon: MessageCircle, checks: ["Lead routing", "WhatsApp flow", "Sales owner", "Follow-up SLA", "Pipeline stages", "Notifications"], score: ["Routing", "Response", "Pipeline", "SLA", "Visibility"] },
  { slug: "full-growth-audit", title: "Full Digital Growth Audit", icon: BrainCircuit, checks: ["Website", "SEO", "Paid ads", "CRM", "Analytics", "Content", "Automation", "Reporting"], score: ["Website", "Traffic", "Leads", "CRM", "ROI"] },
];

export const growthScenarios = [
  { title: "Real estate lead generation funnel", outcome: "Landing pages + Google/Meta + WhatsApp CRM + broker follow-up dashboard.", metric: "Lower CPL + faster response" },
  { title: "Clinic patient acquisition funnel", outcome: "Local SEO + service pages + search ads + appointment lead routing.", metric: "More booked consultations" },
  { title: "E-commerce conversion growth plan", outcome: "CRO audit + ad creative testing + analytics + lifecycle automation.", metric: "Higher ROAS and CVR" },
  { title: "Restaurant local growth system", outcome: "Google Business Profile, reels, local ads, reviews and booking CTAs.", metric: "More calls and bookings" },
  { title: "Automotive service booking campaign", outcome: "Search demand capture, service landing pages, CRM and retargeting.", metric: "More service appointments" },
];
