import { TICKER } from "../data"

// Duplicate items for seamless infinite scroll
const ITEMS = [...TICKER, ...TICKER]

export default function Ticker() {
  return (
    <div style={{
      overflow:"hidden",
      borderTop:"1px solid rgba(255,255,255,0.04)",
      borderBottom:"1px solid rgba(255,255,255,0.04)",
      padding:"14px 0",
      position:"relative",
    }}>
      {/* Fade edges */}
      <div style={{
        position:"absolute", left:0, top:0, bottom:0, width:80,
        background:"linear-gradient(90deg,#07090f,transparent)",
        zIndex:2, pointerEvents:"none",
      }}/>
      <div style={{
        position:"absolute", right:0, top:0, bottom:0, width:80,
        background:"linear-gradient(-90deg,#07090f,transparent)",
        zIndex:2, pointerEvents:"none",
      }}/>

      <div className="animate-marquee" style={{ display:"flex", gap:0, whiteSpace:"nowrap" }}>
        {ITEMS.map((item, i) => (
          <span key={i} style={{ display:"inline-flex", alignItems:"center", gap:16, padding:"0 24px" }}>
            <span style={{ fontSize:12, color:"#334155", letterSpacing:"0.08em", textTransform:"uppercase" }}>
              {item}
            </span>
            <span style={{ width:3, height:3, borderRadius:"50%", background:"#6366f1", flexShrink:0 }}/>
          </span>
        ))}
      </div>
    </div>
  )
}
