import Reveal from "./Reveal";
import { JOURNEY } from "../data";

export default function Journey() {
  return (
    <section style={{ padding: "40px 32px" }}>
      <div className="wrap">
        <Reveal>
          <span
            style={{
              fontSize: 11,
              color: "#6366f1",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 14,
              display: "block",
            }}
          >
            My Journey
          </span>
          <h2
            className="serif"
            style={{
              fontSize: "clamp(26px,5vw,46px)",
              fontWeight: 700,
              color: "#f1f5f9",
              lineHeight: 1.15,
              marginBottom: 48,
            }}
          >
            Where I am &amp; where I'm going
          </h2>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 16,
          }}
        >
          {JOURNEY.map((j, i) => (
            <Reveal key={j.area} delay={i * 80}>
              <div
                style={{
                  padding: "28px",
                  borderRadius: 16,
                  border: `1px solid ${j.color}22`,
                  background: `${j.color}07`,
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                {/* Top accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg,${j.color},${j.color}44)`,
                  }}
                />

                <div
                  style={{
                    fontSize: 11,
                    color: j.color,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  {j.phase}
                </div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#e2e8f0",
                    marginBottom: 12,
                  }}
                >
                  {j.area}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#4a5568",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  {j.desc}
                </p>
                <div
                  className={j.shimmer ? "animate-shimmer" : ""}
                  style={{
                    marginTop: 16,
                    fontSize: 11,
                    color: j.color,
                    letterSpacing: "0.04em",
                  }}
                >
                  {j.status}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
