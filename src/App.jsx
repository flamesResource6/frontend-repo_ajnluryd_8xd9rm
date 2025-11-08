import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureGrid from "./components/FeatureGrid";
import ComplianceTasks from "./components/ComplianceTasks";
import Metrics from "./components/Metrics";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <ComplianceTasks />
        <Metrics />
      </main>
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} ComplyDash. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-slate-900" href="#">Privacy</a>
            <a className="hover:text-slate-900" href="#">Security</a>
            <a className="hover:text-slate-900" href="#">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
