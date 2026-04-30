"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  durationMs?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

export default function CountUp({
  to,
  durationMs = 1400,
  suffix = "",
  prefix = "",
  className,
}: Props) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / durationMs, 1);
            const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
            setVal(Math.round(eased * to));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
          break;
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, durationMs]);

  return (
    <span
      ref={ref}
      className={className}
      aria-label={`${prefix}${to}${suffix}`}
    >
      {prefix}
      {val}
      {suffix}
    </span>
  );
}
