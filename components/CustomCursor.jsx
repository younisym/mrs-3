"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cx = useSpring(x, springConfig);
  const cy = useSpring(y, springConfig);

  const ringX = useSpring(x, { damping: 22, stiffness: 180, mass: 0.7 });
  const ringY = useSpring(y, { damping: 22, stiffness: 180, mass: 0.7 });

  const [variant, setVariant] = useState("default");
  const [visible, setVisible] = useState(false);
  const isTouch = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) {
      isTouch.current = true;
      return;
    }

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const over = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      if (target.closest("a, button, [data-cursor='hover']")) {
        setVariant("hover");
      } else if (target.closest("[data-cursor='view']")) {
        setVariant("view");
      } else {
        setVariant("default");
      }
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [x, y, visible]);

  if (isTouch.current) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
        style={{
          x: cx,
          y: cy,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0
        }}
      >
        <motion.div
          animate={{
            scale: variant === "hover" ? 0.4 : variant === "view" ? 0 : 1
          }}
          transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          className="h-1.5 w-1.5 rounded-full bg-ivory-100"
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0
        }}
      >
        <motion.div
          animate={{
            width: variant === "view" ? 96 : variant === "hover" ? 56 : 32,
            height: variant === "view" ? 96 : variant === "hover" ? 56 : 32,
            borderColor:
              variant === "hover"
                ? "rgba(244,236,208,0.9)"
                : "rgba(244,236,208,0.35)"
          }}
          transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="rounded-full border flex items-center justify-center text-[10px] uppercase tracking-wider-2 text-ivory-100"
        >
          {variant === "view" && <span>View</span>}
        </motion.div>
      </motion.div>
    </>
  );
}
