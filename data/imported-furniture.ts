// TANNHOF (탄호프) — 독일 흑림(Schwarzwald) 가족 공방 (NOVECO 단독 수입)
// 본 데이터는 사이트 데모를 위해 창작된 브랜드 설정입니다. 실제 운영 전 실 데이터로 교체하세요.

export const tannhofBrand = {
  name: "TANNHOF",
  nameKo: "탄호프",
  origin: "Germany · Schwarzwald (흑림)",
  founded: 1958,
  generation: "3대째 가족 운영 공방",
  tagline: "흑림에서 온 나무, 일상에 머물다",
  pitch:
    "독일 남부 흑림의 작은 마을에서 60년 넘게 한자리를 지킨 가족 공방. 두꺼운 솔리드 우드, 정통 짜맞춤, 천연 오일 마감만으로 오래 쓰는 가구를 만듭니다.",
  importer:
    "NOVECO가 국내 단독 수입·전시·AS를 담당합니다. 모든 제품은 독일 본 공방에서 주문 제작되어 항공·해상 운송으로 입고됩니다.",
  leadTime: "주문 후 8 ~ 12주 (현지 제작 기간 포함, 시즌에 따라 변동)",
  showroom:
    "[서울 쇼룸 위치 확인 필요] · 평일 11:00 - 19:00 · 주말 사전 예약제",
};

export type FurnitureCollection = {
  slug: string;
  name: string;
  nameKo: string;
  vibe: string;
  description: string;
  material: string;
  paletteClass: string; // tailwind gradient class for placeholder
};

export const collections: FurnitureCollection[] = [
  {
    slug: "lichtlinie",
    name: "LICHTLINIE",
    nameKo: "리히트리니에",
    vibe: "거실 · 라운지",
    description:
      "흑림 사이로 흐르는 빛(Licht)과 선(Linie)에서 따온 거실 컬렉션. 화이트 오크 솔리드와 자연 패브릭만으로 묵직하지만 가볍게 보이는 라운지 가구를 만듭니다.",
    material: "독일산 화이트 오크 솔리드 · 천연 라텍스 · 울 / 린넨 패브릭",
    paletteClass: "from-amber-50 via-amber-100 to-stone-100",
  },
  {
    slug: "tafelwerk",
    name: "TAFELWERK",
    nameKo: "타펠베르크",
    vibe: "다이닝 · 워크",
    description:
      "오랜 시간 식탁(Tafel)이라는 이름에 품위를 더해온 호두나무 다이닝 시리즈. 짜맞춤(Zinkenverbindung) 정통 공법으로 제작하며 다리·상판 모두 분해·재조립이 가능합니다.",
    material: "유럽산 호두나무(블랙월넛) 솔리드 · 황동 부속",
    paletteClass: "from-stone-100 via-orange-50 to-amber-50",
  },
  {
    slug: "dunkelraum",
    name: "DUNKELRAUM",
    nameKo: "둔켈라움",
    vibe: "수납 · 진열",
    description:
      "어둠(Dunkel)과 공간(Raum). 매트 블랙 페인트 위에 애쉬 무늬결을 살린 수납 시리즈. 거실의 시각 무게를 잡아주는 사이드보드·책장 라인업.",
    material: "유럽산 애쉬(물푸레) 솔리드 + 매트 블랙 라커 · 황동 손잡이",
    paletteClass: "from-zinc-100 via-slate-100 to-zinc-200",
  },
];

export type FurniturePiece = {
  slug: string;
  collectionSlug: string;
  name: string; // 독일어 모델명
  category: string;
  description: string;
  dimensions: string;
  material: string;
  finish: string;
  origin: string;
  price: string;
};

