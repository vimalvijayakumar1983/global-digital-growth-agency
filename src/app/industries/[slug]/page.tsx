import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, BarChart3, CheckCircle2, Layers3, LineChart, MessageCircle, MousePointerClick, Sparkles, Target } from "lucide-react";
import { Button, CheckList, Container, GlassCard, LeadForm, SectionHeading } from "@/components/ui";
import { industries } from "@/lib/content";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  return {
    title: `${i?.title ?? "Industry"} Digital Marketing Growth Plan`,
    description: i?.intro,
  };
}

type UseCase = { title: string; challenge: string; execution: string; outcome: string };
type IndustryDetail = {
  promise: string;
  narrative: string;
  valueAdd: string[];
  useCases: UseCase[];
  executionPlan: string[];
  channelPlan: string[];
  conversionAssets: string[];
  contentAngles: string[];
  automation: string[];
  dashboard: string[];
};

type PlatformPlay = { platform: string; role: string; execution: string; metrics: string };


const details: Record<string, IndustryDetail> = {
  "real-estate-digital-marketing": {
    promise: "Turn property interest into qualified enquiries, site visits and broker-ready conversations.",
    narrative: "Real estate buyers compare location, lifestyle, developer credibility, finance options and urgency before they speak to sales. We build a full acquisition system around that journey: premium landing pages for each project, high-intent Google campaigns, aspirational Meta creative, retargeting, WhatsApp routing, broker assignment and dashboards that show where real opportunities are coming from.",
    valueAdd: ["Project launch funnels for developers, brokers and communities", "Lead quality filters based on budget, location, property type and buying timeline", "WhatsApp and CRM routing so every enquiry reaches the right sales owner", "Retargeting journeys for people who viewed floor plans, price pages or location content", "Reporting that separates cheap leads from serious buyers"],
    useCases: [
      { title: "New project launch", challenge: "The campaign needs fast awareness but the sales team only wants serious buyers.", execution: "We create a launch landing page, run Google search for high-intent terms, Meta/Instagram for lifestyle demand, and route leads into CRM with qualification fields.", outcome: "More qualified enquiries, clearer CPL, faster broker follow-up and better launch momentum." },
      { title: "Luxury property campaign", challenge: "High-net-worth buyers need trust, exclusivity and premium presentation before they enquire.", execution: "We build a cinematic page with location story, investment logic, gallery sections, concierge CTAs and retargeting based on engagement depth.", outcome: "Stronger perceived value and higher-quality conversations." },
      { title: "Broker lead management", challenge: "Leads are generated but response time and ownership are unclear.", execution: "We implement CRM stages, WhatsApp notifications, lead owner assignment, follow-up reminders and missed-lead reports.", outcome: "Fewer lost leads and better sales accountability." },
    ],
    executionPlan: ["Audit current website, project pages, ad accounts, lead forms and broker follow-up process", "Define buyer segments by budget, nationality, location intent, investor vs end-user and urgency", "Create campaign landing pages with proof, location, payment plan, FAQs and strong enquiry paths", "Launch Google, Meta and retargeting campaigns with channel-specific creative", "Connect every lead source to CRM, WhatsApp alerts and dashboard reporting", "Optimize weekly using lead quality, call outcomes, site visit bookings and cost per qualified enquiry"],
    channelPlan: ["Google Search for high-intent property queries", "Meta and Instagram for lifestyle discovery", "YouTube and short-form video for project storytelling", "SEO pages for locations, communities and investment guides", "LinkedIn for investor and B2B partnership visibility"],
    conversionAssets: ["Project landing pages", "Floor-plan enquiry CTAs", "WhatsApp lead qualification", "Downloadable brochure flow", "Site visit booking forms", "Broker follow-up scripts"],
    contentAngles: ["Why this location is growing", "Payment plan explained", "Investor vs end-user benefits", "Community lifestyle guide", "Construction and handover updates", "Buyer FAQ content"],
    automation: ["Instant WhatsApp acknowledgement", "Lead scoring by budget and intent", "Broker assignment by project or language", "Reminder flows for brochure viewers", "Missed-follow-up alerts"],
    dashboard: ["CPL by project", "Qualified lead rate", "Site visit bookings", "Broker response time", "Lead source quality", "Pipeline value by campaign"],
  },
  "healthcare-clinic-marketing": {
    promise: "Build a compliant patient acquisition engine that earns trust before the first appointment.",
    narrative: "Healthcare marketing is not only about enquiries; it is about confidence, local visibility, service clarity and frictionless appointment booking. We create service pages, local SEO systems, search campaigns, reputation flows, appointment routing and patient-friendly content that explains treatments without overpromising.",
    valueAdd: ["Service-specific acquisition funnels for dental, aesthetic, wellness and specialist clinics", "Local SEO and Google Business Profile optimization for nearby patient demand", "Search campaigns for high-intent treatment and doctor queries", "Appointment flows connected to CRM, WhatsApp or reception teams", "Content that builds trust while respecting compliance and sensitivity"],
    useCases: [
      { title: "Dental or aesthetic service growth", challenge: "People search for treatments but compare clinics heavily before booking.", execution: "We build service pages with benefits, process, FAQs, doctor credibility, reviews and Google Ads campaigns around high-intent keywords.", outcome: "More appointment enquiries and better treatment-specific visibility." },
      { title: "Multi-branch clinic visibility", challenge: "Each branch needs local rankings, calls and map visibility.", execution: "We optimize branch pages, Google profiles, local schema, review flows and location-based campaigns.", outcome: "More calls, direction requests and appointment bookings by branch." },
      { title: "Missed enquiry recovery", challenge: "Reception teams receive leads from forms, calls and WhatsApp but follow-up is inconsistent.", execution: "We connect lead sources to CRM, set response SLAs and create reminder flows for uncontacted patients.", outcome: "Fewer missed patients and clearer front-desk accountability." },
    ],
    executionPlan: ["Audit treatment pages, local search visibility, booking flow, reviews and tracking", "Prioritize services by margin, demand, seasonality and clinic capacity", "Create SEO-ready treatment pages with clear patient education and booking CTAs", "Launch Google Ads for high-intent treatment keywords and retargeting for page visitors", "Set up WhatsApp or CRM workflows for appointment requests and follow-ups", "Review weekly by bookings, call quality, cost per appointment and branch performance"],
    channelPlan: ["Google Search for treatment demand", "Local SEO and Google Maps", "Meta for awareness, education and retargeting", "YouTube or reels for doctor-led explainers", "Email/WhatsApp for patient nurture and reminders"],
    conversionAssets: ["Treatment pages", "Doctor profile pages", "Appointment forms", "Insurance or payment FAQs", "Before/after policy-safe galleries", "Review and testimonial sections"],
    contentAngles: ["Treatment process explained", "When to see a specialist", "Recovery and aftercare guides", "Doctor expertise", "Clinic technology", "Common patient questions"],
    automation: ["Appointment request alerts", "Missed-call tracking", "Follow-up reminders", "Review request workflows", "Treatment enquiry tagging"],
    dashboard: ["Appointments by service", "Cost per booked patient", "Calls by branch", "Local ranking movement", "Review growth", "Reception response time"],
  },
  "ecommerce-growth-agency": {
    promise: "Increase revenue by improving traffic quality, conversion rate, repeat purchase and attribution clarity.",
    narrative: "E-commerce growth depends on the full machine: product pages, offers, paid media, creative testing, email/SMS, analytics, feed quality and retention. We connect those parts so the brand understands which products, audiences, creatives and journeys actually drive profitable revenue.",
    valueAdd: ["Conversion-focused product and collection page improvements", "Meta, Google Shopping, TikTok and retargeting campaign systems", "Email and WhatsApp automation for abandoned carts, repeat purchase and winback", "Creative testing frameworks for offers, products and hooks", "Dashboards for ROAS, MER, AOV, CVR and product-level performance"],
    useCases: [
      { title: "Low conversion store", challenge: "Traffic arrives but too few visitors add to cart or purchase.", execution: "We audit UX, speed, product content, trust signals and checkout friction, then rebuild key templates and test offer placement.", outcome: "Higher conversion rate and better paid media efficiency." },
      { title: "Ad fatigue and declining ROAS", challenge: "Campaigns worked before but creative performance is dropping.", execution: "We create a structured testing calendar with hooks, UGC-style concepts, product demos, bundles and retargeting messages.", outcome: "More creative learnings and stronger revenue consistency." },
      { title: "Retention gap", challenge: "Customers buy once but do not return.", execution: "We build post-purchase flows, replenishment reminders, cross-sell journeys and VIP segmentation.", outcome: "Higher lifetime value and more predictable revenue." },
    ],
    executionPlan: ["Audit analytics, product feed, checkout, product pages, email flows and ad account structure", "Identify hero products, margin winners, bundle opportunities and conversion blockers", "Improve product pages with better proof, images, FAQs, offer logic and checkout paths", "Launch paid media testing across Google Shopping, Meta, TikTok and retargeting", "Build lifecycle automations for cart recovery, post-purchase, winback and product education", "Optimize using ROAS, MER, CVR, AOV, repeat purchase and contribution margin"],
    channelPlan: ["Google Shopping and Performance Max", "Meta conversion campaigns", "TikTok discovery and creative testing", "SEO for collections and product education", "Email, SMS or WhatsApp retention"],
    conversionAssets: ["Product page templates", "Bundle and offer pages", "Cart recovery flows", "Review sections", "Size/fit or usage guides", "Landing pages for campaigns"],
    contentAngles: ["Problem-solution product stories", "Before/after usage", "Founder or brand story", "Comparison guides", "Gift guides", "Bundle education"],
    automation: ["Abandoned cart", "Browse abandonment", "Post-purchase education", "Cross-sell and replenishment", "VIP and winback flows"],
    dashboard: ["ROAS and MER", "AOV and CVR", "Revenue by product", "Cart abandonment", "Email revenue", "Repeat purchase rate"],
  },
  "restaurant-hospitality-marketing": {
    promise: "Create local demand, stronger bookings and a more memorable guest journey.",
    narrative: "Restaurants and hotels win when people discover them at the right moment, trust the experience and can book easily. We build local visibility, menu/event storytelling, review systems, social content, booking campaigns and reputation workflows that turn attention into visits.",
    valueAdd: ["Google Maps and local SEO optimization", "Reels, stories and campaign content for ambience, food, rooms and experiences", "Booking-focused landing pages and seasonal offers", "Review generation and reputation response workflows", "Campaign dashboards for calls, bookings, map views and engagement"],
    useCases: [
      { title: "Restaurant booking growth", challenge: "The venue has good food but inconsistent online visibility and weak booking flow.", execution: "We optimize Google Business Profile, create menu/event content, run local Meta campaigns and improve reservation CTAs.", outcome: "More calls, map actions and table bookings." },
      { title: "Hotel seasonal campaign", challenge: "Occupancy depends on seasonal demand and competing offers.", execution: "We build campaign pages, creative sets, retargeting and package-led ads for families, couples or corporate guests.", outcome: "Better package visibility and stronger direct booking enquiries." },
      { title: "Reputation improvement", challenge: "Reviews exist but are not actively managed or used in marketing.", execution: "We create review request flows, response templates and proof sections on landing pages.", outcome: "Higher trust and more conversion from local search." },
    ],
    executionPlan: ["Audit Google profile, booking journeys, review profile, social content and competitor visibility", "Define priority offers such as brunch, rooms, events, delivery, catering or corporate packages", "Create content pillars around ambience, menu, chef, guest experience and seasonal moments", "Launch local ads, retargeting and search campaigns tied to booking CTAs", "Set up review request flows and reputation reporting", "Optimize monthly by booking volume, calls, map actions, occupancy or footfall indicators"],
    channelPlan: ["Google Maps and local search", "Instagram and TikTok reels", "Meta local awareness and conversion ads", "SEO for location and experience pages", "WhatsApp or booking engine integration"],
    conversionAssets: ["Menu landing pages", "Event pages", "Room/package pages", "Booking CTAs", "Review sections", "Photo/video galleries"],
    contentAngles: ["Signature dishes", "Behind the scenes", "Chef stories", "Weekend experiences", "Corporate events", "Guest reviews"],
    automation: ["Reservation enquiry alerts", "Review request after visit", "Event follow-up flows", "WhatsApp responses", "Lead tagging by offer"],
    dashboard: ["Bookings", "Calls", "Map views", "Review rating", "Content engagement", "Campaign cost per enquiry"],
  },
  "automotive-digital-marketing": {
    promise: "Generate better vehicle, service and parts enquiries with clear showroom and booking follow-up.",
    narrative: "Automotive buyers research deeply before they call. Service customers compare convenience and trust. We create campaigns and pages for dealerships, workshops, EV brands and parts businesses, then connect enquiries to CRM so every test drive, quote request and service booking is trackable.",
    valueAdd: ["Search campaigns for model, service, repair and parts intent", "Landing pages for test drives, service bookings and offers", "Video creative for models, features, comparisons and service expertise", "CRM routing for sales, service and parts enquiries", "Dashboards showing lead quality, bookings and showroom impact"],
    useCases: [
      { title: "Dealership test-drive funnel", challenge: "Campaigns produce enquiries but test-drive intent is mixed.", execution: "We create model pages, comparison content, lead forms with intent questions and sales routing.", outcome: "Higher-quality leads and clearer test-drive pipeline." },
      { title: "Service center booking campaign", challenge: "Customers search for repairs but choose whoever appears credible and convenient.", execution: "We build service pages, Google Ads, map optimization and WhatsApp booking flows.", outcome: "More service appointments with trackable CPL." },
      { title: "Parts or accessories demand", challenge: "Inventory is available but online discovery is weak.", execution: "We improve catalog UX, SEO pages, shopping/search campaigns and enquiry forms.", outcome: "More product enquiries and better demand visibility." },
    ],
    executionPlan: ["Audit website, inventory pages, service pages, CRM and existing campaign data", "Segment funnels by new cars, used cars, service, parts, fleet and EV interest", "Build landing pages with specs, proof, finance options, FAQs and booking CTAs", "Launch search, social, video and retargeting campaigns by intent level", "Route enquiries to the correct team with WhatsApp and CRM status tracking", "Optimize using booking quality, showroom visits, service revenue and lead-to-sale data"],
    channelPlan: ["Google Search for service and model demand", "YouTube and Meta for model storytelling", "SEO for service and comparison pages", "Retargeting for inventory viewers", "LinkedIn for fleet and B2B offers"],
    conversionAssets: ["Test-drive forms", "Service booking pages", "Offer pages", "Inventory UX", "WhatsApp quote flows", "Comparison guides"],
    contentAngles: ["Model comparisons", "Service tips", "EV education", "Ownership cost", "Finance offers", "Workshop credibility"],
    automation: ["Sales/service lead routing", "Booking reminders", "Quote follow-ups", "Lost lead recovery", "Lead source tagging"],
    dashboard: ["Test-drive requests", "Service bookings", "CPL by offer", "Lead quality", "Showroom visits", "Response time"],
  },
  "logistics-marketing": {
    promise: "Convert complex B2B services into clear demand, RFQs and qualified pipeline.",
    narrative: "Logistics buyers need reliability, coverage, compliance, pricing clarity and confidence. We make freight, warehousing, shipping and last-mile services easier to understand and easier to enquire about through B2B SEO, LinkedIn, landing pages, case-style content and CRM reporting.",
    valueAdd: ["B2B positioning for complex logistics services", "SEO pages for routes, industries, services and trade lanes", "RFQ-focused landing pages and lead qualification forms", "LinkedIn campaigns for decision-makers and procurement teams", "CRM dashboards for enquiries, pipeline value and sales cycle stage"],
    useCases: [
      { title: "Freight RFQ generation", challenge: "The website lists services but does not convert procurement visitors into quote requests.", execution: "We create route/service pages, RFQ forms, trust proof and search campaigns for high-intent logistics terms.", outcome: "More qualified RFQs and clearer source attribution." },
      { title: "Warehouse or 3PL lead pipeline", challenge: "Sales cycles are long and buyers need education before they speak.", execution: "We build industry pages, LinkedIn content, downloadable checklists and nurture flows.", outcome: "More informed B2B conversations and better MQL quality." },
      { title: "Last-mile provider visibility", challenge: "Competition is strong and service differentiation is unclear.", execution: "We clarify positioning, create use-case content and build performance pages around speed, coverage and SLA reliability.", outcome: "Stronger trust and better inbound enquiries." },
    ],
    executionPlan: ["Audit website clarity, service taxonomy, SEO visibility, RFQ process and sales follow-up", "Map buyer segments by industry, shipment type, geography and urgency", "Create B2B landing pages with capabilities, coverage, proof, compliance and RFQ CTAs", "Launch SEO, Google Search and LinkedIn campaigns for decision-makers", "Connect RFQs to CRM stages and sales ownership", "Optimize by MQL quality, pipeline value, quote rate and closed opportunities"],
    channelPlan: ["SEO for services, routes and industries", "Google Search for high-intent RFQ terms", "LinkedIn for procurement and operations leaders", "Retargeting for service-page visitors", "Email nurture for long-cycle leads"],
    conversionAssets: ["RFQ forms", "Capability pages", "Coverage maps", "Industry solution pages", "Compliance proof", "Case-study style explainers"],
    contentAngles: ["Trade lane guides", "Warehouse cost factors", "SLA and reliability education", "Industry logistics challenges", "Customs and compliance", "Technology visibility"],
    automation: ["RFQ routing", "Lead scoring by shipment value", "Sales owner assignment", "Proposal follow-up reminders", "Pipeline stage reporting"],
    dashboard: ["RFQs", "MQLs", "Pipeline value", "Quote rate", "Organic traffic", "Sales cycle stage"],
  },
  "education-marketing": {
    promise: "Grow enquiries, applications and enrollments with clear course journeys and nurture systems.",
    narrative: "Education buyers need confidence in outcomes, curriculum, faculty, fees and career value. We build enrollment funnels for institutes, universities, training centers and edtech brands using course pages, search campaigns, social proof, WhatsApp nurture and dashboards from enquiry to enrollment.",
    valueAdd: ["Course-specific landing pages and SEO architecture", "Google and Meta campaigns for enrollment seasons", "WhatsApp nurture flows for parents, students and professionals", "Lead scoring by course interest, intake and readiness", "Dashboards connecting enquiries to applications and enrollments"],
    useCases: [
      { title: "Course enrollment campaign", challenge: "Leads arrive but many are not ready or do not understand the course value.", execution: "We build course pages, run search/social ads and create WhatsApp/email nurture with FAQs, outcomes and deadline reminders.", outcome: "More applications and stronger enrollment conversion." },
      { title: "University or institute visibility", challenge: "Programs need organic visibility and trust across many course categories.", execution: "We create SEO course hubs, faculty proof, career outcome content and structured internal linking.", outcome: "More qualified organic enquiries over time." },
      { title: "Training center lead follow-up", challenge: "Counsellors receive leads but follow-up is inconsistent.", execution: "We connect forms to CRM, assign owners, automate reminders and report response status.", outcome: "Better counselling productivity and fewer lost leads." },
    ],
    executionPlan: ["Audit course pages, enquiry forms, counselor follow-up, SEO rankings and campaign performance", "Prioritize programs by margin, intake deadline, demand and capacity", "Create high-converting course pages with curriculum, outcomes, fees, FAQs and proof", "Launch Google, Meta, LinkedIn or TikTok campaigns by student segment", "Build WhatsApp nurture for enquiry-to-application and application-to-enrollment", "Optimize by CPL, application rate, enrollment rate and counselor response time"],
    channelPlan: ["Google Search for course intent", "Meta and TikTok for awareness and retargeting", "LinkedIn for professional training", "SEO for course hubs and career content", "WhatsApp/email nurture"],
    conversionAssets: ["Course pages", "Brochure download flows", "Application forms", "Open day pages", "Scholarship pages", "Counsellor scripts"],
    contentAngles: ["Career outcomes", "Course comparison", "Faculty credibility", "Student success stories", "Fee and schedule FAQs", "Deadline reminders"],
    automation: ["Brochure follow-up", "Counsellor assignment", "Deadline reminders", "Open day invitations", "Application status nurture"],
    dashboard: ["Course enquiries", "Applications", "Enrollment rate", "CPL", "Counsellor response", "Intake pipeline"],
  },
  "retail-fmcg-marketing": {
    promise: "Connect brand awareness, retail demand, ecommerce and social commerce into one growth system.",
    narrative: "Retail and FMCG brands need visibility, recall, distribution support and measurable demand. We build campaigns, content systems, influencer workflows, ecommerce journeys and dashboards that show how awareness and performance activity support sales.",
    valueAdd: ["Brand campaigns with performance measurement", "Retail-to-online and online-to-store journeys", "Influencer and creator content systems", "Social commerce and ecommerce campaign support", "Dashboards for reach, engagement, sales signals and channel contribution"],
    useCases: [
      { title: "New product launch", challenge: "The brand needs awareness quickly but also wants measurable demand.", execution: "We create launch content, influencer briefs, retail locator pages, paid social and retargeting journeys.", outcome: "Higher product visibility and clearer launch performance." },
      { title: "Retail demand support", challenge: "Products are available in stores but consumers are not actively asking for them.", execution: "We build geo-targeted campaigns, store locator CTAs and social proof content.", outcome: "Stronger awareness and better retail pull." },
      { title: "Social commerce growth", challenge: "Audiences engage with content but do not move to purchase.", execution: "We create product education, offer pages, shopping campaigns and WhatsApp/order flows.", outcome: "More measurable sales actions from social channels." },
    ],
    executionPlan: ["Audit brand presence, ecommerce readiness, retail availability, creative consistency and tracking", "Define product priorities, audience segments, seasonal moments and channel roles", "Build campaign assets, landing pages, store locator flows and influencer briefs", "Launch paid social, search, shopping, creator and retargeting campaigns", "Connect ecommerce, social commerce or lead/order flows to reporting", "Optimize by reach quality, engagement, sales signals, ROAS and retail uplift indicators"],
    channelPlan: ["Meta, TikTok and YouTube for awareness", "Google Search and Shopping for demand capture", "Influencer and creator partnerships", "SEO for product education", "WhatsApp or ecommerce flows for conversion"],
    conversionAssets: ["Product landing pages", "Store locator pages", "Offer pages", "Creator briefs", "Social commerce flows", "Review and proof modules"],
    contentAngles: ["Product benefits", "Usage occasions", "Comparisons", "Bundles", "Seasonal campaigns", "Creator demonstrations"],
    automation: ["Order enquiry routing", "Campaign lead tagging", "Customer retention flows", "Review requests", "Retailer enquiry follow-up"],
    dashboard: ["Reach", "Engagement", "Sales actions", "ROAS", "Creator performance", "Product-level demand"],
  },
  "manufacturing-marketing": {
    promise: "Make technical capability visible, credible and easy for buyers to enquire about.",
    narrative: "Manufacturing companies often have strong capability but weak digital explanation. We turn products, specifications, certifications, industries served and production strengths into a modern B2B website, SEO content, catalog journeys, LinkedIn campaigns and RFQ reporting.",
    valueAdd: ["Industrial website and catalog UX modernization", "SEO for products, materials, applications and industry needs", "RFQ forms that capture technical requirements clearly", "LinkedIn and Google campaigns for procurement and engineering buyers", "Dashboards for MQLs, RFQs, pipeline value and product demand"],
    useCases: [
      { title: "Outdated industrial website", challenge: "The company looks less capable online than it is in reality.", execution: "We rebuild the website with product categories, application pages, certifications, factory proof and RFQ paths.", outcome: "Stronger credibility and more serious B2B enquiries." },
      { title: "Product SEO growth", challenge: "Buyers search for products and materials but competitors appear first.", execution: "We build keyword-mapped product pages, technical content and internal linking.", outcome: "Higher organic visibility and more inbound RFQs." },
      { title: "Export or distributor enquiries", challenge: "The business wants international demand but has limited digital reach.", execution: "We create market pages, LinkedIn campaigns, downloadable capability profiles and CRM tracking.", outcome: "More qualified distributor or export conversations." },
    ],
    executionPlan: ["Audit website, catalog structure, technical content, enquiry forms and search visibility", "Map products, applications, buyer personas, geographies and proof points", "Create product/category pages with specs, use cases, certifications and RFQ CTAs", "Launch SEO, Google Search and LinkedIn campaigns for priority product lines", "Connect RFQs to CRM with technical requirement fields and owner assignment", "Optimize by RFQs, MQL quality, product-page traffic and pipeline value"],
    channelPlan: ["SEO for product and application searches", "Google Search for RFQ demand", "LinkedIn for procurement and engineering buyers", "Retargeting for catalog visitors", "Email nurture for distributor and export leads"],
    conversionAssets: ["Product catalog UX", "RFQ forms", "Specification pages", "Certification proof", "Factory capability pages", "Downloadable company profiles"],
    contentAngles: ["Material guides", "Application use cases", "Quality process", "Certifications", "Production capacity", "Industry-specific solutions"],
    automation: ["RFQ assignment", "Technical requirement tagging", "Proposal follow-up reminders", "Distributor lead nurture", "Pipeline alerts"],
    dashboard: ["RFQs", "Organic product traffic", "MQLs", "Pipeline value", "Quote rate", "Export enquiries"],
  },
  "professional-services-marketing": {
    promise: "Build authority, trust and qualified consultations for expert-led firms.",
    narrative: "Professional services buyers do not convert because of flashy ads alone. They need clarity, authority, proof, thought leadership and a low-friction consultation path. We build positioning, websites, content, LinkedIn visibility, lead magnets and CRM follow-up for consultancies, legal, finance and advisory firms.",
    valueAdd: ["Positioning that clarifies who the firm helps and why it is credible", "Premium service pages and partner/advisor profile pages", "Thought leadership content for SEO, LinkedIn and AI discoverability", "Lead magnets, consultation flows and proposal nurture", "Dashboards for qualified calls, content leads and pipeline"],
    useCases: [
      { title: "Authority-led lead generation", challenge: "The firm has expertise but the website does not communicate it strongly.", execution: "We refine positioning, rebuild service pages, create proof sections and publish expert content.", outcome: "More trust and better qualified consultation requests." },
      { title: "LinkedIn growth for partners", challenge: "Decision-makers are on LinkedIn but the firm is not visible enough.", execution: "We create executive content pillars, profile improvements, campaign assets and retargeting journeys.", outcome: "Stronger founder/partner authority and more warm enquiries." },
      { title: "Lead magnet funnel", challenge: "Visitors are interested but not ready to book immediately.", execution: "We build guides, checklists, assessment forms and email/CRM nurture.", outcome: "More captured demand and better long-cycle conversion." },
    ],
    executionPlan: ["Audit positioning, website clarity, service pages, content authority and lead capture", "Define ICPs, decision-makers, service priorities and proof points", "Create premium service pages, case-study style proof and consultation journeys", "Build thought leadership content for SEO, LinkedIn and answer-engine visibility", "Launch LinkedIn, search and retargeting campaigns for high-value services", "Optimize by qualified calls, content leads, proposal rate and pipeline value"],
    channelPlan: ["SEO for service and problem-aware queries", "LinkedIn organic and paid visibility", "Google Search for high-intent advisory demand", "Retargeting for service-page visitors", "Email nurture for long-cycle prospects"],
    conversionAssets: ["Service pages", "Advisor profile pages", "Consultation forms", "Lead magnets", "Case-study style proof", "Proposal nurture flows"],
    contentAngles: ["Expert point of view", "Regulatory or market updates", "Common mistakes", "Decision frameworks", "Client problem guides", "Industry-specific advice"],
    automation: ["Consultation routing", "Lead magnet delivery", "Follow-up sequences", "Proposal reminders", "CRM source tagging"],
    dashboard: ["Qualified calls", "Content leads", "Ranking growth", "LinkedIn engagement", "Pipeline", "Proposal conversion"],
  },
};


