export type ProductCategory = "home" | "commercial" | "containers";

export type Spec = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  category: ProductCategory;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  specs: Spec[];
};

export const categories: Record<
  ProductCategory,
  { title: string; subtitle: string; href: string }
> = {
  home: {
    title: "가정용 음식물처리기",
    subtitle: "주방에 두는 컴팩트한 위생 솔루션",
    href: "/products/home",
  },
  commercial: {
    title: "업소용 음식물처리기",
    subtitle: "음식점·급식·호텔 등 다양한 처리 용량 라인업",
    href: "/products/commercial",
  },
  containers: {
    title: "수거함 / 컨테이너",
    subtitle: "공동주택·상업시설 표준 수거 시스템 대응",
    href: "/products/containers",
  },
};

// 모든 수치는 공개 정보 또는 일반적 사양을 참고한 예시이며,
// 실제 제품 사양은 제조사 확인이 필요합니다. [확인 필요] 표기를 유지하세요.
export const products: Product[] = [
  // ── 가정용
  {
    slug: "v7-s",
    category: "home",
    name: "V7-S",
    tagline: "스탠딩형 가정용 처리기",
    description:
      "주방 한쪽에 세워두는 스탠딩 디자인의 가정용 음식물처리기입니다. 가족 단위 사용에 적합한 표준 용량.",
    highlights: [
      "스탠딩 본체로 설치 자유도",
      "저소음 설계 [확인 필요]",
      "탈취 필터 적용 [확인 필요]",
    ],
    specs: [
      { label: "용도", value: "가정용 (3~4인 가구)" },
      { label: "처리 방식", value: "건조·분쇄 [확인 필요]" },
      { label: "처리 용량", value: "[확인 필요]" },
      { label: "정격 전력", value: "[확인 필요]" },
      { label: "치수 (W×D×H)", value: "[확인 필요]" },
      { label: "설치 위치", value: "주방 내 스탠딩" },
    ],
  },
  {
    slug: "v7-b",
    category: "home",
    name: "V7-B",
    tagline: "빌트인형 가정용 처리기",
    description:
      "싱크대 하부 공간에 통합 설치 가능한 빌트인형 모델. 외관을 정돈하고 동선을 간결하게.",
    highlights: ["빌트인 설치", "싱크대 일체화 디자인", "직배수 연동 [확인 필요]"],
    specs: [
      { label: "용도", value: "가정용 빌트인" },
      { label: "처리 방식", value: "분쇄·배수 [확인 필요]" },
      { label: "처리 용량", value: "[확인 필요]" },
      { label: "정격 전력", value: "[확인 필요]" },
      { label: "치수 (W×D×H)", value: "[확인 필요]" },
      { label: "설치 위치", value: "싱크대 하부" },
    ],
  },

  // ── 업소용 (NK 시리즈)
  ...([
    { suffix: "05k", display: "NK-05K", target: "소규모 음식점·편의점·펜션", capacity: "5kg/회 [확인 필요]" },
    { suffix: "15k", display: "NK-15K", target: "일반 음식점·카페", capacity: "15kg/회 [확인 필요]" },
    { suffix: "30k", display: "NK-30K", target: "중형 음식점·소형 급식", capacity: "30kg/회 [확인 필요]" },
    { suffix: "50k", display: "NK-50K", target: "대형 음식점·구내식당", capacity: "50kg/회 [확인 필요]" },
    { suffix: "99k", display: "NK-99K", target: "단체 급식·호텔", capacity: "99kg/회 [확인 필요]" },
    { suffix: "1-0ton", display: "NK-1.0ton", target: "공장·대형 시설", capacity: "1,000kg/회 [확인 필요]" },
  ] as const).map(
    (m): Product => ({
      slug: m.suffix,
      category: "commercial",
      name: m.display,
      tagline: `${m.target} 대상 업소용 처리기`,
      description: `${m.target}에서 발생하는 음식물쓰레기를 안정적으로 처리하는 ${m.display} 모델입니다.`,
      highlights: [
        "용량별 라인업으로 사업장 규모에 최적 매칭",
        "연속 운전 안정성 [확인 필요]",
        "전국 AS 네트워크",
      ],
      specs: [
        { label: "용도", value: `업소용 (${m.target})` },
        { label: "처리 방식", value: "건조·분쇄·발효 [확인 필요]" },
        { label: "처리 용량", value: m.capacity },
        { label: "정격 전력", value: "[확인 필요]" },
        { label: "치수 (W×D×H)", value: "[확인 필요]" },
        { label: "설치 위치", value: "주방·뒤뜰·기계실" },
      ],
    })
  ),

  // ── 수거함 / 컨테이너
  {
    slug: "c120d",
    category: "containers",
    name: "C120D",
    tagline: "표준 120L 수거함",
    description: "일반 수거 차량 리프팅 시스템에 호환되는 120L 표준 수거함.",
    highlights: ["120L 표준", "리프팅 호환", "내구성 HDPE [확인 필요]"],
    specs: [
      { label: "용량", value: "120L" },
      { label: "재질", value: "HDPE [확인 필요]" },
      { label: "리프팅", value: "표준 호환" },
      { label: "용도", value: "공동주택·상가" },
    ],
  },
  {
    slug: "c240d",
    category: "containers",
    name: "C240D",
    tagline: "표준 240L 수거함",
    description: "다세대·소형 상업시설에서 자주 쓰이는 240L 표준 수거함.",
    highlights: ["240L 표준", "리프팅 호환", "이동 휠 적용"],
    specs: [
      { label: "용량", value: "240L" },
      { label: "재질", value: "HDPE [확인 필요]" },
      { label: "리프팅", value: "표준 호환" },
      { label: "용도", value: "다세대·소형 상가" },
    ],
  },
  {
    slug: "c700f",
    category: "containers",
    name: "C700F",
    tagline: "전면 리프팅 700L 컨테이너",
    description: "대형 상업시설·아파트 단지에 적합한 700L 전면 리프팅 컨테이너.",
    highlights: ["700L 대용량", "전면 리프팅", "분리수거 라벨링 [확인 필요]"],
    specs: [
      { label: "용량", value: "700L" },
      { label: "재질", value: "HDPE [확인 필요]" },
      { label: "리프팅", value: "전면(F) 호환" },
      { label: "용도", value: "아파트·대형 상가" },
    ],
  },
  {
    slug: "d1100f",
    category: "containers",
    name: "D1100F",
    tagline: "전면 리프팅 1,100L 컨테이너",
    description: "대단지·산업시설용 1,100L 전면 리프팅 컨테이너.",
    highlights: ["1,100L 초대용량", "전면 리프팅", "산업 시설 대응"],
    specs: [
      { label: "용량", value: "1,100L" },
      { label: "재질", value: "HDPE [확인 필요]" },
      { label: "리프팅", value: "전면(F) 호환" },
      { label: "용도", value: "대단지·산업시설" },
    ],
  },
];

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProduct(category: ProductCategory, slug: string): Product | undefined {
  return products.find((p) => p.category === category && p.slug === slug);
}

// 메인 페이지에서 노출할 대표 모델 3종
export const featuredSlugs: Array<{ category: ProductCategory; slug: string }> = [
  { category: "home", slug: "v7-s" },
  { category: "commercial", slug: "05k" },
  { category: "containers", slug: "c120d" },
];

export function getFeaturedProducts(): Product[] {
  return featuredSlugs
    .map((f) => getProduct(f.category, f.slug))
    .filter((p): p is Product => Boolean(p));
}
