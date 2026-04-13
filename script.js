const roles = [
  "Frontend Developer Intern",
  "Full-Stack / MERN-Stack Intern",
  "Software Development Intern",
  "AI-ML Engineer (Vibe Coding)"
];

const projects = [
  {
    name: "SaarthiX",
    url: "https://github.com/rguptaprofile/SaarthiX",
    language: "TypeScript",
    category: ["fullstack", "frontend"],
    desc: "TypeScript-based product build focused on practical engineering execution."
  },
  {
    name: "PocketTerminal",
    url: "https://github.com/rguptaprofile/PocketTerminal",
    language: "JavaScript",
    category: ["frontend"],
    live: "https://pocket-terminal.vercel.app",
    desc: "Interactive terminal-style web app showcasing frontend polish and product thinking."
  },
  {
    name: "FinGuru-AI-Your-Personal-Money-Mentor",
    url: "https://github.com/rguptaprofile/FinGuru-AI-Your-Personal-Money-Mentor",
    language: "Python",

    category: ["ai", "backend"],
    live: "https://fin-guru-ai-your-personal-money-men.vercel.app",
    desc: "AI-guided personal finance mentor concept with Python-centric intelligence workflows."
  },
  {
    name: "NeuroScout - AI-powered VC Scouting",
    url: "https://github.com/rguptaprofile/NeuroScout---AI-powered-VC-Venture-Capital-scouting-system",
    language: "TypeScript",
    category: ["ai", "fullstack"],
    desc: "AI-powered scouting concept for venture capital insights and opportunity discovery."
  },

  {
    name: "docmentsintelligence",
    url: "https://github.com/rguptaprofile/docmentsintelligence",
    language: "TypeScript",
    category: ["ai", "fullstack"],
    desc: "LLM-powered document analysis platform with semantic query workflows."
  },
  {
    name: "SANJEEVANI",
    url: "https://github.com/rguptaprofile/SANJEEVANI",
    language: "JavaScript",
    category: ["ai", "frontend"],
    desc: "AI mental wellness solution focused on confidential and empathetic support journeys."
  },
  {
    name: "fastchatin",
    url: "https://github.com/rguptaprofile/fastchatin",
    language: "TypeScript",
    category: ["fullstack"],
    desc: "Chat-centric architecture exploring responsive communication flow and product design."
  },
  {
    name: "Generative-AI-for-Youth-Mental-Wellness",
    url: "https://github.com/rguptaprofile/Generative-AI-for-Youth-Mental-Wellness",
    language: "TypeScript",
    category: ["ai"],
    desc: "Generative AI implementation for proactive and context-aware wellness support."
  },
  {
    name: "Quantum-Leapers_KDSH_2026",
    url: "https://github.com/rguptaprofile/Quantum-Leapers_KDSH_2026",
    language: "Python",
    category: ["ai", "backend"],
    desc: "Hackathon-driven Python project reflecting rapid prototyping and collaboration."
  },
  {
    name: "skills-introduction-to-github",
    url: "https://github.com/rguptaprofile/skills-introduction-to-github",
    language: "GitHub",

    category: ["utility"],
    desc: "Repository showing consistent version-control workflows and project hygiene."
  },
  {
    name: "CyberGuardAI - AI Cybersecurity Platform",
    url: "https://github.com/rguptaprofile/CyberGuardAI---AICybersecurity-Platform",
    language: "TypeScript",

    category: ["ai", "fullstack"],
    live: "https://cyber-guard-ai-ai-cybersecurity-pla.vercel.app",
    desc: "AI cybersecurity stack with scam detection, fraud analytics, and media verification modules."
  },
  {
    name: "Hotel-Management-System",
    url: "https://github.com/rguptaprofile/Hotel-Management-System",
    language: "Java",

    category: ["backend"],
    desc: "Structured management system project demonstrating logic architecture and data handling."
  }
];

const filters = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "ai", label: "AI/ML" },
  { key: "backend", label: "Backend" }
];

let activeFilter = "all";
let searchText = "";

function typeRoles() {
  const target = document.getElementById("typed-role");
  if (!target) return;

  let roleIndex = 0;
  let charIndex = 0;
  let removing = false;

  const tick = () => {
    const currentRole = roles[roleIndex];

    if (!removing) {
      charIndex += 1;
      target.textContent = currentRole.slice(0, charIndex);
      if (charIndex === currentRole.length) {
        removing = true;
        setTimeout(tick, 1000);
        return;
      }
      setTimeout(tick, 50);
    } else {
      charIndex -= 1;
      target.textContent = currentRole.slice(0, charIndex);
      if (charIndex === 0) {
        removing = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
      setTimeout(tick, 28);
    }
  };

  tick();
}

function renderFilters() {
  const root = document.getElementById("tag-filter");
  if (!root) return;

  root.innerHTML = "";
  filters.forEach((f) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `filter-tag ${activeFilter === f.key ? "active" : ""}`;
    btn.textContent = f.label;
    btn.addEventListener("click", () => {
      activeFilter = f.key;
      renderFilters();
      renderProjects();
    });
    root.appendChild(btn);
  });
}

function getVisibleProjects() {
  return projects.filter((project) => {
    const byFilter = activeFilter === "all" || project.category.includes(activeFilter);

    const searchable = [
      project.name,
      project.desc,
      project.language,
      project.category.join(" ")
    ]
      .join(" ")
      .toLowerCase();

    const bySearch = searchable.includes(searchText);

    return byFilter && bySearch;
  });
}

