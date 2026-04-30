import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import InquiryForm from "@/components/forms/InquiryForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "문의하기",
  description:
    "NOVECO 가정용·업소용·시설용 음식물처리 및 TANNHOF 수입 가구 도입 문의. 도면, 일일 배출량, 일정 정보를 함께 보내주세요.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-emerald-50/60 to-white">
        <Container className="py-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Contact
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl text-balance">
            상담·도입 문의
          </h1>
          <p className="mt-3 max-w-2xl text-base text-gray-600 sm:text-lg">
            현장 환경에 맞는 모델을 추천드립니다. 일일 배출량, 설치 위치, 도입 일정 등을
            남겨주시면 더 정확한 상담이 가능합니다.
          </p>
        </Container>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <aside className="lg:col-span-1">
            <h2 className="text-lg font-bold text-gray-900">고객센터</h2>
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

            <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700">
              <p className="font-semibold text-gray-900">문의 시 함께 보내주세요</p>
              <ul className="mt-3 space-y-1.5">
                <li>· 일일 음식물 배출량 (kg)</li>
                <li>· 설치 희망 위치 / 면적</li>
                <li>· 전원 / 배수 환경</li>
                <li>· 도입 희망 일정</li>
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <InquiryForm />
          </div>
        </div>
      </Section>
    </>
  );
}
