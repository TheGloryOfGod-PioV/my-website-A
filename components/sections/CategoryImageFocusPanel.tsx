"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

type Scene = {
  label: string;
  caption: string;
  tint: string;
};

type Props = {
  id: string;
  categoryId: string;
  index: string;
  eyebrow: string;
  statement: string;
  description: string;
  title: string;
  subtitle: string;
  href: string;
  palette: string;
  scenes: Scene[];
};

const fanTransforms = [
  { x: -18, y: 8, rotate: -11, scale: 0.88 },
  { x: 0, y: -4, rotate: 0, scale: 0.93 },
  { x: 18, y: 8, rotate: 11, scale: 0.88 },
];

export default function CategoryImageFocusPanel({
  id,
  categoryId,
  index,
  eyebrow,
  statement,
  description,
  title,
  subtitle,
  href,
  palette,
  scenes,
}: Props) {
  const panelRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReducedMotion(mediaQuery.matches);
    syncMotion();
    mediaQuery.addEventListener("change", syncMotion);
    return () => mediaQuery.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel || reducedMotion) return;

    let rafId = 0;

    const sync = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = panel.getBoundingClientRect();
        const maxTravel = Math.max(rect.height - window.innerHeight, 1);
        const next = Math.min(Math.max(-rect.top / maxTravel, 0), 1);
        setProgress(next);
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
  }, [reducedMotion]);

  const activeIndex = useMemo(() => {
    if (reducedMotion) return 2;
    if (progress < 0.22) return -1;
    if (progress < 0.46) return 0;
    if (progress < 0.7) return 1;
    return 2;
  }, [progress, reducedMotion]);

  const sequenceProgress = Math.min(Math.max((progress - 0.18) / 0.68, 0), 1);

  return (
    <article
      ref={panelRef}
      id={id}
      data-category-panel
      data-category-id={categoryId}
      className={`relative min-h-[360svh] border-b border-white/10 bg-gradient-to-br ${palette}`}
    >
      <div className="sticky top-0 flex min-h-svh items-end overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.12),transparent_20%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_40%)] animate-hero-drift motion-reduce:animate-none"
        />
        <div
          aria-hidden="true"
          className="absolute right-[4vw] top-[8vh] text-[20vw] font-black tracking-[-0.08em] text-white/[0.05]"
        >
          {index}
        </div>

        <div className="relative mx-auto grid w-full max-w-content gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-end lg:px-8 lg:py-20">
          <div className="z-20">
            <RevealOnScroll as="div" tone="utility" className="self-start">
              <p className="display-kicker text-xs font-semibold text-emerald-200 sm:text-sm">{eyebrow}</p>
              <p className="mt-6 text-sm font-medium tracking-[0.18em] text-white/40">{index}</p>
            </RevealOnScroll>

            <RevealOnScroll as="div" tone="utility" delayMs={80} className="mt-10 max-w-4xl">
              <h3 className="text-4xl font-black leading-[1] tracking-[-0.05em] text-balance sm:text-5xl lg:text-[4.25rem]">
                {statement}
              </h3>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/68 sm:text-lg">
                {description}
              </p>
              <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-2 text-sm text-white/56">{subtitle}</p>
                </div>
                <Link
                  href={href}
                  className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-emerald-200 transition-colors duration-500 ease-utility hover:text-white"
                >
                  상세 보기
                  <span aria-hidden="true" className="text-base">
                    →
                  </span>
                </Link>
              </div>
            </RevealOnScroll>
          </div>

          <div className="relative z-10 min-h-[54svh] lg:min-h-[72svh]">
            <div className="absolute inset-0 rounded-[2rem] border border-emerald-200/10 bg-emerald-400/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_40px_120px_rgba(0,0,0,0.32)]" />
            <div className="absolute inset-4 overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(16,185,129,0.36),rgba(5,150,105,0.08)_42%,rgba(2,6,23,0.3))]">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-8">
              <div className="relative h-[min(62svh,620px)] w-full max-w-[820px]">
                {scenes.map((scene, sceneIndex) => {
                  const isActive = activeIndex === sceneIndex;
                  const hasPassed = activeIndex > sceneIndex;
                  const fan = fanTransforms[sceneIndex];
                  const zIndex = isActive ? 30 : hasPassed ? 10 + sceneIndex : 20 + sceneIndex;
                  const baseOpacity = activeIndex < 0 ? 1 : isActive ? 1 : 0.58;
                  const transform =
                    activeIndex < 0
                      ? `translate(-50%, -50%) translate(${fan.x}%, ${fan.y}%) rotate(${fan.rotate}deg) scale(${fan.scale})`
                      : isActive
                        ? "translate(-50%, -50%) translate(0%, -2%) rotate(0deg) scale(1)"
                        : hasPassed
                          ? `translate(-50%, -50%) translate(${34 + sceneIndex * 4}%, ${10 + sceneIndex * 6}%) rotate(${8 + sceneIndex * 3}deg) scale(0.74)`
                          : `translate(-50%, -50%) translate(${-28 - sceneIndex * 5}%, ${12 + sceneIndex * 3}%) rotate(${-9 - sceneIndex * 3}deg) scale(0.78)`;

                  return (
                    <figure
                      key={scene.label}
                      className={[
                        "absolute left-1/2 top-1/2 aspect-[4/3] w-[76%] overflow-hidden rounded-[1.25rem] border border-white/18 bg-slate-900 shadow-[0_34px_90px_rgba(0,0,0,0.42)]",
                        "transition-[opacity,transform,filter] duration-700 ease-utility motion-reduce:transition-none",
                        isActive ? "brightness-105" : "brightness-75",
                      ].join(" ")}
                      style={{
                        zIndex,
                        opacity: baseOpacity,
                        transform,
                        filter: isActive ? "saturate(1.08)" : "saturate(0.82)",
                      }}
                    >
                      <div className={`absolute inset-0 ${scene.tint}`} />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_22%,rgba(255,255,255,0.34),transparent_18%),linear-gradient(135deg,rgba(255,255,255,0.18),transparent_36%)]" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/88 to-transparent p-5 sm:p-7">
                        <figcaption className="text-lg font-bold tracking-tight text-white sm:text-2xl">
                          {scene.label}
                        </figcaption>
                        <p className="mt-2 max-w-md text-xs leading-relaxed text-white/68 sm:text-sm">
                          {scene.caption}
                        </p>
                      </div>
                    </figure>
                  );
                })}
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 z-40 flex w-40 -translate-x-1/2 items-center gap-2">
              {scenes.map((scene, sceneIndex) => (
                <span
                  key={scene.label}
                  className={[
                    "h-1 flex-1 rounded-full transition-colors duration-500 ease-utility",
                    activeIndex >= sceneIndex ? "bg-emerald-200" : "bg-white/18",
                  ].join(" ")}
                />
              ))}
            </div>
            <div
              aria-hidden="true"
              className="absolute bottom-4 right-5 hidden text-[11px] font-medium uppercase tracking-[0.18em] text-white/42 sm:block"
            >
              {Math.round(sequenceProgress * 100).toString().padStart(2, "0")} / 100
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
