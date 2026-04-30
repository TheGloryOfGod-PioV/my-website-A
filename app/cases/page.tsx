import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import CountUp from "@/components/motion/CountUp";
import { cases, stats } from "@/data/cases";

export const metadata: Metadata = {
  title: "인증 및 설치사례",
  description: "NOVECO의 인증 현황, 설치 현장, 주요 행사·언론보도를 한 곳에서 확인하세요.",
};

const filters: Array<{ key: string; label: string }> = [
  { key: "all", label: "전체" },
  { key: "installation", label: "설치사례" },
  { key: "certification", label: "인증" },
  { key: "news", label: "언론보도" },
  { key: "events", label: "행사" },
];

export default function CasesPage() {
  return (
    <>
      <section className="border-b border-black/5 bg-gradient-to-b from-emerald-50/70 via-white to-white">
        <Container className="py-20 sm:py-24 lg:py-32">
          <p className="display-kicker text-xs font-semibold text-brand sm:text-sm">Cases & Trust</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-black tracking-[-0.05em] text-balance text-gray-950 sm:text-5xl lg:text-7xl">
            설치 현장과 인증 이력이
            <br />
            NOVECO의 신뢰를 설명합니다
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
            현장 운영 사례와 공인 인증 자료는 신뢰의 핵심 단서입니다. 도입을 검토 중이라면 가장 비슷한 현장의
            사례를 먼저 살펴보세요.
          </p>
        </Container>
      </section>

      <Section className="bg-slate-950 text-white" containerClassName="max-w-[1600px]">
        <ul className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label} className="bg-slate-950 px-6 py-10 sm:px-8 sm:py-12">
              <div aria-hidden="true" className="mb-6 h-px w-16 bg-brand" />
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">{stat.label}</p>
              <p className="mt-5 text-[clamp(3rem,8vw,6rem)] font-black tracking-[-0.06em] text-white">
                {stat.numericValue ? (
                  <CountUp
                    to={stat.numericValue}
                    durationMs={1500}
                    suffix={stat.suffix}
                    className="tabular-nums"
                  />
                ) : (
                  stat.value
                )}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="검증 이력"
        description="설치 현장, 인증, 보도 자료를 같은 시각 언어 안에서 관리해 정보 탐색 속도를 높였습니다."
      >
        <ul className="mb-8 flex flex-wrap gap-2" aria-label="사례 카테고리">
          {filters.map((filter) => (
            <li key={filter.key}>
              <span className="inline-flex rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700">
                {filter.label}
              </span>
            </li>
          ))}
        </ul>

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item) => (
            <li
              key={item.title}
              className="flex min-h-[280px] flex-col justify-between border border-gray-200 bg-white p-7 transition-[border-color,transform,box-shadow] duration-700 ease-utility hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_40px_rgba(15,23,42,0.06)] motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-brand">{item.category}</span>
                <time dateTime={item.date} className="text-gray-500">
                  {item.date}
                </time>
              </div>
              <div className="mt-12">
                <h2 className="text-xl font-bold tracking-tight text-gray-900">{item.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{item.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
