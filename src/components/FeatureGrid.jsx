import { ShieldCheck, FileSearch, Bell, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Control Library",
    desc: "Pre-mapped controls for SOC2, ISO 27001, PCI, and GDPR.",
  },
  {
    icon: FileSearch,
    title: "Evidence Automation",
    desc: "Integrations to collect logs, screenshots, and attestations.",
  },
  {
    icon: Bell,
    title: "Continuous Monitoring",
    desc: "Real-time alerts on drift, exceptions, and overdue tasks.",
  },
  {
    icon: CheckCircle2,
    title: "Audit Workspace",
    desc: "Share audit-ready packages with external auditors securely.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Everything you need for compliance</h2>
          <p className="mt-2 text-slate-600">Designed to be clear, fast, and audit-ready.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 text-blue-700 grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
