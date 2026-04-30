"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  wordmark: string;
  gradientClass: string;
  durationSec?: number;
  videoSrc?: string;
  posterSrc?: string;
};

type Props = {
  slides: HeroSlide[];
  intervalMs?: number;
};

export default function HeroMediaStage({ slides }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [durations, setDurations] = useState<number[]>(() => slides.map((slide) => slide.durationSec ?? 0));
  const [currentTime, setCurrentTime] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPrefersReducedMotion(mediaQuery.matches);
    sync();
    mediaQuery.addEventListener("change", sync);
    return () => mediaQuery.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      const isActive = index === activeIndex;

      if (!isActive) {
        video.pause();
        video.currentTime = 0;
        return;
      }

      if (prefersReducedMotion) {
        video.pause();
        return;
      }

      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => undefined);
      }
    });
  }, [activeIndex, prefersReducedMotion]);

  useEffect(() => {
    const activeVideo = videoRefs.current[activeIndex];
    if (!activeVideo) return;

    const syncTime = () => setCurrentTime(activeVideo.currentTime || 0);
    const syncDuration = () => {
      const nextDuration = Number.isFinite(activeVideo.duration) ? activeVideo.duration : 0;
      setDurations((current) => {
        const next = [...current];
        next[activeIndex] = nextDuration;
        return next;
      });
    };
    const handleEnded = () => {
      setCurrentTime(0);
      setActiveIndex((current) => (current + 1) % slides.length);
    };

    syncTime();
    syncDuration();

    activeVideo.addEventListener("timeupdate", syncTime);
    activeVideo.addEventListener("loadedmetadata", syncDuration);
    activeVideo.addEventListener("ended", handleEnded);

    return () => {
      activeVideo.removeEventListener("timeupdate", syncTime);
      activeVideo.removeEventListener("loadedmetadata", syncDuration);
      activeVideo.removeEventListener("ended", handleEnded);
    };
  }, [activeIndex, slides.length]);

  const activeSlide = slides[activeIndex];
  const statusLabel = useMemo(
    () => `${activeIndex + 1}/${slides.length} ${activeSlide.eyebrow}`,
    [activeIndex, activeSlide.eyebrow, slides.length]
  );

  const safeDurations = useMemo(
    () => durations.map((duration) => (duration > 0 ? duration : 1)),
    [durations]
  );

  const totalDuration = useMemo(
    () => safeDurations.reduce((sum, duration) => sum + duration, 0),
    [safeDurations]
  );

  const elapsedBeforeActive = useMemo(
    () => safeDurations.slice(0, activeIndex).reduce((sum, duration) => sum + duration, 0),
    [activeIndex, safeDurations]
  );

  const clampedCurrentTime = Math.min(currentTime, safeDurations[activeIndex] ?? 0);
  const totalProgress = totalDuration > 0 ? ((elapsedBeforeActive + clampedCurrentTime) / totalDuration) * 100 : 0;

  return (
    <div className="absolute inset-0">
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={[
              "absolute inset-0 transition-opacity duration-700 ease-utility motion-reduce:transition-none",
              isActive ? "opacity-100" : "opacity-0",
            ].join(" ")}
          >
            {slide.videoSrc ? (
              <video
                ref={(node) => {
                  videoRefs.current[index] = node;
                }}
                muted
                playsInline
                preload="metadata"
                poster={slide.posterSrc}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={slide.videoSrc} type="video/mp4" />
              </video>
            ) : null}
          </div>
        );
      })}

      <div className="absolute left-5 right-5 top-8 z-20 sm:left-6 sm:right-6 lg:left-8 lg:right-8 lg:top-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <p className="text-xs uppercase tracking-[0.18em] text-white">{statusLabel}</p>
            </div>
          </div>

          <div className="max-w-xs">
            <p className="display-kicker text-[11px] font-semibold text-white sm:text-xs">
              {activeSlide.eyebrow}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              {activeSlide.description}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-5 right-5 z-20 sm:left-6 sm:right-6 lg:left-8 lg:right-8">
        <div className="relative h-8">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/20" />
          <div
            aria-hidden="true"
            className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-white transition-[width] duration-200 ease-linear"
            style={{ width: `${totalProgress}%` }}
          />
          <div className="absolute inset-0 flex">
            {safeDurations.map((duration, index) => {
              const isActive = index === activeIndex;
              const width = totalDuration > 0 ? `${(duration / totalDuration) * 100}%` : `${100 / slides.length}%`;

              return (
                <button
                  key={slides[index].id}
                  type="button"
                  onClick={() => {
                    const video = videoRefs.current[index];
                    if (video) video.currentTime = 0;
                    setCurrentTime(0);
                    setActiveIndex(index);
                  }}
                  className="relative h-full border-l border-white/35 first:border-l-0"
                  style={{ width }}
                  aria-label={`Play slide ${index + 1}: ${slides[index].title}`}
                  aria-pressed={isActive}
                >
                  <span
                    className={[
                      "absolute bottom-0 left-0 text-[10px] uppercase tracking-[0.24em] transition-colors duration-300",
                      isActive ? "text-white/90" : "text-white/50",
                    ].join(" ")}
                  >
                    {slides[index].eyebrow}
                  </span>
                  <span className="sr-only">{slides[index].eyebrow}</span>
                </button>
              );
            })}
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 border-r border-white/35" />
          </div>
        </div>
      </div>
    </div>
  );
}