function getPlatformPlaybook(title: string, slug: string): PlatformPlay[] {
  const playbooks: Record<string, PlatformPlay[]> = {
    "real-estate-digital-marketing": [
      { platform: "Google", role: "Capture buyers already searching for communities, developers, payment plans and property types.", execution: "Build tightly segmented search campaigns for project, location, investment and competitor intent. Each ad group lands on a matching project page with budget filters, brochure download and WhatsApp/site-visit CTA.", metrics: "Qualified enquiries, site visit requests, CPL by project, search term quality" },
      { platform: "Meta", role: "Create lifestyle demand and retarget people who engaged with project visuals.", execution: "Run Reels, carousels and lead ads showing location, amenities, payment plan and investment logic. Retarget video viewers, page visitors and brochure downloaders with urgency and proof.", metrics: "Lead quality, cost per qualified lead, creative engagement, retargeting conversion" },
      { platform: "TikTok", role: "Make location and project stories feel discoverable, human and memorable.", execution: "Use short video tours, 'why this location' clips, price/payment explainers and broker-led walkthroughs to build awareness before retargeting on Meta and Google.", metrics: "Video watch rate, engaged audiences, landing-page visits, assisted enquiries" },
      { platform: "LinkedIn", role: "Reach investors, HNW professionals, relocation audiences and B2B referral partners.", execution: "Promote investment briefs, market updates, corporate relocation angles and developer credibility content to decision-makers and expat audiences.", metrics: "Investor leads, content engagement, referral conversations, cost per senior enquiry" },
    ],
    "healthcare-clinic-marketing": [
      { platform: "Google", role: "Capture high-intent patients searching for treatments, doctors, clinics and nearby appointments.", execution: "Create service-specific search campaigns with call extensions, location extensions, appointment landing pages, negative keywords and conversion tracking for calls/forms.", metrics: "Booked appointments, calls, cost per appointment, local search visibility" },
      { platform: "Meta", role: "Educate patients and build trust before they book.", execution: "Run awareness and retargeting around doctor credibility, treatment explainers, patient FAQs, clinic facilities and offer-led appointment journeys where compliant.", metrics: "Appointment leads, engagement quality, retargeting conversion, enquiry cost" },
      { platform: "TikTok", role: "Humanize the clinic with simple, educational short-form content.", execution: "Publish doctor explainers, myth-busting clips, recovery guidance and behind-the-scenes content that moves viewers into retargeting audiences.", metrics: "Video completion, profile visits, retargeting pool growth, assisted bookings" },
      { platform: "LinkedIn", role: "Support premium healthcare brands, corporate wellness, B2B healthcare and specialist authority.", execution: "Use expert articles, doctor leadership content and corporate package messaging for HR, employers and insurance-related audiences.", metrics: "Corporate enquiries, authority engagement, referral leads, qualified consultations" },
    ],
    "ecommerce-growth-agency": [
      { platform: "Google", role: "Capture product demand and protect profitable shopping visibility.", execution: "Optimize product feeds, Shopping/PMax structure, branded/non-branded search, collection SEO and landing pages for high-margin products.", metrics: "ROAS, MER, product revenue, conversion rate, wasted spend" },
      { platform: "Meta", role: "Scale product discovery and retarget visitors with stronger offers.", execution: "Test UGC-style creatives, product demos, bundles, catalog ads, retargeting and lookalike audiences connected to clean pixel/CAPI events.", metrics: "ROAS, CPA, AOV, add-to-cart rate, creative fatigue" },
      { platform: "TikTok", role: "Create demand through fast product education and creator-style proof.", execution: "Run hook testing, demonstrations, problem-solution videos, Spark Ads and trend-adapted product storytelling for top SKUs.", metrics: "Thumb-stop rate, CTR, CPA, engaged views, new customer revenue" },
      { platform: "LinkedIn", role: "Useful for B2B ecommerce, wholesale, distributors, enterprise buyers or premium founder-led brands.", execution: "Promote category authority, wholesale programs, brand story and partnership pages to buyers, retailers and corporate gifting audiences.", metrics: "B2B leads, wholesale enquiries, partner pipeline, content engagement" },
    ],
    "restaurant-hospitality-marketing": [
      { platform: "Google", role: "Win local intent when guests search for restaurants, hotels, brunches, venues and bookings nearby.", execution: "Optimize Google Business Profile, local SEO, search ads, map actions and booking pages around location, cuisine, room packages and events.", metrics: "Calls, bookings, map views, direction requests, cost per booking" },
      { platform: "Meta", role: "Turn ambience, food, rooms and events into desire and reservations.", execution: "Run Reels, carousels, event ads, offer campaigns and retargeting for menu viewers, website visitors and engaged Instagram audiences.", metrics: "Bookings, engagement, event enquiries, retargeting conversion" },
      { platform: "TikTok", role: "Make experiences feel shareable and current.", execution: "Use food reveals, room tours, staff moments, guest experiences, weekend plans and venue transformations to drive discovery.", metrics: "Video views, saves, profile visits, booking clicks, local reach" },
      { platform: "LinkedIn", role: "Reach corporate event planners, travel partners, HR teams and business diners.", execution: "Promote corporate packages, meeting venues, catering, business lunch offers and hospitality partnership content.", metrics: "Corporate enquiries, event leads, partnership messages, package downloads" },
    ],
    "automotive-digital-marketing": [
      { platform: "Google", role: "Capture model, service, repair, parts and dealership search intent.", execution: "Build campaigns by model/service category with call tracking, location extensions, inventory pages and service-booking landing pages.", metrics: "Test drives, service bookings, quote requests, CPL, showroom intent" },
      { platform: "Meta", role: "Create desire around models, offers, service packages and ownership confidence.", execution: "Use carousels, video walkarounds, lead ads, offer retargeting and lookalike audiences based on test-drive or service customers.", metrics: "Lead quality, cost per booking, creative engagement, retargeting conversion" },
      { platform: "TikTok", role: "Make vehicle features, comparisons and service expertise easy to consume.", execution: "Publish walkarounds, before/after service clips, EV explainers, finance tips and workshop credibility content.", metrics: "Video completion, profile visits, assisted enquiries, engaged audiences" },
      { platform: "LinkedIn", role: "Support fleet, leasing, corporate service contracts and B2B partnerships.", execution: "Promote fleet offers, EV transition content, aftersales programs and corporate mobility solutions to operations and finance leaders.", metrics: "Fleet enquiries, B2B meetings, corporate leads, pipeline value" },
    ],
    "logistics-marketing": [
      { platform: "Google", role: "Capture companies searching for freight, shipping, warehousing, courier and customs solutions.", execution: "Create service, route and industry campaigns landing on RFQ pages with shipment details, coverage proof and qualification fields.", metrics: "RFQs, MQLs, quote rate, cost per qualified enquiry" },
      { platform: "Meta", role: "Retarget website visitors and build credibility with practical proof.", execution: "Use case-led creatives around coverage, speed, warehousing, last-mile reliability and customer sectors, especially for retargeting.", metrics: "Retargeting leads, landing-page visits, engagement, assisted RFQs" },
      { platform: "TikTok", role: "Show operational capability visually for awareness and recruitment-adjacent credibility.", execution: "Use warehouse walkthroughs, delivery operations, route explainers and behind-the-scenes logistics process videos.", metrics: "Video engagement, brand recall, website visits, audience growth" },
      { platform: "LinkedIn", role: "Reach procurement, operations, ecommerce, supply chain and finance decision-makers.", execution: "Run thought leadership, trade-lane guides, 3PL checklists and lead-gen campaigns targeted by industry and job function.", metrics: "MQLs, content downloads, RFQs, pipeline value" },
    ],
    "education-marketing": [
      { platform: "Google", role: "Capture course, university, certification and training demand when intent is highest.", execution: "Build search campaigns by course/intake with landing pages covering curriculum, fees, schedules, outcomes and application CTAs.", metrics: "Course enquiries, applications, CPL, enrollment conversion" },
      { platform: "Meta", role: "Nurture parents, students and professionals through proof and deadlines.", execution: "Run video, carousel and lead campaigns around student outcomes, campus life, scholarships, open days and application deadlines.", metrics: "Lead quality, application rate, cost per enrolled student, retargeting conversion" },
      { platform: "TikTok", role: "Reach younger audiences with relatable course and campus storytelling.", execution: "Use student-life clips, career outcome explainers, day-in-the-life videos, course myths and deadline reminders.", metrics: "Video views, profile visits, enquiries, application clicks" },
      { platform: "LinkedIn", role: "Ideal for executive education, professional certificates and B2B training.", execution: "Promote career transformation, corporate training, alumni outcomes and employer-relevant skill content.", metrics: "Professional leads, corporate training enquiries, content engagement, applications" },
    ],
    "retail-fmcg-marketing": [
      { platform: "Google", role: "Capture product, brand, store and category demand.", execution: "Run search, shopping and store-locator campaigns with product feed hygiene, SEO collection pages and offer landing pages.", metrics: "Sales actions, ROAS, product demand, store locator clicks" },
      { platform: "Meta", role: "Build reach, recall and social commerce conversion.", execution: "Use product demos, creator assets, catalog ads, offer retargeting and campaign bursts around launches, seasons and retail availability.", metrics: "Reach, engagement, sales actions, CPA, creator performance" },
      { platform: "TikTok", role: "Make products memorable through culture, use cases and creator-style content.", execution: "Test short hooks, product routines, taste/use moments, comparisons, challenges and Spark Ads for high-potential products.", metrics: "Watch rate, engagement, CTR, new customer demand" },
      { platform: "LinkedIn", role: "Support distributor, retail partner, corporate gifting and B2B buyer visibility.", execution: "Promote brand story, trade marketing support, category growth and partnership propositions to retail and procurement audiences.", metrics: "Distributor enquiries, partner leads, B2B engagement, pipeline" },
    ],
    "manufacturing-marketing": [
      { platform: "Google", role: "Capture buyers searching for products, specifications, suppliers and RFQs.", execution: "Build product/category SEO and search campaigns with technical landing pages, certification proof and RFQ forms.", metrics: "RFQs, product-page traffic, cost per qualified lead, quote rate" },
      { platform: "Meta", role: "Useful for retargeting, employer brand and visual proof of factory capability.", execution: "Retarget catalog visitors with capability proof, factory visuals, certifications and application use cases.", metrics: "Retargeting enquiries, engagement, assisted conversions, page depth" },
      { platform: "TikTok", role: "Show production capability, quality processes and scale in a visual way.", execution: "Use process videos, machine/factory clips, quality checks, product transformations and behind-the-scenes manufacturing stories.", metrics: "Video views, profile visits, brand recall, website visits" },
      { platform: "LinkedIn", role: "Reach procurement, engineering, distributors and industrial decision-makers.", execution: "Promote capability decks, application notes, export propositions and industry-specific product solutions.", metrics: "MQLs, distributor enquiries, RFQs, pipeline value" },
    ],
    "professional-services-marketing": [
      { platform: "Google", role: "Capture high-intent searches for advisory, legal, finance and consultancy problems.", execution: "Build service pages and search campaigns around problem-aware and solution-aware keywords with consultation CTAs.", metrics: "Qualified calls, cost per consultation, ranking growth, lead quality" },
      { platform: "Meta", role: "Retarget warm visitors and promote trust-building content.", execution: "Use explainer videos, carousel frameworks, lead magnets and retargeting for service-page readers and engaged audiences.", metrics: "Lead magnet downloads, consultation requests, retargeting CPA, engagement" },
      { platform: "TikTok", role: "Works when experts can simplify complex topics into useful short-form advice.", execution: "Publish myth-busting, common mistakes, quick frameworks and founder/advisor POV clips, then retarget serious viewers.", metrics: "Watch time, saved videos, profile visits, assisted leads" },
      { platform: "LinkedIn", role: "The core authority and demand channel for most professional services firms.", execution: "Build partner thought leadership, document ads, lead-gen campaigns, webinar funnels and account-based retargeting.", metrics: "Qualified consultations, content leads, senior engagement, pipeline value" },
    ],
  };

  return playbooks[slug] ?? [
    { platform: "Google", role: `Capture high-intent ${title.toLowerCase()} demand.`, execution: "Build search campaigns, SEO pages and conversion landing pages around the highest-value service and buyer intent.", metrics: "Qualified leads, CPL, conversion rate, pipeline" },
    { platform: "Meta", role: "Create demand and retarget warm audiences.", execution: "Use creative testing, lead forms, landing-page campaigns and retargeting based on engagement depth.", metrics: "Lead quality, creative performance, retargeting conversion" },
    { platform: "TikTok", role: "Build attention through short-form education and proof.", execution: "Create practical videos, explainers and behind-the-scenes content that feeds retargeting audiences.", metrics: "Watch rate, engagement, website visits" },
    { platform: "LinkedIn", role: "Reach senior decision-makers and B2B buyers.", execution: "Promote authority content, lead magnets and account-based campaigns to relevant professional audiences.", metrics: "MQLs, meetings, pipeline value" },
  ];
}

