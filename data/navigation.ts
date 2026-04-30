export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: "회사소개", href: "/about" },
  {
    label: "가정용",
    href: "/products/home",
    children: [
      { label: "V7-S", href: "/products/home/v7-s" },
      { label: "V7-B", href: "/products/home/v7-b" },
    ],
  },
  {
    label: "업소용",
    href: "/products/commercial",
    children: [
      { label: "NK-05K", href: "/products/commercial/05k" },
      { label: "NK-15K", href: "/products/commercial/15k" },
      { label: "NK-30K", href: "/products/commercial/30k" },
      { label: "NK-50K", href: "/products/commercial/50k" },
      { label: "NK-99K", href: "/products/commercial/99k" },
      { label: "NK-1.0ton", href: "/products/commercial/1-0ton" },
    ],
  },
  {
    label: "수거함",
    href: "/products/containers",
    children: [
      { label: "C120D", href: "/products/containers/c120d" },
      { label: "C240D", href: "/products/containers/c240d" },
      { label: "C700F", href: "/products/containers/c700f" },
      { label: "D1100F", href: "/products/containers/d1100f" },
    ],
  },
  {
    label: "수입 가구",
    href: "/imported-furniture",
    children: [
      { label: "TANNHOF 브랜드 스토리", href: "/imported-furniture#story" },
      { label: "LICHTLINIE 거실", href: "/imported-furniture#lichtlinie" },
      { label: "TAFELWERK 다이닝", href: "/imported-furniture#tafelwerk" },
      { label: "DUNKELRAUM 수납", href: "/imported-furniture#dunkelraum" },
    ],
  },
  { label: "인증·설치사례", href: "/cases" },
  { label: "고객센터", href: "/support" },
];

export const footerNav = {
  products: [
    { label: "가정용", href: "/products/home" },
    { label: "업소용", href: "/products/commercial" },
    { label: "수거함", href: "/products/containers" },
    { label: "수입 가구 (TANNHOF)", href: "/imported-furniture" },
  ],
  company: [
    { label: "회사소개", href: "/about" },
    { label: "인증·설치사례", href: "/cases" },
  ],
  support: [
    { label: "고객센터", href: "/support" },
    { label: "문의하기", href: "/contact" },
  ],
};
