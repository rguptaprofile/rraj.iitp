import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  axory,
  alfred,
  openssource,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "AI/ML Product Builder",
    icon: backend,
  },
  // {
  //   title: "Software Development",
  //   icon: web,
  // },
];

const technologies = [
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Node.js", icon: nodejs },
  { name: "React.js", icon: reactjs },
  { name: "Flask", icon: "https://cdn.simpleicons.org/flask" },
  { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy" },
  { name: "MySQL Workbench", icon: "https://cdn.simpleicons.org/mysql" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase" },
  { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud" },
  { name: "MongoDB", icon: mongodb },
  { name: "Version Control", icon: git },
  { name: "REST API design", icon: "https://cdn.simpleicons.org/fastapi" },
  { name: "Communication", icon: "https://api.iconify.design/mdi/message-processing-outline.svg" },
  { name: "Teamwork", icon: "https://api.iconify.design/mdi/account-group-outline.svg" },
  { name: "Adaptability", icon: "https://api.iconify.design/mdi/autorenew.svg" },
  { name: "Leadership", icon: "https://api.iconify.design/mdi/crown-outline.svg" },
  { name: "Data Structures & Algorithms", icon: "https://cdn.simpleicons.org/leetcode" },
  { name: "Web Development", icon: html },
  { name: "Data Analytics", icon: "https://cdn.simpleicons.org/pandas" },
  { name: "Cloud Computing", icon: "https://cdn.simpleicons.org/googlecloud" },
  { name: "Software Development", icon: "https://api.iconify.design/mdi/code-tags.svg" },
];

const experiences = [
  {
    title: "Salesforce Developer Virtual Intern",
    company_name: "SmartBridge / SmartInternz",
    icon: openssource,
    iconBg: "#F3F4F6",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Completed Salesforce Fundamentals, Organization Setup, Relationship & Process Automation, Flows & Security, Apex, Testing & Debugging, and VS Code/CLI training.",
      "Worked with Lightning Web Components (LWC) and API training during the 8-week internship.",
      "Earned Apex Specialist, Process Automation Specialist, and Developer Super Set badges.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Zaalima Development",
    icon: axory,
    iconBg: "#F3F4F6",
    date: "17 Apr 2025 - 17 Jul 2025",
    points: [
      "Built a custom-apparel e-commerce platform for design upload, mockup preview, cart/checkout, order tracking, profiles, and admin inventory/order management.",
      "Implemented JWT authentication and product variants, then centralized customer designs, orders, and status updates into one web workflow.",
      "Set up frontend and backend boilerplate for the clothes-printing application.",
    ],
  },
  {
    title: "Frontend + Backend Developer",
    company_name: "Documents Intelligence System | Bajaj Finserv (HackRx 6.0)",
    icon: alfred,
    iconBg: "#F3F4F6",
    date: "23 Jul 2025 - 22 Aug 2025",
    points: [
      "Built an LLM-powered document analysis platform as part of Team HackRx 6.0 for Bajaj Finserv.",
      "Used Node.js with Express, JWT authentication, Multer file uploads, and CORS-enabled APIs in the backend.",
      "Shipped both frontend and backend work for query analysis and document intelligence workflows.",
    ],
  },
];

const projects = [
  {
    name: "Documents Intelligence System",
    description:
      "LLM-powered document analysis platform that helps teams extract structured answers from long business documents.",
    run_output:
      "Built as a frontend + backend hackathon project for Bajaj Finserv's HackRx 6.0 challenge.",
    problem:
      "Long policy and business documents are hard to query quickly and consistently.",
    solution:
      "Designed an LLM-driven workflow for document upload, preprocessing, and query analysis.",
    tech_stack: "Node.js, Express, JWT, Multer, CORS, LLM workflows",
    impact:
      "Reduced manual document interpretation steps by turning unstructured text into actionable outputs.",
    impact_note: "HackRx 6.0 project deliverable from the new resume.",
    architecture_link: "",
    demo_video_link: "",
    tags: [
      { name: "Node.js", color: "text-green-400" },
      { name: "Express", color: "text-cyan-400" },
      { name: "LLM", color: "text-purple-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/docmentsintelligence",
    live_demo_link: "https://vercel.com/rguptaprofiles-projects/docmentsintelligence",
  },
  {
    name: "SentinelAI - AI Fraud & Public Safety Intelligence Platform",
    description:
      "AI-assisted public-safety platform for digital-arrest scams, counterfeit currency, coordinated fraud, and disconnected case reporting.",
    run_output:
      "Built role-based citizen, police, and banking workflows with risk scoring and investigative intelligence.",
    problem:
      "Fraud, scam, and public safety workflows are often fragmented across disconnected systems.",
    solution:
      "Combined citizen, police, and banking journeys into one platform with practical AI support.",
    tech_stack: "React, FastAPI, MongoDB",
    impact:
      "Created a working public-safety prototype for fraud intelligence and case coordination.",
    impact_note: "Resume-highlighted product build from the new portfolio data.",
    architecture_link: "",
    demo_video_link: "",
    tags: [
      { name: "React", color: "text-blue-400" },
      { name: "FastAPI", color: "text-green-400" },
      { name: "MongoDB", color: "text-cyan-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/Sentinel-AI",
    live_demo_link: "https://sentinel-in.vercel.app/",
  },
  {
    name: "PocketTerminal - Remote Laptop Control Platform",
    description:
      "Mobile-to-laptop remote control platform with voice/text commands, WebSocket control, AI intent recognition, and personalized suggestions.",
    run_output:
      "Replaced a legacy Naive Bayes classifier with an LSTM-based model reporting 99%+ intent-classification accuracy.",
    problem:
      "Remote command systems need high-accuracy intent recognition and real-time responsiveness.",
    solution:
      "Built a voice/text command pipeline with WebSocket control and LSTM-based intent detection.",
    tech_stack: "JavaScript, WebSocket, LSTM, AI intent recognition",
    impact:
      "Improved command interpretation by about 19-24 percentage points over the earlier baseline.",
    impact_note: "Accuracy figure called out directly in the resume.",
    architecture_link: "",
    demo_video_link: "",
    tags: [
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "WebSocket", color: "text-cyan-400" },
      { name: "LSTM", color: "text-purple-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/PocketTerminal",
    live_demo_link: "https://pocket-terminal.vercel.app",
  },
  {
    name: "NomadBihari - Travel & Culture Blog Platform",
    description:
      "Full-stack travel and blogging platform focused on content sharing, community engagement, and AI-assisted optimization.",
    run_output:
      "Implemented OTP/JWT authentication, media uploads, real-time engagement actions, analytics, and admin monitoring.",
    problem:
      "Travel content is often fragmented across multiple platforms and hard to manage end-to-end.",
    solution:
      "Created a single workflow for publishing, engagement, analytics, and AI-assisted content support.",
    tech_stack: "HTML, CSS, JavaScript, Node.js, Express, MySQL, OpenAI API",
    impact:
      "Reduced processing time by 40% through a more structured travel-content workflow.",
    impact_note: "Resume-highlighted platform build from the new data.",
    architecture_link: "",
    demo_video_link: "",
    tags: [
      { name: "Node.js", color: "text-green-400" },
      { name: "MySQL", color: "text-blue-400" },
      { name: "OpenAI", color: "text-purple-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/NomadBihari",
    live_demo_link: "https://nomad-bihari.vercel.app/",
  },
];

export { services, technologies, experiences, projects };
