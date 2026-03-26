import Navbar     from "./components/Navbar"
import Hero       from "./components/Hero"
// import Ticker     from "./components/Ticker"
import Journey    from "./components/Journey"
import Projects   from "./components/Projects"
import Skills     from "./components/Skills"
import Experience from "./components/Experience"
import Contact    from "./components/Contact"
import Footer     from "./components/Footer"

// ─── Thin gradient divider ────────────────────
const Divider = () => (
  <div className="divider" />
)

export default function App() {
  return (
    <div style={{ background:"#07090f", minHeight:"100vh", color:"#e2e8f0" }}>

      {/* ── Fixed navigation ──────────────────── */}
      <Navbar />

      {/* ── Hero / About ──────────────────────── */}
      <Hero />

      {/* ── Infinite skill ticker ─────────────── */}
      {/* <Ticker /> */}

      {/* ── Journey: Frontend→Backend→Fullstack ─ */}
      <Journey />

      <Divider />

      {/* ── Selected Projects ─────────────────── */}
      <Projects />

      <Divider />

      {/* ── Skills & Tools ────────────────────── */}
      <Skills />

      <Divider />

      {/* ── Work Experience ───────────────────── */}
      <Experience />

      <Divider />

      {/* ── Contact form ──────────────────────── */}
      <Contact />

      {/* ── Footer ────────────────────────────── */}
      <Footer />

    </div>
  )
}
