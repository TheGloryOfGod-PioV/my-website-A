import Section from "@/components/ui/Section";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import CountUp from "@/components/motion/CountUp";
import { cases, stats } from "@/data/cases";

export default function InstallationSection() {
  return (
    <Section
      id="cases"
      eyebrow="Installation & Trust"
      title="현장에서 검증된 운영 사례"
      description="공동주택, 음식점, 산업시설 등 다양한 현장에 설치·운영된 사례와 인증 현황을 소개합니다."
    >
      <ul className="mb-12 grid gap-px overflow-hidden border border-gray-200 bg-gray-200 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, idx) => (
          <RevealOnScroll
            key={stat.label}
            as="li"
            tone="utility"
            delayMs={idx * 70}
            className="bg-white px-6 py-8 sm:px-8 sm:py-10"
          >
            <div aria-hidden="true" className="mb-5 h-px w-14 bg-brand" />
            <p className="text-xs uppercase tracking-[0.24em] text-gray-500">{stat.label}</p>
            <p className="mt-4 text-4xl font-black tracking-[-0.05em] text-gray-950 sm:text-5xl">
              {typeof stat.numericValue === "number" ? (
                <CountUp to={stat.numericValue} suffix={stat.suffix ?? ""} />
              ) : (
                stat.value
              )}
            </p>
          </RevealOnScroll>
        ))}
      </ul>

      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cases.slice(0, 3).map((item, idx) => (
          <RevealOnScroll
            key={item.title}
            as="li"
            tone="utility"
            delayMs={idx * 70}
            className="flex min-h-[260px] flex-col justify-between border border-gray-200 bg-white p-7"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-brand">
                {item.category}
              </span>
              <time dateTime={item.date} className="text-gray-500">
                {item.date}
              </time>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-bold tracking-tight text-gray-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">{item.summary}</p>
            </div>
          </RevealOnScroll>
        ))}
      </ul>
    </Section>
  );
}
