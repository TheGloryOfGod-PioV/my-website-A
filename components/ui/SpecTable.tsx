import { type Spec } from "@/data/products";

type Props = {
  caption?: string;
  specs: Spec[];
};

export default function SpecTable({ caption, specs }: Props) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full text-left text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <tbody className="divide-y divide-gray-200">
          {specs.map((s) => (
            <tr key={s.label} className="bg-white">
              <th
                scope="row"
                className="w-40 bg-gray-50 px-4 py-3 font-medium text-gray-700 sm:w-56"
              >
                {s.label}
              </th>
              <td className="px-4 py-3 text-gray-900">{s.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
