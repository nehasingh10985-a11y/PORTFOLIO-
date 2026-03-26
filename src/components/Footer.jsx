import { META } from "../data"

const LINKS = [
  { name:"GitHub",   href:META.github },
  { name:"LinkedIn", href:META.linkedin },
  { name:"Email",    href:`mailto:${META.email}` },
]

export default function Footer() {
  return (
    <footer style={{ borderTop:"1px solid rgba(255,255,255,0.04)", padding:"28px 32px" }}>
      <div className="wrap" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>

        <span style={{ fontSize:14, fontWeight:500, color:"#1e2533" }}>
          Neha<span style={{ color:"#6366f1" }}>.</span>
        </span>

        <span style={{ fontSize:12, color:"#1e2533" }}>
          © 2025 Neha Singh · Built with React &amp; Tailwind
        </span>

        <div style={{ display:"flex", gap:24 }}>
          {LINKS.map(l => (
            <a key={l.name} href={l.href} target="_blank" rel="noreferrer"
              style={{ fontSize:12, color:"#1e2533", textDecoration:"none", transition:"color 0.2s" }}
              onMouseEnter={e => e.target.style.color="#6366f1"}
              onMouseLeave={e => e.target.style.color="#1e2533"}>
              {l.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
