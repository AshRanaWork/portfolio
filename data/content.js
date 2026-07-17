// ============================================================
// 👋 THIS IS THE ONLY FILE YOU NEED TO EDIT.
// Every word on the site comes from here.
// ============================================================

export const site = {
  name: "Ash Rana",
  title: "Data Analyst | AI-Powered Business Intelligence & Automation",
  tagline:
    "I dig into business problems, surface the trends hiding in the data, and build AI-powered systems that automate the manual work.",
  email: "ashranawork@gmail.com",
  linkedin: "https://linkedin.com/in/ashranaoffice",
  github: "https://github.com/ashranawork",
  resumeFile: "/resume.pdf", // drop resume.pdf into the /public folder
  // Contact section paragraph:
  contactBlurb:
    "I work where analysis meets automation: understanding how a business runs, finding what the data says, and building the system that does the manual work on its own. If you've got a business problem buried in data, or a manual process eating hours it shouldn't, let's build something to solve it!",
};

// ---------- SECTION 2: WHAT I DO ----------
export const services = [
  {
    icon: "🤖",
    title: "AI & Automation",
    body: "LLM-powered tools and agents that take repetitive work off people's plates, from automated pricing audit systems that reduce 3–4 hour audits to approximately 1 minute per cycle to an AI agent that queries a detailed database in plain English.",
  },
  {
    icon: "🔍",
    title: "Data Analysis & Insight",
    body: "SQL, Python, and Excel across millions of rows: cleaning, joining, and interrogating real datasets until the actual trend shows up. Conclusions that hold up to scrutiny, caveats and all.",
  },
  {
    icon: "📊",
    title: "Business Intelligence",
    body: "Interactive Tableau and Power BI dashboards that turn analysis into something a decision-maker can act on in seconds. Built at scale, including a catalog of 475K+ SKUs reviewed weekly by leadership.",
  },
];

// ---------- SECTION 3: TECH STACK (the 3D orbs) ----------
// name = label on the sphere, size = relative prominence (0.7–1.2)
export const techStack = [
  { name: "Python", size: 1.15 },
  { name: "SQL", size: 1.1 },
  { name: "Power BI", size: 1.1 },
  { name: "Tableau", size: 1.3 },
  { name: "LLM APIs", size: 1.1 },
  { name: "Pandas", size: 0.85 },
  { name: "Excel", size: 0.85 },
  { name: "Git", size: 0.7 },
];

// ---------- SECTION 4: TIMELINE ----------
export const timeline = [
  {
    period: "In progress · Dec 2026",
    role: "M.S. Computer Science (AI & Machine Learning)",
    org: "Western Governors University",
    body: "Graduate coursework in machine learning, deep learning, NLP, and AI system design. Building the engineering rigor beneath the analytical work.",
  },
  {
    period: "Jun 2025 – Jan 2026",
    role: "Product Data Analyst",
    org: "United Aqua Group",
    body: "Built a Python pricing discrepancy system that cut manual case handling from 3 to 4 hours down to about a minute per cycle. Developed a Power BI dashboard spanning 475K+ SKUs used by leadership in weekly reviews, and led a 3-person team running LLM-driven catalog enrichment.",
  },
  {
    period: "Mar 2025 – Jun 2025",
    role: "Business Support Specialist",
    org: "United Aqua Group",
    body: "Cleaned and validated vendor pricing files of up to 5,000+ SKUs for NetSuite and BigCommerce, reducing pricing mismatches by roughly 30% and upload rejections by 15%+.",
  },
  {
    period: "Aug 2023 – Feb 2025",
    role: "Business Data Analyst",
    org: "Healthy Delights · Remote",
    body: "Delivered Power BI dashboards, Power Apps, and Power Automate flows used across the company. Built KPI reporting on revenue, CAC, CLV, and cohort behavior that informed executive decisions, and managed 3 interns.",
  },
  {
    period: "Oct 2022 – Jul 2023",
    role: "Junior Analyst",
    org: "Healthy Delights · Remote",
    body: "Centralized purchase, stock, and vendor cost data for 50+ items, enabling 3x faster monthly reporting. Audited and cleaned 6+ months of order history, cutting pricing errors by roughly 25%.",
  },
  {
    period: "Graduated",
    role: "Bachelors in Entertainment Business Management (Hospitality Management)",
    org: "University of Nevada, Las Vegas",
    body: "Built a foundation in business operations, revenue models, and customer behavior across the entertainment and hospitality industry.",
  },
];

// ---------- SECTION 5: PROJECTS ----------
// image: drop a screenshot in /public/projects/ (e.g. a Tableau or
//        Power BI export ~1600px wide) and update the path.
// embedUrl: OPTIONAL. Works with Tableau Public embed links too, so
//           your live campaign-analysis dashboard can be interactive
//           right on the page. Leave "" to show the screenshot.
export const projects = [
  {
    title: "AI Data Analyst Agent",
    body: "A deployed, autonomous agent that answers plain-English business questions by inspecting a database's schema, writing and running its own SQL, recovering from its own query errors, and explaining the results through a live web app with a transparent decision log. Built with read-only guardrails and safety limits. The natural next step from the campaign analysis: first I did the analysis by hand, then I built the system that does it on demand. Try it live at ashranawork-ai-agent.streamlit.app.",
    tags: ["Python", "Gemini API", "AI Agents", "Streamlit"],
    image: "/projects/ai-agent.png",
    embedUrl: "",
    liveUrl: "https://ashranawork-ai-agent.streamlit.app",
    github: "https://github.com/ashranawork/ai-data-analyst-agent",
  },
  {
    title: "Pricing Discrepancy Detection Tool",
    body: "An automated auditing tool that compares vendor invoices against agreed contract prices, flags overcharges, exports a clean exception report, and drafts vendor correction emails with an LLM. On sample data it flagged $5,810 in overcharges, the kind of manual, error-prone check that quietly leaks money at real companies.",
    tags: ["Python", "Pandas", "OpenAI API"],
    image: "/projects/pricing-tool.png",
    embedUrl: "",
    github: "https://github.com/ashranawork/pricing-discrepancy-tool",
  },
  {
    title: "Retail Marketing Campaign Analysis",
    body: "An end-to-end analysis of 2.6 million retail transactions across 2,500 households, asking whether marketing campaigns actually drive incremental spend. The work separates genuine campaign response from selection bias and lands on a concrete targeting recommendation, presented in an interactive Tableau dashboard.",
    tags: ["SQL", "SQLite", "Tableau"],
    image: "/projects/campaign-analysis.png",
    embedUrl: "",
    github: "https://github.com/ashranawork/retail-marketing-campaign-analysis",
  },
];