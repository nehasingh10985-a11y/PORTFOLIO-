# Neha Singh — Portfolio

A clean, minimal dark-theme portfolio built with **React + Vite + Tailwind CSS**.

---

## 🗂 Folder Structure

```
neha-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx              ← React entry point
    ├── App.jsx               ← Assembles all sections
    ├── index.css             ← Global styles, animations, responsive
    ├── data.js               ← ✏️  ALL your content lives here
    ├── hooks/
    │   ├── useInView.js      ← Scroll-triggered visibility
    │   └── useTypewriter.js  ← Typing animation
    └── components/
        ├── Reveal.jsx        ← Fade-up animation wrapper
        ├── Navbar.jsx        ← Responsive nav + mobile hamburger
        ├── Hero.jsx          ← Landing section + typewriter + stats
        ├── Ticker.jsx        ← Infinite scrolling skill marquee
        ├── Journey.jsx       ← Frontend → Backend → Full-Stack cards
        ├── Projects.jsx      ← Spotlight hover project list
        ├── SkillBar.jsx      ← Animated thin skill bar
        ├── Skills.jsx        ← Skills + tools + education
        ├── Experience.jsx    ← Work experience
        ├── Contact.jsx       ← Contact form + links
        └── Footer.jsx
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Build for production
npm run build
```

---

## ✏️ How to Customize

All your personal content is in **`src/data.js`** — just edit that file:

| What to change    | Where in data.js                    |
| ----------------- | ----------------------------------- |
| Name, email, bio  | `META`                              |
| Typewriter titles | `TITLES`                            |
| Hero stats        | `STATS`                             |
| Projects          | `PROJECTS`                          |
| Skill bars        | `FRONTEND_SKILLS`, `BACKEND_SKILLS` |
| Tools grid        | `TOOLS`                             |
| Ticker items      | `TICKER`                            |
| Education         | `EDUCATION`                         |
| Work experience   | `EXPERIENCE`                        |

---

## 🌐 Deploy on Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and import the repo at [vercel.com](https://portfolio-tau-five-45.vercel.app/).

---

## ✨ Features

- Fully responsive (mobile, tablet, desktop)
- Mobile hamburger menu
- Infinite marquee skill ticker
- Typewriter hero animation
- Scroll-triggered fade-up animations
- Animated skill progress bars
- Spotlight hover on project rows
- Frontend / Backend labelled separately
- Journey section showing career direction
- Contact form with success state
- Subtle dot grid + noise texture background
