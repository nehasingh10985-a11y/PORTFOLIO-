// ─────────────────────────────────────────────────────────
//  data.js  —  Edit this file to update your portfolio.
// ─────────────────────────────────────────────────────────

export const META = {
  name: "Neha Singh",
  email: "nehasingh10985@gmail.com",
  phone: "+91 97581 60569",
  linkedin: "https://www.linkedin.com/in/neha-singh-aa436324b",
  github: "https://github.com/nehasingh10985-a11y",
  location: "India · Open to Remote",
  badge: "Open to Frontend & Full-Stack roles",
  bio: "MCA student with strong frontend skills in React & Tailwind CSS. Currently levelling up in backend with Node.js & MongoDB — building toward becoming a confident Full-Stack Developer.",
};

export const TITLES = [
  "Frontend Developer",
  "Full-Stack Developer",
  "React · Node.js · MongoDB",
];

export const STATS = [
  { value: "MCA", label: "Student 2026" },
  { value: "3+", label: "Projects built" },
  { value: "6mo", label: "Intern exp." },
  { value: "MERN", label: "Stack" },
];

export const JOURNEY = [
  {
    phase: "Strong in",
    area: "Frontend",
    desc: "React, Tailwind, JavaScript — built production-ready UIs and responsive web apps.",
    color: "#6366f1",
    status: "✓ Solid foundation",
    shimmer: false,
  },
  {
    phase: "Currently",
    area: "Backend",
    desc: "Deepening Node.js, Express, MongoDB — building robust APIs and server-side architecture.",
    color: "#f59e0b",
    status: "● In progress",
    shimmer: true,
  },
  {
    phase: "Goal",
    area: "Full-Stack Developer",
    desc: "Combining both to build complete, scalable products from frontend to backend independently.",
    color: "#34d399",
    status: "◎ Next milestone",
    shimmer: true,
  },
];

export const PROJECTS = [
  {
    num: "01",
    title: "Intelligent Recruitment & ATS Platform",
    category: "Full-Stack · MERN",
    badge: "Full-Stack",
    badgeColor: "#6366f1",
    desc: "Architected a full-stack recruitment system with candidate registration, job posting, and stage-based workflow. 15+ RESTful APIs, JWT auth, drag-and-drop Kanban, and debounced search reducing API calls by ~30%.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    link: "https://github.com/nehasingh10985-a11y",
  },
  {
    num: "02",
    title: "GitHub Profile Viewer",
    category: "Frontend · React",
    badge: "Frontend",
    badgeColor: "#0ea5e9",
    desc: "A React app to search and explore GitHub profiles — live repositories, follower stats, and activity fetched from the GitHub API with a clean responsive UI.",
    tags: ["React.js", "GitHub API", "Tailwind CSS", "Vite"],
    link: "https://github-profile-viewer-one-sigma.vercel.app",
  },
  {
    num: "03",
    title: "Habit Tracker",
    category: "Frontend · Productivity",
    badge: "Frontend",
    badgeColor: "#0ea5e9",
    desc: "A clean habit tracking app for building daily routines. Features streak tracking, progress visualization, and a minimal distraction-free interface.",
    tags: ["React.js", "Tailwind CSS", "Vite", "LocalStorage"],
    link: "https://habit-tracker-three-phi-36.vercel.app",
  },
];

export const FRONTEND_SKILLS = [
  { name: "HTML5 / Responsive Design", level: 92 },
  { name: "Tailwind CSS / CSS3", level: 90 },
  { name: "JavaScript (ES6+)", level: 88 },
  { name: "React.js / Vite", level: 85 },
];

export const BACKEND_SKILLS = [
  { name: "REST API Design", level: 72 },
  { name: "JWT / Auth & Security", level: 70 },
  { name: "Node.js / Express.js", level: 68 },
  { name: "MongoDB / MySQL", level: 65 },
];

export const TOOLS = [
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "MongoDB Atlas",
  "Vite",
  "REST APIs",
];

// Marquee ticker items (shown twice for seamless loop)
export const TICKER = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "JavaScript ES6+",
  "JWT Auth",
  "REST APIs",
  "Git",
  "Vite",
  "Postman",
  "HTML5",
  "CSS3",
];

export const EDUCATION = [
  {
    deg: "MCA",
    uni: "AKTU",
    full: "Dr. A.P.J. Abdul Kalam Technical University",
    year: "Expected May 2026",
    score: "SGPA 7.96",
  },
  {
    deg: "BCA",
    uni: "RMPSU",
    full: "Raja Mahendra Pratap Singh University",
    year: "May 2024",
    score: "CGPA 7.9",
  },
];

export const EXPERIENCE = [
  {
    role: "Frontend Developer Intern",
    company: "AS Web Providers",
    type: "Remote",
    period: "Jan 2024 – Jun 2024",
    points: [
      "Engineered 10+ responsive web interfaces using modular HTML5, CSS3, and JavaScript.",
      "Improved UI scalability with Flexbox and CSS Grid, enhancing cross-device consistency.",
      "Implemented interactive components and optimized layout performance for better UX.",
    ],
  },
];
