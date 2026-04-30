import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/motion/RevealOnScroll";

const items = [
  {
    title: "위생적인 운영 환경",
    description: "악취와 해충 발생 원인을 줄이고, 매장 운영과 가정 주방의 청결도를 높이는 방향으로 설계했습니다.",
  },
  {
    title: "다양한 용량 라인업",
    description: "5kg급 소형부터 1ton급 대형까지, 사업장 규모와 배출 패턴에 맞춰 선택할 수 있습니다.",
  },
  {
    title: "설치 및 AS 지원",
    description: "전국 단위 설치·점검·소모품 교체 운영으로 가동 중단 없이 빠르게 대응합니다.",
  },
  {
    title: "친환경 처리 방식",
    description: "건조·분쇄·발효 등 모델별 처리 방식을 적용해 폐기물량과 환경 영향을 줄입니다.",
  },
];

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-brand"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WhyNovecoSection() {
  return (
    <section id="why" aria-labelledby="why-title" className="bg-gray-50 py-24 sm:py-28 lg:py-36">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-20">
        <header className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
          <p className="display-kicker text-xs font-semibold text-brand sm:text-sm">Why NOVECO</p>
          <h2
            id="why-title"
            className="mt-5 text-4xl font-black tracking-[-0.05em] text-balance text-gray-950 sm:text-5xl lg:text-6xl"
          >
            제조업의 신뢰감,
            <br />
            운영의 편의성을 함께
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            현장 운영자가 가장 자주 묻는 위생, 용량, AS, 친환경 네 가지 기준에 맞춰 라인업을 구성했습니다.
          </p>
          <div aria-hidden="true" className="mt-10 hidden h-px w-24 origin-left bg-brand lg:block" />
        </header>

        <ul className="space-y-5 lg:col-span-7">
          {items.map((item, idx) => (
            <RevealOnScroll
              key={item.title}
              as="li"
              tone="utility"
              delayMs={idx * 80}
              className="border border-gray-200 bg-white p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                <CheckIcon />
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight text-gray-950">{item.title}</h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">{item.description}</p>
            </RevealOnScroll>
          ))}
        </ul>
      </Container>
    </section>
  );
}
