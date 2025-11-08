import { Progress } from "@radix-ui/react-progress";
import { Calendar, CheckSquare, Clock } from "lucide-react";

const tasks = [
  { id: 1, title: "Access review Q4", due: "Nov 20", status: 70 },
  { id: 2, title: "Vendor risk assessment", due: "Nov 22", status: 40 },
  { id: 3, title: "DR test evidence", due: "Nov 25", status: 15 },
];

export default function ComplianceTasks() {
  return (
    <section id="tasks" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Open tasks</h2>
            <p className="mt-1 text-slate-600">Prioritize what matters to stay audit-ready.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Calendar className="h-4 w-4" />
            View calendar
          </button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((t) => (
            <div key={t.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-slate-900">{t.title}</p>
                  <p className="text-sm text-slate-600 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> Due {t.due}
                  </p>
                </div>
                <CheckSquare className="h-5 w-5 text-blue-600" />
              </div>
              <div className="mt-4">
                <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-blue-600" style={{ width: `${t.status}%` }} />
                </div>
                <p className="mt-1 text-xs text-slate-600">{t.status}% complete</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
