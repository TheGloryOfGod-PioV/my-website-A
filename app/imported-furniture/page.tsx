import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import SplitText from "@/components/motion/SplitText";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import PinnedHorizontalScroll from "@/components/motion/PinnedHorizontalScroll";
import {
  tannhofBrand,
  collections,
  pieces,
  getPiecesByCollection,
} from "@/data/imported-furniture";

export const metadata: Metadata = {
  title: "수입 가구 · TANNHOF",
  description:
    "독일 흑림(Schwarzwald) 3대 가족 공방 TANNHOF. NOVECO가 단독 수입하는 솔리드 우드 거실·다이닝·수납 컬렉션.",
};

const craftsmanship = [
  {
    title: "두꺼운 솔리드 우드",
    text: "상판은 40T 이상, 다리·기둥 부재는 30T 이상의 솔리드 목재만 사용합니다. 시간이 흐르며 결이 깊어지고 작은 흠이 생겨도 되살릴 수 있습니다.",
  },
  {
    title: "정통 짜맞춤",
    text: "Zinkenverbindung, Schwalbenschwanz 같은 전통 결합법을 중심으로 구성해 오래 쓰고 수리 가능한 구조를 지향합니다.",
  },
  {
    title: "천연 오일 마감",
    text: "우레탄 코팅 대신 Hartwachsöl(경화 왁스 오일)을 사용해 결을 보존하고, 장기 사용에 맞춘 유지보수성을 확보합니다.",
  },
];

const carePoints = [
  "일상 청소는 마른 부드러운 천으로 결 방향대로 닦기",
  "수분 노출 후 즉시 닦아내기",
  "주기적인 오일 보강으로 결 보존하기",
  "직사광선과 강한 열원 직접 노출 피하기",
];

