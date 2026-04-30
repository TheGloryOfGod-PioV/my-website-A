import Link from "next/link";
import Section from "@/components/ui/Section";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import { categories, getFeaturedProducts } from "@/data/products";

export default function FeaturedProductsSection() {
  const featured = getFeaturedProducts();

  return (
    <Section
      id="featured"
      eyebrow="Featured Models"
      title="대표 모델 빠르게 살펴보기"
      description="가정용·업소용·수거함 카테고리에서 가장 자주 도입되는 대표 모델 3종을 모았습니다."
      className="bg-white"
    >
      <ul className="grid gap-6 lg:grid-cols-3">
        {featured.map((product, idx) => (
          <RevealOnScroll
            key={`${product.category}-${product.slug}`}
            as="li"
            tone="utility"
            delayMs={idx * 90}
          >
            <article className="flex h-full flex-col border border-gray-200 bg-white transition-[transform,border-color,box-shadow] duration-700 ease-utility hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_50px_rgba(15,23,42,0.07)] motion-reduce:transition-none motion-reduce:hover:transform-none">
              <div
                className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-emerald-100 via-white to-slate-100"
                aria-hidden="true"
              >
                <div className="absolute inset-0 animate-hero-drift motion-reduce:animate-none">
                  <div className="grid h-full w-full place-items-center">
                    <span className="text-3xl font-black tracking-[0.18em] text-gray-900/10">{product.name}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <p className="display-kicker text-xs font-semibold text-brand">{categories[product.category].title}</p>
                <h3 className="mt-5 text-3xl font-bold tracking-tight text-gray-950">{product.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">{product.description}</p>
                <div className="mt-8 border-t border-gray-100 pt-5">
                  <Link
                    href={`/products/${product.category}/${product.slug}`}
                    className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-brand transition-colors duration-500 ease-utility hover:text-gray-950"
                  >
                    모델 보기
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </ul>
    </Section>
  );
}