function VisualStorySection({ title, angles }: { title: string; angles: string[] }) {
  const cards = [
    { label: "Hero image direction", text: `Show the real ${title.toLowerCase()} environment: people, product, place, proof and the outcome the buyer wants.`, gradient: "from-cyan-300/25 via-blue-500/10 to-transparent" },
    { label: "Ad creative board", text: `Turn ${angles.slice(0, 3).join(", ").toLowerCase()} into platform-ready video, carousel and static ad concepts.`, gradient: "from-violet-400/25 via-fuchsia-500/10 to-transparent" },
    { label: "Landing page proof", text: "Use case sections, process visuals, FAQs, reviews, certifications, dashboards and clear calls-to-action so the prospect feels safe to enquire.", gradient: "from-emerald-300/20 via-cyan-500/10 to-transparent" },
  ];
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {cards.map((card) => (
        <div key={card.label} className="relative min-h-80 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 p-6 shadow-2xl">
          <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
          <div className="absolute inset-x-6 bottom-6 top-24 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-100">Visual system</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{card.label}</h3>
            <p className="mt-4 text-sm leading-6 text-slate-300">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function DetailSection({ title, items }: { title: string; items: string[] }) {
  return (
    <GlassCard className="h-full">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <CheckList items={items} />
    </GlassCard>
  );
}

function IndustryVisual({ title }: { title: string }) {
  const steps = ["Traffic", "Landing Page", "CRM", "Sales", "Revenue"];
  return (
    <GlassCard className="relative overflow-hidden p-5 sm:p-6">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-white">{title} Growth System</p>
            <p className="mt-1 text-xs text-slate-400">Campaigns • CRM • Automation • BI</p>
          </div>
          <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">Built to convert</span>
        </div>
        <div className="mt-8 space-y-3">
          {steps.map((step, index) => (
            <div key={step} className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-200/10 text-cyan-100">
                {index === 0 ? <MousePointerClick className="h-5 w-5" /> : index === 2 ? <MessageCircle className="h-5 w-5" /> : index === 4 ? <BarChart3 className="h-5 w-5" /> : <Target className="h-5 w-5" />}
              </span>
              <span className="text-sm font-semibold text-white">{step}</span>
              <ArrowRight className="h-4 w-4 text-cyan-200" />
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {["CPL", "Quality", "ROI"].map((metric, index) => (
            <div key={metric} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
              <p className="text-xs text-slate-400">{metric}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{index === 0 ? "↓" : "↑"}</p>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = industries.find((x) => x.slug === slug);
  if (!i) notFound();
  const d = details[i.slug];
  const Icon = i.icon;

  return (
    <>
      <section className="relative overflow-hidden bg-grid py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_34rem),radial-gradient(circle_at_85%_20%,rgba(139,92,246,0.16),transparent_32rem)]" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              <Icon className="h-4 w-4" /> Industry growth plan
            </div>
            <h1 className="max-w-5xl text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl">
              {i.title} digital growth that moves from clicks to real business outcomes.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{d.promise}</p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">{d.narrative}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/book-consultation">Book Consultation</Button>
              <Button href="/audits/full-growth-audit" variant="secondary">Get Growth Audit</Button>
            </div>
          </div>
          <IndustryVisual title={i.title} />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="How we add value" title={`A complete ${i.title.toLowerCase()} growth system, not a small campaign.`} text="The goal is to create a repeatable engine: attract the right audience, educate them, convert them, follow up properly and measure what actually creates revenue." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {d.valueAdd.map((item) => (
              <GlassCard key={item} className="lg:p-6">
                <CheckCircle2 className="h-7 w-7 text-emerald-300" />
                <p className="mt-5 text-base font-semibold leading-7 text-white">{item}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 text-slate-950">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Use cases</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">What this looks like in real execution.</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">Each use case is built around a business problem, a concrete execution plan and a measurable outcome.</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {d.useCases.map((useCase) => (
              <div key={useCase.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <Sparkles className="h-7 w-7 text-blue-600" />
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{useCase.title}</h3>
                <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
                  <p><strong className="text-slate-950">Challenge:</strong> {useCase.challenge}</p>
                  <p><strong className="text-slate-950">Execution:</strong> {useCase.execution}</p>
                  <p><strong className="text-slate-950">Outcome:</strong> {useCase.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Platform execution" title="Google, Meta, TikTok and LinkedIn each play a different role." text="The prospect should immediately understand that the agency is not selling generic lead generation. We design each platform around intent, content format, buyer psychology and measurable outcomes." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {getPlatformPlaybook(i.title, i.slug).map((play) => (
              <GlassCard key={play.platform} className="lg:p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-white">{play.platform}</h3>
                  <span className="rounded-full bg-cyan-200/10 px-3 py-1 text-xs font-bold text-cyan-100">Channel role</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-cyan-100">{play.role}</p>
                <p className="mt-4 text-sm leading-6 text-slate-300"><strong className="text-white">Execution:</strong> {play.execution}</p>
                <p className="mt-4 text-sm leading-6 text-slate-400"><strong className="text-slate-200">Measured by:</strong> {play.metrics}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <SectionHeading eyebrow="Images and creative direction" title="The page and campaigns need strong visual proof, not only text." text="These visual blocks guide the kind of imagery, ad concepts and landing-page proof each industry should show so visitors feel the agency understands their world." align="center" />
          <div className="mt-12">
            <VisualStorySection title={i.title} angles={d.contentAngles} />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow="Execution plan" title="How we build and improve the funnel step by step." text="This gives prospects confidence that the agency has a serious operating method — not random posting, random ads or vague reporting." />
            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <LineChart className="h-8 w-8 text-cyan-200" />
              <p className="mt-4 text-sm leading-6 text-slate-300">Every month is managed around data: traffic quality, conversion rate, lead quality, sales follow-up and pipeline movement.</p>
            </div>
          </div>
          <div className="space-y-4">
            {d.executionPlan.map((step, index) => (
              <div key={step} className="grid gap-4 rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-5 sm:grid-cols-[4rem_1fr]">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-200/10 font-mono text-sm font-bold text-cyan-100">{String(index + 1).padStart(2, "0")}</div>
                <p className="text-base leading-7 text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Growth architecture" title="The channel, content, automation and reporting layers are connected." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <DetailSection title="Channel plan" items={d.channelPlan} />
            <DetailSection title="Conversion assets" items={d.conversionAssets} />
            <DetailSection title="Content angles" items={d.contentAngles} />
            <DetailSection title="Automation" items={d.automation} />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 text-slate-950">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Measurement</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">A dashboard that makes performance obvious.</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">The management team should know what is working, what is wasting money, where leads are stuck and what action to take next.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {d.dashboard.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-800">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Performance cockpit</p>
                <p className="text-sm text-slate-500">Sample reporting view</p>
              </div>
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-8 flex h-48 items-end gap-3">
              {[42, 64, 58, 76, 70, 88, 82, 96].map((height, index) => (
                <div key={index} className="flex flex-1 items-end rounded-full bg-slate-200">
                  <div className="w-full rounded-full bg-gradient-to-t from-blue-700 via-cyan-500 to-violet-500" style={{ height: `${height}%` }} />
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs font-semibold text-slate-600">
              <span className="rounded-full bg-white px-3 py-2">Leads</span>
              <span className="rounded-full bg-white px-3 py-2">Pipeline</span>
              <span className="rounded-full bg-white px-3 py-2">ROI</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-3">
          <DetailSection title="Pain points we solve" items={i.painPoints} />
          <DetailSection title="Recommended services" items={i.services} />
          <DetailSection title="Sample KPIs" items={i.kpis} />
        </Container>
      </section>

      <section className="pb-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Industry CTA" title={`Build a measurable ${i.title.toLowerCase()} growth system.`} text="We will map the funnel, audit the current digital assets, identify missed opportunities and create a channel-by-channel plan that makes prospects confident to work with you." />
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Audit", "Plan", "Execute"].map((step) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <Layers3 className="h-5 w-5 text-cyan-200" />
                  <p className="mt-3 font-semibold text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <LeadForm title={`Request ${i.title} growth plan`} />
        </Container>
      </section>
    </>
  );
}