function setupSearch() {
  const input = document.getElementById("project-search");
  if (!input) return;

  input.addEventListener("input", (event) => {
    searchText = event.target.value.trim().toLowerCase();
    renderProjects();
  });
}

function revealOnScroll() {
  const nodes = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  nodes.forEach((node) => observer.observe(node));
}

function setupProgress() {
  const progress = document.getElementById("scroll-progress");
  if (!progress) return;

  const updateProgress = () => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
    progress.style.width = `${pct}%`;
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();
}

/* Tier 1: Parallax Halos */
function setupParallax() {
  const haloA = document.querySelector(".halo-a");
  const haloB = document.querySelector(".halo-b");
  if (!haloA || !haloB) return;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    haloA.style.transform = `translateY(${scrollY * 0.5}px)`;
    haloB.style.transform = `translateY(${scrollY * -0.3}px)`;
  }, { passive: true });
}

/* Tier 1: Magnetic Button Hover */
function setupMagneticButtons() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const distance = Math.sqrt(x * x + y * y);
      
      if (distance < 100) {
        const pull = 0.2;
        btn.style.transform = `translate(${x * pull}px, ${y * pull}px) translateY(-2px)`;
      }
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0, 0) translateY(-2px)";
    });
  });
}

/* Tier 2: Project Modal */
function showProjectModal(project) {
  const modal = document.getElementById("modal-container");
  const detail = document.getElementById("project-detail");
  if (!modal || !detail) return;

  detail.innerHTML = `
    <div class="project-detail">
      <h2>${project.name}</h2>
      <div class="meta">
        <span class="lang">${project.language}</span>
        ${project.category.map(c => `<span>${c}</span>`).join("")}
      </div>
      <p>${project.desc}</p>
      <div class="detail-links">
        <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">View Source</a>
        ${project.live ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">Live Demo</a>` : ""}
      </div>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("modal-container");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function setupModalHandlers() {
  const modal = document.getElementById("modal-container");
  const closeBtn = document.querySelector(".modal-close");
  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", closeProjectModal);
  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
    }
  });
}

/* Update renderProjects to make cards clickable */
function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  const visible = getVisibleProjects();
  grid.innerHTML = "";

  if (!visible.length) {
    const msg = document.createElement("p");
    msg.className = "muted";
    msg.textContent = "No projects matched this filter. Try another keyword.";
    grid.appendChild(msg);
    return;
  }

  visible.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.style.cursor = "pointer";
    card.addEventListener("click", () => showProjectModal(project));
    
    const starCount = Number.isFinite(project.stars) ? project.stars : 0;

    const title = document.createElement("h3");
    title.textContent = project.name;

    const desc = document.createElement("p");
    desc.textContent = project.desc;

    const pills = document.createElement("div");
    pills.className = "pill-row";

    const lang = document.createElement("span");
    lang.className = "pill-chip";
    lang.textContent = project.language;

    const stars = document.createElement("span");
    stars.className = "pill-chip";
    stars.textContent = `Stars: ${starCount}`;

    pills.append(lang, stars);

    const links = document.createElement("div");
    links.className = "pill-row";

    const source = document.createElement("a");
    source.href = project.url;
    source.target = "_blank";
    source.rel = "noopener noreferrer";
    source.textContent = "Source";
    source.addEventListener("click", (e) => e.stopPropagation());
    links.appendChild(source);

    if (project.live) {
      const live = document.createElement("a");
      live.href = project.live;
      live.target = "_blank";
      live.rel = "noopener noreferrer";
      live.textContent = "Live";
      live.addEventListener("click", (e) => e.stopPropagation());
      links.appendChild(live);
    }

    card.append(title, desc, pills, links);
    grid.appendChild(card);
  });
}

/* Tier 3: Floating Hire Me CTA */
function setupFloatingCTA() {
  const toggle = document.getElementById("cta-toggle");
  const menu = document.getElementById("cta-menu");
  const whatsapp = document.getElementById("cta-whatsapp");
  const email = document.getElementById("cta-email");

  if (!toggle || !menu || !whatsapp || !email) return;

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    menu.classList.toggle("open");
  });

  whatsapp.addEventListener("click", () => {
    window.open("https://wa.me/917905800001?text=Hi%20Rahul%2C%20I%20have%20an%20internship%20opportunity", "_blank");
    toggle.classList.remove("open");
    menu.classList.remove("open");
  });

  email.addEventListener("click", () => {
    window.location.href = "mailto:rahulgupt1231@gmail.com?subject=Internship%20Opportunity%20for%20Rahul%20Raj&body=Hi%20Rahul%2C%0A%0AI%20have%20an%20interesting%20internship%20opportunity%20for%20you.%0A%0APlease%20get%20back%20to%20me%20at%20your%20earliest%20convenience.";
    toggle.classList.remove("open");
    menu.classList.remove("open");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      toggle.classList.remove("open");
      menu.classList.remove("open");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  typeRoles();
  renderFilters();
  renderProjects();
  setupSearch();
  revealOnScroll();
  setupProgress();
  setupParallax();
  setupMagneticButtons();
  setupModalHandlers();
  setupFloatingCTA();
});
