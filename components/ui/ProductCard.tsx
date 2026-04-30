// Server Component 유지 — 호버 효과는 CSS only.
import Link from "next/link";
import { type Product, categories } from "@/data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const cat = categories[product.category];
  const href = `/products/${product.category}/${product.slug}`;

  return (
    <article
      className="group relative flex flex-col rounded-lg border border-gray-200 bg-white
        transition-[transform,box-shadow,border-color] duration-300 ease-utility
        hover:-translate-y-1.5 hover:border-brand hover:shadow-lg hover:shadow-emerald-900/5
        active:-translate-y-0.5 active:duration-150
        motion-reduce:transition-none motion-reduce:transform-none motion-reduce:hover:transform-none"
    >
      <div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-emerald-50 to-emerald-100"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 flex items-center justify-center
            transition-transform duration-500 ease-utility
            group-hover:scale-[1.04]
            motion-reduce:transition-none motion-reduce:transform-none motion-reduce:group-hover:transform-none"
        >
          <span className="font-mono text-2xl font-bold text-emerald-700/40">
            {product.name}
          </span>
        </div>
        <span className="absolute left-4 top-4 inline-block rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-medium text-brand">
          {cat.title}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-bold text-gray-900 transition-colors duration-200 ease-utility group-hover:text-brand">
          <Link href={href} className="after:absolute after:inset-0">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gray-600">{product.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-gray-700 line-clamp-3">
          {product.description}
        </p>
        <ul className="mt-4 space-y-1.5 text-sm text-gray-700">
          {product.specs.slice(0, 3).map((s) => (
            <li key={s.label} className="flex justify-between gap-3">
              <span className="text-gray-500">{s.label}</span>
              <span className="font-medium">{s.value}</span>
            </li>
          ))}
        </ul>
        <span
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand
            transition-transform duration-200 ease-utility group-hover:translate-x-1
            motion-reduce:transition-none motion-reduce:transform-none motion-reduce:group-hover:transform-none"
        >
          제품 자세히 보기
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </article>
  );
}
