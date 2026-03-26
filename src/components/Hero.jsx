import Reveal from "./Reveal"
import useTypewriter from "../hooks/useTypewriter"
import { META, TITLES, STATS } from "../data"

export default function Hero() {
  const typed = useTypewriter(TITLES)

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" })

  const chips = [
    { label:"Frontend — Strong ✓",           bg:"rgba(99,102,241,0.08)",  border:"rgba(99,102,241,0.28)",  color:"#a5b4fc" },
    { label:"Backend — Learning →",          bg:"rgba(245,158,11,0.07)",  border:"rgba(245,158,11,0.28)",  color:"#fbbf24" },
    { label:"Goal: Full-Stack Dev (MERN)",    bg:"rgba(52,211,153,0.07)",  border:"rgba(52,211,153,0.22)",  color:"#6ee7b7" },
  ]

  return (
    <section id="about" style={{
      minHeight:"100vh", display:"flex", alignItems:"center",
      padding:"0 32px", position:"relative", overflow:"hidden",
    }}>

      {/* ── Background glows ──────────────────── */}
      <div style={{
        position:"absolute", top:"20%", left:"50%", transform:"translateX(-50%)",
        width:"min(700px,100vw)", height:"min(700px,100vw)",
        background:"radial-gradient(circle,rgba(99,102,241,0.06) 0%,transparent 68%)",
        pointerEvents:"none",
      }}/>
      <div style={{
        position:"absolute", bottom:"10%", right:"0",
        width:280, height:280,
        background:"radial-gradient(circle,rgba(56,189,248,0.045) 0%,transparent 70%)",
        pointerEvents:"none",
      }}/>
      {/* Subtle dot grid */}
      <div style={{
        position:"absolute", inset:0, pointerEvents:"none",
        backgroundImage:"radial-gradient(circle, rgba(99,102,241,0.08) 1px, transparent 1px)",
        backgroundSize:"40px 40px",
        maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
      }}/>

      <div className="wrap" style={{ width:"100%", paddingTop:110, paddingBottom:70 }}>

        {/* Available badge */}
        <Reveal>
          <div style={{
            display:"inline-flex", alignItems:"center", gap:8,
            padding:"6px 16px", borderRadius:100,
            border:"1px solid rgba(99,102,241,0.18)",
            background:"rgba(99,102,241,0.06)", marginBottom:40,
          }}>
            <div className="animate-pulse-dot" style={{ width:6, height:6, borderRadius:"50%", background:"#34d399" }}/>
            <span style={{ fontSize:12, color:"#94a3b8", letterSpacing:"0.04em" }}>{META.badge}</span>
          </div>
        </Reveal>

        {/* Name */}
        <Reveal delay={60}>
          <h1 className="serif" style={{
            fontSize:"clamp(36px,7vw,78px)", fontWeight:700,
            lineHeight:1.08, color:"#f1f5f9", marginBottom:16,
          }}>
            Hi, I'm {META.name}
          </h1>
        </Reveal>

        {/* Typewriter */}
        <Reveal delay={120}>
          <div style={{
            fontSize:"clamp(16px,2.5vw,24px)", color:"#6366f1",
            fontWeight:300, minHeight:34, display:"flex", alignItems:"center",
            gap:3, marginBottom:24,
          }}>
            <span>{typed}</span>
            <span className="animate-blink" style={{
              width:2, height:26, background:"#6366f1",
              borderRadius:1, display:"inline-block",
            }}/>
          </div>
        </Reveal>

        {/* Bio */}
        <Reveal delay={180}>
          <p style={{
            fontSize:"clamp(14px,1.5vw,15px)", color:"#4a5568",
            lineHeight:1.95, maxWidth:520, marginBottom:24, fontWeight:300,
          }}>
            {META.bio}
          </p>
        </Reveal>

        {/* Positioning chips */}
        <Reveal delay={220}>
          <div style={{ display:"flex", gap:8, marginBottom:40, flexWrap:"wrap" }}>
            {chips.map(c => (
              <span key={c.label} style={{
                fontSize:11, padding:"6px 14px", borderRadius:100,
                border:`1px solid ${c.border}`, background:c.bg, color:c.color,
                letterSpacing:"0.03em",
              }}>
                {c.label}
              </span>
            ))}
          </div>
        </Reveal>

        {/* CTA buttons */}
        <Reveal delay={280}>
          <div style={{ display:"flex", gap:12, marginBottom:64, flexWrap:"wrap" }}>
            <button onClick={() => go("projects")} style={{
              padding:"13px 32px", borderRadius:100, border:"none",
              background:"linear-gradient(135deg,#6366f1,#818cf8)",
              color:"#fff", fontSize:14, fontWeight:500, cursor:"pointer", transition:"opacity 0.2s",
            }}
              onMouseEnter={e => e.target.style.opacity="0.82"}
              onMouseLeave={e => e.target.style.opacity="1"}>
              View projects
            </button>
            <button onClick={() => go("contact")} style={{
              padding:"13px 32px", borderRadius:100,
              border:"1px solid rgba(255,255,255,0.07)",
              background:"none", color:"#94a3b8", fontSize:14, cursor:"pointer", transition:"all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.15)"; e.currentTarget.style.color="#e2e8f0" }}
              onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.07)"; e.currentTarget.style.color="#94a3b8" }}>
              Get in touch
            </button>
          </div>
        </Reveal>

        {/* Stats */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(4,auto)",
          gap:"clamp(20px,5vw,40px)",
          width:"fit-content",
        }}>
          {STATS.map((s,i) => (
            <Reveal key={s.label} delay={340 + i*60}>
              <div>
                <div className="serif" style={{ fontSize:"clamp(22px,4vw,28px)", fontWeight:700, color:"#e2e8f0", lineHeight:1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize:11, color:"#334155", marginTop:7, letterSpacing:"0.04em" }}>
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div style={{
        position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)",
        display:"flex", flexDirection:"column", alignItems:"center", gap:6,
      }}>
        <span style={{ fontSize:10, color:"#1e2533", letterSpacing:"0.1em", textTransform:"uppercase" }}>scroll</span>
        <div style={{ width:1, height:40, background:"linear-gradient(#6366f1,transparent)" }}/>
      </div>
    </section>
  )
}
