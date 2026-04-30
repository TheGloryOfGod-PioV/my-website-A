import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ProductCard from "@/components/ui/ProductCard";
import { categories, getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "업소용 음식물처리기",
  description:
    "음식점·급식·호텔·공장 등 처리 용량별로 최적 모델을 선택할 수 있는 업소용 라인업 (NK 시리즈).",
};

export default function CommercialProductsPage() {
  const cat = categories.commercial;
  const products = getProductsByCategory("commercial");

  return (
    <>
      <section className="bg-gradient-to-b from-sky-50/60 to-white">
        <Container className="py-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Commercial
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl text-balance">
            {cat.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-gray-600 sm:text-lg">
            {cat.subtitle}
          </p>
        </Container>
      </section>
      <Section>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <li key={p.slug}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
