"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  ariaLabel?: string;
  intro?: React.ReactNode;
};

export default function PinnedHorizontalScroll({ children, ariaLabel, intro }: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const markerRef = useRef<HTMLSpanElement | null>(null);
  const [isPinnedDesktop, setIsPinnedDesktop] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const marker = markerRef.current;

    if (!section || !viewport || !track) return;

    let rafId = 0;
    let pinnedState = false;

    const sync = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const max = Math.max(track.scrollWidth - viewport.clientWidth, 0);
        const shouldPin = window.innerWidth >= 1024 && !reducedMotion && max > 0;

        if (pinnedState !== shouldPin) {
          pinnedState = shouldPin;
          setIsPinnedDesktop(shouldPin);
        }

        if (!shouldPin) {
          section.style.height = "auto";
          track.style.transform = "";
          if (marker) {
            marker.style.transform = "translate(0px, -50%)";
          }
          return;
        }

        section.style.height = `${window.innerHeight + max}px`;

        const rect = section.getBoundingClientRect();
        const traveled = Math.min(Math.max(-rect.top, 0), max);
        const progress = max > 0 ? traveled / max : 0;

        track.style.transform = `translate3d(-${traveled}px, 0, 0)`;

        if (marker) {
          marker.style.transform = `translate(${progress * 72}px, -50%)`;
        }
      });
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  return (
    <section ref={sectionRef} aria-label={ariaLabel} className="relative">
      <div
        className={
          isPinnedDesktop
            ? "sticky top-0 flex h-svh items-center overflow-hidden"
            : "overflow-visible"
        }
        >
        <div ref={viewportRef} className="w-full overflow-hidden">
          {intro ? (
            <div
              data-pinned-intro
              className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden pt-20 lg:block"
            >
              {intro}
            </div>
          ) : null}

          <div
            ref={trackRef}
            className={[
              "flex flex-col gap-6",
              isPinnedDesktop
                ? "lg:flex-row lg:gap-8 lg:pr-8 lg:will-change-transform"
                : "lg:flex-row lg:gap-8",
            ].join(" ")}
          >
            {children}
          </div>

          {isPinnedDesktop ? (
            <div className="mt-8 hidden lg:flex lg:justify-center">
              <div className="relative h-px w-28 bg-white/16">
                <span
                  ref={markerRef}
                  aria-hidden="true"
                  className="absolute top-1/2 block h-2 w-10 -translate-y-1/2 rounded-full bg-emerald-300 transition-transform duration-300 ease-utility"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
