"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const productOptions = [
  { value: "", label: "관심 제품군 선택" },
  { value: "home", label: "가정용 음식물처리기" },
  { value: "commercial", label: "업소용 음식물처리기" },
  { value: "containers", label: "수거함 / 컨테이너" },
  { value: "etc", label: "기타 / 설치 상담" },
];

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      // 실제 백엔드 연동 시 fetch("/api/contact") 등으로 전송하세요.
      // 여기서는 데모용으로 콘솔 출력만 합니다.
      // eslint-disable-next-line no-console
      console.log("[InquiryForm] payload", payload);
      await new Promise((r) => setTimeout(r, 500));
      e.currentTarget.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg("전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
      noValidate
      aria-describedby="form-status"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="이름" name="name" required />
        <Field label="회사명 / 단체명" name="company" />
        <Field label="이메일" name="email" type="email" required />
        <Field label="연락처" name="phone" type="tel" required placeholder="010-0000-0000" />
      </div>

      <div>
        <label htmlFor="product" className="block text-sm font-medium text-gray-900">
          관심 제품군
        </label>
        <select
          id="product"
          name="product"
          required
          className="mt-1.5 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900
            transition-[border-color,box-shadow] duration-200 ease-utility
            focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30
            motion-reduce:transition-none"
        >
          {productOptions.map((o) => (
            <option key={o.value} value={o.value} disabled={o.value === ""}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
          문의 내용 <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900
            transition-[border-color,box-shadow] duration-200 ease-utility
            focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30
            motion-reduce:transition-none"
          placeholder="현장 환경, 일일 배출량, 설치 일정 등을 알려주시면 더 정확한 상담이 가능합니다."
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          id="agree"
          name="agree"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
        />
        <label htmlFor="agree" className="text-sm text-gray-700">
          개인정보 수집·이용에 동의합니다. (수집 항목·목적·보관기간 등 상세 내용은
          이용약관을 확인해주세요.) <span aria-hidden="true" className="text-red-500">*</span>
        </label>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p
          id="form-status"
          aria-live="polite"
          className={
            status === "success"
              ? "text-sm font-medium text-brand"
              : status === "error"
                ? "text-sm font-medium text-red-600"
                : "text-sm text-gray-500"
          }
        >
          {status === "success" && "문의가 접수되었습니다. 빠르게 회신드리겠습니다."}
          {status === "error" && (errorMsg ?? "오류가 발생했습니다.")}
          {(status === "idle" || status === "submitting") &&
            "보내주신 정보는 상담 목적으로만 사용됩니다."}
        </p>
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "전송 중..." : "문의 보내기"}
        </Button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
};

function Field({ label, name, type = "text", required, placeholder }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-900">
        {label}
        {required && (
          <span aria-hidden="true" className="ml-0.5 text-red-500">
            *
          </span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-required={required || undefined}
        className="mt-1.5 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400
          transition-[border-color,box-shadow,transform] duration-200 ease-utility
          focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 focus:-translate-y-px
          motion-reduce:transition-none motion-reduce:focus:transform-none"
      />
    </div>
  );
}
