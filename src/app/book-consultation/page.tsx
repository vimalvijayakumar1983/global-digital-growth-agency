import type { Metadata } from "next";
import { CalendarCheck, ClipboardList, Lightbulb, Rocket } from "lucide-react";
import { Container, GlassCard, LeadForm, SectionHeading, WhatsAppButton } from "@/components/ui";

export const metadata: Metadata = { title: "Book Consultation", description: "Book a digital growth consultation for strategy, websites, apps, SEO, paid media, CRM, automation and analytics." };

const agenda = [
  [ClipboardList, "Current state", "Website, campaigns, CRM, SEO, analytics and follow-up process."],
  [Lightbulb, "Growth gaps", "Where conversion, content, tracking or lead quality is breaking down."],
  [CalendarCheck, "Priority plan", "What should happen first in the next 30, 60 and 90 days."],
  [Rocket, "Execution path", "Which pages, campaigns, automations and dashboards should be built."],
];

export default function BookConsultationPage() {
  return (
    <section className="relative overflow-hidden bg-grid py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.18),transparent_34rem),radial-gradient(circle_at_85%_15%,rgba(139,92,246,0.16),transparent_32rem)]" />
      <Container className="relative grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Consultation" title="Book a growth consultation with a clear agenda." text="Use this for a new website, mobile app, digital marketing strategy, SEO, paid ads, CRM, WhatsApp automation, analytics or full growth audit." />
          <div className="mt-8"><WhatsAppButton label="Message on WhatsApp" /></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {agenda.map(([Icon, title, text]) => {
              const CardIcon = Icon as typeof Rocket;
              return <GlassCard key={title as string} className="lg:p-5"><CardIcon className="h-6 w-6 text-cyan-200" /><h2 className="mt-4 text-xl font-semibold text-white">{title as string}</h2><p className="mt-2 text-sm leading-6 text-slate-300">{text as string}</p></GlassCard>;
            })}
          </div>
        </div>
        <LeadForm title="Book a growth consultation" />
      </Container>
    </section>
  );
}
