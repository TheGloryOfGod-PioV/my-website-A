import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ProductCard from "@/components/ui/ProductCard";
import { categories, getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "수거함 / 컨테이너",
  description:
    "공동주택·상업시설 표준 리프팅 시스템에 대응하는 120L ~ 1,100L 수거함 라인업.",
};

export default function ContainersPage() {
  const cat = categories.containers;
  const products = getProductsByCategory("containers");

  return (
    <>
      <section className="bg-gradient-to-b from-lime-50/60 to-white">
        <Container className="py-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">
            Containers
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
