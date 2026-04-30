// Server Component — 'use client' 없음.
// CSS @keyframes(rise-utility / rise-luxury)가 마운트 시 자동 실행되며,
// `prefers-reduced-motion: reduce` 사용자에겐 motion-reduce: 변종으로 즉시 visible.

import { cn } from "@/lib/utils";
import type { Tone } from "@/lib/motion-tokens";

type SplitMode = "word" | "letter";

type Props = {
  children: string;
  tone?: Tone;
  mode?: SplitMode;
  delayMs?: number;
  staggerMs?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
};

export default function SplitText({
  children,
  tone = "utility",
  mode = "word",
  delayMs = 0,
  staggerMs,
  className,
  as: Tag = "span",
}: Props) {
  const animClass = tone === "luxury" ? "animate-rise-luxury" : "animate-rise-utility";
  const defaultStagger = tone === "luxury" ? 120 : 80;
  const stagger = staggerMs ?? defaultStagger;

  const tokens = mode === "letter" ? Array.from(children) : children.split(" ");

  return (
    <Tag className={className} aria-label={children}>
      {tokens.map((t, i) => {
        if (mode === "letter" && t === " ") {
          return (
            <span key={i} aria-hidden="true">
              {" "}
            </span>
          );
        }
        return (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom leading-[1.2]"
          >
            <span
              aria-hidden="true"
              className={cn(
                "inline-block translate-y-full opacity-0 will-change-transform",
                animClass,
                "motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:[animation:none]"
              )}
              style={{
                animationDelay: `${delayMs + i * stagger}ms`,
              }}
            >
              {t}
              {mode === "word" && i < tokens.length - 1 && " "}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
