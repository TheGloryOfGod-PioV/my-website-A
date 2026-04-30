import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import { company } from "@/data/company";

export default function ContactCTASection() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-brand text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-lime-300/20 blur-3xl animate-slow-pan-luxury motion-reduce:animate-none"
      />
      <Container className="relative grid items-center gap-10 py-24 sm:py-28 lg:grid-cols-3 lg:py-32">
        <div className="lg:col-span-2">
          <p className="display-kicker text-xs font-semibold text-emerald-200 sm:text-sm">Contact</p>
          <RevealOnScroll as="div" tone="utility">
            <h2
              id="cta-title"
              className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.05em] text-balance sm:text-5xl lg:text-6xl"
            >
              공간과 배출량에 맞는 제품을
              <br />
              추천받아보세요
            </h2>
          </RevealOnScroll>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-emerald-50 sm:text-lg">
            가정용·업소용·시설용 라인업 중 현장에 가장 적합한 모델을 안내해드립니다. 도면이나 운영 환경 정보가
            있다면 함께 보내주세요.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:items-end">
          <Button href="/contact" size="lg" variant="white">
            문의하기
          </Button>
          <p className="text-sm text-emerald-100">고객센터 {company.contact.phone}</p>
          <p className="text-xs text-emerald-200">운영시간 · {company.contact.businessHours}</p>
        </div>
      </Container>
    </section>
  );
}
