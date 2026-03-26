import { useState } from "react"
import Reveal from "./Reveal"
import { META } from "../data"

const CONTACT_LINKS = [
  { label:"Email",    val:META.email,                    href:`mailto:${META.email}` },
  { label:"Phone",    val:META.phone,                    href:`tel:${META.phone.replace(/\s/g,"")}` },
  { label:"LinkedIn", val:"neha-singh-aa436324b",        href:META.linkedin },
  { label:"GitHub",   val:"nehasingh10985-a11y",         href:META.github },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" })

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    // In production, connect to EmailJS / Formspree / your own API
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name:"", email:"", subject:"", message:"" })
  }

  const inputStyle = {
    width:"100%", padding:"12px 15px", borderRadius:10,
    border:"1px solid rgba(255,255,255,0.06)",
    background:"rgba(255,255,255,0.02)",
    color:"#e2e8f0", fontSize:13, transition:"border 0.2s",
  }

  return (
    <section id="contact" style={{ padding:"96px 32px" }}>
      <div className="wrap">

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
          gap:"clamp(40px,8vw,80px)",
          alignItems:"start",
        }}>

          {/* ── Left: info ─────────────────── */}
          <Reveal>
            <span style={{ fontSize:11, color:"#6366f1", letterSpacing:"0.14em", textTransform:"uppercase", marginBottom:14, display:"block" }}>
              Let's connect
            </span>
            <h2 className="serif" style={{ fontSize:"clamp(26px,5vw,46px)", fontWeight:700, color:"#f1f5f9", lineHeight:1.15, marginBottom:20 }}>
              Looking for a<br/>Frontend Dev?
            </h2>
            <p style={{ fontSize:14, color:"#4a5568", lineHeight:1.95, marginBottom:44, fontWeight:300, maxWidth:380 }}>
              I'm actively looking for entry-level Frontend or Full-Stack Developer roles. Strong React skills, growing backend knowledge — ready to contribute and learn fast.
            </p>

            {/* Contact links */}
            <div>
              {CONTACT_LINKS.map(item => (
                <div key={item.label} style={{
                  display:"flex", justifyContent:"space-between", alignItems:"center",
                  padding:"16px 0", borderBottom:"1px solid rgba(255,255,255,0.04)",
                }}>
                  <span style={{ fontSize:11, color:"#334155", letterSpacing:"0.05em", textTransform:"uppercase" }}>
                    {item.label}
                  </span>
                  <a href={item.href} target="_blank" rel="noreferrer" style={{
                    fontSize:13, color:"#64748b", textDecoration:"none", transition:"color 0.2s",
                    wordBreak:"break-all", textAlign:"right", maxWidth:"60%",
                  }}
                    onMouseEnter={e => e.target.style.color="#a5b4fc"}
                    onMouseLeave={e => e.target.style.color="#64748b"}>
                    {item.val}
                  </a>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── Right: form ────────────────── */}
          <Reveal delay={100}>
            <div style={{
              background:"rgba(255,255,255,0.018)",
              border:"1px solid rgba(255,255,255,0.05)",
              borderRadius:20, padding:"clamp(24px,5vw,36px)",
            }}>
              {sent ? (
                <div style={{ textAlign:"center", padding:"60px 0" }}>
                  <div style={{ fontSize:32, marginBottom:16 }}>✓</div>
                  <p style={{ fontSize:14, color:"#94a3b8" }}>Message sent! I'll reply within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))", gap:14, marginBottom:14 }}>
                    {[["name","Your name"],["email","Email address"]].map(([k,ph]) => (
                      <div key={k}>
                        <label style={{ display:"block", fontSize:11, color:"#334155", letterSpacing:"0.07em", textTransform:"uppercase", marginBottom:9 }}>
                          {k==="name"?"Name":"Email"}
                        </label>
                        <input name={k} value={form[k]} onChange={handleChange} placeholder={ph} style={inputStyle}/>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom:14 }}>
                    <label style={{ display:"block", fontSize:11, color:"#334155", letterSpacing:"0.07em", textTransform:"uppercase", marginBottom:9 }}>
                      Subject
                    </label>
                    <input name="subject" value={form.subject} onChange={handleChange} placeholder="Job opportunity / Internship" style={inputStyle}/>
                  </div>

                  <div style={{ marginBottom:24 }}>
                    <label style={{ display:"block", fontSize:11, color:"#334155", letterSpacing:"0.07em", textTransform:"uppercase", marginBottom:9 }}>
                      Message
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                      placeholder="Hi Neha, I'd like to discuss..."
                      style={{ ...inputStyle, resize:"none" }}/>
                  </div>

                  <button onClick={handleSubmit} style={{
                    width:"100%", padding:"14px", borderRadius:12, border:"none",
                    background:"linear-gradient(135deg,#6366f1,#818cf8)",
                    color:"#fff", fontSize:14, fontWeight:500, cursor:"pointer", transition:"opacity 0.2s",
                    letterSpacing:"0.02em",
                  }}
                    onMouseEnter={e => e.target.style.opacity="0.82"}
                    onMouseLeave={e => e.target.style.opacity="1"}>
                    Send message →
                  </button>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
