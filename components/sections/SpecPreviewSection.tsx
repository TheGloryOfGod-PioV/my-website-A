import Section from "@/components/ui/Section";
import RevealOnScroll from "@/components/motion/RevealOnScroll";
import { categories, getFeaturedProducts } from "@/data/products";

const columns = [
  { key: "용도", label: "용도" },
  { key: "처리 방식", label: "처리 방식" },
  { key: "처리 용량", label: "처리 용량" },
  { key: "정격 전력", label: "정격 전력" },
  { key: "설치 위치", label: "설치 위치" },
] as const;

export default function SpecPreviewSection() {
  const products = getFeaturedProducts();

  return (
    <Section
      id="spec-preview"
      eyebrow="Spec Preview"
      title="대표 모델 스펙 미리보기"
      description="자세한 사양은 각 모델 상세 페이지에서 확인하세요. 일부 수치는 [확인 필요]로 표기되어 있습니다."
      className="bg-gray-50"
    >
      <RevealOnScroll className="overflow-x-auto border border-gray-200 bg-white">
        <table className="w-full min-w-[780px] text-left text-sm">
          <caption className="sr-only">대표 모델 스펙 비교표</caption>
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th scope="col" className="px-5 py-4 font-semibold text-gray-700">모델</th>
              <th scope="col" className="px-5 py-4 font-semibold text-gray-700">카테고리</th>
              {columns.map((column) => (
                <th key={column.key} scope="col" className="px-5 py-4 font-semibold text-gray-700">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => {
              const specMap = Object.fromEntries(product.specs.map((spec) => [spec.label, spec.value]));
              return (
                <tr key={`${product.category}-${product.slug}`}>
                  <th scope="row" className="px-5 py-4 font-semibold text-gray-950">{product.name}</th>
                  <td className="px-5 py-4 text-gray-600">{categories[product.category].title}</td>
                  {columns.map((column) => (
                    <td key={column.key} className="px-5 py-4 text-gray-700">
                      {specMap[column.key] ?? "-"}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </RevealOnScroll>
    </Section>
  );
}
