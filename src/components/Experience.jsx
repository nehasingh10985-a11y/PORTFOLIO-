import Reveal from "./Reveal"
import { EXPERIENCE } from "../data"

export default function Experience() {
  return (
    <section style={{ padding:"72px 32px" }}>
      <div className="wrap">

        <Reveal>
          <span style={{ fontSize:11, color:"#6366f1", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:14, display:"block" }}>
            Experience
          </span>
          <h2 className="serif" style={{ fontSize:"clamp(26px,5vw,46px)", fontWeight:700, color:"#f1f5f9", lineHeight:1.15, marginBottom:48 }}>
            Work
          </h2>
        </Reveal>

        {EXPERIENCE.map((exp) => (
          <Reveal key={exp.role} delay={80}>
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
              gap:"clamp(20px,5vw,60px)",
              alignItems:"start",
              padding:"32px",
              border:"1px solid rgba(255,255,255,0.04)",
              borderRadius:16,
              background:"rgba(255,255,255,0.015)",
            }}>
              {/* Role info */}
              <div>
                <p style={{ fontSize:16, fontWeight:500, color:"#e2e8f0", marginBottom:8 }}>{exp.role}</p>
                <p style={{ fontSize:13, color:"#6366f1", marginBottom:6 }}>{exp.company} · {exp.type}</p>
                <span style={{ fontSize:11, padding:"3px 10px", borderRadius:100, border:"1px solid rgba(99,102,241,0.2)", color:"#6366f1" }}>
                  {exp.period}
                </span>
              </div>

              {/* Bullet points */}
              <ul style={{ listStyle:"none", padding:0, display:"flex", flexDirection:"column", gap:14 }}>
                {exp.points.map((point,i) => (
                  <li key={i} style={{ fontSize:13, color:"#4a5568", lineHeight:1.8, fontWeight:300, display:"flex", gap:12 }}>
                    <span style={{ color:"#6366f1", flexShrink:0, marginTop:1 }}>–</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
