import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container, GlassCard, LeadForm, SectionHeading, WhatsAppButton } from "@/components/ui";
import { agency } from "@/lib/content";

export const metadata: Metadata = { title: "Contact", description: "Contact Global Digital Growth Agency for websites, SEO, paid ads, CRM, automation and analytics." };

export default function ContactPage() {
  const cards = [[Phone, "Phone", agency.phone], [Mail, "Email", agency.email], [MapPin, "Market", "UAE-rooted. Global delivery."], [Clock, "Best first step", "Send website, industry and growth goal."]];
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,0.16),transparent_30rem)]" />
      <Container className="relative grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="Contact" title="Let’s understand your growth system before recommending anything." text="Tell us what you are trying to build, fix or scale. We can start with a consultation, a focused audit, or a full website/campaign/CRM plan." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {cards.map(([Icon, title, value]) => {
              const CardIcon = Icon as typeof Phone;
              return <GlassCard key={title as string} className="lg:p-5"><CardIcon className="h-6 w-6 text-cyan-200" /><p className="mt-4 text-sm text-slate-400">{title as string}</p><p className="mt-1 font-semibold text-white">{value as string}</p></GlassCard>;
            })}
          </div>
          <div className="mt-8"><WhatsAppButton /></div>
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <MessageCircle className="h-7 w-7 text-emerald-200" />
            <h2 className="mt-4 text-2xl font-semibold text-white">What to send</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">Your website, industry, target market, current marketing channels, monthly budget range and the biggest problem you want solved.</p>
          </div>
        </div>
        <LeadForm title="Send a project enquiry" />
      </Container>
    </section>
  );
}
