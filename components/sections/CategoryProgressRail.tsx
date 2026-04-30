"use client";

import { useEffect, useState } from "react";

type Item = {
  id: string;
  eyebrow: string;
  index: string;
};

type Props = {
  items: Item[];
  sectionId: string;
};

export default function CategoryProgressRail({ items, sectionId }: Props) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const panels = Array.from(document.querySelectorAll<HTMLElement>("[data-category-panel]"));
    const section = document.getElementById(sectionId);
    if (!section || !panels.length) return;

    const panelObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target instanceof HTMLElement) {
          setActiveId(visible.target.dataset.categoryId ?? "");
        }
      },
      {
        threshold: [0.35, 0.5, 0.7],
        rootMargin: "-15% 0px -15% 0px",
      }
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsSectionVisible(Boolean(entry?.isIntersecting));
      },
      {
        threshold: 0.05,
      }
    );

    panels.forEach((panel) => panelObserver.observe(panel));
    sectionObserver.observe(section);

    return () => {
      panelObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [sectionId]);

  return (
    <div
      className={[
        "pointer-events-none fixed right-8 top-1/2 z-20 hidden -translate-y-1/2 transition-opacity duration-500 ease-utility lg:flex lg:flex-col lg:items-end lg:gap-4",
        isSectionVisible ? "opacity-100" : "opacity-0",
      ].join(" ")}
      aria-hidden="true"
    >
      <div className="flex flex-col gap-3 border-r border-white/22 pr-4">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <div key={item.id} className="flex items-center gap-3">
              <span
                className={[
                  "block h-px w-10 origin-right transition-[transform,background-color,opacity] duration-700 ease-utility",
                  isActive ? "scale-x-100 bg-emerald-300 opacity-100" : "scale-x-50 bg-white/55 opacity-75",
                ].join(" ")}
              />
              <div className="min-w-[112px] text-right">
                <p className={["text-[11px] uppercase tracking-[0.22em]", isActive ? "text-white/95" : "text-white/72"].join(" ")}>
                  {item.index}
                </p>
                <p className={["mt-1 text-xs tracking-[0.14em]", isActive ? "text-white/88" : "text-white/62"].join(" ")}>
                  {item.eyebrow}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
