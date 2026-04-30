import Link from "next/link";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import { categories } from "@/data/products";
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
  },
  {
    key: "commercial" as const,
    index: "02",
    eyebrow: "업소용 시스템",
    statement: "업소 운영을 멈추지 않는 안정적 처리 용량",
    description:
      "매장, 급식, 식품 제조 환경에 맞춘 업소용 처리 설비로 처리량과 유지관리의 균형을 맞춥니다.",
    palette: "from-slate-950 via-slate-900 to-emerald-950",
  },
  {
    key: "containers" as const,
    index: "03",
    eyebrow: "수거 인프라",
    statement: "배출과 수거의 흐름까지 설계하는 인프라",
    description:
      "수거함과 컨테이너 라인업으로 공동주택과 사업장의 배출 동선을 명확하게 정리합니다.",
    palette: "from-stone-950 via-slate-900 to-emerald-950",
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
          <article
            key={item.key}
            id={item.panelId}
            data-category-panel
            data-category-id={item.panelId}
            className={`relative flex min-h-[100svh] items-end overflow-hidden border-b border-white/10 bg-gradient-to-br ${item.palette}`}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(255,255,255,0.12),transparent_20%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_40%)] animate-hero-drift motion-reduce:animate-none"
            />
            <div
              aria-hidden="true"
              className="absolute right-[4vw] top-[8vh] text-[20vw] font-black tracking-[-0.08em] text-white/[0.05]"
            >
              {item.index}
            </div>

            <div className="relative mx-auto grid w-full max-w-content gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:px-8 lg:py-20">
              <RevealOnScroll as="div" tone="utility" className="self-start">
                <p className="display-kicker text-xs font-semibold text-emerald-200 sm:text-sm">{item.eyebrow}</p>
                <p className="mt-6 text-sm font-medium tracking-[0.18em] text-white/40">{item.index}</p>
              </RevealOnScroll>

              <RevealOnScroll as="div" tone="utility" delayMs={80} className="max-w-4xl">
                <h3 className="text-4xl font-black leading-[1] tracking-[-0.05em] text-balance sm:text-5xl lg:text-[4.5rem]">
                  {item.statement}
                </h3>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/68 sm:text-lg">
                  {item.description}
                </p>
                <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm text-white/56">{item.subtitle}</p>
                  </div>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-emerald-200 transition-colors duration-500 ease-utility hover:text-white"
                  >
                    상세 보기
                    <span aria-hidden="true" className="text-base">
                      →
                    </span>
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
