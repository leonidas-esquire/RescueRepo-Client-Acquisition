// src/utils/loadData.ts
// ✅ Utility to mock dynamic data for your sections (CRM, Email, Content, etc.)

export interface RepoSection {
  title: string;
  description: string;
  files: string[];
}

export function loadAllData(): Record<string, RepoSection> {
  return {
    crm: {
      title: "CRM System",
      description: "Manage customer relationships and pipeline workflows.",
      files: ["leads.json", "contacts.json", "pipeline.md"]
    },
    email: {
      title: "Email Templates",
      description: "Prebuilt templates for outreach and follow-ups.",
      files: ["welcome.md", "followup.md", "reengagement.md"]
    },
    content: {
      title: "Content Calendar",
      description: "Track campaigns, blog posts, and social content.",
      files: ["calendar.xlsx", "blog_ideas.md", "hashtags.csv"]
    },
    outreach: {
      title: "Outreach Scripts",
      description: "Scripts and messaging templates for cold outreach.",
      files: ["linkedin.txt", "twitter.txt", "email_pitch.txt"]
    },
    ads: {
      title: "Ad Campaigns",
      description: "Manage paid marketing creatives and tracking data.",
      files: ["facebook_ads.md", "google_ads.md"]
    },
  };
}