export const pieces: FurniturePiece[] = [
  // ── LICHTLINIE
  {
    slug: "lichtlinie-sofa-02",
    collectionSlug: "lichtlinie",
    name: "LICHTLINIE Sofa 02",
    category: "3인용 소파",
    description:
      "두툼한 오크 프레임을 그대로 노출한 3인용 소파. 좌면 깊이를 일반 소파보다 깊게 잡아 라운지 의자에 가까운 자세를 유도합니다. 패브릭은 12종 컬러 옵션 중 선택.",
    dimensions: "W2,200 × D960 × H780 / 좌면 H420mm",
    material: "화이트 오크 솔리드 + 천연 라텍스 + 울 패브릭",
    finish: "천연 오일 (Hartwachsöl) 3회 도포",
    origin: "Made in Schwarzwald, Germany",
    price: "[가격 협의 · 운임 포함 견적 제공]",
  },
  {
    slug: "lichtlinie-sessel-01",
    collectionSlug: "lichtlinie",
    name: "LICHTLINIE Sessel 01",
    category: "1인용 안락의자",
    description:
      "한 사람이 책 한 권과 머물기 좋게 설계된 안락의자. 등받이의 미세한 곡률과 팔걸이 두께가 TANNHOF의 시그니처.",
    dimensions: "W780 × D880 × H860 / 좌면 H420mm",
    material: "화이트 오크 솔리드 + 천연 라텍스 + 린넨",
    finish: "천연 오일 마감",
    origin: "Made in Schwarzwald, Germany",
    price: "[가격 협의]",
  },
  {
    slug: "lichtlinie-couchtisch",
    collectionSlug: "lichtlinie",
    name: "LICHTLINIE Couchtisch",
    category: "거실 테이블",
    description:
      "한 장의 두꺼운 오크 슬라브를 그대로 다리에 얹은 형태. 결의 흐름과 옹이를 그대로 살려 같은 디자인의 두 점이 존재하지 않습니다.",
    dimensions: "W1,200 × D680 × H320mm",
    material: "화이트 오크 슬라브 (40T)",
    finish: "천연 오일 마감 / 옹이부 에폭시 보강",
    origin: "Made in Schwarzwald, Germany",
    price: "[가격 협의]",
  },

  // ── TAFELWERK
  {
    slug: "tafelwerk-esstisch-220",
    collectionSlug: "tafelwerk",
    name: "TAFELWERK Esstisch 220",
    category: "8인용 다이닝 테이블",
    description:
      "Zinkenverbindung(짜맞춤) 정통 공법으로 제작된 호두나무 8인 식탁. 다리와 상판이 분해 가능해 큰 집의 이사도 안전하게.",
    dimensions: "W2,200 × D950 × H740mm",
    material: "유럽산 블랙월넛 솔리드 (50T 상판)",
    finish: "천연 오일 + 미세 왁스 마감",
    origin: "Made in Schwarzwald, Germany",
    price: "[가격 협의 · 사이즈 커스텀 가능]",
  },
  {
    slug: "tafelwerk-stuhl-03",
    collectionSlug: "tafelwerk",
    name: "TAFELWERK Stuhl 03",
    category: "다이닝 체어",
    description:
      "등받이 곡률을 인체 척추 기준으로 다섯 차례 깎아낸 다이닝 체어. 좌면은 가죽 또는 패브릭 옵션.",
    dimensions: "W470 × D530 × H820 / 좌면 H460mm",
    material: "블랙월넛 솔리드 + 풀그레인 가죽 옵션",
    finish: "천연 오일 마감",
    origin: "Made in Schwarzwald, Germany",
    price: "[가격 협의]",
  },

  // ── DUNKELRAUM
  {
    slug: "dunkelraum-sideboard-l",
    collectionSlug: "dunkelraum",
    name: "DUNKELRAUM Sideboard L",
    category: "사이드보드 (대)",
    description:
      "매트 블랙 라커 외부와 애쉬 무늬결 내부의 대비가 인상적인 사이드보드. 황동 손잡이와 소프트 클로즈 힌지.",
    dimensions: "W2,000 × D480 × H760mm",
    material: "유럽산 애쉬 솔리드 + 매트 블랙 라커",
    finish: "내부 천연 오일 / 외부 7-coat 라커",
    origin: "Made in Schwarzwald, Germany",
    price: "[가격 협의]",
  },
  {
    slug: "dunkelraum-regal-hoch",
    collectionSlug: "dunkelraum",
    name: "DUNKELRAUM Regal Hoch",
    category: "벽장 / 책장",
    description:
      "천장에 닿을 듯한 6단 책장. 책의 무게를 견디도록 측판은 30T 솔리드, 선반은 가변형으로 25mm 단위 조절.",
    dimensions: "W1,000 × D360 × H2,200mm",
    material: "애쉬 솔리드 + 매트 블랙 라커",
    finish: "외부 라커 / 선반 천연 오일",
    origin: "Made in Schwarzwald, Germany",
    price: "[가격 협의]",
  },
];

export function getCollectionBySlug(slug: string): FurnitureCollection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getPiecesByCollection(slug: string): FurniturePiece[] {
  return pieces.filter((p) => p.collectionSlug === slug);
}

// 메인 노출용 대표 3점
export const featuredPieceSlugs = [
  "lichtlinie-sofa-02",
  "tafelwerk-esstisch-220",
  "dunkelraum-sideboard-l",
];
