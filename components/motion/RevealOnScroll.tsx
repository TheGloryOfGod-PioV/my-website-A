"use client";

import { useEffect, useRef, type ElementType } from "react";
import { cn } from "@/lib/utils";
import type { Tone } from "@/lib/motion-tokens";

type Props = {
  children: React.ReactNode;
  delayMs?: number;
  tone?: Tone;
  className?: string;
  as?: ElementType;
  threshold?: number;
};

export default function RevealOnScroll({
  children,
  delayMs = 0,
  tone = "utility",
  className,
  as: Tag = "div",
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.dataset.visible = "true";
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).dataset.visible = "true";
            io.unobserve(e.target);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const dur = tone === "luxury" ? "duration-1400" : "duration-700";
  const ease = tone === "luxury" ? "ease-luxury" : "ease-utility";

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        // group/reveal: 자식들이 group-data-[visible=true]/reveal: 모디파이어로 부모 가시성에 반응 가능
        "group/reveal opacity-0 translate-y-6 transition-[opacity,transform] will-change-transform",
        dur,
        ease,
        "data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0",
        "motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none",
        className
      )}
    >
      {children}
    </Tag>
  );
}
