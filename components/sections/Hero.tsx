import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SplitText from "@/components/motion/SplitText";
import HeroMediaStage, { type HeroSlide } from "./HeroMediaStage";

const metrics = [
  { label: "제품 라인업", value: "12+" },
  { label: "처리 용량", value: "5kg - 1ton" },
  { label: "AS 네트워크", value: "전국" },
];

const slides: HeroSlide[] = [
  {
    id: "home",
    eyebrow: "가정용",
    title: "가정용 음식물처리기 솔루션",
    description: "주방 환경에 맞춘 제품과 실제 사용 장면을 영상으로 먼저 보여주는 대표 시나리오입니다.",
    wordmark: "HOME",
    gradientClass: "from-emerald-950 via-emerald-900 to-slate-950",
    durationSec: 129,
    posterSrc: "/media/hero/home-poster.svg",
    videoSrc: "/media/hero/home-loop.mp4",
  },
  {
    id: "commercial",
    eyebrow: "업소용",
    title: "영업 중단을 줄이는 안정적인 처리 용량",
    description: "매장과 급식, 사업장 환경에 맞는 현장 영상을 중심으로 운영 흐름을 설명하는 섹션입니다.",
    wordmark: "PRO",
    gradientClass: "from-slate-950 via-slate-900 to-emerald-950",
    durationSec: 149,
    posterSrc: "/media/hero/commercial-poster.svg",
    videoSrc: "/media/hero/commercial-loop.mp4",
  },
  {
    id: "collection",
    eyebrow: "수거 동선",
    title: "배출부터 수거까지 이어지는 운영 플로우",
    description: "수거 동선과 현장 규모를 영상으로 보여주고, 이후 상세 서비스 설명으로 자연스럽게 연결합니다.",
    wordmark: "FLOW",
    gradientClass: "from-stone-950 via-slate-900 to-emerald-950",
    durationSec: 30,
    posterSrc: "/media/hero/collection-poster.svg",
    videoSrc: "/media/hero/collection-loop.mp4",
  },
];

export default function Hero() {
  return (
    <>
      <section
        aria-labelledby="hero-media-title"
        className="corporate-frame relative min-h-[620px] overflow-hidden border-b border-white/10 text-white sm:min-h-[78svh]"
      >
        <HeroMediaStage slides={slides} />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

        <Container className="relative flex min-h-[620px] items-end px-5 pb-32 pt-52 sm:min-h-[78svh] sm:px-6 sm:pb-28 sm:pt-36 lg:px-8 lg:pb-32 lg:pt-40">
          <div className="max-w-lg">
            <p id="hero-media-title" className="display-kicker text-xs font-semibold text-emerald-200 sm:text-sm">
              AI Generated Preview
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/68 sm:text-base">
              본 영상은 실제 촬영본이 아닌 AI로 임의 생성한 데모 영상입니다. 분위기 참고용이며, 실제 제품·설치 환경과 다를 수 있습니다.
            </p>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="hero-title"
        className="corporate-frame relative min-h-[100svh] overflow-hidden border-b border-white/10 bg-slate-950 text-white"
      >
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.94),rgba(2,6,23,1))]" />

        <Container className="relative flex min-h-[100svh] flex-col justify-between px-5 pb-10 pt-32 sm:px-6 sm:pb-12 sm:pt-36 lg:px-8 lg:pb-14 lg:pt-40">
          <div className="grid gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-end">
            <div className="max-w-5xl">
              <p className="display-kicker text-xs font-semibold text-emerald-200 sm:text-sm">
                NOVECO 음식물처리 솔루션
              </p>
              <h1
                id="hero-title"
                className="mt-6 text-[clamp(3.25rem,10vw,6.5rem)] font-black leading-[0.95] tracking-[-0.06em] text-balance"
              >
                <SplitText as="span" tone="utility" className="block">
                  주방과 사업장을 더 간결하게,
                </SplitText>
                <SplitText as="span" tone="utility" delayMs={260} className="block">
                  공간과 배출 흐름에 맞춘
                </SplitText>
                <SplitText as="span" tone="utility" delayMs={520} className="block text-emerald-300">
                  음식물처리 시스템
                </SplitText>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg lg:text-xl">
                가정용부터 업소용, 수거 동선과 컨테이너 운영까지. NOVECO는 음식물 처리 설비와 운영 흐름을 함께 설계하는
                B2B 중심 브랜드입니다.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  제품 상담하기
                </Button>
                <Button href="#categories" variant="white" size="lg">
                  사업 영역 보기
                </Button>
              </div>
            </div>

            <div className="grid gap-4 border-t border-white/15 pt-6 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {metrics.map((metric) => (
                <div key={metric.label} className="border-b border-white/10 pb-4 last:border-b-0 lg:pb-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">{metric.label}</p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex items-end justify-between gap-6">
            <div
              aria-hidden="true"
              className="hidden text-[18vw] font-black leading-none tracking-[-0.08em] text-white/[0.06] lg:block"
            >
              NOVECO
            </div>
            <a
              href="#categories"
              className="group ml-auto inline-flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-white/72 transition-colors duration-500 ease-utility hover:text-white motion-reduce:transition-none"
            >
              <span>Scroll Down</span>
              <span className="flex h-12 w-12 items-start justify-center rounded-full border border-white/20 pt-3">
                <span className="h-3 w-px bg-white/80 animate-scroll-cue motion-reduce:animate-none" />
              </span>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
