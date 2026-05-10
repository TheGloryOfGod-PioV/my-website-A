import { categories } from "@/data/products";
import CategoryImageFocusPanel from "./CategoryImageFocusPanel";
import CategoryProgressRail from "./CategoryProgressRail";

const items = [
  {
    key: "home" as const,
    index: "01",
    eyebrow: "가정용 솔루션",
    statement: "주거 환경을 해치지 않는 컴팩트 처리",
    description:
      "가정용 음식물처리기를 중심으로 소음, 위생, 설치 동선을 함께 고려한 생활형 솔루션입니다.",
    palette: "from-emerald-950 via-emerald-900 to-slate-950",
    scenes: [
      {
        label: "Compact Kitchen",
        caption: "싱크대와 조리 동선 사이에 부담 없이 들어오는 소형 설치 이미지",
        tint: "bg-[linear-gradient(135deg,#e5f8ef,#47c790_44%,#0f766e)]",
      },
      {
        label: "Quiet Routine",
        caption: "생활 소음과 냄새 노출을 줄이는 주거형 위생 관리 이미지",
        tint: "bg-[linear-gradient(135deg,#f8fafc,#a7f3d0_42%,#064e3b)]",
      },
      {
        label: "Built-in Flow",
        caption: "주방 수납 라인과 어긋나지 않는 빌트인 처리 흐름 이미지",
        tint: "bg-[linear-gradient(135deg,#ecfccb,#34d399_46%,#0f172a)]",
      },
    ],
  },
  {
    key: "commercial" as const,
    index: "02",
    eyebrow: "업소용 시스템",
    statement: "업소 운영을 멈추지 않는 안정적 처리 용량",
    description:
      "매장, 급식, 식품 제조 환경에 맞춘 업소용 처리 설비로 처리량과 유지관리의 균형을 맞춥니다.",
    palette: "from-slate-950 via-slate-900 to-emerald-950",
    scenes: [
      {
        label: "Back Kitchen",
        caption: "조리실 후면에 배치되는 고용량 처리 설비 이미지",
        tint: "bg-[linear-gradient(135deg,#dbeafe,#14b8a6_38%,#020617)]",
      },
      {
        label: "Service Hours",
        caption: "영업 시간의 흐름을 끊지 않는 연속 운영 이미지",
        tint: "bg-[linear-gradient(135deg,#fef3c7,#22c55e_40%,#111827)]",
      },
      {
        label: "Maintenance Bay",
        caption: "점검과 세척 동선까지 열어두는 설비 관리 이미지",
        tint: "bg-[linear-gradient(135deg,#f1f5f9,#38bdf8_36%,#065f46)]",
      },
    ],
  },
  {
    key: "containers" as const,
    index: "03",
    eyebrow: "수거 인프라",
    statement: "배출과 수거의 흐름까지 설계하는 인프라",
    description:
      "수거함과 컨테이너 라인업으로 공동주택과 사업장의 배출 동선을 명확하게 정리합니다.",
    palette: "from-stone-950 via-slate-900 to-emerald-950",
    scenes: [
      {
        label: "Drop-off Point",
        caption: "사용자가 모이는 배출 지점을 명확히 잡아주는 수거함 이미지",
        tint: "bg-[linear-gradient(135deg,#e0f2fe,#10b981_40%,#1c1917)]",
      },
      {
        label: "Container Line",
        caption: "용량별 컨테이너를 현장 규모에 맞춰 배열한 이미지",
        tint: "bg-[linear-gradient(135deg,#f0fdf4,#84cc16_36%,#0f172a)]",
      },
      {
        label: "Collection Route",
        caption: "차량 진입과 리프팅 방향을 함께 고려한 수거 동선 이미지",
        tint: "bg-[linear-gradient(135deg,#f8fafc,#2dd4bf_42%,#292524)]",
      },
    ],
  },
].map((item) => ({
  ...item,
  ...categories[item.key],
  panelId: `category-${item.key}`,
}));

export default function ProductCategorySection() {
  return (
    <section id="categories" aria-labelledby="categories-title" className="relative bg-slate-950 text-white">
      <CategoryProgressRail
        sectionId="categories"
        items={items.map(({ panelId, eyebrow, index }) => ({ id: panelId, eyebrow, index }))}
      />

      <div className="border-b border-white/10 px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-content">
          <p className="display-kicker text-xs font-semibold text-emerald-300 sm:text-sm">Business Fields</p>
          <h2
            id="categories-title"
            className="mt-5 max-w-5xl text-4xl font-black tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl"
          >
            세 개의 사업 영역을 하나의 운영 언어로 연결합니다
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/68 sm:text-lg">
            자산이 부족한 상태에서도 두산식 풀스크린 시퀀스의 호흡을 재현하도록 설계했습니다. 실제 사진과
            비디오가 들어오면 같은 구조에 그대로 확장할 수 있습니다.
          </p>
        </div>
      </div>

      <div>
        {items.map((item) => (
          <CategoryImageFocusPanel
            key={item.key}
            id={item.panelId}
            categoryId={item.panelId}
            index={item.index}
            eyebrow={item.eyebrow}
            statement={item.statement}
            description={item.description}
            title={item.title}
            subtitle={item.subtitle}
            href={item.href}
            palette={item.palette}
            scenes={item.scenes}
          />
        ))}
      </div>
    </section>
  );
}
