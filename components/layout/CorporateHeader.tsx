"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";
import { company } from "@/data/company";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

export default function CorporateHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isSolid, setIsSolid] = useState(!isHome);
  const [isDropdownOnDarkSection, setIsDropdownOnDarkSection] = useState(isHome);
  const [progress, setProgress] = useState(0);
  const useDarkDropdown = !isSolid || isDropdownOnDarkSection;

  useEffect(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, [pathname]);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setIsSolid(!isHome || y > 120);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);

      if (!isHome) {
        setIsDropdownOnDarkSection(false);
        return;
      }

      const categories = document.getElementById("categories");
      if (!categories) {
        setIsDropdownOnDarkSection(y <= 120);
        return;
      }

      const darkSectionEnd = categories.offsetTop + categories.offsetHeight;
      setIsDropdownOnDarkSection(y < darkSectionEnd);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  return (
    <header
      className={[
        "sticky top-0 z-40 transition-[background-color,border-color,box-shadow,backdrop-filter,color] duration-700 ease-utility",
        isSolid
          ? "border-b border-black/10 bg-white/92 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur supports-[backdrop-filter]:bg-white/80"
          : "border-b border-white/10 bg-transparent text-white",
      ].join(" ")}
    >
      {!isSolid ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/42 via-black/18 to-transparent"
        />
      ) : null}

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left bg-brand transition-transform duration-200 ease-linear"
        style={{ transform: `scaleX(${progress})` }}
      />

      <Container className="relative flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link href="/" className="flex items-center gap-3" aria-label={`${company.name} 홈으로`}>
          <span
            aria-hidden="true"
            className={[
              "grid h-9 w-9 place-items-center rounded-full border text-sm font-bold transition-colors duration-700 ease-utility",
              isSolid ? "border-brand/20 bg-brand text-white" : "border-white/30 bg-white/12 text-white",
            ].join(" ")}
          >
            P
          </span>
          <span className="leading-none">
            <span
              className={[
                "block text-base font-semibold tracking-[0.18em] transition-colors duration-700 ease-utility sm:text-lg",
                isSolid ? "text-gray-950" : "text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.25)]",
              ].join(" ")}
            >
              {company.name}
            </span>
            <span
              className={[
                "mt-1 block text-[11px] tracking-[0.22em] transition-colors duration-700 ease-utility sm:text-xs",
                isSolid ? "text-gray-500" : "text-white/78",
              ].join(" ")}
            >
              CORPORATE SOLUTIONS
            </span>
          </span>
        </Link>

        <nav aria-label="주 메뉴" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={[
                    "inline-flex items-center px-4 py-3 text-sm font-medium transition-colors duration-500 ease-utility",
                    isSolid ? "text-gray-700 hover:text-brand" : "text-white/90 hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div
                    className="invisible absolute left-0 top-full translate-y-1 pt-2 opacity-0
                      transition-[opacity,transform,visibility] duration-500 ease-utility
                      group-hover:visible group-hover:translate-y-0 group-hover:opacity-100
                      group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100
                      motion-reduce:transition-none motion-reduce:transform-none"
                  >
                    <ul
                      className={[
                        "flex min-w-[220px] items-center gap-1 rounded-2xl p-2 shadow-[0_20px_50px_rgba(15,23,42,0.12)]",
                        useDarkDropdown
                          ? "border border-white/10 bg-slate-950"
                          : "border border-black/10 bg-white",
                      ].join(" ")}
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={[
                              "block whitespace-nowrap rounded-sm px-4 py-2.5 text-sm transition-colors duration-300 ease-utility focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2",
                              useDarkDropdown
                                ? "text-white hover:bg-white/12 hover:text-emerald-200 focus-visible:bg-white/12 focus-visible:text-emerald-200 focus-visible:ring-offset-slate-950"
                                : "text-gray-700 hover:bg-gray-50 hover:text-brand focus-visible:bg-gray-50 focus-visible:text-brand focus-visible:ring-offset-white",
                            ].join(" ")}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant={isSolid ? "primary" : "white"}>
            문의하기
          </Button>
        </div>

        <MobileMenu isSolid={isSolid} />
      </Container>
    </header>
  );
}
