import { useState } from "react";
import "./index.css";

const tabs = [
  "Dashboard",
  "Analytics",
  "Team",
  "Reports",
  "Settings",
  "Notifications",
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col justify-between transition-all duration-700 hover:bg-white/10">
        <div>
          <h1 className="text-2xl font-bold mb-8 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            🚀 RescueRepo
          </h1>
          <nav className="flex flex-col gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md"
                    : "hover:bg-white/10 text-gray-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
        <footer className="text-sm text-gray-500 mt-6">
          <p>
            Built with ❤️ by{" "}
            <span className="text-purple-400 font-medium">
              Leonidas Esquire
            </span>
          </p>
          <p className="text-xs mt-1">GitHub Repo Architect</p>
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl"></div>

        <div className="relative backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl shadow-2xl px-12 py-10 max-w-4xl mx-auto transition-all duration-700 hover:bg-white/10 hover:border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
            {activeTab}
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Welcome to the <strong>{activeTab}</strong> section of your Client
            Acquisition System. Here you can manage data, view analytics, and
            customize workflows for RescueRepo projects.
          </p>
          <div className="mt-10 flex justify-center">
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-lg shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all duration-300">
              Perform Action
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
