import { Shield, TrendingUp, BadgeCheck } from "lucide-react";

export default function Metrics() {
  return (
    <section id="metrics" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-blue-600/10 text-blue-700 grid place-items-center">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">94%</p>
                  <p className="text-sm text-slate-600">Control coverage</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-600/10 text-emerald-700 grid place-items-center">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">+18%</p>
                  <p className="text-sm text-slate-600">Audit speed</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-violet-600/10 text-violet-700 grid place-items-center">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">Pass</p>
                  <p className="text-sm text-slate-600">Last assessment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
