import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { company } from "@/data/company";
import Container from "@/components/ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();
  const sections: Array<{ title: string; items: { label: string; href: string }[] }> = [
    { title: "제품", items: footerNav.products },
    { title: "회사", items: footerNav.company },
    { title: "고객지원", items: footerNav.support },
  ];

  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50">
      <Container className="py-12 lg:py-16">
        {/*
          mobile: grid-cols-3 — 회사 정보는 col-span-3로 한 줄, 3개 네비는 한 줄에 가로 배치
          md+: 기존 2열 (회사·제품 / 회사·고객지원)
          lg+: 기존 4열
        */}
        <div className="grid grid-cols-3 gap-x-6 gap-y-10 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          <div className="col-span-3 md:col-span-1">
            <p className="text-lg font-bold text-gray-900">
              {company.name}
              <span className="ml-1 text-sm font-medium text-gray-500">
                {company.nameKo}
              </span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              {company.description}
            </p>
            <dl className="mt-5 space-y-1.5 text-sm text-gray-600">
              <div className="flex gap-2">
                <dt className="text-gray-500">고객센터</dt>
                <dd>{company.contact.phone}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-gray-500">이메일</dt>
                <dd>{company.contact.email}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-gray-500">운영시간</dt>
                <dd>{company.contact.businessHours}</dd>
              </div>
            </dl>
          </div>

          {sections.map((section) => (
            <nav key={section.title} aria-label={section.title}>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                {section.title}
              </p>
              <ul className="mt-4 space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>본 사이트는 데모 목적으로 제작된 재구성 버전입니다.</p>
        </div>
      </Container>
    </footer>
  );
}
