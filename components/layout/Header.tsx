import Link from "next/link";
import { mainNav } from "@/data/navigation";
import { company } from "@/data/company";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2" aria-label={`${company.nameKo} 홈으로`}>
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-md bg-brand font-bold text-white"
          >
            E
          </span>
          <span className="text-lg font-bold tracking-tight text-gray-900">
            {company.name}
            <span className="ml-1 text-sm font-medium text-gray-500">{company.nameKo}</span>
          </span>
        </Link>

        <nav aria-label="주 메뉴" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="inline-block px-3 py-2 text-sm font-medium text-gray-700 hover:text-brand"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div
                    className="invisible absolute left-0 top-full pt-2 opacity-0 translate-y-1
                      transition-[opacity,transform,visibility] duration-200 ease-utility
                      group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                      group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0
                      motion-reduce:transition-none motion-reduce:transform-none"
                  >
                    <ul className="min-w-[180px] rounded-md border border-gray-200 bg-white py-2 shadow-sm">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand"
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
          <Button href="/contact">문의하기</Button>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
