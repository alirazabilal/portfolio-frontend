import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show cursor on non-touch devices
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      observer.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        animate={{
          x: pos.x - (hovered ? 20 : 6),
          y: pos.y - (hovered ? 20 : 6),
          width: hovered ? 40 : 12,
          height: hovered ? 40 : 12,
          opacity: hovered ? 0.3 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        style={{
          background: "radial-gradient(circle, #00f5d4 0%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-1 h-1 rounded-full bg-cyan"
        animate={{ x: pos.x - 2, y: pos.y - 2 }}
        transition={{ type: "spring", stiffness: 1500, damping: 40, mass: 0.1 }}
      />
    </>
  );
}
