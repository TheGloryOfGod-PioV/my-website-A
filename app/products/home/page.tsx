import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ProductCard from "@/components/ui/ProductCard";
import { categories, getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "가정용 음식물처리기",
  description:
    "주방에 두는 컴팩트한 위생 솔루션. 스탠딩·빌트인 등 가정 환경에 맞춘 라인업.",
};

export default function HomeProductsPage() {
  const cat = categories.home;
  const products = getProductsByCategory("home");

  return (
    <>
      <section className="bg-gradient-to-b from-emerald-50/60 to-white">
        <Container className="py-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Home
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
