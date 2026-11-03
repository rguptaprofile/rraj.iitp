import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "work", title: "Experience" },
  { id: "education", title: "Education & Achievements" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
    desc: "Modern MERN / MEVN architectures, REST APIs, real-time sockets & secure auth",
  },
  {
    title: "AI/ML Product Builder",
    icon: backend,
    desc: "LLMs, RAG, LSTM neural networks, NLP document intelligence & risk scoring",
  },
  {
    title: "Software Systems Engineer",
    icon: creator,
    desc: "IIT Patna CS & Data Analytics (CPI 9.74), scalable backends & cloud data systems",
  },
  {
    title: "Web & UI Developer",
    icon: mobile,
    desc: "Responsive web apps, interactive mockups, dynamic e-commerce & real-time portals",
  },
];

const technologies = [
  // Programming Languages
  { name: "Python", category: "Languages", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "JavaScript", category: "Languages", icon: javascript },
  { name: "HTML5", category: "Languages", icon: html },
  { name: "CSS3", category: "Languages", icon: css },

  // Frameworks & Libraries
  { name: "React.js", category: "Frameworks", icon: reactjs },
  { name: "Node.js", category: "Frameworks", icon: nodejs },
  { name: "Express.js", category: "Frameworks", icon: "https://cdn.simpleicons.org/express/FFFFFF" },
  { name: "Flask", category: "Frameworks", icon: "https://cdn.simpleicons.org/flask/FFFFFF" },
  { name: "NumPy", category: "Frameworks", icon: "https://cdn.simpleicons.org/numpy/013243" },
  { name: "FastAPI", category: "Frameworks", icon: "https://cdn.simpleicons.org/fastapi/009688" },

  // Cloud & Databases
  { name: "MySQL Workbench", category: "Databases & Cloud", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
  { name: "MongoDB", category: "Databases & Cloud", icon: mongodb },
  { name: "Firebase", category: "Databases & Cloud", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Supabase", category: "Databases & Cloud", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  { name: "Google Cloud", category: "Databases & Cloud", icon: "https://cdn.simpleicons.org/googlecloud" },

  // Developer Tools
  { name: "Version Control (Git)", category: "Developer Tools", icon: git },
  { name: "REST API Design", category: "Developer Tools", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "VS Code / CLI", category: "Developer Tools", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },

  // Coursework & Fundamentals
  { name: "Data Structures & Algorithms", category: "Core CS", icon: "https://cdn.simpleicons.org/leetcode/FFA116" },
  { name: "Data Analytics", category: "Core CS", icon: "https://cdn.simpleicons.org/pandas/150458" },
  { name: "Web Development", category: "Core CS", icon: html },
  { name: "Cloud Computing", category: "Core CS", icon: "https://cdn.simpleicons.org/googlecloud" },
  { name: "Software Development", category: "Core CS", icon: "https://api.iconify.design/mdi/code-tags.svg" },

  // Soft Skills
  { name: "Communication", category: "Soft Skills", icon: "https://api.iconify.design/mdi/message-processing-outline.svg" },
  { name: "Teamwork", category: "Soft Skills", icon: "https://api.iconify.design/mdi/account-group-outline.svg" },
  { name: "Adaptability", category: "Soft Skills", icon: "https://api.iconify.design/mdi/autorenew.svg" },
  { name: "Leadership", category: "Soft Skills", icon: "https://api.iconify.design/mdi/crown-outline.svg" },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Zaalima Development [ Clothes - app ]",
    location: "Electronics City, Karnataka, 560100",
    icon: "/zaalima-logo.svg",
    iconBg: "#1f1424",
    date: "17 April 2025 - 17 July 2025",
    points: [
      "Built a dynamic custom-apparel e-commerce platform enabling users to choose apparel, upload custom graphics, preview real-time mockups, and place orders.",
      "Implemented JWT authentication and product variants; centralized customer designs, orders, and status updates into one web workflow.",
      "Engineered an admin dashboard for inventory management, viewing orders, and updating order fulfillment statuses.",
      "Configured robust frontend and backend boilerplate for the clothes-printing application, streamlining the design-to-order turnaround.",
    ],
  },
  {
    title: "Frontend + Backend Developer (HackRx 6.0)",
    company_name: "Documents Intelligence System | Bajaj Finserv",
    location: "Hackathon Project",
    icon: "/bajaj.svg",
    iconBg: "#0a192f",
    date: "23 July 2025 - 22 August 2025",
    points: [
      "Built a comprehensive LLM-powered document analysis platform as part of Team HackRx 6.0 for Bajaj Finserv.",
      "Engineered backend using Node.js with Express, JWT authentication, Multer for secure multi-file uploads, and CORS-enabled REST APIs.",
      "Implemented NLP and LLM-driven query analysis pipelines to convert dense 50+ page legal and financial documents into precise, structured answers.",
      "Delivered full-stack features from document ingestion to interactive query dashboards, minimizing manual document interpretation time.",
    ],
  },
  {
    title: "Salesforce Developer Virtual Intern",
    company_name: "SmartBridge / SmartInternz",
    location: "Virtual | 8-week Salesforce Developer Internship",
    icon: "/salesforce.svg",
    iconBg: "#002b49",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Completed 8-week intensive training covering Salesforce Fundamentals, Org Setup, Relationship & Process Automation, Flows & Security, Apex, Testing & Debugging, and VS Code/CLI.",
      "Developed Lightning Web Components (LWC) and integrated Salesforce APIs for business logic automation.",
      "Earned prestigious Apex Specialist, Process Automation Specialist, and Developer Super Set badges.",
      "Verified Certificate: smartinternz.com/internships/salesforce_certificates/934e47c77d22275a8e62634b1b204f23.",
    ],
  },
  {
    title: "Tech Coordinator",
    company_name: "Vaani - The Oratory Society (The Debating Club), IIT Patna",
    location: "IIT Patna",
    icon: "/iitpatna.svg",
    iconBg: "#0c1b33",
    date: "2025 - Present",
    points: [
      "Leading technical infrastructure, web presence, and digital portals for IIT Patna's premier debating society.",
      "Coordinating tournament registrations, multimedia broadcasting, and tech management for national-level parliamentary debates.",
      "Collaborating with executive leadership to elevate campus engagement and digital reach.",
    ],
  },
  {
    title: "Student Social Media (SSM) Campus Ambassador",
    company_name: "IIT Bombay & IIT Guwahati",
    location: "IIT Bombay (Mood Indigo & Techfest) | IIT Guwahati (E-Cell)",
    icon: "/iitbombay.svg",
    iconBg: "#1a1230",
    date: "Dec 2023 - July 2024",
    points: [
      "Represented Asia's largest cultural & sci-tech festivals (Mood Indigo & Techfest) at IIT Bombay (Dec 2023), driving student participation and outreach.",
      "Selected as Student Campus Ambassador for Entrepreneurship Cell (E-Cell) at IIT Guwahati (July 2024), promoting entrepreneurship initiatives and hackathon awareness.",
    ],
  },
];

