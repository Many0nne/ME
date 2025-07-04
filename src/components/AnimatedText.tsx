import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import type { AnimatedTextProps } from "../core/theme/types";

export default function AnimatedText({ children, className = "", delay = 0 }: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const split = new SplitType(ref.current, { types: "chars" });
    gsap.set(split.chars, { opacity: 0 });
    gsap.to(split.chars, {
      opacity: 1,
      color: "#7df14a",
      textShadow: "0 0 8px #7df14a",
      duration: 0.03,
      stagger: 0.03,
      ease: "steps(1)",
      delay
    });
    return () => {
      split.revert && split.revert();
    };
  }, [children, delay]);

  return (
    <span ref={ref} className={className} style={{ display: "inline-block" }}>
      {children}
    </span>
  );
}
