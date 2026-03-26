import { useState } from "react"
import Reveal from "./Reveal"
import { PROJECTS, META } from "../data"

export default function Projects() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects" style={{ padding:"96px 32px" }}>
      <div className="wrap">

        {/* Heading */}
        <Reveal>
          <div style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:56, flexWrap:"wrap", gap:16 }}>
            <div>
              <span style={{ fontSize:11, color:"#6366f1", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:14, display:"block" }}>
                Selected work
              </span>
              <h2 className="serif" style={{ fontSize:"clamp(26px,5vw,46px)", fontWeight:700, color:"#f1f5f9", lineHeight:1.15 }}>
                Projects
              </h2>
            </div>
            <a href={META.github} target="_blank" rel="noreferrer" style={{
              fontSize:12, color:"#334155", textDecoration:"none",
              borderBottom:"1px solid #12192a", paddingBottom:2, transition:"color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color="#6366f1"}
              onMouseLeave={e => e.target.style.color="#334155"}>
              GitHub →
            </a>
          </div>
        </Reveal>

        {/* Project rows */}
        {PROJECTS.map((p,i) => (
          <Reveal key={p.title} delay={i*50}>
            <div
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => window.open(p.link,"_blank")}
              style={{
                padding:"clamp(20px,4vw,34px) 0",
                borderBottom:"1px solid rgba(255,255,255,0.035)",
                display:"grid",
                gridTemplateColumns:"44px 1fr 20px",
                gap:"clamp(16px,3vw,28px)",
                alignItems:"start",
                cursor:"pointer",
                opacity: hovered===null||hovered===i ? 1 : 0.28,
                transition:"opacity 0.25s",
              }}
            >
              {/* Number */}
              <span style={{ fontSize:11, color:"#1e2533", paddingTop:3, letterSpacing:"0.06em", fontWeight:500 }}>
                {p.num}
              </span>

              {/* Content */}
              <div>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10, flexWrap:"wrap" }}>
                  <h3 style={{ fontSize:"clamp(15px,2.5vw,18px)", fontWeight:500, color:hovered===i?"#a5b4fc":"#e2e8f0", transition:"color 0.2s" }}>
                    {p.title}
                  </h3>
                  <span style={{ fontSize:10, padding:"2px 10px", borderRadius:100, background:`${p.badgeColor}15`, border:`1px solid ${p.badgeColor}30`, color:p.badgeColor, letterSpacing:"0.05em" }}>
                    {p.badge}
                  </span>
                  <span style={{ fontSize:11, color:"#2d3748", letterSpacing:"0.04em" }}>
                    {p.category}
                  </span>
                </div>
                <p style={{ fontSize:13, color:"#4a5568", lineHeight:1.85, maxWidth:580, marginBottom:14, fontWeight:300 }}>
                  {p.desc}
                </p>
                <div style={{ display:"flex", gap:7, flexWrap:"wrap" }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontSize:11, padding:"3px 11px", borderRadius:100, border:"1px solid rgba(255,255,255,0.055)", color:"#334155", letterSpacing:"0.04em" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div style={{ paddingTop:3, transition:"transform 0.2s, opacity 0.2s", transform:hovered===i?"translate(3px,-3px)":"none", opacity:hovered===i?1:0.2 }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={hovered===i?"#6366f1":"#94a3b8"} strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