const projects = [
  {
    name: "SentinelAI - AI Fraud & Public Safety Intelligence Platform",
    image: "/sentinelai-preview.svg",
    description:
      "AI-assisted public-safety platform addressing digital-arrest scams, counterfeit currency, coordinated fraud, and disconnected case reporting.",
    run_output:
      "Built role-based citizen, police, and banking workflows with real-time risk scoring, fraud-graph, and geospatial intelligence.",
    problem:
      "Digital-arrest scams, counterfeit currency, and coordinated fraud are escalating rapidly while reporting systems remain fragmented across citizens, police, and banks.",
    solution:
      "Created an integrated intelligence platform with multi-role dashboards, scam email/message NLP scanning, dynamic risk scoring, and fraud-graph investigation.",
    tech_stack: "React, FastAPI, MongoDB, Gradio, Risk Scoring, Fraud Graph",
    impact:
      "Delivered a working public-safety prototype combining scam detection, risk assessment scoring, and cross-agency case coordination.",
    impact_note: "Resume-featured project. Includes Phishing & Scam Detection, Risk Assessment, Interactive Gradio UI, and Modular AI Design.",
    architecture_link: "",
    demo_video_link: "",
    tags: [
      { name: "React", color: "text-blue-400" },
      { name: "FastAPI", color: "text-green-400" },
      { name: "MongoDB", color: "text-cyan-400" },
      { name: "Fraud-Graph", color: "text-purple-400" },
      { name: "Risk-Scoring", color: "text-red-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/Sentinel-AI",
    live_demo_link: "https://sentinel-in.vercel.app/",
  },
  {
    name: "NomadBihari - Travel & Culture Blog Platform",
    image: "/nomadbihari-preview.svg",
    description:
      "Full-stack travel and culture blogging platform addressing fragmented travel-content sharing and community engagement.",
    run_output:
      "Implemented OTP/JWT authentication, media uploads, real-time likes/comments/shares, analytics, AI content optimization, and admin monitoring.",
    problem:
      "Travel writers and culture explorers face fragmented publishing tools, slow media processing, and lack of verified community engagement.",
    solution:
      "Engineered an all-in-one publishing portal with real-time interactions, automated OpenAI API content optimization, and admin supervision.",
    tech_stack: "HTML5, CSS3, JavaScript, Node.js, Express, MySQL, OpenAI API, JWT",
    impact:
      "Reduced content processing time by 40% through structured media pipelines and automated AI content assistance.",
    impact_note: "Directly featured in the new resume with 40% processing speedup and active community workflows.",
    architecture_link: "",
    demo_video_link: "",
    tags: [
      { name: "Node.js", color: "text-green-400" },
      { name: "Express", color: "text-cyan-400" },
      { name: "MySQL", color: "text-blue-400" },
      { name: "OpenAI", color: "text-purple-400" },
      { name: "JWT", color: "text-yellow-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/NomadBihari",
    live_demo_link: "https://nomad-bihari.vercel.app/",
  },
  {
    name: "PocketTerminal - Remote Laptop Control Platform",
    image: "/pocketterminal-preview.svg",
    description:
      "Mobile-to-laptop remote terminal enabling voice and text command execution, real-time WebSocket control, and AI intent recognition.",
    run_output:
      "Replaced a legacy Naive Bayes classifier (~75–80% accuracy) with an LSTM neural network reporting 99%+ intent-classification accuracy.",
    problem:
      "Remote command execution systems demand low latency and near-perfect intent interpretation to prevent unintended command executions.",
    solution:
      "Built a bi-directional WebSocket remote control pipeline integrated with an LSTM deep learning model for high-accuracy intent detection and personalized suggestions.",
    tech_stack: "JavaScript, WebSocket, LSTM Neural Model, AI Intent Recognition",
    impact:
      "Boosted intent classification accuracy by ~19–24 percentage points, achieving 99%+ command recognition precision.",
    impact_note: "Quantitative benchmark highlighted directly in the resume: 99%+ intent accuracy vs 75-80% baseline.",
    architecture_link: "",
    demo_video_link: "",
    tags: [
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "WebSocket", color: "text-cyan-400" },
      { name: "LSTM", color: "text-purple-400" },
      { name: "AI Intent", color: "text-green-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/PocketTerminal",
    live_demo_link: "https://pocket-terminal.vercel.app",
  },
  {
    name: "Documents Intelligence System",
    image: "/docintelligence-preview.svg",
    description:
      "Comprehensive LLM-powered document analysis platform developed for Bajaj Finserv's HackRx 6.0 hackathon challenge.",
    run_output:
      "Frontend + Backend platform for uploading, chunking, and querying complex financial, legal, and insurance policies.",
    problem:
      "Reviewing and querying lengthy 50+ page policy documents is tedious, repetitive, and vulnerable to missed clauses.",
    solution:
      "Engineered an NLP and LLM query-answering workflow with Node.js/Express, Multer file upload pipelines, and JWT authentication.",
    tech_stack: "Node.js, Express, JWT, Multer, CORS, NLP & LLMs",
    impact:
      "Automated policy comprehension, transforming dense unstructured text into clear structured answers for end users.",
    impact_note: "HackRx 6.0 hackathon project deliverable with full-stack Node.js + Express backend.",
    architecture_link: "",
    demo_video_link: "",
    tags: [
      { name: "Node.js", color: "text-green-400" },
      { name: "Express", color: "text-cyan-400" },
      { name: "LLM", color: "text-purple-400" },
      { name: "Multer", color: "text-yellow-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/docmentsintelligence",
    live_demo_link: "https://vercel.com/rguptaprofiles-projects/docmentsintelligence",
  },
  {
    name: "Zaalima Development [ Clothes - app ]",
    image: "/zaalima-preview.svg",
    description:
      "Dynamic e-commerce platform for custom clothes printing where users upload designs, preview on mockups, and track orders.",
    run_output:
      "Built during internship at Electronics City, Karnataka. Implemented design-to-order pipeline and admin inventory management.",
    problem:
      "Custom apparel printing businesses needed a seamless workflow between customer design uploads, preview generation, and inventory tracking.",
    solution:
      "Engineered a responsive platform with mockup preview studio, JWT authentication, product variant options, and real-time order tracking.",
    tech_stack: "React, Node.js, Express, JWT, E-Commerce, Admin Portal",
    impact:
      "Centralized customer designs, inventory counts, and order status updates into a unified web application.",
    impact_note: "Production internship build at Zaalima Development Pvt. Ltd., Electronics City, Bengaluru.",
    architecture_link: "",
    demo_video_link: "",
    tags: [
      { name: "React", color: "text-blue-400" },
      { name: "Node.js", color: "text-green-400" },
      { name: "Express", color: "text-cyan-400" },
      { name: "JWT", color: "text-yellow-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile",
    live_demo_link: "",
  },
];

const educationData = [
  {
    institution: "Indian Institute of Technology, Patna",
    degree: "B.Sc (Hons.) in Computer Science and Data Analytics",
    period: "2025 - 2028",
    score: "CGPA/CPI : 9.74",
    roll: "UA2503CDH466",
    details:
      "Coursework: Data Structures & Algorithms, Web Development, Data Analytics, Cloud Computing, Software Development.",
    highlight: "Top Academic Standing",
  },
  {
    institution: "G.P.G. College, Itwan, Haspura, Aurangabad (BH)",
    degree: "Intermediate Annual Examination (BSEB, Patna)",
    period: "2021",
    score: "Percentage : 64%",
    details: "Mathematics, Physics, Chemistry stream with focus on science fundamentals.",
    highlight: "BSEB Patna",
  },
  {
    institution: "D C S High School Dindir, Aurangabad (BH)",
    degree: "Secondary School Examination (BSEB, Patna)",
    period: "2018",
    score: "Percentage : 58%",
    details: "Core high school curriculum covering science, mathematics, and humanities.",
    highlight: "Secondary School",
  },
];

const achievementsData = [
  {
    title: "Common Internship Test (CIP) 2025",
    rank: "Rank 1495 among 18,000 participants",
    issuer: "CIP National Exam",
    year: "2025",
    desc: "Achieved top percentile among 18,000 national candidates in technical problem solving and algorithmic reasoning.",
    badge: "National Merit",
  },
  {
    title: "Google Certified - Gen AI Academy",
    rank: "Mastery Certification",
    issuer: "Google",
    year: "2025",
    desc: "Certified for mastering generative AI foundations, prompt engineering, LLM orchestration, and modern AI development tools.",
    badge: "Google Certified",
  },
  {
    title: "Bajaj Finserv HackRx 6.0 Hackathon",
    rank: "Project Contributor / Finalist",
    issuer: "Bajaj Finserv",
    year: "2025",
    desc: "Developed Documents Intelligence System with NLP and LLM-powered query analysis for high-volume financial documents.",
    badge: "Hackathon Finalist",
  },
  {
    title: "GenAI Exchange Hackathon / H2S",
    rank: "GenAI Solution Builder",
    issuer: "GenAI Exchange / Hack2Skill",
    year: "2025",
    desc: "Built an LLM-powered multi-document analysis and semantic extraction solution in competitive hackathon setting.",
    badge: "GenAI Award",
  },
  {
    title: "Salesforce Developer Super Set Badges",
    rank: "Apex & Process Automation Specialist",
    issuer: "SmartBridge / SmartInternz / Salesforce Trailhead",
    year: "2024",
    desc: "Earned Apex Specialist, Process Automation Specialist, and Developer Super Set credentials for enterprise automation.",
    badge: "Salesforce Badges",
  },
];

const positionsData = [
  {
    role: "Tech Coordinator",
    org: "Vaani - The Oratory Society (The Debating Club), IIT Patna",
    period: "2025 - Present",
    desc: "Directing technical operations, event coordination systems, and official digital portals for IIT Patna's premier debating society.",
  },
  {
    role: "SSM (Campus Ambassador)",
    org: "Mood Indigo & Techfest, IIT Bombay",
    period: "December 2023",
    desc: "Led campus outreach and student engagement for Asia's largest college cultural festival (Mood Indigo) and sci-tech extravaganza (Techfest).",
  },
  {
    role: "SSM (Campus Ambassador)",
    org: "Entrepreneurship Cell (E-Cell), IIT Guwahati",
    period: "July 2024",
    desc: "Promoted entrepreneurship summits, student venture programs, and innovation challenges across university cohorts.",
  },
];

export {
  services,
  technologies,
  experiences,
  projects,
  educationData,
  achievementsData,
  positionsData,
};
