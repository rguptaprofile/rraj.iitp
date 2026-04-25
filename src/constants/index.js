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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Full-Stack  Developer",
    icon: mobile,
  },
  {
    title: "AI/ML Product Builder",
    icon: backend,
  },
  {
    title: "Software Development",
    icon: web,
  },
];

const technologies = [
  { name: "Artificial Intelligence", icon: "https://cdn.simpleicons.org/openai" },
  { name: "Machine Learning", icon: "https://cdn.simpleicons.org/scikitlearn" },
  { name: "Deep Learning", icon: "https://cdn.simpleicons.org/pytorch" },
  { name: "Natural Language Processing (NLP)", icon: "https://cdn.simpleicons.org/huggingface" },
  { name: "Computer Vision", icon: "https://cdn.simpleicons.org/opencv" },
  { name: "Scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn" },
  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow" },
  { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch" },
  { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas" },
  { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy" },
  { name: "Matplotlib", icon: "https://cdn.simpleicons.org/plotly" },
  { name: "OpenCV", icon: "https://cdn.simpleicons.org/opencv" },
  { name: "Jupyter Notebook", icon: "https://cdn.simpleicons.org/jupyter" },
  { name: "MLOps", icon: "https://cdn.simpleicons.org/mlflow" },
  { name: "Model Deployment", icon: "https://cdn.simpleicons.org/kubernetes" },
  { name: "Python (Advanced)", icon: "https://cdn.simpleicons.org/python" },
  // { name: "DSA", icon: "https://cdn.simpleicons.org/leetcode" },
  // { name: "C++ (Intermediate)", icon: "https://cdn.simpleicons.org/cplusplus" },
  { name: "JavaScript (Intermediate)", icon: javascript },
  { name: "Version Control", icon: git },
  { name: "REST API design", icon: "https://cdn.simpleicons.org/fastapi" },
  { name: "MySQL-Workbench", icon: "https://cdn.simpleicons.org/mysql" },
  { name: "Node.js", icon: nodejs },
  { name: "React.js", icon: reactjs },
  { name: "Flask", icon: "https://cdn.simpleicons.org/flask" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase" },
  { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud" },
  { name: "MongoDB", icon: mongodb },
  { name: "Communication", icon: "https://api.iconify.design/mdi/message-processing-outline.svg" },
  { name: "Teamwork", icon: "https://api.iconify.design/mdi/account-group-outline.svg" },
  { name: "Adaptability", icon: "https://api.iconify.design/mdi/autorenew.svg" },
  { name: "Leadership", icon: "https://api.iconify.design/mdi/crown-outline.svg" },
  // { name: "Data Structures & Algorithms", icon: "https://cdn.simpleicons.org/leetcode" },
  // { name: "OOP", icon: "https://api.iconify.design/mdi/shape-plus.svg" },
  { name: "Web Development", icon: html },
  { name: "Data Analytics", icon: "https://cdn.simpleicons.org/pandas" },
  // { name: "Cloud Computing", icon: "https://cdn.simpleicons.org/googlecloud" },
  { name: "Software Development", icon: "https://api.iconify.design/mdi/code-tags.svg" },
  
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Zaalima Development Pvt. Ltd.",
    icon: axory,
    iconBg: "#F3F4F6",
    date: "Apr 2025 - Jul 2025",
    points: [
      "Delivered core e-commerce workflows end-to-end: authentication, variants, cart, checkout, and order visibility in a production-style stack.",
      "Implemented JWT authentication, protected routes, and profile-history modules to improve security and user trust.",
      "Worked across frontend and backend to reduce handoff friction and ship features faster with consistent UX behavior.",
    ],
  },
  {
    title: "Python Programming Intern",
    company_name: "CodSoft",
    icon: alfred,
    iconBg: "#F3F4F6",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Built a complete contact-book workflow with add, update, search, and validation logic focused on reliability.",
      "Improved CLI interaction quality through better prompts, guardrails, and robust input handling for edge cases.",
      "Maintained weekly delivery pace while improving code readability, modularity, and debugging discipline.",
    ],
  },
  {
    title: "Project Builder and Open Collaboration",
    company_name: "Independent and Community Work",
    icon: openssource,
    iconBg: "#F3F4F6",
    date: "2024 - Present",
    points: [
      "Built AI, full-stack, and frontend systems around practical workflows with deployment-first engineering decisions.",
      "Maintained a consistent public build trail across GitHub, LeetCode, Unstop, Kaggle, and Quora to show execution consistency.",
      "Focused on internship-ready product quality with clear ownership from problem framing to implementation and delivery.",
    ],
  },
];

const projects = [
  {
    name: "SpicyToday - AI-Powered Social Media Platform",
    description:
      "AI-powered social platform engineered for real-time interactions, moderation-aware workflows, and scalable backend behavior.",
    run_output:
      "Built production-style backend with 30+ REST APIs, real-time messaging, and deployment-ready architecture for rapid iteration.",
    problem:
      "Social products struggle to scale real-time communication and safe moderation together.",
    solution:
      "Built a modular AI-ready backend with real-time messaging, auth, and moderation-friendly APIs.",
    tech_stack: "Python, Flask, MongoDB, Socket.IO, REST APIs",
    impact:
      "Production-style backend architecture with 30+ APIs and real-time messaging foundation.",
    impact_note: "Core impact data is verified from implementation scope and repository outputs.",
    architecture_link: "",
    demo_video_link: "",
    image: "/spicytoday-preview.svg",
    tags: [
      { name: "HTML5/CSS3/JavaScript", color: "text-orange-400" },
      { name: "Python/Flask", color: "text-green-400" },
      { name: "MongoDB/Socket.IO", color: "text-cyan-400" },
    ],
    source_code_link: "",
    live_demo_link: "",
  },
  {
    name: "CyberGuardAI---AICybersecurity-Platform",
    description: "Cybersecurity product with authentication, email threat scanning, fraud signals, monitoring workflows, and media verification utilities.",
    run_output: "Live product available with multi-module AI security workflows and practical dashboard-first usability.",
    problem:
      "Users and teams need one place to run practical AI-powered cyber checks across multiple threat surfaces.",
    solution:
      "Unified security workflows into a product with auth, scanning, fraud signals, and monitoring support.",
    tech_stack: "TypeScript, AI APIs, Web stack, Deployment",
    impact:
      "Live deployable product validating end-to-end execution from feature concept to user-facing release.",
    impact_note: "Usage scale metrics can be added once analytics snapshots are available.",
    architecture_link: "",
    demo_video_link: "",
    tags: [
      { name: "TypeScript", color: "text-blue-400" },
      { name: "Original", color: "text-purple-400" },
      { name: "GitHub", color: "text-cyan-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/CyberGuardAI---AICybersecurity-Platform",
    live_demo_link: "https://cyber-guard-ai-ai-cybersecurity-pla.vercel.app",
  },
  {
    name: "docmentsintelligence",
    description: "LLM-powered analysis workflow for extracting usable insights from long-form documents.",
    run_output: "Repository includes modular source for local execution and iterative model-driven analysis experiments.",
    problem:
      "Long policy and business documents are hard to process quickly and consistently.",
    solution:
      "Designed an LLM-driven analysis flow to convert unstructured text into actionable outputs.",
    tech_stack: "TypeScript, LLM workflows, structured extraction",
    impact:
      "Improved decision-readiness by reducing manual interpretation steps for document-heavy tasks.",
    impact_note: "Impact statement is workflow-level; quantified metrics can be added after benchmark runs.",
    architecture_link: "",
    demo_video_link: "",
    tags: [
      { name: "TypeScript", color: "text-blue-400" },
      { name: "Original", color: "text-purple-400" },
      { name: "GitHub", color: "text-cyan-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/docmentsintelligence",
    live_demo_link: "",
  },
  {
    name: "fastchatin",
    description: "Real-time communication-focused build emphasizing speed, clean interaction flow, and practical chat UX.",
    run_output: "Source-first project designed for local execution with extensible architecture for messaging features.",
    tags: [
      { name: "TypeScript", color: "text-blue-400" },
      { name: "Original", color: "text-purple-400" },
      { name: "GitHub", color: "text-cyan-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/fastchatin",
    live_demo_link: "",
  },
  {
    name: "FinGuru-AI-Your-Personal-Money-Mentor",
    description: "AI-driven finance mentor experience that helps users reason through money decisions with guided insights.",
    run_output: "Live product demonstrates practical AI-assisted financial guidance through an end-user friendly interface.",
    problem:
      "Many users need simple, personalized financial guidance without high advisory friction.",
    solution:
      "Built an AI-assisted mentoring flow focused on clarity, action steps, and user-friendly interactions.",
    tech_stack: "Python, AI-assisted logic, web interface",
    impact:
      "Live demo validates product usability and practical AI guidance experience for personal finance contexts.",
    impact_note: "User and retention metrics can be appended from analytics when available.",
    architecture_link: "",
    demo_video_link: "",
    tags: [
      { name: "Python", color: "text-green-400" },
      { name: "Original", color: "text-purple-400" },
      { name: "GitHub", color: "text-cyan-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/FinGuru-AI-Your-Personal-Money-Mentor",
    live_demo_link: "https://fin-guru-ai-your-personal-money-men.vercel.app",
  },
  {
    name: "Generative-AI-for-Youth-Mental-Wellness",
    description:
      "Confidential and empathetic AI wellness workflow designed to support youth-centric emotional assistance journeys.",
    run_output: "Project emphasizes trust-aware conversational design and can be executed locally for further product expansion.",
    tags: [
      { name: "TypeScript", color: "text-blue-400" },
      { name: "Original", color: "text-purple-400" },
      { name: "GitHub", color: "text-cyan-400" },
    ],
    source_code_link:
      "https://github.com/rguptaprofile/Generative-AI-for-Youth-Mental-Wellness",
    live_demo_link: "",
  },
  {
    name: "Hotel-Management-System",
    description: "Operational management system project covering core hotel workflows and structured data handling patterns.",
    run_output: "Codebase highlights system-level problem decomposition and can be run locally for feature extension.",
    tags: [
      { name: "Java", color: "text-red-400" },
      { name: "Fork", color: "text-purple-400" },
      { name: "GitHub", color: "text-cyan-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/Hotel-Management-System",
    live_demo_link: "",
  },
  {
    name: "NeuroScout---AI-powered-VC-Venture-Capital-scouting-system",
    description: "AI-powered venture scouting workflow focused on filtering opportunities, signals, and early-stage evaluation support.",
    run_output: "Repository provides a local-run foundation for data-driven investor support features and iteration.",
    problem:
      "Early-stage opportunity screening is noisy and time-intensive for analysts and investors.",
    solution:
      "Implemented AI-assisted scouting workflows to structure signals for faster first-pass evaluation.",
    tech_stack: "TypeScript, data pipelines, AI ranking logic",
    impact:
      "Creates a practical base for reducing manual screening load in venture decision workflows.",
    impact_note: "Performance benchmarks can be added after dataset-backed evaluation cycles.",
    architecture_link: "",
    demo_video_link: "",
    tags: [
      { name: "TypeScript", color: "text-blue-400" },
      { name: "Original", color: "text-purple-400" },
      { name: "GitHub", color: "text-cyan-400" },
    ],
    source_code_link:
      "https://github.com/rguptaprofile/NeuroScout---AI-powered-VC-Venture-Capital-scouting-system",
    live_demo_link: "",
  },
  {
    name: "PocketTerminal",
    description: "Web-based terminal experience focused on interaction fidelity, responsiveness, and developer-friendly command flow.",
    run_output: "Live product demonstrates polished frontend execution with practical usability and responsive behavior.",
    tags: [
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "Original", color: "text-purple-400" },
      { name: "GitHub", color: "text-cyan-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/PocketTerminal",
    live_demo_link: "https://pocket-terminal.vercel.app",
  },
  {
    name: "Quantum-Leapers_KDSH_2026",
    description: "Competition-focused build showcasing rapid prototyping, team execution, and problem-solving under constraints.",
    run_output: "Source project documents a local-run implementation suitable for iteration and challenge-driven improvement.",
    tags: [
      { name: "Python", color: "text-green-400" },
      { name: "Original", color: "text-purple-400" },
      { name: "GitHub", color: "text-cyan-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/Quantum-Leapers_KDSH_2026",
    live_demo_link: "",
  },
  // {
  //   name: "rahul-professioal-portfolio",
  //   description: "This is my professional Profile or Portfolio.",
  //   run_output: "No hosted output link on GitHub; run locally from source code.",
  //   tags: [
  //     { name: "HTML", color: "text-orange-400" },
  //     { name: "Original", color: "text-purple-400" },
  //     { name: "GitHub", color: "text-cyan-400" },
  //   ],
  //   source_code_link: "https://github.com/rguptaprofile/rahul-professioal-portfolio",
  //   live_demo_link: "",
  // },
  {
    name: "Rahul-s-GPT---Personal-Assistant",
    description:
      "Responsive personal-assistant application with task-oriented conversational flow and practical user-focused functionality.",
    run_output: "Fully functional local-run assistant project built for extensibility and iterative feature growth.",
    tags: [
      { name: "Python", color: "text-green-400" },
      { name: "Original", color: "text-purple-400" },
      { name: "GitHub", color: "text-cyan-400" },
    ],
    source_code_link:
      "https://github.com/rguptaprofile/Rahul-s-GPT---Personal-Assistant",
    live_demo_link: "",
  },
  // {
  //   name: "rraj.iitp",
  //   description: "Project repository from GitHub profile.",
  //   run_output: "No hosted output link on GitHub; run locally from source code.",
  //   tags: [
  //     { name: "General", color: "text-cyan-400" },
  //     { name: "Original", color: "text-purple-400" },
  //     { name: "GitHub", color: "text-cyan-400" },
  //   ],
  //   source_code_link: "https://github.com/rguptaprofile/rraj.iitp",
  //   live_demo_link: "",
  // },
  {
    name: "SaarthiX",
    description: "Product-oriented build from GitHub portfolio focused on structured implementation and practical delivery.",
    run_output: "Repository is execution-ready for local runs and future module-level scaling.",
    tags: [
      { name: "TypeScript", color: "text-blue-400" },
      { name: "Original", color: "text-purple-400" },
      { name: "GitHub", color: "text-cyan-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/SaarthiX",
    live_demo_link: "",
  },
  {
    name: "SANJEEVANI",
    description:
      "AI-guided wellness experience designed for confidential, empathetic support and youth-centered guidance pathways.",
    run_output: "Local-run codebase focused on meaningful social impact use-cases and extensible mental-health workflows.",
    problem:
      "Youth users often need accessible and stigma-free first-line mental wellness support.",
    solution:
      "Built an empathetic AI-guided support flow with confidentiality-centered interaction design.",
    tech_stack: "JavaScript, conversational AI flow, supportive UX",
    impact:
      "Provides a scalable prototype for social-impact oriented wellness guidance.",
    impact_note: "Impact metrics can be expanded with pilot-user feedback and retention tracking.",
    architecture_link: "",
    demo_video_link: "",
    tags: [
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "Original", color: "text-purple-400" },
      { name: "GitHub", color: "text-cyan-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/SANJEEVANI",
    live_demo_link: "",
  },
  {
    name: "skills-introduction-to-github",
    description: "Foundational repository demonstrating version-control discipline, collaboration basics, and Git workflow fluency.",
    run_output: "Useful as a process proof for clean GitHub operations and reproducible local execution.",
    tags: [
      { name: "General", color: "text-cyan-400" },
      { name: "Original", color: "text-purple-400" },
      { name: "GitHub", color: "text-cyan-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/skills-introduction-to-github",
    live_demo_link: "",
  },
  {
    name: "StockTrendAnalyzer",
    description: "Data-focused project for exploring stock movement patterns, trend behavior, and analytical signal interpretation.",
    run_output: "Repository supports local experimentation for analytics workflows and model-led insights.",
    tags: [
      { name: "Python", color: "text-green-400" },
      { name: "Fork", color: "text-purple-400" },
      { name: "GitHub", color: "text-cyan-400" },
    ],
    source_code_link: "https://github.com/rguptaprofile/StockTrendAnalyzer",
    live_demo_link: "",
  },
];

export { services, technologies, experiences, projects };
