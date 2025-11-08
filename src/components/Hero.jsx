import Spline from '@splinetool/react-spline';
import { Rocket, Shield, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
            <Shield className="h-3.5 w-3.5 text-blue-600" />
            SOC2 • ISO 27001 • GDPR
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
            Compliance, simplified.
          </h1>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            A modern dashboard to track controls, automate evidence, and report risk. Built for security, finance, and operations teams.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#tasks" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700">
              <Rocket className="h-4 w-4" />
              Get Started
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50">
              Learn More
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-600">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600"/> Automated evidence</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600"/> Real-time monitoring</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600"/> Audit-ready reports</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600"/> Role-based access</li>
          </ul>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-slate-200 bg-white/60 backdrop-blur">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
