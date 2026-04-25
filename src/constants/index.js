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
  { name: "DSA", icon: "https://cdn.simpleicons.org/leetcode" },
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
  { name: "Data Structures & Algorithms", icon: "https://cdn.simpleicons.org/leetcode" },
  { name: "OOP", icon: "https://api.iconify.design/mdi/shape-plus.svg" },
  { name: "Web Development", icon: html },
  { name: "Data Analytics", icon: "https://cdn.simpleicons.org/pandas" },
  { name: "Cloud Computing", icon: "https://cdn.simpleicons.org/googlecloud" },
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
      "Built custom e-commerce workflows with authentication, product variants, cart, checkout, and order tracking.",
      "Implemented JWT-based login, protected routes, and profile history modules in a production-style stack.",
      "Contributed across frontend and backend to improve UX consistency and delivery speed.",
    ],
  },
  {
    title: "Python Programming Intern",
    company_name: "CodSoft",
    icon: alfred,
    iconBg: "#F3F4F6",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Developed contact-book workflows with add, update, search, and validation features.",
      "Improved CLI and interaction flow with clearer prompts and robust input handling.",
      "Strengthened problem-solving and clean coding practices through weekly project deliveries.",
    ],
  },
  {
    title: "Project Builder and Open Collaboration",
    company_name: "Independent and Community Work",
    icon: openssource,
    iconBg: "#F3F4F6",
    date: "2024 - Present",
    points: [
      "Built AI, full-stack, and frontend projects focused on practical use-cases and deployment readiness.",
      "Maintained active coding footprint across GitHub, LeetCode, Unstop, Kaggle, and Quora.",
      "Focused on stipend-based internship opportunities with PPO-oriented project quality.",
    ],
  },
];

const projects = [
  {
    name: "SpicyToday - AI-Powered Social Media Platform",
    description:
      "A full-stack AI-powered social media platform currently in development with real-time interaction and production-grade backend workflows.",
    run_output:
      "Successfully built a production-ready social media backend with 30+ REST APIs, real-time messaging, and deployable architecture.",
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
    description: "The platform includes authentication, email security scanning, fraud detection, monitoring, and media verification tools.",
    run_output: "Live output available at https://cyber-guard-ai-ai-cybersecurity-pla.vercel.app.",
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
    description: "LLM-Powered Analysis Platform",
    run_output: "No hosted output link on GitHub; run locally from source code.",
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
    description: "Project repository from GitHub profile.",
    run_output: "No hosted output link on GitHub; run locally from source code.",
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
    description: "Project repository from GitHub profile.",
    run_output: "Live output available at https://fin-guru-ai-your-personal-money-men.vercel.app.",
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
      "An AI-powered, confidential, and empathetic mental wellness solution for youth.",
    run_output: "No hosted output link on GitHub; run locally from source code.",
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
    description: "Project repository from GitHub profile.",
    run_output: "No hosted output link on GitHub; run locally from source code.",
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
    description: "Project repository from GitHub profile.",
    run_output: "No hosted output link on GitHub; run locally from source code.",
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
    description: "Project repository from GitHub profile.",
    run_output: "Live output available at https://pocket-terminal.vercel.app.",
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
    description: "Project repository from GitHub profile.",
    run_output: "No hosted output link on GitHub; run locally from source code.",
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
      "This app is fully functional and responsive with a personal assistant use case.",
    run_output: "No hosted output link on GitHub; run locally from source code.",
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
    description: "Project repository from GitHub profile.",
    run_output: "No hosted output link on GitHub; run locally from source code.",
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
      "AI-powered, confidential, and empathetic mental wellness solution that supports and guides youth.",
    run_output: "No hosted output link on GitHub; run locally from source code.",
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
    description: "My clone repository",
    run_output: "No hosted output link on GitHub; run locally from source code.",
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
    description: "Project repository from GitHub profile.",
    run_output: "No hosted output link on GitHub; run locally from source code.",
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
