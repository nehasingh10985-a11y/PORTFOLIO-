import Reveal from "./Reveal"
import SkillBar from "./SkillBar"
import { FRONTEND_SKILLS, BACKEND_SKILLS, TOOLS, EDUCATION } from "../data"

export default function Skills() {
  return (
    <section id="skills" style={{ padding:"96px 32px" }}>
      <div className="wrap">

        <Reveal>
          <span style={{ fontSize:11, color:"#6366f1", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:14, display:"block" }}>
            Expertise
          </span>
          <h2 className="serif" style={{ fontSize:"clamp(26px,5vw,46px)", fontWeight:700, color:"#f1f5f9", lineHeight:1.15, marginBottom:56 }}>
            Skills
          </h2>
        </Reveal>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"clamp(40px,8vw,72px)" }}>

          {/* ── Skill bars ───────────────── */}
          <div>
            {/* Frontend */}
            <Reveal>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:24 }}>
                <p style={{ fontSize:11, color:"#334155", letterSpacing:"0.08em", textTransform:"uppercase" }}>Frontend</p>
                <span style={{ fontSize:10, padding:"2px 9px", borderRadius:100, background:"rgba(99,102,241,0.1)", border:"1px solid rgba(99,102,241,0.2)", color:"#a5b4fc" }}>
                  Strong ✓
                </span>
              </div>
            </Reveal>
            {FRONTEND_SKILLS.map((s,i) => <SkillBar key={s.name} {...s} delay={i*80} color="#6366f1"/>)}

            {/* Backend */}
            <Reveal delay={100}>
              <div style={{ display:"flex", alignItems:"center", gap:10, margin:"36px 0 24px" }}>
                <p style={{ fontSize:11, color:"#334155", letterSpacing:"0.08em", textTransform:"uppercase" }}>Backend</p>
                <span style={{ fontSize:10, padding:"2px 9px", borderRadius:100, background:"rgba(245,158,11,0.08)", border:"1px solid rgba(245,158,11,0.2)", color:"#fbbf24" }}>
                  Learning →
                </span>
              </div>
            </Reveal>
            {BACKEND_SKILLS.map((s,i) => <SkillBar key={s.name} {...s} delay={i*80+300} color="#f59e0b"/>)}
          </div>

          {/* ── Tools + Education ────────── */}
          <div>
            <Reveal>
              <p style={{ fontSize:11, color:"#334155", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:24 }}>
                Tools &amp; Ecosystem
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(130px,1fr))", gap:8, marginBottom:28 }}>
                {TOOLS.map(t => (
                  <div key={t} style={{
                    padding:"12px 14px", border:"1px solid rgba(255,255,255,0.04)",
                    borderRadius:12, fontSize:13, color:"#4a5568",
                    display:"flex", alignItems:"center", gap:10,
                    transition:"all 0.2s", cursor:"default",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor="rgba(99,102,241,0.22)"; e.currentTarget.style.color="#94a3b8" }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor="rgba(255,255,255,0.04)"; e.currentTarget.style.color="#4a5568" }}>
                    <div style={{ width:4, height:4, borderRadius:"50%", background:"#6366f1", flexShrink:0 }}/>
                    {t}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Currently learning note */}
            <Reveal delay={160}>
              <div style={{ padding:"18px 22px", borderRadius:14, border:"1px solid rgba(245,158,11,0.12)", background:"rgba(245,158,11,0.04)", marginBottom:28 }}>
                <p style={{ fontSize:11, color:"#f59e0b", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:8 }}>Currently Learning</p>
                <p style={{ fontSize:13, color:"#4a5568", lineHeight:1.8, fontWeight:300 }}>
                  Deepening <span style={{ color:"#fbbf24" }}>Node.js & Express.js</span>, advanced <span style={{ color:"#fbbf24" }}>MongoDB</span> patterns, and REST API architecture.
                </p>
              </div>
            </Reveal>

            {/* Education */}
            <Reveal delay={200}>
              <p style={{ fontSize:11, color:"#334155", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:20 }}>Education</p>
              {EDUCATION.map(e => (
                <div key={e.deg} style={{ marginBottom:16, paddingBottom:16, borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:8 }}>
                    <div>
                      <p style={{ fontSize:14, fontWeight:500, color:"#94a3b8" }}>{e.deg} · {e.uni}</p>
                      <p style={{ fontSize:12, color:"#334155", marginTop:4 }}>{e.year}</p>
                    </div>
                    <span style={{ fontSize:11, color:"#6366f1", padding:"3px 10px", border:"1px solid rgba(99,102,241,0.2)", borderRadius:100 }}>
                      {e.score}
                    </span>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
