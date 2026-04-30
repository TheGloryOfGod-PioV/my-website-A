import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { company } from "@/data/company";
import { stats } from "@/data/cases";

export const metadata: Metadata = {
  title: "회사소개",
  description:
    "NOVECO는 가정용·업소용·시설용 음식물처리 솔루션을 공급하는 친환경 기술 기업입니다.",
};

const milestones = [
  { year: "[YYYY]", text: "회사 설립 및 가정용 음식물처리기 라인업 출시" },
  { year: "[YYYY]", text: "업소용 NK 시리즈 라인업 확대 (05K ~ 1.0ton)" },
  { year: "[YYYY]", text: "전국 AS·설치 네트워크 구축" },
  { year: "[YYYY]", text: "공동주택 · 산업시설 대형 컨테이너 라인업 추가" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-emerald-50/60 to-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            About {company.name}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl text-balance">
            주방과 사업장의 음식물,
            <br />
            <span className="text-brand">처리 방식부터 다시 설계합니다.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            NOVECO는 가정용 컴팩트 모델부터 1ton 단위 산업용 라인업, 표준 수거함까지 음식물
            폐기 단계 전반을 다루는 기술 기업입니다. 위생·내구성·운영 안정성을 기준으로 제품을
            설계하고, 설치 이후 운영 단계의 AS까지 함께 책임집니다.
          </p>
        </Container>
      </section>

      <Section
        eyebrow="Our Approach"
        title="제조와 운영을 함께 보는 관점"
        description="단순히 처리기를 판매하는 것이 아니라, 현장에 들어간 이후의 가동률·점검·소모품 관리까지 한 사이클로 봅니다."
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "현장 기준 설계",
              text: "음식점·급식·공동주택 등 현장 데이터를 기반으로 라인업을 구성합니다.",
            },
            {
              title: "안정적 운영",
              text: "정기 점검과 소모품 관리로 장기 운영 시 가동 중단 시간을 최소화합니다.",
            },
            {
              title: "친환경 처리",
              text: "건조·분쇄·발효 등 모델별 처리 방식으로 폐기물량을 효과적으로 줄입니다.",
            },
          ].map((c) => (
            <li key={c.title} className="rounded-lg border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{c.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Numbers"
        title="운영 현황"
        description="실제 인증 번호·설치 수량 등은 운영 시점에 데이터 소스에서 주입하세요."
        className="bg-gray-50"
      >
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <li
              key={s.label}
              className="rounded-lg border border-gray-200 bg-white p-6 text-center"
            >
              <p className="text-3xl font-bold text-brand">{s.value}</p>
              <p className="mt-1 text-sm text-gray-600">{s.label}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="History" title="주요 연혁">
        <ol className="space-y-5 border-l border-gray-200 pl-6">
          {milestones.map((m, i) => (
            <li key={i} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-1 grid h-4 w-4 place-items-center rounded-full bg-brand ring-4 ring-white"
              />
              <p className="text-sm font-semibold text-brand">{m.year}</p>
              <p className="mt-1 text-base text-gray-700">{m.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Button href="/contact">상담 문의</Button>
        </div>
      </Section>
    </>
  );
}
