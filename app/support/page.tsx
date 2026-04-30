import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "고객센터",
  description: "NOVECO 고객센터 안내, 자주 묻는 질문, 서비스 신청 방법.",
};

const faqs = [
  {
    q: "AS 신청은 어떻게 하나요?",
    a: "고객센터 전화 또는 문의 폼으로 모델명·설치 위치·증상을 알려주시면 가까운 거점에서 응대합니다.",
  },
  {
    q: "소모품(필터, 부품)도 별도로 구매할 수 있나요?",
    a: "모델별로 권장 교체 주기와 함께 안내드립니다. 정기 점검에 포함되거나 단품 구매가 가능합니다. [상세 정책 확인 필요]",
  },
  {
    q: "설치 환경 사전 점검은 필수인가요?",
    a: "업소용·시설용은 전원·배수·동선 점검이 필요해 사전 방문을 권장합니다. 가정용은 배송 후 자가 설치 또는 방문 설치 중 선택 가능.",
  },
  {
    q: "운영 매뉴얼/사용설명서를 받을 수 있나요?",
    a: "구매 시 동봉되며, 모델별 PDF는 운영 시점에 다운로드 페이지로 제공할 수 있습니다.",
  },
];

export default function SupportPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-emerald-50/60 to-white">
        <Container className="py-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Support
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl text-balance">
            고객센터
          </h1>
          <p className="mt-3 max-w-2xl text-base text-gray-600 sm:text-lg">
            설치 후 운영 단계의 가동률이 가장 중요합니다. 점검·소모품 교체·문의를 한 곳에서
            응대합니다.
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">고객센터 연락처</h2>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-gray-500">전화</dt>
                <dd className="font-medium text-gray-900">{company.contact.phone}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-gray-500">이메일</dt>
                <dd className="font-medium text-gray-900">{company.contact.email}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-gray-500">운영시간</dt>
                <dd className="font-medium text-gray-900">{company.contact.businessHours}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-gray-500">주소</dt>
                <dd className="font-medium text-gray-900">{company.contact.address}</dd>
              </div>
            </dl>
            <div className="mt-5">
              <Button href="/contact">문의 폼으로 이동</Button>
            </div>
          </article>

          <article className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">서비스 안내</h2>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>· 정기 점검 (분기 / 반기 / 연간) [확인 필요]</li>
              <li>· 소모품 교체 (필터·구동부)</li>
              <li>· 출장 AS · 원격 점검</li>
              <li>· 신규 설치 · 이전 설치</li>
            </ul>
          </article>

          <article className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900">서비스 신청 방법</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-gray-700">
              <li>모델명·시리얼·설치 위치 확인</li>
              <li>증상 또는 점검 요청 사항 메모</li>
              <li>고객센터 전화 또는 문의 폼 작성</li>
              <li>거점 엔지니어 일정 협의 및 방문</li>
            </ol>
          </article>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="자주 묻는 질문" className="bg-gray-50">
        <ul className="space-y-3">
          {faqs.map((f) => (
            <li key={f.q}>
              <details className="group rounded-lg border border-gray-200 bg-white p-5 open:border-brand">
                <summary className="cursor-pointer list-none text-base font-semibold text-gray-900">
                  <span className="mr-2 text-brand">Q.</span>
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  <span className="mr-2 font-semibold text-gray-500">A.</span>
                  {f.a}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
