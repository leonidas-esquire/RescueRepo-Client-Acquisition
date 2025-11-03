import React from "react";
import { motion } from "framer-motion";
import "./index.css";
import DataViewer from "./components/DataViewer";

const data = {
  content: {
    title: "Content Calendar",
    description: "Track campaigns, blog posts, and social content.",
    files: ["calendar.xlsx", "blog_ideas.md", "hashtags.csv"],
  },
  outreach: {
    title: "Outreach Scripts",
    description: "Scripts and templates for cold outreach.",
    files: ["linkedin.txt", "twitter.txt", "email_pitch.txt"],
  },
  crm: {
    title: "Client Tracker",
    description: "Manage client details, projects, and notes.",
    files: ["client_list.csv", "notes.json", "projects.xlsx"],
  },
  email: {
    title: "Email Templates",
    description: "Automated templates for lead follow-up and nurturing.",
    files: ["welcome_sequence.md", "pitch_followup.txt", "reengagement.md"],
  },
};

export default function App() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-gray-100 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <header className="text-center pt-12 pb-6">
        <h1 className="text-4xl font-extrabold mb-2">🚀 Client Acquisition System</h1>
        <p className="text-gray-400">Visualize and manage your project data beautifully</p>
      </header>
      <DataViewer data={data} />
    </motion.div>
  );
}