export default function ImportedFurniturePage() {
  return (
    <>
      <section
        aria-labelledby="furniture-hero"
        className="relative overflow-hidden border-b border-stone-200 bg-gradient-to-b from-stone-100 via-[#f4efe8] to-white"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,113,108,0.18),transparent_24%),linear-gradient(120deg,rgba(255,255,255,0.32),transparent_40%)] animate-slow-pan-luxury motion-reduce:animate-none"
        />
        <Container className="relative flex min-h-[100svh] flex-col justify-end px-5 pb-10 pt-28 sm:px-6 sm:pb-12 sm:pt-32 lg:px-8 lg:pb-14 lg:pt-36">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-end">
            <div className="max-w-5xl">
              <p className="display-kicker text-xs font-semibold text-brand sm:text-sm">
                Imported Furniture · {tannhofBrand.name}
              </p>
              <h1
                id="furniture-hero"
                className="mt-6 text-[clamp(3.25rem,9vw,6.5rem)] font-black leading-[0.95] tracking-[-0.06em] text-balance text-stone-950"
              >
                <SplitText as="span" tone="luxury" className="block">
                  흑림의 시간을 닮은 가구를
                </SplitText>
                <SplitText as="span" tone="luxury" delayMs={220} className="block">
                  더 느린 호흡으로
                </SplitText>
                <SplitText as="span" tone="luxury" delayMs={440} className="block text-stone-600">
                  일상에 들입니다
                </SplitText>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone-700 sm:text-lg lg:text-xl">
                {tannhofBrand.pitch}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  쇼룸 방문 예약
                </Button>
                <Button href="#collections" variant="secondary" size="lg">
                  컬렉션 보기
                </Button>
              </div>
            </div>

            <div className="grid gap-4 border-t border-stone-300/80 pt-6 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <div className="border-b border-stone-300/70 pb-4 last:border-b-0 lg:pb-6">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">설립</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight text-stone-900">{tannhofBrand.founded}</p>
              </div>
              <div className="border-b border-stone-300/70 pb-4 last:border-b-0 lg:pb-6">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">공방</p>
                <p className="mt-3 text-lg font-semibold leading-snug text-stone-900">Schwarzwald, Germany</p>
              </div>
              <div className="border-b border-stone-300/70 pb-4 last:border-b-0 lg:pb-6">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-500">제작</p>
                <p className="mt-3 text-lg font-semibold leading-snug text-stone-900">주문 제작 · 8-12주</p>
              </div>
            </div>
          </div>

          <div className="mt-16 flex items-end justify-between gap-6">
            <div
              aria-hidden="true"
              className="hidden text-[18vw] font-black leading-none tracking-[-0.08em] text-stone-900/[0.05] lg:block"
            >
              TANNHOF
            </div>
            <a
              href="#collections"
              className="group ml-auto inline-flex items-center gap-4 text-sm uppercase tracking-[0.28em] text-stone-500 transition-colors duration-500 ease-luxury hover:text-stone-900 motion-reduce:transition-none"
            >
              <span>Scroll Down</span>
              <span className="flex h-12 w-12 items-start justify-center rounded-full border border-stone-300 pt-3">
                <span className="h-3 w-px bg-stone-700 animate-scroll-cue motion-reduce:animate-none" />
              </span>
            </a>
          </div>
        </Container>
      </section>

      <Section
        id="story"
        eyebrow="Brand Story"
        title="흑림에서 한자리를 지킨 60년"
        description="자산이 부족한 상태에서는 사진 대신 타이포, 소재감, 느린 섹션 리듬으로 TANNHOF의 공방 톤을 먼저 전달합니다."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {craftsmanship.map((item, idx) => (
            <RevealOnScroll
              key={item.title}
              as="article"
              tone="luxury"
              delayMs={idx * 120}
              className="border border-stone-200 bg-white p-8"
            >
              <p className="display-kicker text-xs font-semibold text-brand">Craft</p>
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-stone-950">{item.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">{item.text}</p>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll
          as="div"
          tone="luxury"
          delayMs={360}
          className="mt-10 border border-stone-200 bg-stone-100/70 p-8 sm:p-10"
        >
          <p className="display-kicker text-xs font-semibold text-brand">Importer</p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">NOVECO × TANNHOF</h2>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-stone-700 sm:text-base">{tannhofBrand.importer}</p>
        </RevealOnScroll>
      </Section>

      <section
        id="collections"
        aria-labelledby="collections-title"
        className="bg-stone-950 py-24 text-white sm:py-28 lg:py-36"
      >
        <Container className="mb-12 lg:hidden">
          <p className="display-kicker text-xs font-semibold text-emerald-300 sm:text-sm">Collections</p>
          <h2
            id="collections-title"
            className="mt-5 max-w-5xl text-4xl font-black tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl"
          >
            세 가지 결, 세 가지 방
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/68 sm:text-lg">
            거실·다이닝·수납을 각각의 결로 묶었습니다. 각 컬렉션은 자체 완결형이지만 함께 두면 한 톤으로 이어집니다.
          </p>
        </Container>

        <PinnedHorizontalScroll
          ariaLabel="TANNHOF 컬렉션 시퀀스"
          intro={
            <Container>
              <p className="display-kicker text-xs font-semibold text-emerald-300 sm:text-sm">Collections</p>
              <h2
                id="collections-title-desktop"
                className="mt-5 max-w-5xl text-4xl font-black tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl"
              >
                세 가지 결, 세 가지 방
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/68 sm:text-lg">
                거실, 다이닝, 수납을 각각의 결로 묶었습니다. 각 컬렉션은 자체 완결형이지만 함께 두면 한 톤으로 이어집니다.
              </p>
            </Container>
          }
        >
          {collections.map((collection) => (
            <article
              key={collection.slug}
              id={collection.slug}
              className="flex w-full flex-col border border-white/10 bg-stone-900 lg:w-[78vw] lg:flex-shrink-0 lg:first:ml-8 lg:last:mr-8"
            >
              <div
                className={`relative grid h-56 place-items-center overflow-hidden bg-gradient-to-br ${collection.paletteClass} lg:h-80`}
                aria-hidden="true"
              >
                <div className="absolute inset-0 animate-slow-pan-luxury motion-reduce:animate-none">
                  <div className={`h-full w-full bg-gradient-to-br ${collection.paletteClass}`} />
                </div>
                <div className="relative text-center text-stone-900/70">
                  <p className="text-4xl font-black tracking-[0.18em] lg:text-5xl">{collection.name}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.24em]">{collection.vibe}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 lg:p-10">
                <p className="display-kicker text-xs font-semibold text-emerald-300">{collection.vibe}</p>
                <h3 className="mt-5 text-2xl font-bold tracking-tight text-white lg:text-3xl">{collection.name}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/68 lg:text-base">{collection.description}</p>
                <dl className="mt-8 border-t border-white/10 pt-5 text-sm">
                  <div className="flex gap-3">
                    <dt className="w-20 flex-shrink-0 text-white/40">소재</dt>
                    <dd className="text-white/80">{collection.material}</dd>
                  </div>
                </dl>

                <ul className="mt-6 space-y-2 text-sm text-white/70">
                  {getPiecesByCollection(collection.slug).map((piece) => (
                    <li key={piece.slug}>
                      <Link href={`#${piece.slug}`} className="inline-flex items-center gap-3 transition-colors duration-500 ease-luxury hover:text-white">
                        <span aria-hidden="true" className="inline-block h-px w-8 bg-brand" />
                        {piece.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </PinnedHorizontalScroll>
      </section>

      <Section
        id="pieces"
        eyebrow="Pieces"
        title="대표 가구"
        description="현재 NOVECO 쇼룸에서 만나볼 수 있거나 주문 제작 가능한 TANNHOF 라인업입니다. 사이즈·소재·마감은 1:1 커스텀이 가능합니다."
      >
        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pieces.map((piece, idx) => (
            <RevealOnScroll
              key={piece.slug}
              as="li"
              tone="luxury"
              delayMs={(idx % 3) * 120}
            >
              <article
                id={piece.slug}
                className="flex h-full flex-col border border-stone-200 bg-white transition-[transform,border-color,box-shadow] duration-1200 ease-luxury hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_50px_rgba(28,25,23,0.08)] motion-reduce:transition-none motion-reduce:hover:transform-none"
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-stone-100 via-amber-50 to-stone-50"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 animate-slow-pan-luxury motion-reduce:animate-none">
                    <div className="grid h-full w-full place-items-center">
                      <span className="text-center text-lg font-semibold tracking-[0.14em] text-stone-700/40">
                        {piece.name}
                      </span>
                    </div>
                  </div>
                  <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-brand">
                    {piece.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold tracking-tight text-stone-950">{piece.name}</h3>
                  <p className="mt-2 text-sm text-stone-500">{piece.category}</p>
                  <p className="mt-4 text-sm leading-relaxed text-stone-700">{piece.description}</p>
                  <dl className="mt-6 space-y-2 border-t border-stone-100 pt-4 text-sm">
                    <div className="flex gap-3">
                      <dt className="w-20 flex-shrink-0 text-stone-500">치수</dt>
                      <dd className="text-stone-800">{piece.dimensions}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-20 flex-shrink-0 text-stone-500">소재</dt>
                      <dd className="text-stone-800">{piece.material}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-20 flex-shrink-0 text-stone-500">마감</dt>
                      <dd className="text-stone-800">{piece.finish}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-20 flex-shrink-0 text-stone-500">제작지</dt>
                      <dd className="text-stone-800">{piece.origin}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-20 flex-shrink-0 text-stone-500">가격</dt>
                      <dd className="text-stone-800">{piece.price}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Materials & Care" title="오래 두고 쓰는 가구의 조건" className="bg-stone-100/60">
        <div className="grid gap-6 md:grid-cols-2">
          <RevealOnScroll as="article" tone="luxury" className="border border-stone-200 bg-white p-8">
            <p className="display-kicker text-xs font-semibold text-brand">Materials</p>
            <h3 className="mt-5 text-2xl font-bold tracking-tight text-stone-950">시간이 지나며 더 좋아지는 소재감</h3>
            <p className="mt-4 text-sm leading-relaxed text-stone-700 sm:text-base">
              이 페이지는 단순 카탈로그보다 공방의 재료감과 제작 철학이 먼저 읽히도록 구성했습니다. 실사 자산이 없어도 소재 설명이 중심이 되도록 유지합니다.
            </p>
          </RevealOnScroll>
          <RevealOnScroll as="article" tone="luxury" delayMs={120} className="border border-stone-200 bg-white p-8">
            <p className="display-kicker text-xs font-semibold text-brand">Care</p>
            <h3 className="mt-5 text-2xl font-bold tracking-tight text-stone-950">오래 쓰기 위한 손질 방식</h3>
            <ol className="mt-5 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-stone-700 sm:text-base">
              {carePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ol>
          </RevealOnScroll>
        </div>
      </Section>

      <Section eyebrow="Showroom" title="쇼룸 · 주문 안내">
        <div className="grid gap-6 lg:grid-cols-3">
          <RevealOnScroll as="article" tone="luxury" className="border border-stone-200 bg-white p-8 lg:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight text-stone-950">NOVECO 쇼룸</h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-700 sm:text-base">
              주요 컬렉션의 현물과 패브릭·마감 샘플을 확인하실 수 있습니다. 주말 방문은 사전 예약을 권장드립니다.
            </p>
            <dl className="mt-6 space-y-3 text-sm sm:text-base">
              <div className="flex gap-4">
                <dt className="w-24 flex-shrink-0 text-stone-500">위치</dt>
                <dd className="text-stone-900">{tannhofBrand.showroom}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 flex-shrink-0 text-stone-500">주문 리드타임</dt>
                <dd className="text-stone-900">{tannhofBrand.leadTime}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 flex-shrink-0 text-stone-500">배송</dt>
                <dd className="text-stone-900">전문 가구 운송업체 댁내 설치 (반입 동선 사전 점검 필수)</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 flex-shrink-0 text-stone-500">AS</dt>
                <dd className="text-stone-900">NOVECO 본사 직접 접수, 본 공방 부속 직접 수급</dd>
              </div>
            </dl>
          </RevealOnScroll>

          <RevealOnScroll as="article" tone="luxury" delayMs={120} className="flex flex-col border border-brand/20 bg-brand p-8 text-white">
            <p className="display-kicker text-xs font-semibold text-emerald-200">Consultation</p>
            <h3 className="mt-5 text-2xl font-bold tracking-tight">상담 / 견적</h3>
            <p className="mt-4 text-sm leading-relaxed text-emerald-50 sm:text-base">
              희망 컬렉션, 공간 면적, 도면이 있으시면 함께 보내주시면 정확한 운임·리드타임 견적이 가능합니다.
            </p>
            <div className="mt-auto pt-8">
              <Button href="/contact" variant="white" size="lg" className="w-full">
                문의하기
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </Section>
    </>
  );
}
