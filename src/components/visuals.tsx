import { ArrowDown, CheckCircle2, CircleDollarSign, MousePointerClick } from "lucide-react";
import { GlassCard } from "@/components/ui";

export function DashboardVisual() {
  const metrics = [
    ["Leads", "+248", "from campaigns"],
    ["CPL", "AED 42", "down 31%"],
    ["ROAS", "5.8x", "paid media"],
    ["SEO", "+67%", "keyword growth"],
  ];
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-8 rounded-full bg-cyan-400/20 blur-3xl" />
      <GlassCard className="relative overflow-hidden p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Growth Command Center</p>
            <p className="text-xs text-slate-400">Leads • CRM • Ads • SEO • WhatsApp</p>
          </div>
          <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">Live</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {metrics.map(([label, value, sub]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">
              <p className="text-xs text-slate-400">{label}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
              <p className="mt-1 text-xs text-emerald-200">{sub}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/60 p-4">
          <div className="flex items-end gap-2 h-28">
            {[35, 52, 42, 68, 63, 82, 74, 96].map((h, i) => (
              <div key={i} className="flex flex-1 items-end rounded-full bg-white/[0.03]">
                <div className="w-full rounded-full bg-gradient-to-t from-violet-400 via-blue-400 to-cyan-300" style={{ height: `${h}%` }} />
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-slate-400">
            <span className="rounded-full bg-white/[0.04] px-3 py-2">CRM pipeline</span>
            <span className="rounded-full bg-white/[0.04] px-3 py-2">WhatsApp SLA</span>
            <span className="rounded-full bg-white/[0.04] px-3 py-2">Ad spend</span>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

export function FragmentedSystemVisual() {
  const parts = ["Website", "Ads", "SEO", "CRM", "Reports", "Sales"];
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_auto_1.1fr] lg:items-center">
      <div className="grid grid-cols-2 gap-3">
        {parts.map((part) => (
          <div key={part} className="rounded-3xl border border-red-300/15 bg-red-400/5 p-4 text-sm font-semibold text-slate-200">{part}</div>
        ))}
      </div>
      <ArrowDown className="mx-auto h-8 w-8 text-cyan-200 lg:-rotate-90" />
      <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-6">
        <p className="text-xl font-semibold text-white">One Growth Operating System</p>
        <p className="mt-3 text-sm leading-6 text-slate-300">Strategy, creative, website, campaigns, automation and reporting connected into a single accountable system.</p>
      </div>
    </div>
  );
}

export function AuditScorecard() {
  const rows = [["UX", 82], ["SEO", 64], ["Speed", 78], ["Tracking", 52], ["CRM", 46], ["Ads", 71], ["Reporting", 58]];
  return (
    <GlassCard>
      <div className="mb-5 flex items-center justify-between">
        <p className="font-semibold text-white">Digital Growth Audit Scorecard</p>
        <span className="rounded-full bg-amber-300/10 px-3 py-1 text-xs font-bold text-amber-200">Priority gaps found</span>
      </div>
      <div className="space-y-4">
        {rows.map(([name, score]) => (
          <div key={name}>
            <div className="mb-2 flex justify-between text-sm"><span className="text-slate-300">{name}</span><span className="font-semibold text-white">{score}%</span></div>
            <div className="h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" style={{ width: `${score}%` }} /></div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export function LeadJourneyVisual() {
  const steps = ["Ad / SEO", "Form / WhatsApp", "CRM", "Sales Owner", "Follow-up", "Closed Deal"];
  return (
    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {steps.map((step, i) => (
        <div key={step} className="relative rounded-3xl border border-white/10 bg-white/[0.05] p-4 text-center">
          <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-2xl bg-emerald-300/10 text-emerald-200">
            {i < 2 ? <MousePointerClick className="h-5 w-5" /> : i < 5 ? <CheckCircle2 className="h-5 w-5" /> : <CircleDollarSign className="h-5 w-5" />}
          </div>
          <p className="text-sm font-semibold text-white">{step}</p>
        </div>
      ))}
    </div>
  );
}
