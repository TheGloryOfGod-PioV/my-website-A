"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { mainNav } from "@/data/navigation";
import Button from "@/components/ui/Button";

type Props = {
  isSolid?: boolean;
};

export default function MobileMenu({ isSolid = true }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const panel = (
    <div
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="주 메뉴"
      aria-hidden={!open}
      className={`fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-white transition-opacity duration-200 ease-utility lg:hidden
        ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
        motion-reduce:transition-none`}
    >
      <nav className="px-5 pb-10 pt-4">
        <ul className="divide-y divide-gray-100">
          {mainNav.map((item) => (
            <li key={item.href} className="py-2">
              <Link
                href={item.href}
                className="block py-2 text-base font-semibold text-gray-900 hover:text-brand"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="ml-3 border-l border-gray-200 pl-4">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block py-1.5 text-sm text-gray-600 hover:text-brand"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Button href="/contact" size="lg" className="w-full" onClick={() => setOpen(false)}>
            문의하기
          </Button>
        </div>
      </nav>
    </div>
  );

  return (
    <>
      <button
        type="button"
        className={[
          "relative z-50 inline-flex items-center justify-center rounded-md p-2 transition-colors duration-150 ease-utility active:bg-gray-200 lg:hidden",
          isSolid ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10",
        ].join(" ")}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
        onClick={() => setOpen((v) => !v)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          ) : (
            <>
              <path d="M4 7h16" strokeLinecap="round" />
              <path d="M4 12h16" strokeLinecap="round" />
              <path d="M4 17h16" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>

      {mounted ? createPortal(panel, document.body) : null}
    </>
  );
}
