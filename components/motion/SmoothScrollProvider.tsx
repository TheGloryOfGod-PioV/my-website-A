"use client";

// Lenis는 동적 import로 가구 페이지 청크에만 포함됩니다.
// prefers-reduced-motion 사용자에겐 미초기화 → 네이티브 스크롤로 폴백.

import { useEffect } from "react";

type LenisInstance = {
  raf: (time: number) => void;
  destroy: () => void;
};

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis: LenisInstance | null = null;
    let rafId = 0;
    let cancelled = false;

    (async () => {
      const Lenis = (await import("lenis")).default;
      if (cancelled) return;
      lenis = new Lenis({ lerp: 0.1, duration: 1.2 }) as unknown as LenisInstance;

      const raf = (t: number) => {
        lenis?.raf(t);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    })();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
