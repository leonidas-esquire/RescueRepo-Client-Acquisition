
import type { DirectoryNode } from '../types';

export const fileSystemData: DirectoryNode = {
  type: 'directory',
  name: 'client-acquisition',
  children: [
    {
      type: 'directory',
      name: 'strategy',
      children: [
        {
          type: 'file',
          name: 'ICP.md',
          content: `
# Ideal Customer Profile (ICP)

This document outlines the primary buyer personas for the "GitHub Repo Architect" service. We focus on organizations where repository health directly impacts developer velocity, onboarding efficiency, and product stability.

---

### ICP 1: Seed-to-Series A SaaS Startup

*   **Company Size:** 10-50 employees (5-20 engineers).
*   **Tech Stack:** Modern (e.g., TypeScript, Go, Python, Rust), often with a single large monorepo that grew "organically" and is now showing signs of strain.
*   **Buying Trigger:**
    *   Hired the first VPE or senior engineering manager who is now tasked with "professionalizing" the engineering org.
    *   Onboarding new engineers is taking days instead of hours due to a lack of documentation and a confusing repo structure.
    *   The CI/CD pipeline is slow, flaky, and a source of constant developer complaints.
    *   Preparing for a SOC2 audit or first major enterprise customer and needs to demonstrate process maturity.
    *   "Bus factor" is high; critical knowledge is in the heads of 1-2 founders/early engineers.
*   **Pains:**
    *   "My repo is a mess."
    *   "Onboarding is a nightmare."
    *   "Our builds are constantly breaking."
    *   "I have no idea if our code is secure."
*   **Value Prop Focus:** Speed, stability, and laying a scalable foundation for future growth. Emphasize "Time-to-Onboard" reduction and "Release Reliability."

---

### ICP 2: Scaling Tech Company (Series B+ or Established)

*   **Company Size:** 50-500 employees (20-150 engineers).
*   **Tech Stack:** Multiple services, likely a mix of monorepos and microservices. Polyglot environment. May have legacy codebases.
*   **Buying Trigger:**
    *   Acquisition of another company, leading to a messy repo integration project.
    *   A major refactor is planned, and they need a clean, consistent structure to build upon.
    *   Developer Experience (DevEx) has become a board-level concern due to high engineering attrition or slow feature velocity.
    *   Multiple teams are stepping on each other's toes, causing merge conflicts and deployment failures.
    *   A push for better governance, security scanning (SAST/DAST), and standardized CI/CD practices across the organization.
*   **Pains:**
    *   "Our developer experience is poor."
    *   "We have no consistency across our 50 repos."
    *   "A simple change requires updating 5 different CI files."
    *   "Our staff engineers are bogged down with repo janitorial work."
*   **Value Prop Focus:** Consistency, governance, and DevEx ROI. Highlight the "Branch Protection Matrix," CI hardening, and creating a paved road for developers.

---

### ICP 3: Digital & Dev Agencies

*   **Company Size:** 10-100 employees.
*   **Business Model:** Builds software for clients, often handing off the codebase at the end of the engagement.
*   **Buying Trigger:**
    *   Client is unhappy with the quality of the final deliverable's documentation and structure.
    *   Wants to productize their offering and use a standardized, high-quality repo template for all new projects.
    *   Needs to impress sophisticated enterprise clients with a "GitPolish-grade" handoff process.
    *   Spends too much non-billable time cleaning up repos before project start or after handoff.
*   **Pains:**
    *   "Client handoffs are painful."
    *   "Our repos look amateurish."
    *   "We waste time setting up the same boilerplate for every project."
    *   "We need to show our clients we are professional and organized."
*   **Value Prop Focus:** Professionalism, efficiency, and client satisfaction. Emphasize the "one-page architecture map," "Contributor Quickstart," and creating a repeatable, high-quality delivery standard.
`
        },
        {
          type: 'file',
          name: 'Positioning.md',
          content: `
# Positioning Statement

This document defines how we position the "GitHub Repo Architect" service in the market. It clarifies our value proposition and targets specific, high-value pains felt by our ICPs.

---

### Core Positioning Statement

**For CTOs, VPEs, and agency owners who are frustrated by slow onboarding, flaky CI/CD, and inconsistent codebases, [BrandName] is the specialized service that transforms chaotic GitHub repositories into polished, scalable, and self-documenting assets.**

**Unlike generic DevOps consultancies or internal platform teams with competing priorities, we deliver a focused, rapid engagement that installs best-practice architecture, documentation, and automation, directly translating to faster developer velocity and higher team confidence.**

---

### Key Pains We Solve

*   **Onboarding Drag:** New engineers take days or weeks to become productive because of tribal knowledge, missing documentation, and a confusing repo layout.
*   **Flaky CI & Deployment Friction:** The build is always red. Developers waste hours debugging CI scripts instead of shipping features. Releasing code is a stressful, manual, and error-prone event.
*   **Tribal Knowledge & High Bus Factor:** Critical information about how a service is built, deployed, or maintained lives only in the heads of a few senior engineers. If they leave, the project is at risk.
*   **Slow Code Reviews:** Pull requests are massive, lack context, and take forever to review and merge, creating a major bottleneck in the development cycle.
*   **Inconsistent Repositories:** Every repository in the organization has a different structure, different CI setup, and different contribution guidelines, creating cognitive overhead and making it difficult for engineers to move between projects.
*   **Pre-Diligence "Code Shame":** The codebase is about to be audited by investors or an acquiring company, and it's not in a state that inspires confidence.

---

### Our Promise (The Transformation)

*   **Before:** Chaotic, undocumented, inconsistent, high-friction.
*   **After:** Organized, self-documenting, consistent, low-friction.

We turn your most critical code repository from a liability into a strategic asset that accelerates your team.
`
        },
        {
          type: 'file',
          name: 'Offers&Pricing.md',
          content: `
# Offers & Pricing

Our services are packaged into three distinct tiers to meet clients where they are, from needing a quick diagnostic to requiring a complete overhaul and ongoing support.

*   **Pricing Philosophy:** Value-based. We price based on the outcome (reduced onboarding time, increased developer velocity, decreased risk) rather than hours. Prices are presented as fixed fees or retainers for budget predictability.
*   **Default Price Anchor (Goal):** {{PriceAnchors.avg_deal_goal}} (e.g., $15,000)
*   **Minimum Engagement:** {{PriceAnchors.min}} (e.g., $5,000)
*   **Ceiling:** {{PriceAnchors.ceil}} (e.g., $50,000+ for large-scale projects)

---

### Tier 1: Rapid Repo Audit

*   **Ideal For:** Teams that know they have a problem but aren't sure where to start. A perfect entry-point offer.
*   **Price:** Fixed Fee (e.g., $5,000)
*   **Timeline:** 1 Week
*   **Deliverables:**
    1.  **Repo Health Score (0-100):** A quantitative assessment across 5 key areas (Structure, Documentation, CI/CD, Security, Governance).
    2.  **Top 10 Fixes Report:** A prioritized list of the most impactful issues to address immediately.
    3.  **7-Day Remediation Plan:** A concise, actionable plan for your team to execute, with clear instructions.
    4.  **90-Minute Debrief & Strategy Call:** We walk you through the findings and the plan.
*   **SLA:** Report delivered within 5 business days of kickoff.

---

### Tier 2: QuickStart Hardening

*   **Ideal For:** Teams that need a hands-on partner to fix the core problems and establish a strong foundation. Our most popular offering.
*   **Price:** Fixed Fee (e.g., $15,000 - $25,000, scoped based on repo complexity)
*   **Timeline:** 2-4 Weeks
*   **Deliverables:**
    1.  **Everything in Tier 1.**
    2.  **Branching Strategy Implementation:** Mainline/Trunk-based development setup with clear naming conventions.
    3.  **Branch Protection Matrix:** Configure required checks, reviews, and signing for key branches.
    4.  **CI Sanity Suite:** Implement foundational checks (linting, testing, security scanning) that run on every PR.
    5.  **README 2.0 Overhaul:** A complete rewrite of the root README to be the "front door" of the project.
    6.  **Contributor Quickstart Kit:** Creation of \`CONTRIBUTING.md\`, issue templates, and PR templates.
    7.  **Handoff & Training Session:** A recorded session with the engineering team on the new setup and best practices.
*   **SLA:** All configurations and documents implemented and delivered within the agreed-upon timeline.

---

### Tier 3: Ongoing Steward (Retainer)

*   **Ideal For:** Organizations that want to ensure their repositories stay clean and continuously improve their DevEx.
*   **Price:** Monthly Retainer (e.g., $5,000 - $10,000/month)
*   **Timeline:** 3-month minimum engagement
*   **Deliverables:**
    1.  **Monthly Repo Health Audit & Report:** Proactively catch deviations from best practices.
    2.  **Proactive PR Hygiene:** Gentle, non-blocking feedback on key PRs to coach best practices.
    3.  **Incident Response Playbooks:** "What to do when the build breaks" or "How to handle a security alert" guides.
    4.  **Release Cadence Coaching:** Help teams refine their release process for better stability and predictability.
    5.  **Priority Support:** A dedicated Slack channel and monthly strategy call.
*   **SLA:** <4-hour response time on Slack during business hours. Monthly reports delivered by the 5th business day of the month.
`
        },
        {
          type: 'file',
          name: 'Differentiators_GitHubRepoArchitect.md',
          content: `
# Differentiators: Why Choose Us

This document articulates what makes the "GitHub Repo Architect" service unique and superior to alternatives. These points should be woven into all marketing and sales copy.

---

### 1. The "Repo Health Score" - We Make Quality Measurable

*   **The Problem:** "Repo health" is a vague, subjective concept. It's hard to get budget to fix something you can't measure.
*   **Our Solution:** We've developed a proprietary 50-point rubric that scores your repository from 0-100 across five critical domains: Code Structure, Documentation, CI/CD, Security Posture, and Governance.
*   **Why It's Different:** We transform a qualitative problem into a quantitative one. You get a concrete baseline and can track ROI as the score improves. It's a powerful tool for communicating the need for improvement to leadership.

---

### 2. "GitPolish-Grade" Documentation - We Fight Tribal Knowledge

*   **The Problem:** Most developer documentation is an afterthought. It's outdated, hard to find, and incomplete. This leads to massive tribal knowledge and slows down new hires.
*   **Our Solution:** We treat documentation as a product. Our "README 2.0" framework turns your README into a true project dashboard. Our "Contributor Quickstart" kits make the first contribution experience seamless.
*   **Why It's Different:** We don't just write docs; we design a documentation *system*. We focus on discoverability, maintainability, and creating artifacts that developers *actually want to use*.

---

### 3. "Time-to-Onboard" Shrink - We Deliver DevEx ROI

*   **The Problem:** VPEs know that slow onboarding is expensive, but it's hard to fix when everyone is busy shipping features.
*   **Our Solution:** Our entire engagement is laser-focused on one key metric: reducing the time it takes for a new engineer to ship their first meaningful pull request.
*   **Why It's Different:** We don't talk vaguely about "good DevEx." We target a specific, painful, and expensive business problem and solve it. We frame the engagement in terms of ROI (e.g., "We'll save you 20 engineering hours per new hire").

---

### 4. Focused Specialist vs. Generalist Consultant

*   **The Alternative:** Hire a large, expensive DevOps consultancy or try to have your internal platform team fix it.
*   **The Problem with Alternatives:** Generalists lack the specific expertise in repo architecture. Internal teams are constantly pulled in different directions and lack the dedicated time to do a deep, focused cleanup.
*   **Why We're Different:** This is all we do. We are masters of this specific craft. We bring a playbook, a set of battle-tested tools, and a focused methodology that delivers results in weeks, not months. You get senior-level expertise without the long-term commitment or high cost of a full-time hire.
`
        }
      ]
    },
    {
      type: 'directory',
      name: 'funnel',
      children: [
        {
          type: 'file',
          name: 'LandingPage.md',
          content: `
# Landing Page Copy

---

### **[Headline]**
**Is Your GitHub Repo Slowing You Down?**
Transform your chaotic codebase from a development bottleneck into your team's greatest asset.

### **[Sub-headline / Promise]**
We architect clean, scalable, and self-documenting GitHub repositories that cut developer onboarding time in half and make shipping code a joy, not a chore. Stop wasting time on flaky builds and tribal knowledge.

### **[Call to Action - Primary]**
**[Button] Book a Free 20-Minute Repo Strategy Call**
*Get a concrete plan to fix your top 3 repository issues.*

---

### **[Credibility / Social Proof Bar]**
As seen in: [Logo 1], [Logo 2], [Redacted Client Quote]
*"[BrandName] turned our messy monorepo into a well-oiled machine. Our new engineers are pushing code on day one." - CTO, Series A SaaS*

---

### **[Problem/Agitation Section]**
**If This Sounds Familiar, You're Not Alone:**

*   **Onboarding is a nightmare.** It takes new hires days to get their environment set up and understand the codebase.
*   **CI is constantly red.** Your best engineers are debugging YAML files instead of building your product.
*   **Code reviews are a slog.** PRs are huge, lack context, and block your team's momentum.
*   **"Don't touch that!"** Critical parts of your system are undocumented "black boxes" that everyone is afraid to change.

**A messy repository isn't just a technical problem; it's a business problem. It burns money, frustrates engineers, and kills your product velocity.**

---

### **[Solution / Offer Section]**
**Introducing the GitHub Repo Architect Service**

We provide a fast, focused engagement to install the structure, documentation, and automation your team needs to move faster with confidence.

**Our Core Offerings:**

1.  **Rapid Repo Audit:** Get a "Repo Health Score" and a prioritized action plan in one week.
2.  **QuickStart Hardening:** We'll implement best-practice branching, CI checks, and documentation for you in 2-4 weeks.
3.  **Ongoing Stewardship:** We'll help you maintain high standards with monthly audits and expert coaching.

### **[How It Works Section]**

1.  **Book a Call:** A free, no-obligation chat to discuss your repository's challenges.
2.  **Get a Plan:** We'll outline a clear, fixed-price proposal with guaranteed deliverables.
3.  **Execute:** We get to work, transforming your repository in a matter of weeks.
4.  **Handoff & Empower:** We deliver the finished product and train your team on how to use and maintain it.

---

### **[Call to Action - Secondary / Lead Magnet]**
**Not Ready to Talk? Get Our Free Checklist.**
**[Box with Image] The Ultimate Repo Audit Checklist**
*Download our 40-point checklist used to diagnose and fix critical repository issues.*
**[Button] Download Now**

---

### **[FAQ Section]**

*   **Who is this for?**
    *   CTOs and VPEs at startups and scale-ups.
    *   Engineering Managers who own team velocity.
    *   Agency owners who need professional, repeatable client handoffs.
*   **How much does it cost?**
    *   Our Rapid Repo Audit starts at $5,000. Our most popular QuickStart Hardening engagement is typically between $15-25k.
*   **What if our repo is a total disaster?**
    *   That's what we specialize in. The messier, the better. We've seen it all.
*   **Why not just hire a DevOps engineer?**
    *   You could, but that's a 3-6 month search and a $200k+ annual commitment. We deliver a focused outcome in weeks for a fraction of the cost.

---

### **[Risk Reversal / Final CTA]**
**Your Repository's Future Starts Here.**
Stop letting a disorganized repo dictate your team's potential.

**[Button] Book Your Free Strategy Call**
*100% Satisfaction Guarantee. If you don't find our initial call valuable, we'll send you a $100 gift card for your time.*
`
        },
        {
          type: 'file',
          name: 'LeadMagnet.md',
          content: `
# Lead Magnet: Repo Audit Checklist (v1.0)

This is the content for the downloadable PDF / Notion page.

---

## **The Ultimate GitHub Repo Audit Checklist**

**By [BrandName]** - *We turn chaotic repos into scalable assets.*

Is your GitHub repository an accelerator or an anchor? Use this 40-point checklist to score your repo's health and identify critical areas for improvement.

---

### **Section 1: Structure & Organization (Score: __/10)**

*   [ ] **1. Root Directory Clarity:** Is the purpose of every top-level file and folder immediately obvious? (Max 10-15 items)
*   [ ] **2. Clear Application Entrypoint:** Is it obvious where the application code lives (e.g., \`/src\`, \`/app\`)?
*   [ ] **3. Scripts Folder:** Are all shell scripts and utility scripts located in a single \`/scripts\` folder?
*   [ ] **4. Configuration Management:** Is there a clear, documented strategy for managing environment variables (e.g., \`.env.example\`)?
*   [ ] **5. Gitignore:** Is \`.gitignore\` comprehensive, ignoring OS files, IDE folders, and sensitive credentials?
*   [ ] **6. Dockerfile:** If containerized, is the \`Dockerfile\` multi-stage, optimized for caching, and secure?
*   [ ] **7. No Large Binary Files:** Has \`git-lfs\` or an alternative been used for large assets?
*   [ ] **8. Logical Code Grouping:** Are related components, modules, or services grouped together logically?
*   [ ] **9. Consistent Naming Conventions:** Are files and folders named consistently (e.g., kebab-case, PascalCase)?
*   [ ] **10. Dependency Manifest:** Is there a single, clean package manifest (\`package.json\`, \`go.mod\`, etc.) with no commented-out dependencies?

---

### **Section 2: Documentation (Score: __/10)**

*   [ ] **1. README 2.0:** Does the README contain a project description, badges, setup instructions, and how to run tests?
*   [ ] **2. CONTRIBUTING.md:** Is there a clear guide for new contributors explaining the development process?
*   [ ] **3. PULL_REQUEST_TEMPLATE.md:** Does the PR template prompt for a description, testing steps, and related issue links?
*   [ ] **4. ISSUE_TEMPLATES:** Are there templates for bug reports and feature requests?
*   [ ] **5. ARCHITECTURE.md:** Is there a high-level overview of the system architecture? (Even a simple one-pager).
*   [ ] **6. "Magic" is Documented:** Are non-obvious code blocks, environment variables, or scripts explained with comments or docs?
*   [ ] **7. Setup is Scripted & Simple:** Can a new developer set up the project by running a single command (e.g., \`./scripts/setup.sh\`)?
*   [ ] **8. CODEOWNERS File:** Is there a \`CODEOWNERS\` file to automatically assign reviewers?
*   [ ] **9. ADRs (Architectural Decision Records):** Are significant architectural decisions documented in an \`/adr\` folder?
*   [ ] **10. License:** Is there an open-source \`LICENSE\` file?

---

### **Section 3: CI/CD & Automation (Score: __/10)**

*   [ ] **1. CI on Every PR:** Does a CI pipeline run automatically for every pull request?
*   [ ] **2. Fast Feedback Loop:** Does the CI pipeline complete in under 10 minutes?
*   [ ] **3. Linting Check:** Is code style enforced automatically with a linter?
*   [ ] **4. Unit/Integration Tests:** Are tests run as part of the CI pipeline?
*   [ ] **5. No Flaky Tests:** Are tests reliable and deterministic?
*   [ ] **6. Build/Compilation Check:** Does the CI pipeline confirm the application builds or compiles successfully?
*   [ ] **7. Dependency Caching:** Is dependency installation cached to speed up CI runs?
*   [ ] **8. Staging/Preview Deployments:** Are PRs automatically deployed to a preview environment?
*   [ ] **9. Secrets Management:** Are secrets and keys managed securely (e.g., GitHub Actions Secrets) and not hardcoded?
*   [ ] **10. Actionable Failure Notifications:** Are CI failures immediately sent to the right channel (e.g., Slack)?

---

### **Section 4: Security & Governance (Score: __/10)**

*   [ ] **1. Branch Protections:** Is the main branch protected, requiring PRs and passing checks before merging?
*   [ ] **2. Require Reviews:** Is at least one peer review required for all PRs to the main branch?
*   [ ] **3. Security Scanning (SAST):** Is a tool like CodeQL or Snyk run to find vulnerabilities in code?
*   [ ] **4. Dependency Vulnerability Scanning:** Is there a tool (e.g., Dependabot, Snyk) that scans for vulnerable dependencies?
*   [ ] **5. No Long-Lived Branches:** Are feature branches short-lived and merged back to main frequently?
*   [ ] **6. Linear History:** Is a "squash and merge" or "rebase and merge" strategy enforced to keep git history clean?
*   [ ] **7. Signed Commits:** Are developers required to sign their commits?
*   [ ] **8. Secret Scanning:** Is there a tool in place to prevent secrets from being committed to the repository?
*   [ ] **9. Least Privilege Access:** Are repository permissions managed, giving developers the minimum access they need?
*   [ ] **10. Stale Branch Policy:** Are stale branches automatically detected and flagged for deletion?

---

### **Finished? Tally your score.**

*   **30-40:** Excellent! Your repository is a model of clarity and efficiency.
*   **20-29:** Solid foundation, but there are key areas for improvement that could significantly boost developer velocity.
*   **10-19:** Warning signs. Your repo is likely causing friction, slowing down your team, and introducing risk.
*   **0-9:** Critical. Your repository is a major liability and needs immediate attention.

**Ready to turn your repository into a 40/40?**
Book a free, no-obligation strategy call with us. We'll help you build a concrete plan to get there.
**[Link to Calendar]**
`
        },
        {
          type: 'file',
          name: 'TY-Page.md',
          content: `
# Thank You Page Copy

This is the page users see after submitting a form (either downloading the lead magnet or booking a call).

---

### **Scenario 1: After Lead Magnet Download**

**[Headline]**
**Thanks! The Repo Audit Checklist is on its way to your inbox.**

**[Sub-headline]**
You've taken the first step toward a cleaner, more efficient repository.

**What to do next:**

*   **Step 1: Check Your Email.** Look for an email from {{FounderName}} with the subject line "Your Repo Audit Checklist."
*   **Step 2: Whitelist Us.** Add our email address to your contacts to ensure you get future resources.
*   **Step 3: Take the Test.** Run through the checklist on your main repository. It should only take 15-20 minutes.

**[Primary Call to Action]**
**Want to fast-track your results?**

The checklist is great for diagnosis, but implementation takes time and focus.
Book a free 20-minute call, and we'll personally walk you through your top 3 biggest opportunities for improvement based on your score. No pressure, just actionable advice.

**[Button] Book a Free 20-Minute Strategy Call**

---

### **Scenario 2: After Booking a Call**

**[Headline]**
**Confirmed! Your Repo Strategy Call is Booked.**

**[Sub-headline]**
You'll receive a calendar invitation and a confirmation email shortly. I look forward to speaking with you!

**To make our call as productive as possible, please:**

*   **Step 1: Accept the Calendar Invite.** It contains the meeting link.
*   **Step 2: Have Your Repo URL Ready.** If it's a private repo, no problem. We can discuss it conceptually.
*   **Step 3: Think About Your #1 Challenge.** What is the single biggest frustration your repository causes for your team?

**[Reassurance / What to Expect]**
This will be a working session, not a sales pitch. My goal is for you to leave the call with at least two concrete actions you can take immediately to improve your repository, whether you choose to work with us or not.

Talk soon,
{{FounderName}}
`
        },
        {
          type: 'file',
          name: 'CalendarPage.md',
          content: `
# Calendar Page Copy

This is the copy that appears on or next to the Calendly/booking widget.

---

### **[Page Title]**
**Book Your Free 20-Minute Repo Strategy Call**

### **[Headline Above Widget]**
**Let's Build Your Action Plan.**

### **[Description]**
Choose a time that works for you. In this quick, no-fluff call, we will:

1.  **Diagnose Your Biggest Bottleneck:** We'll pinpoint the #1 issue in your repository that's costing your team time and momentum.
2.  **Identify Quick Wins:** You'll walk away with 2-3 specific, actionable steps you can take *this week* to improve your repo health.
3.  **Outline a High-Level Strategy:** If it makes sense, we'll discuss what a full "Repo Hardening" engagement could look like for your team.

**This is a 100% free, no-obligation working session.** My goal is to provide immense value upfront.

I look forward to our conversation!

*- {{FounderName}}*
`
        },
        {
          type: 'file',
          name: 'FormQuestions.md',
          content: `
# Form Questions

These are the questions to ask on the booking/contact form. The goal is to qualify leads without adding excessive friction.

---

### **Lead Magnet Download Form (Low Friction)**

1.  **Work Email:** (Required)
2.  **First Name:** (Optional)

---

### **Book a Call Form (Progressive Disclosure / Qualification)**

#### **Page 1: Basic Info**

1.  **Full Name:** (Required, from calendar)
2.  **Work Email:** (Required, from calendar)

#### **Page 2: Context (After time is selected)**

These questions help me prepare for our call.

1.  **What's your current role?** (Required)
    *   *Dropdown: C-Level (CTO/CEO), VP/Director of Engineering, Engineering Manager, Staff/Principal Engineer, Agency Owner, Other*

2.  **How large is your engineering team?** (Required)
    *   *Dropdown: 1-5, 6-15, 16-30, 31-50, 50+*

3.  **What's your primary tech stack? (e.g., TypeScript, Go, Python)** (Optional, Text Field)

4.  **What's the biggest challenge with your current repository?** (Required)
    *   *Dropdown/Multi-select:*
        *   Slow/painful developer onboarding
        *   Flaky or slow CI/CD pipeline
        *   Inconsistent structure across repos
        *   Lack of documentation / too much tribal knowledge
        *   Code quality and review bottlenecks
        *   Other (please specify)

5.  **GitHub Repository URL (Optional):**
    *   *If you're comfortable sharing, this allows me to do some prep work. Private repos are fine, I won't be able to access the code, just the public metadata.*

6.  **How did you hear about us?** (Optional)
    *   *Dropdown: LinkedIn, Google Search, Referral, Upwork, Other*

---
### **CRM Mapping Logic**
*   **Role** -> maps to Persona field.
*   **Team Size** -> maps to Company Size field.
*   **Biggest Challenge** -> maps to "Pain Point" tag and can be used for lead scoring.
*   **Repo URL** -> custom "Repo URL" field.
`
        }
      ]
    },
    {
      type: 'directory',
      name: 'copy',
      children: [
        {
          type: 'file',
          name: 'ValueProps.md',
          content: `
# Core Value Propositions

A bank of copy-pasteable value props for use in emails, social posts, and ad copy.

---

### **Category: Speed & Velocity**

*   **Cut developer onboarding from a week to a day.** We build self-documenting repos that let new hires ship code on day one.
*   **Merge with confidence.** Our CI sanity suites catch errors *before* they hit the main branch, making releases boringly predictable.
*   **Stop wasting time on boilerplate.** We create a golden path for your developers so they can focus on building features, not fighting their tools.
*   **Shrink your PR cycle time.** With automated checks and clear contribution guidelines, code reviews become faster and more effective.

---

### **Category: Risk & Stability**

*   **De-risk your team's knowledge.** We eliminate tribal knowledge by turning it into durable, discoverable documentation and automation.
*   **Go from "code shame" to "code confidence."** We'll get your repository ready for investor diligence or a SOC2 audit.
*   **Secure your software supply chain.** We implement best-practice branch protections, security scanning, and dependency management to harden your codebase.
*   **Reduce your "bus factor."** When critical knowledge is codified in the repo, you're no longer dependent on any single engineer.

---

### **Category: Quality & Professionalism**

*   **Achieve "GitPolish-grade" quality.** We transform your repository into a polished, professional asset that reflects the quality of your engineering team.
*   **Deliver a client handoff that wows.** For agencies, our process ensures the codebase you deliver is as impressive as the application itself.
*   **Establish a culture of excellence.** A clean, well-organized repository sets the standard for quality and encourages better engineering practices across the team.
*   **Create a single source of truth.** Your repository becomes the central, trusted hub for how your software is built, tested, and deployed.
`
        },
        {
          type: 'file',
          name: 'FAQs.md',
          content: `
# Frequently Asked Questions (Master List)

A comprehensive list of FAQs for use on the website, in proposals, and for sales enablement.

---

### **About the Service**

*   **Q: What exactly is a "GitHub Repo Architect"?**
    *   A: We are specialists who focus exclusively on the structure, documentation, automation, and governance of your source code repositories. We turn them from messy folders of code into efficient, self-service platforms for your developers.

*   **Q: Is this just a DevOps service?**
    *   A: While it involves DevOps principles, our focus is much narrower and deeper. A general DevOps consultant might focus on your entire cloud infrastructure. We are laser-focused on the developer experience *within* GitHub. This is about making the day-to-day work of writing, reviewing, and shipping code as frictionless as possible.

*   **Q: Do you write application code?**
    *   A: No. We architect the repository *around* your code. We'll refactor CI/CD scripts, write documentation, and configure repository settings, but we do not touch your core application logic. This maintains a clear separation of concerns and allows us to move very quickly.

### **Process & Timeline**

*   **Q: How long does an engagement take?**
    *   A: Our "Rapid Audit" is a 1-week sprint. Our "QuickStart Hardening" engagements typically take 2-4 weeks, depending on the complexity of the repository.

*   **Q: What is the process like?**
    *   A: It's a 4-step process: 1) **Discover:** A deep dive into your current setup and pain points. 2) **Plan:** We present a detailed plan with clear deliverables and timelines. 3) **Execute:** We get to work, providing regular updates. We do the heavy lifting. 4) **Handoff:** We deliver the finished, polished repository and provide training to your team.

*   **Q: Do we need to pause development while you work?**
    *   A: Not at all. We work in a way that is non-disruptive to your team's ongoing development. We'll coordinate on the final cutover for things like new branch protection rules.

### **Pricing & ROI**

*   **Q: How much does it cost?**
    *   A: Engagements are fixed-price to ensure budget predictability. Audits start at $5,000, and our core "Hardening" projects typically range from $15,000 to $25,000.

*   **Q: Why is it so expensive? Can't we do this ourselves?**
    *   A: You certainly could, but consider the hidden costs. How many hours do your senior engineers waste per week on CI issues? What is the cost of a new hire taking 3 weeks to become productive instead of 3 days? Our service pays for itself by freeing up your most expensive resources to focus on what they do best: building your product. We deliver a result in weeks that might take an internal team a year to prioritize.

*   **Q: What's the ROI?**
    *   A: The ROI comes from three main areas: 1) **Reduced Onboarding Costs:** Faster time-to-productivity for every new engineer. 2) **Increased Developer Velocity:** Less time wasted on friction and debugging means more features shipped. 3) **Reduced Risk:** Lower chance of security breaches, deployment failures, and knowledge loss.

### **Security & Access**

*   **Q: Do you need access to our private code?**
    *   A: Yes, to do our work effectively, we need temporary, privileged access to your repository.

*   **Q: How do you handle security and confidentiality?**
    *   A: We take this extremely seriously. We will sign a comprehensive NDA, use a dedicated, secure GitHub account, and follow the principle of least privilege. Access is revoked immediately upon project completion. All of our work is done on your systems, so we do not store your code on our own machines.
`
        },
        {
          type: 'file',
          name: 'Objection-Handling.md',
          content: `
# Objection Handling

A script/guide for handling common sales objections during calls.

---

### **Objection 1: "It's too expensive." / "We don't have the budget."**

*   **Empathize:** "I understand, that's a significant investment, and it's smart to be cautious with your budget."
*   **Reframe to Cost of Inaction:** "Could we explore the cost of *not* fixing this? For example, you mentioned it takes about 2 weeks for a new engineer to get fully up to speed. If an engineer's loaded cost is, say, $15k/month, that's $7.5k in lost productivity right there for just one hire. How many engineers are you planning to hire this year?"
*   **Isolate the Issue:** "If budget weren't an issue, would this be a problem you'd want to solve right now?" (This tells you if it's a real budget issue or a value issue).
*   **Offer a Stepped Approach:** "I get that the full hardening project might be too much right now. What if we started with the 'Rapid Audit' for $5k? That would give you a concrete, prioritized roadmap and arm you with the data you need to make the case for a larger budget in the next quarter."

---

### **Objection 2: "We can do this ourselves." / "My team is smart, they can handle it."**

*   **Agree & Validate:** "You absolutely could. You have a very sharp team, and there's no question they are capable of doing this work."
*   **Introduce the "Focus & Time" Constraint:** "The challenge we see with even the best internal teams isn't capability, it's *opportunity cost* and *focus*. Your best engineers are needed to build and ship your product. Every hour they spend refactoring CI scripts or writing documentation is an hour they aren't spending on the features that drive revenue. We provide a dedicated, focused burst of effort to get this done in weeks, so your team doesn't have to de-prioritize their core work."
*   **Highlight Specialist Expertise:** "Additionally, because this is all we do, we bring a playbook and have seen the patterns across dozens of companies. We can help you avoid common pitfalls and get to the ideal state much faster."

---

### **Objection 3: "Now is not the right time." / "We're too busy."**

*   **Acknowledge:** "That makes sense. It sounds like the team is completely heads-down right now, which is a good sign of a growing business."
*   **Connect the Pain to the "Busy-ness":** "Often, the reason teams are so 'busy' is because of the very friction we're talking about. Things like slow CI, painful code reviews, and onboarding drag are what *create* the feeling of being constantly behind. By fixing the foundation, we actually *create* more time and bandwidth for the team."
*   **Quantify the Time Suck:** "You mentioned PRs can sometimes take a day or two to get reviewed. If we could cut that time in half, how many hours would that save the team each week?"
*   **Propose a "Light Lift" Start:** "The initial 'Rapid Audit' phase requires very little time from your team - just a 60-minute kickoff call and a 90-minute debrief. We do all the heavy lifting in between. It's designed to be a very low-impact process for a busy team."

---

### **Objection 4: "I need to talk to my team/CTO/CEO."**

*   **Support & Empower:** "That's a great idea. It's crucial that the whole team is on board. What are the key things you think will be most important to them?"
*   **Offer to Help:** "Would it be helpful if I joined for a brief 15-minute Q&A with your team? Or I could put together a concise one-page summary of our discussion and the proposed plan that you can share internally."
*   **Clarify the Decision Process:** "So I can follow up appropriately, what does the decision-making process look like from here, and what's a realistic timeline for you to have that conversation?"
`
        },
        {
          type: 'file',
          name: 'CaseStudy-Template.md',
          content: `
# Case Study Template

A template for writing compelling case studies based on successful client projects. Use the "Problem-Agitate-Solve" framework.

---

### **Case Study: [Client Name] Cuts Developer Onboarding Time by 80%**

**[Client Logo]**
**Client:** [Client Name], a [Description, e.g., Series B FinTech company]
**Industry:** [e.g., FinTech]
**Team Size:** [e.g., 50 Engineers]
**Service:** QuickStart Hardening

---

### **[Headline]: How [Client Name] Went From a 2-Week Onboarding Nightmare to New Hires Shipping Code on Day 2**

---

### **The Problem: A "Great" Company with a "Terrifying" Monorepo**

[Client Name] was a rapidly growing company with a brilliant engineering team. But behind the scenes, their core monorepo had become a victim of its own success. Years of rapid development, changing priorities, and a lack of consistent standards had created a codebase that was difficult to navigate, impossible to set up, and a source of daily frustration for developers.

*"Onboarding was a nightmare,"* says [Name], [Title]. *"We'd tell new hires to block off their first week just to get their development environment working. It was a huge drain on morale and a massive waste of time."*

---

### **The Agitation: The True Cost of Friction Was Millions**

The problem went far beyond onboarding.
*   **Flaky CI:** The CI pipeline took over 45 minutes to run and failed unpredictably, causing developers to lose hours of focus.
*   **Tribal Knowledge:** Critical deployment knowledge was held by two senior engineers, creating a huge bus-factor risk.
*   **Inconsistent Tooling:** Different parts of the monorepo used different linters, testing frameworks, and scripts, creating high cognitive overhead.

The leadership team calculated that this friction was costing them over **$500,000 per year** in lost productivity and engineering attrition.

---

### **The Solution: A 3-Week "QuickStart Hardening" Engagement**

[Client Name] engaged [BrandName] for a 3-week "QuickStart Hardening" project. The goal was to transform their monorepo from a liability into a strategic asset.

**Here's what we delivered:**

1.  **Repo Health Audit:** We first baselined their repository, giving them a **Repo Health Score of 12/100**. This quantitative data was key to getting team buy-in.
2.  **README 2.0 & Contributor Quickstart:** We rewrote the documentation from the ground up, creating a single, scripted setup command and clear contribution guidelines.
3.  **CI/CD Overhaul:** We refactored their CI pipeline, parallelizing jobs and implementing aggressive caching.
4.  **Branch Protection & Governance:** We implemented strict branch protection rules, required CI checks, and a CODEOWNERS file to streamline reviews.

---

### **The Results: Tangible, Measurable Improvements**

*   **80% Reduction in Onboarding Time:** New hire "time-to-first-PR" went from an average of **8 days to just 2 days**.
*   **75% Faster CI/CD:** The CI pipeline now runs in just **10 minutes**, giving developers near-instant feedback.
*   **Repo Health Score increased from 12 to 88.**
*   **Improved Developer Morale:** The team reported a significant increase in satisfaction and a reduction in daily frustrations.

*"The change was night and day,"* [Name] says. *"The repo is no longer a source of dread. It's a platform that helps us move faster. The investment paid for itself within the first two months."*

**[Final CTA]**
**Ready to achieve similar results? Book a free repo strategy call today.**
`
        }
      ]
    },
    {
      type: 'directory',
      name: 'outreach',
      children: [
        {
          type: 'file',
          name: 'ColdEmails.md',
          content: `
# Cold Email Sequences

---

### **Sequence 1: The "I Saw Your Job Post" Trigger**

*   **Trigger:** Company posts a job for "Senior/Staff Engineer" or "DevOps Engineer."
*   **Audience:** VPE or hiring manager.

**Email 1**
*   **Subject:** Question about your [Role] role at [Company]
*   **Body:**
    Hi [Name],

    Saw you're hiring for a [Role] at [Company]. It looks like you're scaling the team, which is always exciting.

    Often when teams are growing fast, the repo itself starts to feel the strain – onboarding gets slower and CI gets flaky. Many VPEs I work with are trying to fix this so their new senior hires can be productive from day one.

    I specialize in architecting GitHub repos for exactly this stage. We help teams cut onboarding time in half and build a stable foundation for growth.

    Open to a brief 20-minute chat next week to share a couple of specific ways you could streamline your new-hire experience?

    Best,
    {{FounderName}}

**Email 2 (3 days later, reply in thread)**
*   **Body:**
    Hi [Name],

    Just a quick follow-up. A clean, well-documented repo is one of the best ways to attract and retain top engineering talent. They can see right away that you care about developer experience.

    Would be happy to send over our free "40-point Repo Audit Checklist" if that's more helpful right now.

    Best,
    {{FounderName}}

---

### **Sequence 2: The "Failed CI" Trigger**

*   **Trigger:** You notice a public repo with consistently failing CI checks on its main branch.
*   **Audience:** Engineering manager or a committer on the project.

**Email 1**
*   **Subject:** GitHub CI at [Repo Name]
*   **Body:**
    Hi [Name],

    I was looking at the [Repo Name] repository on GitHub and noticed the CI pipeline seems to be a bit unstable on the main branch.

    As someone who lives and breathes CI/CD, I know how frustrating a red build can be – it kills momentum and erodes trust in the test suite.

    I specialize in hardening CI/CD pipelines for reliability and speed. I recently helped a team cut their build time from 40 minutes to 8 and eliminate flaky tests.

    If you're interested, I'd be happy to take a quick look at your setup and share 2-3 specific suggestions for improvement. No strings attached.

    Cheers,
    {{FounderName}}

---

### **Sequence 3: The Persona-Based (VPE) Outreach**

*   **Trigger:** General outreach to a VPE at an ICP-fit company.
*   **Audience:** VP of Engineering.

**Email 1**
*   **Subject:** Repo Onboarding at [Company]
*   **Body:**
    Hi [Name],

    As a VPE at a company of [Company]'s size, I imagine one of your top priorities is maximizing the productivity of your engineering team.

    I've spent the last [X] years focused on one specific lever for this: the repository itself. I help VPEs turn their repos from sources of friction (slow onboarding, flaky CI) into accelerators.

    For example, we helped [Similar Company] cut their time-to-first-PR for new hires from a week to a single day.

    Could I steal 20 minutes of your time next week to walk you through how we did it?

    Best,
    {{FounderName}}

**Email 2 (3 days later, reply in thread)**
*   **Body:**
    Hi [Name],

    Is improving developer experience and onboarding efficiency on your roadmap for this quarter?

    Happy to share a case study if that's helpful.

    Best,
    {{FounderName}}

---

### **Sequence 4: The Agency Owner Outreach**

*   **Trigger:** General outreach to an agency owner.
*   **Audience:** Founder/Owner/CTO of a dev agency.

**Email 1**
*   **Subject:** Client Handoffs
*   **Body:**
    Hi [Name],

    As the owner of a successful agency, I'm sure you know that a great client handoff is just as important as the app you build.

    I specialize in creating "GitPolish-grade" repositories that make your agency look incredibly professional and make your clients' lives easy. We build standardized, well-documented repo templates that your team can use for every project.

    This means less time spent on cleanup and more time delivering value. It also becomes a selling point for sophisticated clients.

    Open to a brief chat about how we could productize your project scaffolding?

    Best,
    {{FounderName}}

---

### **Sequence 5: The "Congrats on Funding" Trigger**

*   **Trigger:** Company announces a Seed or Series A funding round.
*   **Audience:** CTO or Founder.

**Email 1**
*   **Subject:** Congrats on the raise!
*   **Body:**
    Hi [Name],

    Huge congratulations on the recent funding round! It's an exciting time, and you're probably getting ready to scale the engineering team.

    I work with CTOs post-raise to get their codebase ready for that influx of new talent. We focus on cleaning up the main repo, improving documentation, and stabilizing CI/CD so that every new engineer you hire can be productive from day one.

    It's about turning that new capital into product velocity as efficiently as possible.

    If this is on your radar, I'd be happy to have a quick 20-minute call to share a few best practices.

    Congrats again,
    {{FounderName}}
`
        },
        {
          type: 'file',
          name: 'LinkedIn-Scripts.md',
          content: `
# LinkedIn Outreach Scripts

Scripts for connection requests, DMs, and nurturing sequences. The key is to be helpful, not salesy.

---

### **Connection Request Note**

*   **Goal:** Get the connection accepted. Keep it short, personalized, and non-demanding.
*   **Template:**
    > Hi [Name], I saw your post about [Topic] / that we're both in the [Group Name] group. I'm also focused on developer experience and engineering leadership. Would be great to connect and follow your work.

---

### **Sequence 1: The "Value Drop" After Connecting**

*   **Goal:** Establish credibility and start a conversation.
*   **Timing:** 1 day after they accept the connection request.

**DM 1:**
> Thanks for connecting, [Name]!
>
> Since you're a [VPE/Eng Manager], I thought you might find this interesting. I just published a "40-point GitHub Repo Audit Checklist" that a lot of engineering leaders are using to benchmark their codebase's health.
>
> Happy to send it over if you'd like a copy. No forms to fill out, just the direct link.
>
> Cheers,
> {{FounderName}}

**DM 2 (If they reply with interest):**
> Awesome, here it is: [Link to Lead Magnet]
>
> Let me know what you think, or if you have any questions as you go through it!

**DM 3 (If they reply positively after seeing it):**
> Glad it was helpful! A lot of teams find they're strong in one area (like CI) but have gaps in another (like documentation).
>
> If you ever want a second pair of eyes on your repo, I do free 20-minute strategy calls to help teams prioritize the top 2-3 fixes. Happy to find a time if that's useful.

---

### **Sequence 2: The Nurture Cadence (for connections who went cold)**

*   **Goal:** Stay top of mind by being consistently helpful.
*   **Timing:** Drip these messages out every 2-3 weeks.

**Nurture DM 1 (Sharing a Post):**
> Hi [Name], I wrote a post recently about the 3 most common mistakes teams make in their CI/CD setup. Thought you might find it relevant given your role at [Company].
>
> [Link to your LinkedIn Post]

**Nurture DM 2 (Sharing a Case Study/Result):**
> Hi [Name], hope you're having a great week.
>
> Just wanted to share a quick win. We recently worked with a Series B company to overhaul their main repository, and they were able to cut their new engineer onboarding time from 10 days down to 2.
>
> It's amazing how much leverage you can get from a clean, well-documented repo. Just thought it was a cool result to share!

**Nurture DM 3 (The Soft Ask):**
> Hi [Name], hope all is well.
>
> Is improving developer experience or onboarding efficiency on your team's roadmap for this quarter?

---

### **Sequence 3: Responding to a Trigger Post**

*   **Goal:** Use their content as a natural entry point for a conversation.
*   **Trigger:** They post about hiring, scaling challenges, tech debt, etc.

**Public Comment:**
> Great point about [Topic]. The cost of friction in the development process is so much higher than most teams realize. Especially agree with your take on [Specific Point].

**Follow-up DM:**
> Loved your post on [Topic]. It really resonated.
>
> The issue of [Pain Point from their post] is something I'm obsessed with. I spend all my time helping teams solve this specifically at the repository level (better docs, faster CI, clearer structure).
>
> If you're ever open to brainstorming solutions, I'd love to connect.
`
        },
        {
          type: 'file',
          name: 'GitHub-Community-Outreach.md',
          content: `
# GitHub Community Outreach (Non-Spammy Patterns)

The goal here is to build authority and generate inbound interest by being a genuinely helpful member of the community. This is a long-term play.

---

### **1. Value-Driven Comments in OSS Project Issues & Discussions**

*   **Target:** Popular open-source tools that your ICP uses (e.g., Vercel's Next.js, Storybook, testing libraries, infrastructure tools).
*   **The Wrong Way:** "Hey, I can solve this for you, book a call!"
*   **The Right Way:**
    1.  Find an issue or discussion thread where a user is struggling with something related to repository setup, CI/CD, or documentation.
    2.  **Provide a genuinely helpful, detailed answer.** Share a code snippet, link to a helpful resource, or explain a complex concept clearly.
    3.  **Your Profile is Your Landing Page:** Your GitHub profile should be optimized. It should have a clear bio ("Helping teams build world-class repositories"), a link to your landing page, and pinned repositories that showcase your expertise (e.g., a template repository).

*   **Example Comment:**
    > "Hey @user123, I've run into this exact CI issue before with GitHub Actions. The problem is often that the cache key isn't specific enough. You could try something like this: \`[YAML snippet]\`. This includes the lock file hash in the key, so it only re-installs when your dependencies actually change. Also, here's a great article that goes deeper on optimizing GHA caching: [Link]. Hope that helps!"

---

### **2. OSS Maintainer Partnerships**

*   **Target:** Maintainers of mid-sized but influential OSS projects.
*   **The Angle:** Many OSS projects are run by brilliant developers who are passionate about the code but don't have time for the "janitorial" work of repo hygiene.
*   **The Offer (Pro-Bono):**
    > "Hi [Maintainer Name], I'm a huge fan of [Project Name] and use it all the time. I specialize in repository architecture and developer experience. I noticed the contribution guidelines are a bit sparse and the issue templates could be more detailed.
    >
    > As a thank you to the project, I'd be happy to spend a few hours (pro-bono) to do a full overhaul of your \`CONTRIBUTING.md\`, PR/Issue templates, and add a "Good First Issue" workflow to make it easier for new contributors to jump in.
    >
    > Let me know if you'd be open to that. Thanks for all your work on this amazing tool!"

*   **The Payoff:** You get a public PR and contribution credit that serves as a powerful case study. You can then write a blog post about "How We Improved the Contributor Experience for [Project Name]."

---

### **3. Conference & Meetup CFP Pitches**

*   **Target:** Developer-focused conferences and local meetups.
*   **The Angle:** Your expertise is a niche but highly relevant topic that many engineering leaders care about.
*   **Talk Title Ideas:**
    *   "From Messy Repo to Money Repo: How to Turn Your Codebase into a High-Velocity Platform"
    *   "The First 60 Minutes: Architecting a Repository for Instant Developer Onboarding"
    *   "Beyond Linting: A Deep Dive into CI/CD Sanity Suites"
    *   "Stop the Bleeding: A VPE's Guide to Taming Tribal Knowledge"

*   **The Payoff:** Speaking at events establishes you as a thought leader, gives you incredible content to share, and generates warm inbound leads. Your talk is a top-of-funnel asset.
`
        },
        {
          type: 'file',
          name: 'Upwork-Proposal-Template.md',
          content: `
# Upwork Proposal Template

A template for quickly responding to relevant Upwork job posts. The key is to be fast, specific, and demonstrate you've read the post.

---

### **Template Structure**

**Subject: Re: [Job Post Title] - Proposal from a GitHub Repo Architect**

Hi there,

I just read your job post looking for help with [restate their primary problem, e.g., cleaning up your messy monorepo and improving CI/CD]. I'm a specialist in exactly this area, and I can help.

I've helped companies like yours solve these exact problems, resulting in:
*   **Faster Onboarding:** Cutting new hire setup time from days to hours.
*   **Reliable CI/CD:** Eliminating flaky builds and shrinking pipeline run-times by up to 75%.
*   **Better Documentation:** Creating a self-service repository that reduces developer confusion.

Based on your description, here's what I'd propose as a first step:

**Mini-Audit & Action Plan:**

1.  **Repo Structure:** [Provide one specific, insightful comment based on their description, e.g., "I would immediately establish a clear \`/src\` directory and a \`/scripts\` folder to separate application code from tooling."]
2.  **CI/CD:** [Provide another specific comment, e.g., "For your slow build times, I would start by implementing dependency caching in your GitHub Actions workflow, which often provides a quick 2-3x speed boost."]
3.  **Documentation:** [Provide a third specific comment, e.g., "I would overhaul your root README.md to act as a 'front door' for the project, with clear setup instructions and links to key architectural documents."]

I have a portfolio of "before and after" repository transformations I can share. My engagements are fixed-price, ensuring you get a predictable outcome without billing surprises.

I am available to start immediately and can connect for a brief call tomorrow to discuss your project in more detail.

Best regards,
{{FounderName}}

**[Link to your portfolio/landing page]**

---
### **Acceptance Criteria for Sending Proposal:**

*   [ ] Does the job post explicitly mention GitHub, CI/CD, documentation, onboarding, or developer experience?
*   [ ] Is the client's budget within a reasonable range of your minimum engagement?
*   [ ] Have you customized the 3 "mini-audit" bullet points to be specific to their job post?
*   [ ] Is the proposal sent within the first hour of the job being posted? (Speed is critical on Upwork).
`
        },
        {
          type: 'file',
          name: 'Partner-Intro-Email.md',
          content: `
# Partner Intro Email

An email template for reaching out to potential referral partners.

---

### **Target Partners:**

*   **MSPs (Managed Service Providers):** They manage cloud infrastructure but often don't go deep into the application code layer.
*   **Dev Agencies:** They build products but may not specialize in the final "polishing" and documentation for handoff.
*   **CTO Roundtables / Fractional CTOs:** They advise companies and are often the first to hear about scaling pains.
*   **VCs / Accelerators:** They have a portfolio of companies that are all facing these problems as they scale.

---

### **Email Template**

*   **Subject:** Partnership Idea: Helping your clients with GitHub DevEx

Hi [Partner Name],

My name is {{FounderName}}, and I run a specialized consultancy called [BrandName]. I'm reaching out because I see a potential overlap in the clients we serve.

You help companies with [Their Service, e.g., building amazing web applications]. I help them by ensuring the GitHub repository behind that application is clean, well-documented, and easy for their internal team to manage long after your engagement ends.

**The Problem I Solve:**
Many times, after a successful project handoff, a client's internal team struggles to navigate the new codebase. This can lead to frustration and reflect poorly on the initial engagement, even when the app itself is perfect.

**My Service:**
I offer a "QuickStart Hardening" service that creates a "GitPolish-grade" repository with excellent documentation, a solid CI/CD foundation, and clear contribution guidelines. For agencies, this turns the codebase itself into a professional, high-value deliverable.

**The Partnership Idea:**
If you ever have clients who need to professionalize their existing codebase, or if you want to offer a "premium handoff" package, I can be a white-label or referral partner to deliver that component.

I offer a standard **[e.g., 15%] referral fee** for any closed business.

Would you be open to a brief 15-minute introductory call next week to see if there's a fit?

Best,
{{FounderName}}
`
        }
      ]
    },
    {
      type: 'directory',
      name: 'email',
      children: [
        {
          type: 'file',
          name: 'SpeedToLead-3Day.md',
          content: `
# Speed-to-Lead Sequence (First 3 Days)

This sequence triggers the moment someone books a call. The goal is to build rapport, provide value, and reduce the no-show rate.

---

### **Email 1: Instant Confirmation (Automated)**

*   **From:** {{FounderName}}
*   **Subject:** Your Repo Strategy Call is Confirmed!
*   **Body:**
    Hi [Name],

    Thanks for booking a Repo Strategy Call. I've just sent over a calendar invitation for our meeting on [Date] at [Time].

    To help you prepare, here are a couple of resources that you might find valuable:
    *   [Link to a relevant case study or blog post]
    *   [Link to the Repo Audit Checklist, in case they haven't seen it]

    My goal for our call is simple: for you to walk away with at least two actionable ideas to improve your repository, whether you choose to work with me or not.

    Looking forward to our chat!

    Best,
    {{FounderName}}

---

### **SMS Variant (Optional, requires phone number & consent)**

*   **Timing:** Instant
*   **Body:**
    > Hi [Name], it's {{FounderName}}. Just confirmed our Repo Strategy Call for [Date] at [Time]. Calendar invite is on its way to your email. Looking forward to it!

---

### **Email 2: The "Thinking About Your Problem" Email (1 Day Before Meeting)**

*   **From:** {{FounderName}}
*   **Subject:** Prepping for our call tomorrow
*   **Body:**
    Hi [Name],

    Looking forward to our chat tomorrow at [Time].

    I was reviewing the notes you shared in the booking form, especially your comment about [mention their specific pain point, e.g., "slow developer onboarding"]. This is a super common (and solvable!) problem.

    It got me thinking about a similar situation with a client, [Client Story Snippet, e.g., "a FinTech company that had the same issue. We found that the biggest bottleneck wasn't the code complexity, but a lack of a single, scripted setup process."].

    Come to the call ready to discuss [a specific question, e.g., "what the first day looks like for a new engineer on your team"]. I have a feeling we can find some quick wins there.

    Talk to you tomorrow!

    Best,
    {{FounderName}}

---

### **Email 3: Day-Of Reminder (1 Hour Before Meeting, Automated)**

*   **From:** {{FounderName}}
*   **Subject:** See you in 60 minutes
*   **Body:**
    Hi [Name],

    Just a quick reminder that our Repo Strategy Call is coming up in about an hour at [Time].

    The meeting link is in the calendar invite.

    Grab a coffee, and I'll see you shortly!

    Best,
    {{FounderName}}
`
        },
        {
          type: 'file',
          name: 'LeadMagnet-Delivery.md',
          content: `
# Lead Magnet Delivery Email

This email is sent automatically when someone requests the "Repo Audit Checklist."

---

### **Email 1: Here's Your Checklist!**

*   **From:** {{FounderName}}
*   **Subject:** Your Repo Audit Checklist is here
*   **Preheader:** The first step to a cleaner codebase.
*   **Body:**
    Hi [Name],

    Thanks for your interest in a more organized and efficient GitHub repository.

    As promised, here is your copy of the "Ultimate 40-Point Repo Audit Checklist."

    **[Button] Download the Checklist Now**
    (Or, use a direct link: [Link to PDF/Notion Page])

    I recommend running through this with your primary repository. It should take about 15-20 minutes and will give you a fantastic baseline "Repo Health Score."

    **Here's a common pattern I see:**
    Many teams score well on the "Code" and "CI/CD" sections but find major gaps in "Documentation" and "Governance." These are the areas that create hidden drag on your team's velocity.

    If you run through the list and find yourself with a score under 25, you're not alone. I'd be happy to jump on a free 20-minute call to help you prioritize the top 2-3 most impactful fixes. You can book a time that works for you here:
    **[Link to your calendar]**

    Let me know if you have any questions!

    Best,
    {{FounderName}}
`
        },
        {
          type: 'file',
          name: 'Nurture-10Emails.md',
          content: `
# 10-Part Nurture Sequence

This sequence is for leads who downloaded the checklist but did not book a call. It's dripped out over 4-6 weeks. The goal is to build trust by teaching, not selling.

---

*   **Timing:** Start 3 days after lead magnet download.
*   **Theme:** A "Repo Makeover" story arc.

**Email 1: The #1 Mistake in Repo Structure**
*   **Subject:** The one folder that's killing your repo's clarity
*   **Content:** The problem of a messy root directory. The solution: Aggressively use \`/scripts\`, \`/docs\`, and \`/src\` to keep the root clean. Provide a "before and after" file tree example.

**Email 2: Your README is a Billboard, Not a Novel**
*   **Subject:** Your README is your repo's front door
*   **Content:** Explain the "README 2.0" framework. It must answer 3 questions in 5 seconds: What is this? How do I set it up? How do I use it? Include a template.

**Email 3: The "Magic" in Your Code is Dangerous**
*   **Subject:** Is your code full of "magic"?
*   **Content:** Talk about tribal knowledge and undocumented scripts or environment variables. The solution: a simple \`ARCHITECTURE.md\` file and liberal use of comments for non-obvious code.

**Email 4: A Quick Win for Your CI Pipeline**
*   **Subject:** Speed up your CI by 2x today
*   **Content:** A mini-playbook on implementing dependency caching in GitHub Actions. Show the 3 lines of YAML that can save hours of build time.

**Email 5: Case Study Snippet**
*   **Subject:** How [Client] cut onboarding from a week to a day
*   **Content:** A short, punchy version of your main case study. Focus on the pain, the one key change (e.g., scripted setup), and the amazing result. (CTA: "Want to see if we can do the same for you? Book a call.")

**Email 6: The Power of a Good PR Template**
*   **Subject:** The 3 things every PR needs
*   **Content:** Why a blank PR description box is a missed opportunity. Provide a PULL_REQUEST_TEMPLATE.md that prompts for a summary, testing steps, and a link to the issue.

**Email 7: Are You Reviewing Code or Just "LGTM"-ing?**
*   **Subject:** Stop wasting time on code reviews
*   **Content:** Talk about how a CODEOWNERS file and clear branch protection rules can automate the review process and ensure the right eyes are on the right code.

**Email 8: The "Bus Factor" Litmus Test**
*   **Subject:** What happens if your top engineer wins the lottery?
*   **Content:** A direct discussion about the business risk of tribal knowledge. Frame your service as a form of "key person" insurance for their codebase.

**Email 9: The Hard Question**
*   **Subject:** Is your repo helping or hurting?
*   **Content:** A more direct email summarizing the costs of a messy repo (wasted salary, engineer frustration, shipping delays). (CTA: "If you're tired of dealing with this, let's talk. Here's my calendar.")

**Email 10: The Breakup / Final Offer**
*   **Subject:** Is this not a priority right now?
*   **Content:** A soft breakup email. "Hey, I've been sending you some resources on improving your repo, but it seems like this isn't a top priority for you right now, which is totally fine. I'll stop sending you these emails, but if anything changes, feel free to book a call. Here's a link to all the resources I've shared in one place."
`
        },
        {
          type: 'file',
          name: 'NoShow-Reschedule.md',
          content: `
# No-Show & Reschedule Sequence

This sequence triggers when a prospect misses a scheduled call.

---

### **Email 1: The "Hope Everything is OK" Email (5 Minutes After No-Show)**

*   **From:** {{FounderName}}
*   **Subject:** Checking in
*   **Body:**
    Hi [Name],

    I was on our scheduled call just now but it looks like you couldn't make it.

    Hope everything is alright!

    If you're still interested in chatting about your repository, my calendar is open – please feel free to grab a new time that works for you:
    **[Link to your calendar]**

    If your priorities have changed, no worries at all.

    Best,
    {{FounderName}}

---

### **SMS Variant (Optional, more direct)**

*   **Timing:** 5 minutes after no-show.
*   **Body:**
    > Hey [Name], it's {{FounderName}}. Just missed you on our call. Hope all is well. If you'd like to reschedule, just grab a new time from my calendar link I just emailed you. Thanks!

---

### **Email 2: The Gentle Nudge (2 Days Later)**

*   **From:** {{FounderName}}
*   **Subject:** Re: Checking in
*   **Reply in the same thread.**
*   **Body:**
    Hi [Name],

    Just wanted to quickly follow up. If you're still looking to tackle [their #1 pain point from the form], I'm happy to find another time to connect this week.

    Here's my calendar link again for convenience:
    **[Link to your calendar]**

    Let me know!

    Best,
    {{FounderName}}

---

### **Email 3: The Breakup (4 Days Later)**

*   **From:** {{FounderName}}
*   **Subject:** Closing the loop
*   **Body:**
    Hi [Name],

    Since I haven't heard back, I'm going to assume that improving your repository strategy isn't a priority for you at the moment, and I'll be closing your file.

    If that's not the case, and you'd still like to chat, you know where to find me.

    Wishing you and [Company] all the best.

    Best,
    {{FounderName}}
`
        },
        {
          type: 'file',
          name: 'PostCall-Followup.md',
          content: `
# Post-Call Follow-up Email

This email is sent within 1-2 hours after a successful discovery call.

---

### **Template**

*   **From:** {{FounderName}}
*   **Subject:** Great chat about [Company]'s repository
*   **Body:**
    Hi [Name],

    Thanks again for your time today. I really enjoyed learning about [Company] and the challenges you're facing with [mention a specific detail, e.g., "managing the complexity of your monorepo as you scale"].

    **To recap our conversation, here are the key takeaways:**

    *   **Your Primary Goal:** [e.g., To reduce new engineer onboarding time from 1 week to 1-2 days.]
    *   **The Main Obstacles:**
        *   [Obstacle 1, e.g., Lack of a scripted, one-command setup process.]
        *   [Obstacle 2, e.g., A slow and unreliable CI pipeline.]
        *   [Obstacle 3, e.g., Undocumented "tribal knowledge" around deployments.]
    *   **The Business Impact:** [e.g., This is currently costing you significant engineering hours and slowing down feature velocity.]

    **Next Steps:**
    As discussed, I am putting together a formal proposal for our **[Name of Service, e.g., QuickStart Hardening]** engagement. It will outline the full scope of work, deliverables, timeline, and a fixed-price investment.

    I will have that over to you by [Date, e.g., EOD tomorrow].

    In the meantime, here is the [Resource you promised, e.g., case study about the FinTech company] we talked about.

    Please let me know if you have any questions. It was great speaking with you, and I'm excited about the possibility of helping you build a world-class repository.

    Best,
    {{FounderName}}
`
        },
        {
          type: 'file',
          name: 'Breakup-Sequence.md',
          content: `
# Breakup Sequence (Post-Proposal, No Response)

This sequence is for leads who have received a proposal but have gone silent.

---

### **Email 1: The Gentle Check-In (5-7 Days After Proposal Sent)**

*   **From:** {{FounderName}}
*   **Subject:** Re: Proposal for [Company]
*   **Reply in the proposal email thread.**
*   **Body:**
    Hi [Name],

    Just wanted to check in and see if you had a chance to review the proposal I sent over last week.

    Happy to answer any questions you might have.

    Let me know what you think!

    Best,
    {{FounderName}}

---

### **Email 2: The "Is This Still a Priority?" Email (7 Days Later)**

*   **From:** {{FounderName}}
*   **Subject:** Re: Proposal for [Company]
*   **Reply in the same thread.**
*   **Body:**
    Hi [Name],

    Following up on the proposal for the repository hardening project.

    When we last spoke, tackling [Their #1 Pain Point] seemed like a key priority for this quarter. Has anything changed on your end?

    Even if you've decided to go in a different direction, a quick reply to let me know would be much appreciated.

    Thanks,
    {{FounderName}}

---

### **Email 3: The Breakup Email (7 Days Later)**

*   **From:** {{FounderName}}
*   **Subject:** Closing your file
*   **Body:**
    Hi [Name],

    I've tried to get in touch a few times regarding the proposal for the repository architecture project, but haven't heard back.

    This usually means one of three things:
    1.  You're swamped and this has fallen off your radar.
    2.  Your priorities have changed and this is no longer relevant.
    3.  You've decided to go in another direction or handle it internally.

    In any case, I'm going to go ahead and close your file for now to avoid cluttering your inbox.

    If you do decide you want to pick this back up in the future, please don't hesitate to reach out.

    Wishing you and [Company] all the best.

    Best,
    {{FounderName}}
`
        }
      ]
    },
    {
      type: 'directory',
      name: 'content',
      children: [
        {
          type: 'file',
          name: '30Day-ContentCalendar.md',
          content: `
# 30-Day Content Calendar (LinkedIn Focus)

A daily plan for LinkedIn content to build authority and generate inbound leads. Mix of formats: text-only, image, video (Loom).

---

**Week 1: The Problem & The Pain**

*   **Day 1 (Mon):** Text Post - "Your GitHub repo is either an accelerator or an anchor. There is no in-between. Which is yours?" (Engage with comments)
*   **Day 2 (Tue):** Image Post - "Before and After" file tree of a messy vs. clean repo root.
*   **Day 3 (Wed):** Loom Video - 2-min teardown of a public repo's README, explaining how it could be improved.
*   **Day 4 (Thu):** Text Post - "The 3 silent killers of developer velocity: 1. Slow CI, 2. Tribal Knowledge, 3. Onboarding Friction. You must fix them."
*   **Day 5 (Fri):** Poll - "What's the biggest pain in your repo right now? A) Slow CI, B) Bad Docs, C) Confusing Structure, D) All of the above."

**Week 2: The Solution & The Frameworks**

*   **Day 8 (Mon):** Text Post - Introduce the "Repo Health Score" concept. "You can't improve what you don't measure. We score repos from 0-100."
*   **Day 9 (Tue):** Carousel Post - 5 slides explaining the "README 2.0" framework.
*   **Day 10 (Wed):** Text Post - "Hot take: Your CI pipeline should be so fast and reliable that developers *want* to run it."
*   **Day 11 (Thu):** Loom Video - "How to set up a PULL_REQUEST_TEMPLATE.md in 90 seconds." (Quick, actionable tutorial).
*   **Day 12 (Fri):** Text Post - Share a client win. "Just helped a client cut their new hire onboarding from 1 week to 1 day. The lever? A single scripted setup command."

**Week 3: The ROI & The Business Case**

*   **Day 15 (Mon):** Text Post - "How to calculate the ROI of a clean repo. Formula: (Avg Engineer Salary / Hours in Year) * (Hours Wasted Per Week) * (Number of Engineers)."
*   **Day 16 (Tue):** Image Post - A simple chart showing the decreasing "Time to First PR" for a client.
*   **Day 17 (Wed):** Text Post - "Talking to your CTO about DevEx? Don't talk about 'clean code.' Talk about 'cost of delay' and 'hiring advantage'."
*   **Day 18 (Thu):** Carousel Post - 3 slides on "Why hiring a Repo Architect is cheaper than a full-time DevOps engineer."
*   **Day 19 (Fri):** Q&A Post - "I specialize in fixing messy GitHub repos. Ask me anything."

**Week 4: The Call to Action & The Offer**

*   **Day 22 (Mon):** Text Post - "I created a 40-point checklist to audit your own repo. Want a copy?" (Drive lead magnet downloads).
*   **Day 23 (Tue):** Loom Video - Walkthrough of you using the checklist on a public repo, calculating its score.
*   **Day 24 (Wed):** Case Study Post - Link to your full case study. Pull out the best quote for the post body.
*   **Day 25 (Thu):** Text Post - Direct offer. "I have 2 slots open next month for a 'QuickStart Hardening' engagement. We'll take your repo from chaos to clarity in 3 weeks. DM me 'repo' if you want details."
*   **Day 26 (Fri):** Personal Story - "Why I'm obsessed with this niche. My story of working in a company with a repo from hell..."
`
        },
        {
          type: 'file',
          name: '8-LinkedIn-Posts.md',
          content: `
# 8 LinkedIn Posts (Copy-Pasteable)

---

### **Post 1: The Hook (Text-Only)**

Your GitHub repo is either an accelerator or an anchor.

It's either helping your team ship faster, or it's actively slowing them down with friction, confusion, and tech debt.

There is no in-between.

Which is yours?

#DevEx #EngineeringLeadership #GitHub

---

### **Post 2: The Pain Point (Text-Only)**

The 3 silent killers of developer velocity:

1.  **Onboarding Friction:** Your new hire spends their first week just trying to get the project to run locally. (Cost: ~$3,000 in salary).
2.  **Tribal Knowledge:** Critical deployment info lives only in the head of your one senior engineer. (Risk: Catastrophic).
3.  **Slow CI/CD:** A 30-minute build that runs 20 times a day is 10 hours of dead time. For a team of 10, that's a full-time job. (Cost: ~$15,000/month).

Fixing your repo isn't "janitorial work."
It's high-leverage business optimization.

#VPE #CTO #DeveloperExperience

---

### **Post 3: The Framework (Carousel/Image)**

**Title:** You're thinking about your README all wrong.

**Slide 1:** Your README isn't a novel. It's a billboard.
**Slide 2:** It must answer 3 questions in 5 seconds:
    1. What is this project? (A one-sentence description)
    2. How do I get it running? (A single, copy-pasteable command)
    3. How do I use it? (Link to key usage examples or next steps)
**Slide 3:** Add badges for CI status and code coverage. Trust signals matter.
**Slide 4:** Include a simple diagram of the architecture. A picture is worth 1000 words of documentation.
**Slide 5:** Stop treating it like an afterthought. Your README is the front door to your codebase. Make it welcoming.

#Documentation #GitHub #CleanCode

---

### **Post 4: The Quick Win (Loom/Video Idea)**

(Video of you showing a GitHub Actions workflow file)

"Here's how to speed up your GitHub Actions CI by 2-3x in 60 seconds.

Most teams forget to cache their dependencies. This means you're re-downloading gigs of packages on every single run.

All you need to do is add this 'actions/cache' step to your YAML file. (Show the code).

It uses a hash of your lock file as a key. This tells GitHub: 'If the dependencies haven't changed, just reuse the ones from the last run.'

It's a tiny change that can save your team hours every single week."

#GitHubActions #CI/CD #DevOps

---

### **Post 5: The Case Study Snippet (Text-Only)**

We just helped a Series B FinTech company cut their new engineer onboarding time from 10 days down to 2.

The crazy part? We didn't touch a single line of their application code.

The entire win came from:
1.  Creating a single, scripted setup command.
2.  Rewriting the README to be a step-by-step guide.
3.  Recording a 15-minute Loom video walking through the architecture.

Don't underestimate the power of a great developer experience.

#Onboarding #DevEx #CaseStudy

---

### **Post 6: The Business Case (Text-Only)**

Talking to your non-technical CEO about repo health?

Don't say:
"We need to refactor our CI scripts and improve documentation."

Say:
"I want to launch a project to cut new hire onboarding costs by 80% and increase our feature shipping velocity by 15%. It's a one-time investment that will pay dividends on every future engineer we hire."

Frame the solution in the language of the business.

#CTO #VPE #EngineeringManagement

---

### **Post 7: The Direct Offer (Text-Only)**

I have 2 slots open in [Month] for a "QuickStart Repo Hardening" engagement.

In 3 weeks, we'll take your most critical repository from chaos to clarity.
- We'll fix your CI pipeline.
- We'll overhaul your documentation.
- We'll implement best-practice branch protections and contribution guidelines.

The result? Your team moves faster, with less friction.

This is for teams of 10-50 engineers who are tired of fighting their own codebase.

DM me "repo" if you want the details.

#GitHub #DevOps #Consulting

---

### **Post 8: The Poll**

What's the most painful part of your primary GitHub repo?

- Flaky / Slow CI
- Lack of Good Documentation
- Confusing Folder Structure
- All of the above (help)

#DeveloperExperience #GitHub #Poll
`
        },
        {
          type: 'file',
          name: '3-YouTube-Scripts.md',
          content: `
# 3 YouTube Video Scripts (Short-Form, 5-10 mins)

---

### **Video 1: "I Audited Google's Go-Microservice Repo - Here's What I Found"**

*   **Hook:** "Google is known for world-class engineering. But is their public code perfect? I ran their microservices-demo repo through my 40-point audit checklist. Here's the good, the bad, and the ugly."
*   **Segment 1: The Good (Praise Publicly)**
    *   Show screen recording of the repo.
    *   "First off, the structure is excellent. Clear separation of services, a top-level \`/src\` directory. This gets a 10/10."
    *   "Their use of a \`Taskfile.yml\` to standardize commands is brilliant. It's like a Makefile but simpler."
*   **Segment 2: The Opportunities for Improvement (Critique Gently)**
    *   "The README is good, but it's very dense. I'd add a quick-start section right at the top for impatient developers."
    *   "Their CI pipeline is split across many files. I'd consolidate it into a single, more discoverable GitHub Actions workflow."
    *   "There's no PULL_REQUEST_TEMPLATE. This is a huge missed opportunity to guide contributors."
*   **Segment 3: The Final Score & Takeaway**
    *   "Overall, I give this repo a solid 32/40. It's fantastic, but even Google has room to improve their public-facing developer experience."
    *   **CTA:** "If you want to run this same audit on your own repository, I've made the checklist I used today available for free. Link in the description."

---

### **Video 2: "Stop Writing Documentation. Start Designing It."**

*   **Hook:** "Everyone hates writing documentation. And nobody reads it. Why? Because we treat it like a chore. Today, I'm going to show you how to *design* a documentation system that developers actually love to use."
*   **Segment 1: The 3 Levels of Documentation**
    *   Use a simple whiteboard or digital equivalent.
    *   "**Level 1: The README.** This is your front door. It needs a description, a single setup command, and a link to Level 2."
    *   "**Level 2: The How-To Guides.** These live in \`/docs\`. They are recipe-style guides for common tasks: 'How to run tests,' 'How to deploy to staging,' 'How to connect to the database'."
    *   "**Level 3: The Why (ADRs).** Architectural Decision Records. A simple markdown file for every major decision. 'Why we chose Postgres over MySQL.' This stops recurring debates."
*   **Segment 2: The Tools of the Trade**
    *   Show screen recording.
    *   "Use a PULL_REQUEST_TEMPLATE to force documentation updates."
    *   "Use a CODEOWNERS file to assign documentation ownership."
    *   "Use a linter for documentation (like Vale) to enforce style."
*   **Segment 3: The Golden Rule**
    *   "The golden rule is this: documentation should live as close to the code as possible. That's why I'm a huge fan of keeping it all in the GitHub repo, not in a separate system like Confluence where it will go stale."
    *   **CTA:** "I help teams design and implement these documentation systems. If your docs are a mess, click the link in the description to book a free strategy call."

---

### **Video 3: "The 5 CI Checks Every Repo MUST Have (The Sanity Suite)"**

*   **Hook:** "Your CI pipeline is your repository's immune system. If it's weak, you'll get sick. Here are the 5 essential checks that form a 'CI Sanity Suite' for any modern codebase."
*   **Segment 1: The Checks (Show YAML snippets for each)**
    *   **1. Linter:** "This is the cheapest and fastest check. It catches style errors before they even become a discussion. Run it first."
    *   **2. Unit Tests:** "These check the individual components of your code. They should be fast and have no external dependencies."
    *   **3. Integration Tests:** "These check that your components work together. They're slower, so run them after the unit tests pass."
    *   **4. Build Check:** "'Does it compile?' This seems obvious, but it's a critical check, especially for compiled languages."
    *   **5. Security Scan:** "This is non-negotiable. Use something like CodeQL or Snyk to automatically scan for vulnerabilities on every PR. This is your first line of defense."
*   **Segment 2: The Philosophy**
    *   "The goal of the Sanity Suite is a fast feedback loop. It should run in under 10 minutes. Anything longer, and developers will start to ignore it."
    *   "Notice what's NOT in here: end-to-end tests, performance tests. Those are important, but they should be in a separate, slower pipeline that runs post-merge, not on every single PR."
*   **Segment 3: The Next Step**
    *   "Implementing a solid CI Sanity Suite is one of the highest-leverage things you can do for your team's productivity and your product's stability."
    *   **CTA:** "If your CI is slow, flaky, or non-existent, this is my specialty. Let's chat. Link in the description to book a call."
`
        },
        {
          type: 'file',
          name: 'Webinar-Outline.md',
          content: `
# Webinar Outline: "From Messy Repo to Money Repo"

**Title:** From Messy Repo to Money Repo: How to Turn Your Codebase into a High-Velocity Platform

**Audience:** CTOs, VPEs, Engineering Managers

---

### **Part 1: The "A-ha" Moment (10 minutes)**

*   **Introduction:**
    *   "Hi, I'm {{FounderName}}, and I'm obsessed with the one thing most engineering leaders ignore: the health of their GitHub repository."
    *   "My story: a tale of a project I worked on where a messy repo brought a team of 20 brilliant engineers to a grinding halt."
*   **The Core Thesis:**
    *   "Your repository is not just a folder for your code. It is the factory floor for your entire engineering team. A messy factory is an unproductive factory."
*   **The Hidden Costs of a Messy Repo (The "Why You Should Care"):**
    *   Show a slide with 3 numbers:
        *   **$7,500:** The average cost of onboarding one new engineer in a messy repo (2 weeks of lost productivity).
        *   **10 hours/week:** The time an average team of 10 wastes on flaky CI and debugging setup issues.
        *   **50%:** The hit to developer morale and retention when tools are constantly getting in the way.
*   **Poll:** "On a scale of 1-5, how would you rate the health of your primary repository?"

---

### **Part 2: The 3-Pillar Framework for a "Money Repo" (25 minutes)**

*   **Introduction to the Framework:** "A world-class repository stands on three pillars: Clarity, Automation, and Governance."
*   **Pillar 1: Clarity (The Self-Documenting Repo)**
    *   The README 2.0: Your repo's front door.
    *   The Scripted Setup: One command to rule them all.
    *   ADRs: Why over What.
    *   *Live Demo:* Show a "before" and "after" of a README and a one-line setup script.
*   **Pillar 2: Automation (The Trust Engine)**
    *   The CI Sanity Suite: The 5 checks every PR needs.
    *   Dependency Management: Dependabot is your best friend.
    *   Preview Environments: The ultimate PR review tool.
    *   *Live Demo:* Walk through a GitHub Actions workflow YAML, explaining the key parts (caching, required checks).
*   **Pillar 3: Governance (The Paved Road)**
    *   Branch Protection: Why your 'main' branch should be sacred.
    *   CODEOWNERS: Automating the review process.
    *   Issue/PR Templates: Guiding developers to success.
    *   *Live Demo:* Show the branch protection settings screen in GitHub and a well-structured PR template in action.

---

### **Part 3: The 7-Day Action Plan & Q&A (15 minutes)**

*   **The "You Can Start Today" Plan:**
    *   **Day 1:** Install a PULL_REQUEST_TEMPLATE.md file. (5-minute win).
    *   **Day 2:** Run a linter in your CI pipeline.
    *   **Day 3-5:** Rewrite your README.
    *   **Day 6-7:** Script your local setup process.
*   **The Offer (The Soft Pitch):**
    *   "This framework works. But implementing it takes focus and time that you and your team might not have."
    *   "If you want to accelerate this process, I offer a 'QuickStart Hardening' service where my team and I implement this entire framework for you in about 3 weeks."
    *   "As a thank you for attending this webinar, I'm offering a free, no-obligation Repo Strategy Call. We'll spend 30 minutes mapping out exactly how these principles would apply to your specific repository."
*   **The CTA:**
    *   "A link to my calendar is in the chat. The first 5 people to book will also get a free, detailed 'Repo Health Score' audit."
*   **Q&A Session:**
    *   Open the floor for questions.
`
        }
      ]
    },
    {
      type: 'directory',
      name: 'ads',
      children: [
        {
          type: 'file',
          name: 'Google-Search.md',
          content: `
# Google Search Ads Copy

**Campaign Goal:** Lead Generation (Book a Call)
**Targeting:** Based on keywords.

---

### **Ad Group 1: Problem-Aware (e.g., "slow ci/cd")**

*   **Headline 1:** Slow CI/CD? Fix it in Weeks
*   **Headline 2:** GitHub Actions & CI/CD Experts
*   **Headline 3:** Cut Your Build Times by 75%
*   **Description 1:** Stop wasting engineer hours on flaky builds. We harden your CI/CD pipeline for speed and reliability.
*   **Description 2:** Get a free CI/CD audit. We'll find your top 3 bottlenecks in a free 20-minute strategy call.
*   **Landing Page:** Funnel -> LandingPage.md

---

### **Ad Group 2: Solution-Aware (e.g., "github consulting")**

*   **Headline 1:** Expert GitHub Consultants
*   **Headline 2:** We Architect World-Class Repos
*   **Headline 3:** Improve Your Developer Experience
*   **Description 1:** We help CTOs and VPEs turn their GitHub repos into high-velocity development platforms.
*   **Description 2:** Onboarding, CI/CD, Documentation, and Governance. Book a free consultation today.
*   **Landing Page:** Funnel -> LandingPage.md

---

### **Ad Group 3: Onboarding Pain (e.g., "developer onboarding")**

*   **Headline 1:** Slow Developer Onboarding?
*   **Headline 2:** Cut Onboarding Time by 80%
*   **Headline 3:** New Hires Shipping Code Day 1
*   **Description 1:** Our "Repo Hardening" service creates a self-service, well-documented codebase for new engineers.
*   **Description 2:** Stop wasting your senior engineers' time on hand-holding. Let's automate your onboarding.
*   **Landing Page:** Funnel -> LandingPage.md

---

### **Sitelink Extensions:**

*   **Sitelink 1:** Free Repo Audit
    *   *Description:* Get a free 40-point checklist.
*   **Sitelink 2:** Case Studies
    *   *Description:* See how we helped our clients.
*   **Sitelink 3:** Our Services
    *   *Description:* Audits, Hardening, & Retainers.
*   **Sitelink 4:** Book a Free Call
    *   *Description:* Get a no-obligation strategy plan.
`
        },
        {
          type: 'file',
          name: 'LinkedIn-Ads.md',
          content: `
# LinkedIn Ads Copy & Creatives

**Campaign Goal:** Lead Generation (Lead Magnet Download)
**Targeting:**
*   **Job Titles:** VP of Engineering, Director of Engineering, Engineering Manager, Head of Engineering, CTO.
*   **Company Size:** 10-500 employees.
*   **Industry:** Computer Software, IT Services, FinTech.

---

### **Ad Creative 1: The Checklist (Single Image Ad)**

*   **Image:** A visually appealing mockup of the "Repo Audit Checklist" PDF.
*   **Ad Copy:**
    *   **Intro:** Is your GitHub repo an accelerator or an anchor?
    *   **Body:** Most engineering teams are slowed down by hidden friction in their codebase: messy structure, tribal knowledge, and flaky CI. I created a 40-point checklist that helps VPEs and Engineering Managers score their repository's health and pinpoint the biggest bottlenecks.
    *   **CTA:** Download the free "GitHub Repo Audit Checklist" and get a clear picture of where you stand.
*   **Headline:** Free Download: The Repo Audit Checklist
*   **Landing Page:** A dedicated landing page for the lead magnet.

---

### **Ad Creative 2: The "Before & After" (Carousel Ad)**

*   **Card 1:**
    *   **Image:** A screenshot of a messy, cluttered repository file tree.
    *   **Headline:** Does this look familiar?
*   **Card 2:**
    *   **Image:** A screenshot of a clean, perfectly organized repository file tree.
    *   **Headline:** We help you get to this.
*   **Card 3:**
    *   **Image:** A simple graphic with the text "Result: 80% Faster Onboarding".
    *   **Headline:** So you can achieve this.
*   **Ad Copy:**
    *   **Intro:** We turn chaotic codebases into high-velocity platforms.
    *   **Body:** A messy GitHub repo isn't just a nuisance; it's a tax on every single engineer, every single day. We help engineering leaders clean up their repos, streamline their CI/CD, and create a developer experience that attracts and retains top talent.
    *   **CTA:** Learn more about our "Repo Hardening" service.
*   **Headline:** From Chaos to Clarity in GitHub
*   **Landing Page:** Funnel -> LandingPage.md

---

### **Ad Creative 3: The Video Ad (Talking Head)**

*   **Video:** A 60-second video of {{FounderName}} speaking directly to the camera.
*   **Script:**
    > "If you're a VP of Engineering, how much does it cost you when a new hire spends their first two weeks just trying to get your main app to run locally? At least $5,000.
    > How much does it cost when your CI pipeline is slow and your best engineers are debugging YAML files instead of shipping code?
    > These aren't small problems. They are massive drains on your budget and your team's momentum.
    > My name is {{FounderName}}, and I help engineering teams fix this. We architect GitHub repositories for speed, clarity, and stability.
    > If you're tired of fighting your own tools, click the link below to book a free, 20-minute Repo Strategy Call. I guarantee you'll walk away with at least two actionable ideas you can implement immediately."
*   **Headline:** Stop Wasting Engineering Hours
*   **Landing Page:** Funnel -> CalendarPage.md
`
        },
        {
          type: 'file',
          name: 'Retargeting-Creatives.md',
          content: `
# Retargeting Ads Creatives

**Campaign Goal:** Conversion (Book a Call)
**Targeting:**
*   Website visitors from the last 90 days.
*   Excluding those who have already converted (booked a call).
*   People who have engaged with LinkedIn page/ads.

---

### **Ad Creative 1: The Case Study (LinkedIn/Facebook)**

*   **Image:** A graphic with the client's logo and the primary result: "80% Faster Developer Onboarding".
*   **Ad Copy:**
    *   **Intro:** You've seen what we do. Here's what we've done.
    *   **Body:** We helped [Client Name] transform their onboarding process, taking new hires from a 2-week setup nightmare to shipping code on day two. This was achieved not by changing their application, but by architecting their repository for clarity and efficiency.
    *   **CTA:** Ready to get similar results?
*   **Headline:** See How [Client Name] Did It
*   **Landing Page:** The full case study page (or a blog post).

---

### **Ad Creative 2: The Direct Offer (LinkedIn/Facebook)**

*   **Image:** A simple, text-based graphic: "Still struggling with your repo?"
*   **Ad Copy:**
    *   **Intro:** Still thinking about cleaning up that messy repo?
    *   **Body:** Procrastination won't fix a slow CI pipeline or a confusing codebase. Let's hop on a quick 20-minute call. We'll diagnose your top bottleneck and map out a concrete action plan. No pressure, just solutions.
    *   **CTA:** Book your free, no-obligation Repo Strategy Call today.
*   **Headline:** Let's Fix Your Repo
*   **Landing Page:** Funnel -> CalendarPage.md

---

### **Ad Creative 3: The "Why Not Us?" Ad (LinkedIn)**

*   **Image:** A simple graphic comparing two options.
    *   **Left Side (DIY):** "Spend 6 months trying to fix it internally."
    *   **Right Side (With Us):** "Get it done in 3 weeks with a specialist."
*   **Ad Copy:**
    *   **Intro:** You can fix your repo yourself. But should you?
    *   **Body:** Your best engineers should be building your product, not getting bogged down in repo janitorial work. We provide the focused, expert effort to solve the problem quickly, so your team can get back to what they do best.
    *   **CTA:** Save time and get a better result.
*   **Headline:** The Smartest Path to a Clean Repo
*   **Landing Page:** Funnel -> LandingPage.md
`
        },
        {
          type: 'file',
          name: 'Keyword-Seedlist.csv',
          content: `
"Keyword","Match Type","Ad Group"
"slow github actions","Broad Match","Problem-Aware"
"slow ci/cd pipeline","Broad Match","Problem-Aware"
"improve ci/cd speed","Broad Match","Problem-Aware"
"github actions consulting","Phrase Match","Solution-Aware"
"github consultant","Phrase Match","Solution-Aware"
"devops consulting services","Broad Match","Solution-Aware"
"developer experience consultant","Phrase Match","Solution-Aware"
"improve developer experience","Broad Match","Onboarding Pain"
"developer onboarding process","Broad Match","Onboarding Pain"
"technical onboarding for engineers","Broad Match","Onboarding Pain"
"how to structure a monorepo","Broad Match","Problem-Aware"
"github repository best practices","Phrase Match","Solution-Aware"
"github branch protection rules","Exact Match","Problem-Aware"
"what is developer velocity","Broad Match","Solution-Aware"
"cto consulting","Phrase Match","Solution-Aware"
"vpe services","Phrase Match","Solution-Aware"
"professionalize engineering team","Phrase Match","Onboarding Pain"
"fix messy codebase","Broad Match","Problem-Aware"
"code quality consultant","Phrase Match","Solution-Aware"
"github actions expert","Exact Match","Solution-Aware"
`
        }
      ]
    },
    {
      type: 'directory',
      name: 'crm',
      children: [
        {
          type: 'file',
          name: 'Pipeline-Stages.md',
          content: `
# CRM Pipeline Stages

This document defines the deal stages for our sales pipeline in the CRM (e.g., HubSpot, Pipedrive, Airtable).

---

### **Pipeline: "New Client Acquisition"**

**Stage 1: New**
*   **Definition:** A new lead has entered the system via form submission, list import, or manual creation. No two-way communication has occurred yet.
*   **Entry Criteria:** Lead created.
*   **Exit Criteria:** A two-way conversation has started (email reply, call booked).
*   **SLA:** Must be moved out of this stage within 24 hours.

**Stage 2: Qualified**
*   **Definition:** A two-way conversation has occurred. The lead has been qualified through the BANT framework (Budget, Authority, Need, Timeline) or a similar methodology. They are a good fit for our services.
*   **Entry Criteria:** Discovery call booked OR positive email reply confirming interest and fit.
*   **Exit Criteria:** Discovery call completed.
*   **SLA:** Lead should not stay in this stage for more than 7 days.

**Stage 3: Discovery**
*   **Definition:** The discovery call is complete. We are in the process of deeply understanding the client's needs and preparing a formal proposal.
*   **Entry Criteria:** Discovery call marked as "Completed" in the CRM.
*   **Exit Criteria:** Proposal has been sent to the client.
*   **SLA:** Proposal should be sent within 48 hours of the discovery call.

**Stage 4: Proposal**
*   **Definition:** The client has received our proposal and is reviewing it.
*   **Entry Criteria:** Proposal sent.
*   **Exit Criteria:** Client has verbally or via email agreed to move forward and is ready for the contract, or has requested changes.
*   **SLA:** Follow up every 3-5 days. If no response after 14 days, move to "On Hold" or "Lost".

**Stage 5: Negotiation**
*   **Definition:** The client has accepted the proposal in principle but is negotiating terms (scope, price, legal). The contract (MSA/SOW) is under review.
*   **Entry Criteria:** Positive feedback on proposal, contract sent for review.
*   **Exit Criteria:** Contract signed by both parties.
*   **SLA:** Drive to a conclusion within 7-10 days.

**Stage 6: Won**
*   **Definition:** The contract is signed and the invoice has been sent. The project is ready to be handed off to the delivery team.
*   **Entry Criteria:** Signed contract received.
*   **Exit Criteria:** Project is successfully onboarded and moved to a "Current Client" status.

**Stage 7: Lost**
*   **Definition:** The deal is lost for a specified reason.
*   **Entry Criteria:** Client explicitly says no, or has gone completely cold after the proposal stage.
*   **Required Action:** Must fill in "Lost Reason" custom field (e.g., Price, Timing, Competition, No Response).

**Stage 8: On Hold**
*   **Definition:** The client is still interested but the project is paused due to internal factors (budget freeze, re-org, etc.).
*   **Entry Criteria:** Client has communicated a delay.
*   **Action:** Set a follow-up task for the agreed-upon date (e.g., "Check in next quarter").
`
        },
        {
          type: 'file',
          name: 'Custom-Fields.md',
          content: `
# CRM Custom Fields

These are the custom fields to create on the Contact and Deal objects in the CRM to track critical information.

---

### **Contact Object Fields**

*   **Role (Dropdown):**
    *   *Values:* C-Level, VP/Director, Manager, IC (Individual Contributor), Agency Owner, Other
    *   *Source:* Form submission, manual entry.

*   **LinkedIn Profile URL (URL):**
    *   *Purpose:* Quick access for research and social selling.
    *   *Source:* Manual entry, enrichment tool (e.g., Clearbit).

*   **Lead Source (Dropdown):**
    *   *Values:* Organic Search, Paid Search, LinkedIn (Organic), LinkedIn (Paid), Referral, Upwork, Cold Outreach, Other.
    *   *Purpose:* Track channel effectiveness.
    *   *Source:* Automation based on form UTM parameters, manual entry.

---

### **Deal Object Fields**

*   **Service Tier (Dropdown):**
    *   *Values:* Tier 1 - Audit, Tier 2 - Hardening, Tier 3 - Steward.
    *   *Purpose:* Track which services are most popular.

*   **GitHub Repo URL (URL):**
    *   *Purpose:* Central place to store the primary repository we are discussing.
    *   *Source:* Form submission, discovery call.

*   **Primary Tech Stack (Text):**
    *   *Purpose:* Understand the client's technical environment (e.g., "TypeScript, Go, AWS").
    *   *Source:* Form submission, discovery call.

*   **Engineering Team Size (Number):**
    *   *Purpose:* Key ICP qualification data.
    *   *Source:* Form submission, discovery call.

*   **Primary Pain Point (Dropdown - Multi-select):**
    *   *Values:* Onboarding, CI/CD, Documentation, Governance, Code Quality, Security.
    *   *Purpose:* Quickly understand the client's main driver for the engagement. Used for reporting.
    *   *Source:* Form submission, discovery call.

*   **Urgency (Dropdown):**
    *   *Values:* High (This Quarter), Medium (Next Quarter), Low (Exploring).
    *   *Purpose:* Helps with forecasting.
    *   *Source:* Discovery call.

*   **Blockers (Text):**
    *   *Purpose:* Note any internal issues on the client side that might stall the deal (e.g., "Needs CTO budget approval").
    *   *Source:* Discovery call, follow-up conversations.

*   **Lost Reason (Dropdown):**
    *   *Required when a deal is moved to "Lost".*
    *   *Values:* Price, Timing, Competition, Went with Internal Solution, No Response, Unqualified.
    *   *Purpose:* Analyze losses to improve the sales process.

*   **Referral Partner (Lookup to Contact/Company):**
    *   *Purpose:* Track deals that came from referral partners to manage payouts.
`
        },
        {
          type: 'file',
          name: 'Lead-Scoring.md',
          content: `
# Lead Scoring Model

This model assigns points to leads based on their fit (demographics) and intent (behaviors) to help prioritize follow-up.

*   **Thresholds:**
    *   **0-20:** Low Priority (Nurture sequence only)
    *   **21-50:** MQL (Marketing Qualified Lead) - SDR/BDR Follow-up
    *   **51+:** SQL (Sales Qualified Lead) - Founder/AE immediate follow-up

---

### **Part 1: Fit Scoring (Who they are)**

**Role:**
*   C-Level, VP/Director: **+20 points**
*   Manager, Agency Owner: **+15 points**
*   IC (Staff/Principal): **+5 points** (Influencer)
*   Other/Student: **-10 points**

**Engineering Team Size:**
*   10-50: **+20 points** (Sweet Spot)
*   51-150: **+15 points**
*   5-9: **+10 points**
*   150+: **+5 points** (Potentially too complex/political)
*   1-4: **0 points** (Too small)

**Primary Pain Point (from form):**
*   "Onboarding" or "CI/CD" selected: **+10 points**

**Tech Stack:**
*   Contains "TypeScript", "Go", "Python", "Rust": **+5 points**

---

### **Part 2: Intent Scoring (What they do)**

**Website & Email Engagement:**
*   Booked a Call (form submission): **+100 points (Auto-SQL)**
*   Downloaded Lead Magnet (form submission): **+15 points**
*   Visited Pricing Page: **+10 points**
*   Visited Case Study Page: **+10 points**
*   Clicked link in Nurture Email: **+5 points**
*   Opened Nurture Email: **+1 point**
*   Unsubscribed from email: **-50 points**

**Activity Timeline:**
*   Activity in the last 7 days: **+10 points**
*   No activity in 30 days: **-20 points (Score Decay)**

---

### **Example Scenarios**

*   **Scenario A: High-Fit, High-Intent Lead**
    *   **Who:** VP of Engineering at a 40-person SaaS company. Pain point is onboarding.
    *   **Fit Score:** 20 (Role) + 20 (Team Size) + 10 (Pain) = 50 points.
    *   **Action:** Books a call.
    *   **Intent Score:** +100 points.
    *   **Total Score:** 150. **Result: HOT LEAD (SQL).** Immediate, personalized follow-up.

*   **Scenario B: Good-Fit, Low-Intent Lead**
    *   **Who:** Engineering Manager at a 20-person agency.
    *   **Fit Score:** 15 (Role) + 20 (Team Size) = 35 points.
    *   **Action:** Downloads the checklist. Visits the pricing page a day later.
    *   **Intent Score:** 15 (Download) + 10 (Pricing Page) = 25 points.
    *   **Total Score:** 60. **Result: Strong Lead (SQL).** Personal outreach is warranted.

*   **Scenario C: Low-Fit, High-Intent Lead**
    *   **Who:** A student at a university.
    *   **Fit Score:** -10 (Role) + 0 (Team Size) = -10 points.
    *   **Action:** Downloads checklist, visits 5 pages.
    *   **Intent Score:** 15 + ... = 30 points.
    *   **Total Score:** 20. **Result: Low Priority.** Keep in nurture sequence, but no manual outreach needed.
`
        },
        {
          type: 'file',
          name: 'n8n-Zaps-Pseudocode.md',
          content: `
# Automation Workflows (n8n / Zapier / Make - Pseudocode)

This document outlines the key automation workflows to connect our marketing, sales, and operations systems.

---

### **Workflow 1: New Lead Capture (Book a Call Form)**

*   **Trigger:** New form submission on Calendly ("Book a Call").
*   **Platform Option A (OSS):** n8n
*   **Platform Option B (Commercial):** Zapier or Make

**Steps:**
1.  **TRIGGER:** \`Calendly: Invitee Created\`
2.  **SEARCH/CREATE CONTACT:**
    *   Search for a Contact in [CRM] with the email from the trigger.
    *   If no contact exists, create one.
    *   Map form fields:
        *   \`contact.firstname\` = \`form.firstName\`
        *   \`contact.email\` = \`form.email\`
        *   \`contact.role\` = \`form.role_question\`
        *   etc.
3.  **SEARCH/CREATE DEAL:**
    *   Search for an open Deal associated with the Contact.
    *   If no open deal exists, create a new Deal in [CRM].
    *   Set Deal Name: "[Contact Name] - New Repo Strategy Call"
    *   Set Deal Stage: "Qualified"
    *   Associate Deal with the Contact.
    *   Map form fields to deal custom fields (\`deal.team_size\`, \`deal.pain_point\`, etc.).
4.  **CREATE CALENDAR EVENT:** Create an event in [Founder's Calendar] and invite the lead's email. (Calendly does this, but this is a failsafe).
5.  **SEND SLACK NOTIFICATION:**
    *   Send a message to the \`#new-leads\` channel in Slack.
    *   Message: "🚀 New Call Booked! **[Name]** from **[Company (if available)]**. Role: **[Role]**. Pain: **[Pain Point]**. [Link to CRM Deal]."
6.  **TRIGGER "SPEED TO LEAD" EMAIL SEQUENCE:** Add a tag "Call_Booked" to the contact in the email marketing tool (e.g., Mailchimp, ConvertKit) to trigger the pre-call nurture sequence.

---

### **Workflow 2: Lead Magnet Delivery**

*   **Trigger:** New form submission on Landing Page ("Download Checklist").

**Steps:**
1.  **TRIGGER:** \`Webflow/HubSpot Form: Submission\`
2.  **SEARCH/CREATE CONTACT:**
    *   Same as Workflow 1, but with fewer fields (just email/name).
3.  **ADD TAG:**
    *   Add the tag "Downloaded_Checklist" to the contact in the email marketing tool.
4.  **TRIGGER "LEAD MAGNET DELIVERY" EMAIL:**
    *   The tag addition triggers an automation in the email tool to send the email containing the link to the checklist.
5.  **TRIGGER "NURTURE SEQUENCE":**
    *   The same tag also adds the contact to the long-term nurture sequence, which starts after a 3-day delay.
6.  **SEND SLACK NOTIFICATION (Optional, can be noisy):**
    *   Send a message to \`#marketing-leads\`: "📄 New Checklist Download: **[Email]**."

---

### **Workflow 3: No-Show Detection & Follow-up**

*   **Trigger:** Manual trigger (e.g., clicking a button in a Chrome extension or CRM).

**Steps:**
1.  **TRIGGER (Manual):** \`Webhook received\` from a custom button in the CRM on the Deal page called "Mark as No-Show".
2.  **FIND DEAL & CONTACT:** Get the deal and contact info from the webhook payload.
3.  **MOVE DEAL:**
    *   Change Deal Stage in [CRM] to "On Hold".
    *   Add a note to the Deal timeline: "Marked as No-Show for meeting on [Date]".
4.  **TRIGGER "NO-SHOW" EMAIL SEQUENCE:**
    *   Add a tag "No_Show" to the contact in the email marketing tool.
    *   This tag triggers the 3-email no-show and reschedule sequence.
5.  **CREATE FOLLOW-UP TASK:**
    *   Create a task in the [CRM] for the deal owner, due in 4 days: "Check for reschedule. If none, move to Lost."
`
        },
        {
          type: 'file',
          name: 'SLA-Playbook.md',
          content: `
# Service Level Agreement (SLA) Playbook

This document defines the internal standards for response and action times to ensure a high-quality prospect and client experience.

---

### **1. Speed to Lead**

*   **SLA:** All new inbound leads (form submissions for "Book a Call") must receive their automated confirmation email **within 5 minutes**.
*   **Playbook:**
    *   **Owner:** Marketing Ops / Automation System (n8n/Zapier).
    *   **Process:** The automation workflow described in \`n8n-Zaps-Pseudocode.md\` is responsible for this.
    *   **Metric:** Time from form submission to email sent.
    *   **Monitoring:** Weekly check of automation logs to ensure no failures.

---

### **2. First Personal Touch**

*   **SLA:** Every lead that books a call must receive a *personal* (or personalized automated) follow-up email **within 24 hours**. (This is the "Thinking About Your Problem" email).
*   **Playbook:**
    *   **Owner:** Founder / Sales Rep.
    *   **Process:** An automated email is sent 24 hours before the meeting time. The template should use personalization tokens from the form submission.
    *   **Metric:** Open and reply rate on this email.
    *   **Monitoring:** The email sequence platform tracks this.

---

### **3. Proposal Delivery**

*   **SLA:** A formal proposal must be sent to a qualified prospect **within 48 business hours** of a completed discovery call.
*   **Playbook:**
    *   **Owner:** Founder / Sales Rep.
    *   **Process:**
        1.  Immediately after the call, create a "Proposal" task in the CRM, due EOD the next day.
        2.  Use the standard proposal template (\`Proposal-SOW-Template.md\`).
        3.  Customize the "Recap," "Scope," and "Pricing" sections based on the discovery call.
        4.  Send the proposal via a trackable document tool (e.g., PandaDoc, Proposify, or a simple PDF via email).
        5.  Update the deal stage in the CRM to "Proposal."
    *   **Metric:** Time from "Discovery Call Completed" to "Proposal Sent."

---

### **4. Follow-up Cadence**

*   **SLA:** A deal in the "Proposal" stage must receive a follow-up **every 3-5 business days** until a response is received.
*   **Playbook:**
    *   **Owner:** Founder / Sales Rep.
    *   **Process:** After sending a proposal, immediately create a follow-up task in the CRM, due in 3 business days. Use the email templates from \`Breakup-Sequence.md\`.
    *   **Metric:** Percentage of deals in the proposal stage with a future follow-up task scheduled.

---

### **5. "On Hold" and "Lost" Management**

*   **SLA:** No deal should remain in the pipeline without activity for more than **14 days**.
*   **Playbook:**
    *   **Owner:** Founder / Sales Rep.
    *   **Process:** During the weekly pipeline review, any deal that has been idle for 14+ days must be actioned:
        1.  Send a final "Breakup" email.
        2.  If no response, move the deal to "Lost" and select the "No Response" reason.
        3.  If the client has communicated a delay, move the deal to "On Hold" and set a specific follow-up task for the future.
    *   **Metric:** Number of "stale" deals in the pipeline.
`
        }
      ]
    },
    {
      type: 'directory',
      name: 'sops',
      children: [
        {
          type: 'file',
          name: 'Discovery-Call-SOP.md',
          content: `
# SOP: Discovery Call

A standard operating procedure for conducting a successful discovery call.

---

### **Objective**

*   To determine if the prospect is a good fit for our services.
*   To deeply understand their pain points and desired outcomes.
*   To build rapport and establish ourselves as credible experts.
*   To get the prospect's agreement on a clear "next step."

### **Preparation (15 minutes before the call)**

1.  **Review CRM:** Read all notes on the contact and deal. Understand their role, team size, and the pain points they listed in the form.
2.  **Review LinkedIn:** Look at the prospect's profile. What's their background? Have they written any posts recently?
3.  **Review Company Website:** What does their company do? Who are their customers?
4.  **Review GitHub Repo (if provided):** Do a quick 5-minute scan. What is the language? How old is the repo? Are there obvious signs of trouble (e.g., thousands of open issues, no recent commits)?
5.  **Prepare Questions:** Have the script below open, but be ready to deviate.

### **The Call Structure (30 Minutes)**

**Part 1: Rapport & Agenda (5 minutes)**

*   "Hi [Name], thanks for taking the time. I'm really looking forward to our chat."
*   "Just to make sure we make the most of our 30 minutes, I was hoping we could:
    *   Briefly learn a bit more about your role and [Company].
    *   Dive into the challenges you're facing with your repository.
    *   I can share a bit about how we've helped other companies in your situation.
    *   And then, if it makes sense, we can figure out what the next steps might look like.
*   "Does that sound good to you?"

**Part 2: Discovery & Diagnosis (15 minutes)**

*   **Broad Questions (Understand the Context):**
    *   "Tell me about your team. How is it structured?"
    *   "What are the biggest goals for the engineering team this year?"
    *   "Walk me through your current development process, from idea to deployment."
*   **Problem Questions (Dig into the Pain):**
    *   "You mentioned [Pain from form] in the form. Can you tell me more about that? What does that look like day-to-day?"
    *   "What have you tried so far to fix this?"
    *   "Who on the team is feeling this pain the most?"
*   **Impact Questions (Connect Pain to Business Cost):**
    *   "What happens if you don't fix this? What's the impact on your roadmap?"
    *   "How does this affect developer morale or your ability to hire?"
    *   "If we could wave a magic wand and solve this, what would be different a month from now?" (This is your desired outcome).
*   **Qualification (BANT):**
    *   **Budget:** "To give you a ballpark, projects like this typically range from $15-25k. Is that in the realm of what you'd be able to invest for a solution?"
    *   **Authority:** "Who besides yourself would be involved in the decision-making process for a project like this?"
    *   **Need:** (You've been establishing this all along).
    *   **Timeline:** "If you were to move forward, when would you ideally want to see this problem solved?"

**Part 3: The Pivot & Next Steps (10 minutes)**

*   **Educate & Position:**
    *   "Thanks for sharing all that. It's a very common story, and it sounds a lot like the situation at [Similar Client], where we..." (Tell a short, relevant story).
    *   "Based on what you've told me, it sounds like our 'QuickStart Hardening' service would be a perfect fit. We'd come in and tackle the [Top 2-3 problems] we discussed."
*   **Define Next Step:**
    *   "My typical next step is to put together a detailed proposal. It will outline the exact deliverables, a clear timeline, and a fixed-price investment."
    *   "I can have that over to you by EOD tomorrow."
*   **Gain Agreement:**
    *   "How does that sound to you?"
    *   "Once you've had a chance to review it, what would be a good time to briefly connect again to walk through it?" (Try to book the next meeting on the call).

### **Post-Call (Immediately After)**

1.  **Update CRM:** Add detailed notes from the call to the Deal object.
2.  **Schedule Tasks:** Create tasks for "Send Proposal" and any other follow-ups.
3.  **Send Follow-up Email:** Use the template in \`PostCall-Followup.md\`.
`
        },
        {
          type: 'file',
          name: 'Proposal-SOW-Template.md',
          content: `
# Proposal & Statement of Work (SOW) Template

This is a template for the proposal document sent to clients after a successful discovery call.

---

**[Your Brand Logo]**
**[Date]**

**Prepared for:**
[Client Name]
[Client Contact Name], [Client Title]

**Prepared by:**
{{FounderName}}
[BrandName]
[Your Website]

---

### **1. The Situation: A Recap of Our Conversation**

Hi [Client Contact Name],

Thank you for taking the time to speak with me on [Date of Call]. I enjoyed learning about your goals at [Client Name], particularly your focus on [Client's Primary Goal, e.g., scaling the engineering team without losing velocity].

As we discussed, your current GitHub repository, while functional, is presenting several challenges that are creating a "tax" on your team's productivity. Specifically, we identified:

*   **[Pain Point 1]:** e.g., A manual and time-consuming onboarding process for new engineers, delaying their time-to-impact.
*   **[Pain Point 2]:** e.g., A slow and unreliable CI/CD pipeline, which is eroding developer trust and slowing down the feedback loop.
*   **[Pain Point 3]:** e.g., A significant amount of "tribal knowledge," which creates a high bus factor and makes the system difficult for new team members to understand.

If left unaddressed, these issues will only be magnified as you continue to hire and scale, ultimately hindering your ability to achieve your product roadmap goals.

---

### **2. The Objective: Desired Outcomes**

This project will transform your primary repository from a source of friction into a strategic asset. By the end of this 3-week engagement, you will have:

*   **A Self-Service Onboarding Experience:** New engineers will be able to get the project set up and running locally in under an hour by following a single, scripted command.
*   **A Fast & Reliable CI Pipeline:** Your CI pipeline will provide feedback on all pull requests in under 10 minutes and will be a trusted source of truth for code quality.
*   **A "GitPolish-Grade" Repository:** Your repository will be well-documented, easy to navigate, and will serve as the gold standard for all future projects at [Client Name].

**Success Metric:** We will measure success by a >75% reduction in the "Time to First PR" for a new engineer and a >50% reduction in average CI/CD pipeline duration.

---

### **3. Scope of Work: Deliverables**

To achieve these objectives, we will deliver the following in a 3-week sprint:

**Week 1: Audit & Foundation**
*   [ ] **Deliverable 1:** A comprehensive **Repo Health Audit** and a baseline **Repo Health Score**.
*   [ ] **Deliverable 2:** Implementation of a standardized **Branching Strategy** and **Branch Protection Rules**.
*   [ ] **Deliverable 3:** Creation of core contribution documents: \`CONTRIBUTING.md\`, Issue Templates, and a \`PULL_REQUEST_TEMPLATE.md\`.

**Week 2: Automation & Documentation**
*   [ ] **Deliverable 4:** A complete overhaul and optimization of the **CI/CD Pipeline** in GitHub Actions.
*   [ ] **Deliverable 5:** A "README 2.0" rewrite, turning the root README into a project dashboard.
*   [ ] **Deliverable 6:** A scripted, one-command local setup process.

**Week 3: Governance & Handoff**
*   [ ] **Deliverable 7:** Implementation of a \`CODEOWNERS\` file to automate review assignments.
*   [ ] **Deliverable 8:** Creation of a high-level \`ARCHITECTURE.md\` document.
*   [ ] **Deliverable 9:** A 60-minute recorded **Team Training & Handoff Session**.

---

### **4. Investment**

The total investment for this "QuickStart Hardening" project is a **fixed fee of [e.g., $18,500]**.

*   **Payment Terms:** 50% due upon signing to commence work, 50% due upon project completion.
*   **Guarantee:** We are committed to your success. If you are not satisfied with the quality of the deliverables, we will continue to work until they meet the standards outlined in this proposal.

---

### **5. Next Steps**

1.  **Review & Approve:** Please review this proposal. I'm happy to answer any questions you may have.
2.  **Sign Agreement:** If you're ready to move forward, simply sign the accompanying Master Services Agreement.
3.  **Kickoff:** Once the agreement is signed and the initial invoice is paid, we can schedule our project kickoff call for the week of [Date].

I am confident that this investment will pay for itself many times over by unlocking your team's productivity. I look forward to the opportunity to partner with you.

Best regards,

{{FounderName}}
`
        },
        {
          type: 'file',
          name: 'Onboarding-HandOff-SOP.md',
          content: `
# SOP: Client Onboarding & Handoff (Post-Sale)

A standard operating procedure for onboarding a new client after the deal is won and handing them off to the delivery team (even if the delivery team is just you).

---

### **Phase 1: Onboarding (The First 48 Hours After "Won")**

**Owner:** Founder / Sales Rep

**Goal:** Create a seamless transition from sales to project kickoff.

**Checklist:**

*   [ ] **1. Counter-sign the MSA/SOW:** Ensure the agreement is signed by both parties and a final copy is sent to the client.
*   [ ] **2. Send a "Welcome" Email:**
    *   **To:** The client's primary point of contact.
    *   **Subject:** Welcome to [BrandName]! Next steps for our project.
    *   **Content:**
        *   Express excitement about the partnership.
        *   Confirm receipt of the signed agreement.
        *   State that the initial invoice has been sent (or is attached).
        *   Provide a link to schedule the official Project Kickoff call.
        *   List any "homework" for them (e.g., "Please be prepared to grant GitHub access to our user, \`[YourGitHubUsername]\`, during the call").
*   [ ] **3. Create Invoice:** Generate and send the 50% upfront invoice using your accounting software.
*   [ ] **4. Internal Project Setup:**
    *   Create a new private Slack channel: \`#client-[client-name]\`. Invite the client POC.
    *   Create a new project folder in Google Drive / Notion.
    *   Duplicate your project management template (in Asana, ClickUp, or GitHub Projects) and set up the deliverables from the SOW as tasks.
*   [ ] **5. Update CRM:**
    *   Ensure the deal is marked as "Won."
    *   Set the deal value to the final contract amount.
    *   Create a new "Current Client" tag for the associated Company and Contact.

---

### **Phase 2: Project Kickoff Call**

**Owner:** Project Lead / Delivery Owner

**Goal:** Align on goals, timeline, and communication, and gain necessary access.

**Agenda:**

1.  **Introductions & Celebration (5 mins):** Reiterate excitement for the project.
2.  **Goal & Scope Review (10 mins):**
    *   "I want to quickly review the objectives from the SOW to ensure we're all perfectly aligned."
    *   "Our primary goal is [State the #1 goal]. Does that still hold true?"
3.  **Timeline & Deliverables (10 mins):**
    *   Walk through the 3-week project plan.
    *   "Here's what you can expect from us each week."
4.  **Communication Cadence (5 mins):**
    *   "We'll provide a brief summary of progress in our shared Slack channel at the end of each day."
    *   "We'll have a standing 30-minute check-in call every [Day, e.g., Wednesday] at this time."
    *   "For anything urgent, please tag me directly in Slack."
5.  **Access & Logistics (10 mins):**
    *   "To get started, we'll need you to grant 'Admin' access to the [Repo Name] repository for our GitHub user: \`[YourGitHubUsername]\`." (Do this live on the call if possible).
    *   Confirm any other necessary tool access (e.g., AWS, Vercel).
6.  **Next Steps (5 mins):**
    *   "Our next step is to begin the Repo Health Audit. We'll have the initial report ready for you by EOD Friday."
    *   "Any final questions before we dive in?"

---

### **Phase 3: Project Handoff (Final Call)**

**Owner:** Project Lead / Delivery Owner

**Goal:** Successfully deliver the finished project, train the client team, and ensure they feel empowered.

**This is the "Team Training & Handoff Session" from the SOW.**

**Checklist:**

*   [ ] **1. Prepare a Demo:** Create a concise presentation/demo of all the improvements made. Show the "before" and "after."
*   [ ] **2. Record the Session:** Inform the client you will be recording the call for their future reference.
*   [ ] **3. Conduct the Handoff Call:**
    *   Celebrate the successful project completion.
    *   Demo the new, improved repository and workflows.
    *   Walk through the updated documentation (\`README\`, \`CONTRIBUTING\`, etc.).
    *   Explain the new CI/CD pipeline and how to interpret its results.
    *   Explain the new branch protection rules and the expected PR lifecycle.
    *   Open the floor for an extensive Q&A with the engineering team.
*   [ ] **4. Send Final Invoice:** Immediately after the call, send the final 50% invoice.
*   [ ] **5. Send Handoff Email:**
    *   Thank them for a great partnership.
    *   Include a link to the recorded training session.
    *   Attach or link to all final documentation.
    *   Explain the process for post-project support (if any).
    *   **PLANT THE SEED:** Ask for a review/testimonial and mention your referral program.
`
        },
        {
          type: 'file',
          name: 'Referral-Program.md',
          content: `
# SOP: Referral Program

A simple program to incentivize past clients and partners to send new business our way.

---

### **Program Offer**

*   **For Closed Business:** We offer a **15% cash referral fee** on the initial project value for any new client that you introduce to us, which results in a signed contract.
*   **Payout:** The referral fee is paid out via [Payment Method, e.g., Wise, PayPal] after the new client has paid their initial 50% invoice.
*   **Example:** You refer a client who signs an $18,000 "QuickStart Hardening" contract. Once they pay their first $9,000 invoice, we send you **$2,700** (15% of $18k). It's that simple.

---

### **Who is a Good Referral?**

You know a company is a great fit for us if you hear them say things like:

*   "We're hiring a bunch of new engineers."
*   "Our build is always breaking."
*   "Onboarding new developers is taking forever."
*   "Our documentation is a mess."
*   "We need to get our codebase ready for a security audit."

**Ideal Titles to Refer:**
*   CTO, VP of Engineering, Director of Engineering, Head of Engineering.

---

### **How to Make an Introduction**

The best way to refer someone is via a **double opt-in email introduction.**

**Step 1: Ask Them First**
> "Hey [Potential Client], I know you were mentioning struggles with [Pain Point]. I worked with a specialist, {{FounderName}}, who was fantastic and solved this exact problem for us. Would you be open to a brief email intro?"

**Step 2: Make the Introduction**

*   **To:** \`{{FounderName}}'s Email\`, \`[Referral's Email]\`
*   **Subject:** Intro: [Referral Name] <> {{FounderName}}
*   **Body:**
    > Hi both,
    >
    > [Referral Name], please meet {{FounderName}}. As I mentioned, {{FounderName}} is the expert who helped us overhaul our GitHub repository and dramatically improved our developer onboarding and CI/CD process. I thought of him immediately when you mentioned [Pain Point].
    >
    > {{FounderName}}, please meet [Referral Name], the [Title] at [Company]. They're doing some amazing work in [Industry] and are facing some of the scaling challenges we discussed.
    >
    > I'll let you two take it from here!
    >
    > Best,
    > [Your Name]

---

### **Internal Process**

1.  **Track Referrals:** When an intro email is received, immediately create a new Deal in the CRM.
2.  **Set Referral Partner:** In the "Referral Partner" custom field on the Deal, associate it with the contact who made the introduction.
3.  **Communicate:** Reply to the intro email, moving the referrer to BCC, to thank them and schedule a call with the new lead.
4.  **Payout:** When the deal is "Won" and the first invoice is paid, create a task for "Pay Referral Fee to [Referrer Name]".
5.  **Confirm Payout:** Send a thank you email to the referrer confirming the payment has been sent.
`
        },
        {
          type: 'file',
          name: 'Review-Testimonial-Playbook.md',
          content: `
# SOP: Review & Testimonial Request Playbook

A procedure for systematically capturing social proof from happy clients.

---

### **The Golden Rule: Ask at "Peak Happiness"**

The best time to ask for a review or testimonial is immediately after a major success milestone. This is typically:

1.  **During the project:** Right after you deliver a significant "wow" moment (e.g., "We just cut your CI time from 40 mins to 8 mins!").
2.  **During the final handoff call:** After you've demoed all the great work and the client is thrilled.
3.  **1-2 months post-project:** When they have had time to experience the full benefits of the improved repository (e.g., they've successfully onboarded a new engineer in record time).

---

### **The "Testimonial Ask" Script (During a Call)**

*   **Context:** You are on the final handoff call. The client has just said something like, "This is amazing! The team is going to love this."

*   **Script:**
    > "I am so glad to hear you say that. Your feedback means a lot to us.
    >
    > While it's fresh in your mind, would you be open to providing a brief testimonial about your experience working with us? It would be incredibly helpful for other engineering leaders who are facing the same challenges you were.
    >
    > It could be as simple as a sentence or two that we could feature on our website. Would that be okay?"

---

### **The "Testimonial Ask" Email Template**

*   **Context:** Sent 1-2 weeks after project completion.
*   **Subject:** A quick question about your experience

Hi [Client Name],

I hope you and the team are enjoying the new and improved repository!

I'm writing to ask for a small favor. Would you be willing to write a sentence or two about your experience working with [BrandName]?

Testimonials from great clients like you are incredibly helpful in showing other engineering leaders what's possible.

**To make it super easy, here are a few prompts (feel free to use or ignore):**

*   What was the biggest challenge you were facing before we started?
*   What was the most impactful result of our work together?
*   What would you say to another CTO who is considering working with us?

No pressure at all, but any words you could share would be greatly appreciated.

Thank you again for a fantastic partnership.

Best,
{{FounderName}}

---

### **The "Case Study Ask" Email Template**

*   **Context:** For your best clients who have seen amazing, quantifiable results. Sent 1 month after project completion.
*   **Subject:** Featuring [Client Company] as a success story

Hi [Client Name],

I was just reviewing the metrics from our project last month, and the results are fantastic. Seeing your "Time to First PR" drop by over 80% is exactly the kind of outcome we strive for.

Because the results were so strong, I'd love to feature [Client Company] as a premier case study on our website. This would be a more detailed look at the challenges you faced, the solutions we implemented, and the incredible results you've achieved.

It would be a great way to showcase the innovative work your engineering team is doing. The process would be simple: a 30-minute recorded interview with you, and then we would handle all the writing and send it to you for final approval.

Would you be open to this?

Best,
{{FounderName}}
`
        }
      ]
    },
    {
      type: 'directory',
      name: 'metrics',
      children: [
        {
          type: 'file',
          name: 'KPIs-Dashboard.md',
          content: `
# KPIs & Metrics Dashboard

A list of the key performance indicators (KPIs) to track for the client acquisition system. This should be built into a simple dashboard (e.g., in Google Sheets, Databox, or your CRM's dashboard).

---

### **Top-of-Funnel (TOFU) - Marketing Metrics**

*   **Website Visitors:** Total unique visitors to the landing page.
    *   *Source:* Google Analytics
    *   *Baseline:* 0
    *   *Target (Month 1):* 500
*   **Lead Magnet Conversion Rate:** (Downloads / Unique Visitors) %
    *   *Source:* Google Analytics / Landing Page Tool
    *   *Baseline:* 10%
    *   *Target:* 15%+
*   **Total MQLs (Marketing Qualified Leads):** Number of new contacts from lead magnet downloads and other non-booking forms.
    *   *Source:* CRM
    *   *Baseline:* 0
    *   *Target (Month 1):* 50
*   **Cost Per MQL:** (Total Ad Spend / Total MQLs)
    *   *Source:* Ad Platforms / CRM
    *   *Baseline:* N/A
    *   *Target:* < $100

---

### **Middle-of-Funnel (MOFU) - Sales Development Metrics**

*   **Book a Call Form Conversion Rate:** (Booked Calls / Unique Visitors) %
    *   *Source:* Google Analytics / Calendly
    *   *Baseline:* 1%
    *   *Target:* 3%+
*   **Total SQLs (Sales Qualified Leads):** Number of discovery calls booked.
    *   *Source:* CRM
    *   *Baseline:* 0
    *   *Target (Month 1):* 10
*   **MQL to SQL Conversion Rate:** (Total SQLs / Total MQLs) %
    *   *Source:* CRM
    *   *Baseline:* 5%
    *   *Target:* 20%
*   **Meeting Show Rate:** (Meetings Attended / Meetings Booked) %
    *   *Source:* CRM / Calendar
    *   *Baseline:* 70%
    *   *Target:* 85%+

---

### **Bottom-of-Funnel (BOFU) - Sales Metrics**

*   **SQL to Proposal Rate:** (Proposals Sent / SQLs) %
    *   *Source:* CRM
    *   *Baseline:* 60%
    *   *Target:* 75%
*   **Proposal to Win Rate (Close Rate):** (Deals Won / Proposals Sent) %
    *   *Source:* CRM
    *   *Baseline:* 25%
    *   *Target:* 40%
*   **Overall Win Rate:** (Deals Won / SQLs) %
    *   *Source:* CRM
    *   *Baseline:* 15%
    *   *Target:* 30%
*   **Average Deal Size:** Total Revenue / Number of Deals Won
    *   *Source:* CRM
    *   *Baseline:* N/A
    *   *Target:* {{PriceAnchors.avg_deal_goal}}
*   **Sales Cycle Length:** Average number of days from "Qualified" to "Won".
    *   *Source:* CRM
    *   *Baseline:* 45 days
    *   *Target:* < 30 days

---

### **Business & Revenue Metrics**

*   **Total Booked Revenue:** Sum of all "Won" deal values in a period.
    *   *Source:* CRM
    *   *Baseline:* $0
    *   *Target (Month 3):* $40,000
*   **CAC (Customer Acquisition Cost):** Total Sales & Marketing Spend / Number of New Customers.
    *   *Source:* Accounting / Ad Platforms
    *   *Baseline:* N/A
    *   *Target:* < $5,000
*   **LTV (Lifetime Value):** (Average Deal Size * Number of Repeat Projects) + Retainer Value.
    *   *Source:* CRM / Accounting
    *   *Note:* This is a lagging indicator. Initial estimate is Average Deal Size.
*   **Payback Period:** CAC / (Average Monthly Revenue Per Client)
    *   *Source:* Accounting
    *   *Target:* < 3 months
`
        },
        {
          type: 'file',
          name: 'Weekly-Review-Checklist.md',
          content: `
# SOP: Weekly GTM Review Checklist

A checklist to run through every Friday to review performance and set priorities for the following week.

---

### **Meeting Agenda (30 Minutes)**

**Attendees:** Founder, anyone else involved in marketing/sales.
**Goal:** Review metrics, identify bottlenecks, and define next week's priorities.

---

### **1. Metrics Review (10 mins)**

*   **Open the KPI Dashboard.**
*   **Top of Funnel:**
    *   [ ] How many new MQLs this week? (Target: 12)
    *   [ ] Which marketing channel drove the most leads? (LinkedIn, Google, etc.)
    *   [ ] What was our top-performing content/ad? Why?
*   **Middle of Funnel:**
    *   [ ] How many new SQLs (calls booked) this week? (Target: 2-3)
    *   [ ] What was the show rate for this week's calls? (Target: >85%)
    *   [ ] Any no-shows? Were they followed up with?
*   **Bottom of Funnel:**
    *   [ ] How many proposals were sent this week?
    *   [ ] Any new deals Won or Lost?
    *   [ ] What is the total value of the open pipeline?

---

### **2. Pipeline Review (15 mins)**

*   **Open the CRM Pipeline View.**
*   **Go through deal-by-deal for anything in "Proposal" or "Negotiation".**
    *   [ ] What is the status of the [Client Name] deal?
    *   [ ] What is the next action?
    *   [ ] Is a follow-up task scheduled?
    *   [ ] Are there any blockers? Can I help remove them?
*   **Review "Qualified" Stage.**
    *   [ ] Any calls from this week that need proposals sent? (Check against 48hr SLA).
*   **Review "New" Stage.**
    *   [ ] Are there any leads stuck in this stage for more than 24 hours?
*   **Review Stale Deals.**
    *   [ ] Any deals with no activity for more than 7 days? Plan a follow-up or breakup email.

---

### **3. Priorities & Action Items for Next Week (5 mins)**

*   **Based on the review, what is the #1 priority for next week?**
    *   *Example:* "We have too few calls booked. Priority is sending out a new cold email sequence."
    *   *Example:* "Our show rate was low. Priority is to improve the pre-call nurture sequence."
    *   *Example:* "The [Big Client] proposal is stuck. Priority is to get a follow-up call booked with the CTO."
*   **Assign Action Items:**
    *   [ ] **Action Item 1:** [Owner], [Task], [Due Date].
    *   [ ] **Action Item 2:** [Owner], [Task], [Due Date].
`
        },
        {
          type: 'file',
          name: 'AB-Test-Plan.md',
          content: `
# A/B Test Plan

A plan for systematically testing and optimizing key parts of the funnel.

---

### **Guiding Principles**

1.  **One Test at a Time:** Only test one variable at a time to ensure you can attribute the results correctly.
2.  **Statistical Significance:** Use a calculator to ensure your test has run long enough and with enough traffic to be statistically significant (aim for >95% confidence).
3.  **Hypothesis-Driven:** Every test must start with a clear hypothesis.
4.  **Track Everything:** Document all tests, hypotheses, results, and learnings in a central place (like this document or a Notion table).

---

### **Test 1: Landing Page Headline**

*   **Location:** Funnel -> LandingPage.md
*   **Variable:** Headline
*   **Hypothesis:** A more pain-oriented headline will resonate more strongly with the target audience than a solution-oriented one, leading to a higher call booking conversion rate.
*   **Version A (Control):** "Transform your chaotic codebase into your team's greatest asset." (Solution-oriented)
*   **Version B (Variant):** "Is Your GitHub Repo Slowing You Down?" (Pain-oriented)
*   **Primary Metric:** Call booking conversion rate (SQLs / Visitors).
*   **Duration:** 2 weeks or 1,000 unique visitors, whichever comes first.

---

### **Test 2: Call-to-Action Button Copy**

*   **Location:** Funnel -> LandingPage.md
*   **Variable:** Main CTA button text.
*   **Hypothesis:** A more specific and benefit-driven CTA will outperform a generic CTA.
*   **Version A (Control):** "Book a Free Consultation"
*   **Version B (Variant):** "Book a Free Repo Strategy Call"
*   **Primary Metric:** Click-through rate on the CTA button.
*   **Duration:** 2 weeks or 50 clicks.

---

### **Test 3: Cold Email Subject Line**

*   **Location:** Outreach -> ColdEmails.md (Sequence 3)
*   **Variable:** Email 1 Subject Line
*   **Hypothesis:** A highly personalized subject line mentioning the prospect's company will have a higher open rate than a more generic, topic-based one.
*   **Version A (Control):** "Question about DevEx"
*   **Version B (Variant):** "Repo Onboarding at [Company]"
*   **Primary Metric:** Open rate.
*   **Audience Size:** Send each version to 100 prospects.

---

### **Test 4: LinkedIn Ad Creative**

*   **Location:** Ads -> LinkedIn-Ads.md
*   **Variable:** Ad Format
*   **Hypothesis:** A carousel ad showcasing a "before and after" will have a higher click-through rate and lower cost-per-lead than a single image ad for the checklist.
*   **Version A (Control):** Ad Creative 1 (Single Image - Checklist)
*   **Version B (Variant):** Ad Creative 2 (Carousel - Before & After)
*   **Primary Metric:** Cost Per Lead (for checklist download).
*   **Budget:** $500 per ad creative.
`
        }
      ]
    },
    {
      type: 'directory',
      name: 'legal',
      children: [
        {
          type: 'file',
          name: 'NDA-Template.md',
          content: `
# Non-Disclosure Agreement (NDA) Template

**Disclaimer:** This is a template for informational purposes only and does not constitute legal advice. You should consult with a qualified legal professional to ensure any agreement is appropriate for your specific circumstances.

---

### **MUTUAL NON-DISCLOSURE AGREEMENT**

This Mutual Non-Disclosure Agreement (the "Agreement") is entered into as of **[Date]** (the "Effective Date") by and between:

**[Client Full Legal Name]**, a [State of Incorporation] [Entity Type], with its principal place of business at [Client Address] ("Client"),

and

**[Your Full Legal Name or Company Name]**, a [Your State of Incorporation] [Your Entity Type], with its principal place of business at [Your Address] ("Consultant").

(Hereinafter referred to individually as a "Party" and collectively as the "Parties").

**1. Purpose.** The Parties wish to explore a potential business relationship (the "Purpose") during which it may be necessary for one Party (the "Disclosing Party") to disclose certain Confidential Information to the other Party (the "Receiving Party").

**2. Definition of Confidential Information.** "Confidential Information" means any and all non-public information, including but not limited to, business strategies, customer lists, financial information, product designs, specifications, source code, and any other information disclosed by the Disclosing Party to the Receiving Party, whether orally, visually, or in writing.

**3. Obligations.** The Receiving Party agrees: (a) to hold the Confidential Information in strict confidence and to take all reasonable precautions to protect such Confidential Information; (b) not to disclose any Confidential Information to any third party; and (c) not to use any Confidential Information for any purpose except for the Purpose.

**4. Exclusions.** Confidential Information shall not include information that: (a) is or becomes publicly known and made generally available through no fault of the Receiving Party; (b) is already in the possession of the Receiving Party at the time of disclosure; (c) is obtained by the Receiving Party from a third party without a breach of such third party's obligations of confidentiality; or (d) is independently developed by the Receiving Party without use of or reference to the Disclosing Party's Confidential Information.

**5. Term and Termination.** The obligations of this Agreement shall survive for a period of three (3) years from the Effective Date.

**6. Return of Information.** Upon written request of the Disclosing Party, the Receiving Party shall promptly return or certify the destruction of all documents and other tangible materials representing the Confidential Information.

**7. No License.** Nothing in this Agreement is intended to grant any rights to the Receiving Party under any patent, copyright, or other intellectual property right of the Disclosing Party.

**8. Governing Law.** This Agreement shall be governed by and construed in accordance with the laws of the State of [Your State], without regard to its conflict of laws principles.

**IN WITNESS WHEREOF,** the Parties have executed this Agreement as of the Effective Date.

**CLIENT:**
By: _________________________
Name: _______________________
Title: ________________________
Date: ________________________

**CONSULTANT:**
By: _________________________
Name: _______________________
Title: ________________________
Date: ________________________
`
        },
        {
          type: 'file',
          name: 'MSA-SOW-Template.md',
          content: `
# Master Services Agreement (MSA) & Statement of Work (SOW) Template

**Disclaimer:** This is a template for informational purposes only. It is not a substitute for professional legal advice. Consult with a lawyer to draft agreements that fit your business needs.

---

## **MASTER SERVICES AGREEMENT**

This Master Services Agreement ("MSA") is entered into as of **[Date]** ("Effective Date") by and between **[Client Full Legal Name]** ("Client") and **[Your Company Name]** ("Consultant").

**1. Services and Statements of Work (SOWs).** Consultant agrees to provide services ("Services") to Client as described in one or more Statements of Work. Each SOW will be a separate agreement that incorporates the terms of this MSA.

**2. Fees and Payment.** Client agrees to pay Consultant the fees set forth in the applicable SOW. Unless otherwise specified, invoices are due within 15 days of receipt.

**3. Term and Termination.** This MSA shall commence on the Effective Date and continue until terminated by either party with 30 days' written notice.

**4. Confidentiality.** Each party agrees to protect the other's Confidential Information as defined in the Mutual Non-Disclosure Agreement executed between the parties.

**5. Intellectual Property.**
    *   **Pre-existing IP:** Each party retains ownership of its pre-existing intellectual property.
    *   **Work Product:** Upon full payment for the Services in an SOW, Consultant grants Client a non-exclusive, perpetual, worldwide, royalty-free license to use the deliverables ("Work Product") for its internal business purposes. Consultant retains the right to use the underlying know-how and methodologies for other clients.

**6. Warranties and Limitation of Liability.** Consultant warrants that Services will be performed in a professional and workmanlike manner. IN NO EVENT SHALL EITHER PARTY'S LIABILITY EXCEED THE FEES PAID UNDER THE APPLICABLE SOW.

**7. Governing Law.** This MSA shall be governed by the laws of the State of [Your State].

---

## **STATEMENT OF WORK (SOW) NO. 1**

This SOW is made effective as of **[Date]** and is subject to the terms of the MSA between Client and Consultant.

**1. Project Title:** QuickStart Repo Hardening

**2. Term:** This SOW shall commence on **[Start Date]** and is expected to be completed by **[End Date]** (the "Term").

**3. Scope of Services & Deliverables:**
*(This section should be copied directly from the "Scope of Work: Deliverables" section of the final proposal.)*

*   **Week 1: Audit & Foundation**
    *   [ ] Deliverable 1: ...
    *   [ ] Deliverable 2: ...
*   **Week 2: Automation & Documentation**
    *   [ ] Deliverable 3: ...
    *   [ ] Deliverable 4: ...
*   **Week 3: Governance & Handoff**
    *   [ ] Deliverable 5: ...
    *   [ ] Deliverable 6: ...

**4. Fees & Payment Schedule:**
*   **Total Project Fee:** A fixed fee of **[Total Amount, e.g., $18,500 USD]**.
*   **Payment Schedule:**
    *   50% ($[Amount]) due upon execution of this SOW.
    *   50% ($[Amount]) due upon completion and handoff of the final deliverable.

**5. Assumptions:**
*   Client will provide timely access to necessary personnel and systems (GitHub, etc.).
*   The scope of work is limited to one primary repository.

**IN WITNESS WHEREOF,** the parties have executed this SOW.

**CLIENT:**
By: _________________________
Name: _______________________
Title: ________________________
Date: ________________________

**CONSULTANT:**
By: _________________________
Name: _______________________
Title: ________________________
Date: ________________________
`
        },
        {
          type: 'file',
          name: 'DPA-Template.md',
          content: `
# Data Processing Addendum (DPA) Template

**Disclaimer:** Data privacy laws (like GDPR and CCPA) are complex. This template is for informational purposes only and is not legal advice. You MUST consult with a lawyer specializing in data privacy to draft a DPA that is compliant and suitable for your business.

---

### **DATA PROCESSING ADDENDUM**

This Data Processing Addendum ("DPA") is incorporated into the Master Services Agreement ("MSA") between **[Client Full Legal Name]** ("Controller") and **[Your Company Name]** ("Processor").

This DPA is intended to satisfy the requirements of Article 28 of the General Data Protection Regulation (EU) 2016/679 ("GDPR") and other applicable data protection laws.

**1. Definitions**
*   **"Personal Data," "Processing," "Data Subject," "Controller," and "Processor"** shall have the meanings ascribed to them in the GDPR.
*   **"Client Data"** means any Personal Data that Processor Processes on behalf of Controller in the course of providing the Services under the MSA.

**2. Processing of Client Data**
*   **Processor's Role:** Processor shall act as a Data Processor and will process Client Data only on the documented instructions of the Controller (the Client) for the sole purpose of providing the services outlined in the SOW.
*   **Nature of Processing:** The subject matter of the Processing is the performance of the Services, which may involve accessing source code and related metadata within the Controller's GitHub repository. The duration of the Processing is the term of the applicable SOW. The types of Personal Data may include names, email addresses, and other identifiers present within git commits, source code comments, or configuration files.

**3. Processor's Obligations**
Processor agrees to:
*   a) Implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk.
*   b) Ensure that persons authorized to process the Personal Data have committed themselves to confidentiality.
*   c) Assist the Controller in responding to Data Subject requests.
*   d) At the choice of the Controller, delete or return all Personal Data after the end of the provision of services.
*   e) Make available to the Controller all information necessary to demonstrate compliance with Article 28 of the GDPR.
*   f) Not engage another processor ("Sub-processor") without prior specific written authorization of the Controller.

**4. Security of Processing**
Processor will maintain administrative, physical, and technical safeguards for the protection of the security, confidentiality, and integrity of Client Data. This includes, but is not limited to, using multi-factor authentication for all systems, encrypting data at rest and in transit where feasible, and maintaining a principle of least privilege for data access.

**5. Data Breach Notification**
Processor shall notify Controller without undue delay after becoming aware of a Personal Data Breach affecting Client Data.

**IN WITNESS WHEREOF,** the parties have executed this DPA.

**CONTROLLER (CLIENT):**
By: _________________________
Name: _______________________
Title: ________________________
Date: ________________________

**PROCESSOR (CONSULTANT):**
By: _________________________
Name: _______________________
Title: ________________________
Date: ________________________
`
        }
      ]
    },
    {
      type: 'file',
      name: 'repo_map.json',
      content: `
{
  "files": [
    { "path": "strategy/ICP.md", "purpose": "Defines the Ideal Customer Profiles.", "owner": "Founder", "review_frequency": "Quarterly" },
    { "path": "strategy/Positioning.md", "purpose": "Core value proposition and market positioning.", "owner": "Founder", "review_frequency": "Quarterly" },
    { "path": "strategy/Offers&Pricing.md", "purpose": "Defines service tiers and pricing.", "owner": "Founder", "review_frequency": "Bi-Annually" },
    { "path": "strategy/Differentiators_GitHubRepoArchitect.md", "purpose": "Articulates unique selling points.", "owner": "Founder", "review_frequency": "Quarterly" },
    { "path": "funnel/LandingPage.md", "purpose": "Main landing page copy.", "owner": "Marketing", "review_frequency": "As Needed" },
    { "path": "funnel/LeadMagnet.md", "purpose": "Content for the 'Repo Audit Checklist'.", "owner": "Marketing", "review_frequency": "Annually" },
    { "path": "funnel/TY-Page.md", "purpose": "Thank you page copy for form submissions.", "owner": "Marketing", "review_frequency": "Annually" },
    { "path": "funnel/CalendarPage.md", "purpose": "Copy for the meeting booking page.", "owner": "Sales", "review_frequency": "Annually" },
    { "path": "funnel/FormQuestions.md", "purpose": "Questions for lead capture and qualification forms.", "owner": "Marketing", "review_frequency": "Bi-Annually" },
    { "path": "copy/ValueProps.md", "purpose": "Bank of reusable value proposition statements.", "owner": "Marketing", "review_frequency": "Quarterly" },
    { "path": "copy/FAQs.md", "purpose": "Master list of frequently asked questions.", "owner": "Sales", "review_frequency": "Quarterly" },
    { "path": "copy/Objection-Handling.md", "purpose": "Scripts for handling common sales objections.", "owner": "Sales", "review_frequency": "Quarterly" },
    { "path": "copy/CaseStudy-Template.md", "purpose": "Template for writing client case studies.", "owner": "Marketing", "review_frequency": "N/A" },
    { "path": "outreach/ColdEmails.md", "purpose": "Templates for cold email outreach sequences.", "owner": "Sales", "review_frequency": "Quarterly" },
    { "path": "outreach/LinkedIn-Scripts.md", "purpose": "Scripts for LinkedIn connection requests and DMs.", "owner": "Sales", "review_frequency": "Quarterly" },
    { "path": "outreach/GitHub-Community-Outreach.md", "purpose": "Playbook for non-spammy community outreach on GitHub.", "owner": "Marketing", "review_frequency": "Bi-Annually" },
    { "path": "outreach/Upwork-Proposal-Template.md", "purpose": "Template for responding to Upwork job posts.", "owner": "Sales", "review_frequency": "As Needed" },
    { "path": "outreach/Partner-Intro-Email.md", "purpose": "Template for reaching out to potential referral partners.", "owner": "Founder", "review_frequency": "Bi-Annually" },
    { "path": "email/SpeedToLead-3Day.md", "purpose": "Sequence sent immediately after a call is booked.", "owner": "Sales", "review_frequency": "Bi-Annually" },
    { "path": "email/LeadMagnet-Delivery.md", "purpose": "Email that delivers the lead magnet.", "owner": "Marketing", "review_frequency": "Annually" },
    { "path": "email/Nurture-10Emails.md", "purpose": "Long-term nurture sequence for leads.", "owner": "Marketing", "review_frequency": "Bi-Annually" },
    { "path": "email/NoShow-Reschedule.md", "purpose": "Sequence for handling meeting no-shows.", "owner": "Sales", "review_frequency": "Annually" },
    { "path": "email/PostCall-Followup.md", "purpose": "Follow-up email sent after a discovery call.", "owner": "Sales", "review_frequency": "Quarterly" },
    { "path": "email/Breakup-Sequence.md", "purpose": "Sequence for unresponsive leads post-proposal.", "owner": "Sales", "review_frequency": "Bi-Annually" },
    { "path": "content/30Day-ContentCalendar.md", "purpose": "A 30-day content plan for LinkedIn.", "owner": "Marketing", "review_frequency": "Monthly" },
    { "path": "content/8-LinkedIn-Posts.md", "purpose": "Copy-pasteable LinkedIn posts.", "owner": "Marketing", "review_frequency": "As Needed" },
    { "path": "content/3-YouTube-Scripts.md", "purpose": "Scripts for short-form YouTube videos.", "owner": "Marketing", "review_frequency": "As Needed" },
    { "path": "content/Webinar-Outline.md", "purpose": "Outline for a lead-generation webinar.", "owner": "Marketing", "review_frequency": "As Needed" },
    { "path": "ads/Google-Search.md", "purpose": "Ad copy for Google Search campaigns.", "owner": "Marketing", "review_frequency": "Quarterly" },
    { "path": "ads/LinkedIn-Ads.md", "purpose": "Ad copy and creative ideas for LinkedIn Ads.", "owner": "Marketing", "review_frequency": "Quarterly" },
    { "path": "ads/Retargeting-Creatives.md", "purpose": "Ideas for retargeting ad creatives.", "owner": "Marketing", "review_frequency": "Quarterly" },
    { "path": "ads/Keyword-Seedlist.csv", "purpose": "Seed list of keywords for search campaigns.", "owner": "Marketing", "review_frequency": "Bi-Annually" },
    { "path": "crm/Pipeline-Stages.md", "purpose": "Definition of sales pipeline stages.", "owner": "Sales", "review_frequency": "Annually" },
    { "path": "crm/Custom-Fields.md", "purpose": "List of required custom fields in the CRM.", "owner": "Sales", "review_frequency": "Annually" },
    { "path": "crm/Lead-Scoring.md", "purpose": "Model for scoring and prioritizing leads.", "owner": "Marketing", "review_frequency": "Bi-Annually" },
    { "path": "crm/n8n-Zaps-Pseudocode.md", "purpose": "Pseudocode for automation workflows.", "owner": "Marketing Ops", "review_frequency": "As Needed" },
    { "path": "crm/SLA-Playbook.md", "purpose": "Internal SLAs for lead response times.", "owner": "Sales", "review_frequency": "Annually" },
    { "path": "sops/Discovery-Call-SOP.md", "purpose": "Standard Operating Procedure for discovery calls.", "owner": "Sales", "review_frequency": "Quarterly" },
    { "path": "sops/Proposal-SOW-Template.md", "purpose": "Template for proposals and Statements of Work.", "owner": "Sales", "review_frequency": "Quarterly" },
    { "path": "sops/Onboarding-HandOff-SOP.md", "purpose": "SOP for client onboarding and project kickoff.", "owner": "Sales", "review_frequency": "Bi-Annually" },
    { "path": "sops/Referral-Program.md", "purpose": "Defines the client and partner referral program.", "owner": "Founder", "review_frequency": "Annually" },
    { "path": "sops/Review-Testimonial-Playbook.md", "purpose": "Playbook for requesting testimonials and case studies.", "owner": "Marketing", "review_frequency": "Annually" },
    { "path": "metrics/KPIs-Dashboard.md", "purpose": "Defines the key metrics and KPIs to track.", "owner": "Founder", "review_frequency": "Monthly" },
    { "path": "metrics/Weekly-Review-Checklist.md", "purpose": "Checklist for the weekly GTM performance review.", "owner": "Founder", "review_frequency": "N/A" },
    { "path": "metrics/AB-Test-Plan.md", "purpose": "Plan for A/B testing key parts of the funnel.", "owner": "Marketing", "review_frequency": "As Needed" },
    { "path": "legal/NDA-Template.md", "purpose": "Template for a Mutual Non-Disclosure Agreement.", "owner": "Legal", "review_frequency": "Annually" },
    { "path": "legal/MSA-SOW-Template.md", "purpose": "Template for Master Services & Statement of Work.", "owner": "Legal", "review_frequency": "Annually" },
    { "path": "legal/DPA-Template.md", "purpose": "Template for a Data Processing Addendum.", "owner": "Legal", "review_frequency": "Annually" },
    { "path": "README.md", "purpose": "Instructions on how to use the acquisition system.", "owner": "Founder", "review_frequency": "Quarterly" }
  ]
}
`
    },
    {
      type: 'file',
      name: 'README.md',
      content: `
# README: The GitHub Repo Architect Client Acquisition System

Welcome to your complete, production-ready client acquisition system. This repository contains every strategic document, piece of copy, and operational playbook you need to find, sell, and win high-ticket service engagements.

---

### **How to Use This System in 15 Minutes**

**Your Goal:** Get your first lead booked within 7 days.

1.  **Start with Strategy (5 mins):**
    *   Open \`strategy/Offers&Pricing.md\`. Decide on your pricing. Replace the placeholder numbers.
    *   Open \`strategy/ICP.md\`. Read the three profiles. Pick the ONE you want to target first.

2.  **Set Up Your Funnel (5 mins):**
    *   Open \`funnel/LandingPage.md\` and \`funnel/CalendarPage.md\`.
    *   Copy this content into your website builder (e.g., Webflow, Carrd) and your calendar tool (e.g., Calendly).
    *   Connect your form to your CRM using the logic in \`crm/n8n-Zaps-Pseudocode.md\`.

3.  **Launch Your First Outreach (5 mins):**
    *   Open \`outreach/ColdEmails.md\`.
    *   Pick the sequence that matches your chosen ICP.
    *   Find 10 people on LinkedIn who fit your ICP.
    *   Send them the first email.

**That's it.** You are now live.

---

### **Runbook: First 7 Days**

*   **Day 1:** Customize pricing & choose your target ICP. Set up your landing page & calendar.
*   **Day 2:** Send your first 20 cold emails. Send 10 LinkedIn connection requests using the scripts.
*   **Day 3:** Post your first piece of content on LinkedIn from \`content/8-LinkedIn-Posts.md\`.
*   **Day 4:** Follow up on your first batch of cold emails.
*   **Day 5:** Find a relevant job post on Upwork and use the \`Upwork-Proposal-Template.md\`.
*   **Day 6:** Reach out to one potential referral partner using \`outreach/Partner-Intro-Email.md\`.
*   **Day 7:** Review your week. Did you get any replies? Any calls booked? Use the \`metrics/Weekly-Review-Checklist.md\` to guide you.

---
### **System Overview**

*   **\`/strategy\`**: Your GTM plan. Who you sell to, what you sell, and why you're different.
*   **\`/funnel\`**: The assets for your online presence (landing page, forms, etc.).
*   **\`/copy\`**: Your messaging bible. Value props, FAQs, and objection handling.
*   **\`/outreach\`**: Templates for actively finding new clients.
*   **\`/email\`**: Automated email sequences for nurturing and operations.
*   **\`/content\` & \`/ads\`**: Your top-of-funnel engine for building authority and generating inbound interest.
*   **\`/crm\` & \`/sops\`**: The operating system for your sales process. How you manage leads and run your business.
*   **\`/metrics\` & \`/legal\`**: How you measure success and protect yourself.

This is a living system. Use the \`repo_map.json\` to understand the purpose of each file and assign owners as you grow. Now, go execute.
`
    }
  ]
};
