import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import SpecTable from "@/components/ui/SpecTable";
import {
  categories,
  getProduct,
  products,
  type ProductCategory,
} from "@/data/products";

type Params = { category: string; model: string };

const validCategories = ["home", "commercial", "containers"] as const;

function isValidCategory(c: string): c is ProductCategory {
  return (validCategories as readonly string[]).includes(c);
}

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ category: p.category, model: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  if (!isValidCategory(params.category)) return {};
  const p = getProduct(params.category, params.model);
  if (!p) return {};
  return {
    title: `${p.name} · ${categories[p.category].title}`,
    description: p.description,
  };
}

export default function ProductDetailPage({ params }: { params: Params }) {
  if (!isValidCategory(params.category)) notFound();
  const product = getProduct(params.category, params.model);
  if (!product) notFound();

  const cat = categories[product.category];

  return (
    <>
      <section className="border-b border-gray-200 bg-gradient-to-b from-emerald-50/60 to-white">
        <Container className="py-12 sm:py-16">
          <nav aria-label="breadcrumb" className="text-sm text-gray-500">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-brand">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={cat.href} className="hover:text-brand">
                  {cat.title}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-900">{product.name}</li>
            </ol>
          </nav>

          <div className="mt-6 grid items-start gap-10 lg:grid-cols-2">
            <div
              className="aspect-[5/4] w-full rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-100 via-emerald-50 to-white"
              aria-hidden="true"
            >
              <div className="grid h-full place-items-center">
                <span className="font-mono text-3xl font-bold text-emerald-700/40">
                  {product.name}
                </span>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                {cat.title}
              </p>
              <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl text-balance">
                {product.name}
              </h1>
              <p className="mt-2 text-lg text-gray-700">{product.tagline}</p>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {product.description}
              </p>

              <ul className="mt-6 space-y-2">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                    <span
                      aria-hidden="true"
                      className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand"
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg">
                  이 모델 상담하기
                </Button>
                <Button href={cat.href} variant="secondary" size="lg">
                  같은 카테고리 보기
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section eyebrow="Specs" title="제품 스펙">
        <SpecTable caption={`${product.name} 스펙 표`} specs={product.specs} />
        <p className="mt-4 text-xs text-gray-500">
          ※ [확인 필요] 표시 항목은 운영 시점에 제조사 공식 자료로 검증해 갱신해야 합니다.
        </p>
      </Section>
    </>
  );
}
