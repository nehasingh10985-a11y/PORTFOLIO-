import { useEffect, useState } from "react"

const LINKS = ["about","projects","skills","contact"]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth" })
    setMenuOpen(false)
  }

  return (
    <>
      <nav style={{
        position:"fixed", top:0, width:"100%", zIndex:100,
        background: scrolled ? "rgba(7,9,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "none",
        transition:"all 0.3s",
      }}>
        <div style={{ maxWidth:1080, margin:"0 auto", padding:"20px 32px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>

          {/* Logo */}
          <span style={{ fontWeight:500, fontSize:15, color:"#e2e8f0", letterSpacing:"0.01em", cursor:"pointer" }}
            onClick={() => go("about")}>
            Neha<span style={{ color:"#6366f1" }}>.</span>
          </span>

          {/* Desktop links */}
          <div className="hide-mobile" style={{ display:"flex", alignItems:"center", gap:32 }}>
            {LINKS.map(n => (
              <button key={n} onClick={() => go(n)} style={{
                background:"none", border:"none", cursor:"pointer",
                fontSize:13, color:"#475569", textTransform:"capitalize",
                transition:"color 0.2s", letterSpacing:"0.02em",
              }}
                onMouseEnter={e => e.target.style.color="#e2e8f0"}
                onMouseLeave={e => e.target.style.color="#475569"}>
                {n}
              </button>
            ))}
            <button onClick={() => go("contact")} style={{
              background:"none", border:"1px solid rgba(99,102,241,0.35)", borderRadius:100,
              padding:"8px 22px", fontSize:13, color:"#a5b4fc", cursor:"pointer", transition:"all 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background="rgba(99,102,241,0.1)"}
              onMouseLeave={e => e.currentTarget.style.background="none"}>
              Hire me
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{ background:"none", border:"none", cursor:"pointer", padding:4, display:"none" }}
            className="hide-mobile"
          />
          <button
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background:"none", border:"none", cursor:"pointer", padding:4,
              display:"none",
            }}
            // shown via inline media query override in App.jsx wrapper
            id="hamburger"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div style={{
            background:"rgba(7,9,15,0.98)", borderTop:"1px solid rgba(255,255,255,0.04)",
            padding:"20px 32px 28px",
          }}>
            {LINKS.map(n => (
              <button key={n} onClick={() => go(n)} style={{
                display:"block", width:"100%", textAlign:"left",
                background:"none", border:"none", cursor:"pointer",
                fontSize:16, color:"#94a3b8", textTransform:"capitalize",
                padding:"12px 0", borderBottom:"1px solid rgba(255,255,255,0.04)",
                transition:"color 0.2s",
              }}
                onMouseEnter={e => e.target.style.color="#e2e8f0"}
                onMouseLeave={e => e.target.style.color="#94a3b8"}>
                {n}
              </button>
            ))}
            <button onClick={() => go("contact")} style={{
              marginTop:20, width:"100%", padding:"13px", borderRadius:100,
              border:"1px solid rgba(99,102,241,0.35)", background:"none",
              fontSize:14, color:"#a5b4fc", cursor:"pointer",
            }}>
              Hire me
            </button>
          </div>
        )}
      </nav>

      {/* CSS to show hamburger on mobile */}
      <style>{`
        @media (max-width:768px) {
          #hamburger { display:block !important; }
        }
      `}</style>
    </>
  )
}
