import useInView from "../hooks/useInView";

export default function SkillBar({
  name,
  level,
  delay = 0,
  color = "#6366f1",
}) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{ marginBottom: 22 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 9,
        }}
      >
        <span style={{ fontSize: 13, color: "#94a3b8" }}>{name}</span>
        <span style={{ fontSize: 11, color: "#334155" }}>{level}%</span>
      </div>
      <div style={{ height: 1, background: "#12192a", position: "relative" }}>
        <div
          style={{
            height: "100%",
            background: `linear-gradient(90deg,${color},${color}88)`,
            width: visible ? `${level}%` : "0%",
            transition: `width 1s ease-out ${delay}ms`,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -3,
              top: -3,
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: color,
            }}
          />
        </div>
      </div>
    </div>
  );
}
