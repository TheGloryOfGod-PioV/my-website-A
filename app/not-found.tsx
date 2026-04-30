import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">
        404
      </p>
      <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
        페이지를 찾을 수 없습니다
      </h1>
      <p className="mt-3 text-base text-gray-600">
        요청하신 페이지가 이동되었거나 존재하지 않습니다.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Button href="/">홈으로</Button>
        <Button href="/contact" variant="secondary">
          문의하기
        </Button>
      </div>
    </Container>
  );
}
