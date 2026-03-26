import useInView from "../hooks/useInView";

export default function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        transition: `opacity 0.65s ${delay}ms, transform 0.65s ${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(22px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
