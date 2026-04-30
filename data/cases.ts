export type CaseItem = {
  title: string;
  category: "설치사례" | "인증" | "언론보도" | "행사";
  summary: string;
  date: string; // YYYY-MM
};

// 실제 사례·인증은 운영 시점에 CMS 또는 데이터 소스에서 주입하세요.
export const cases: CaseItem[] = [
  {
    title: "[설치 현장명 확인 필요] 단지 음식물 자원화 시스템 설치",
    category: "설치사례",
    summary:
      "공동주택 단지에 업소용 처리기와 700L 컨테이너를 연계 설치하여 수거 효율을 개선한 사례.",
    date: "2024-09",
  },
  {
    title: "[음식점 브랜드명 확인 필요] 전국 매장 표준 설치",
    category: "설치사례",
    summary: "체인 가맹점에 동일 사양의 업소용 모델을 배치하여 운영 표준화.",
    date: "2024-06",
  },
  {
    title: "환경 관련 인증 (KC / 환경표지 등) [확인 필요]",
    category: "인증",
    summary: "주요 모델에 대한 공인 인증 확보. 실제 인증 번호와 범위는 운영 자료 참고.",
    date: "2023-11",
  },
  {
    title: "친환경 박람회 출품 [확인 필요]",
    category: "행사",
    summary: "주요 박람회에서 신제품 라인업과 시설 운영 사례를 공개.",
    date: "2024-04",
  },
  {
    title: "주요 매체 보도자료 [확인 필요]",
    category: "언론보도",
    summary: "음식물 자원화·탄소 저감 흐름 속 업계 인터뷰 및 보도.",
    date: "2024-02",
  },
];

// 데모 수치 — 실제 운영 시 정확한 값으로 교체 필요.
// numericValue가 있으면 카운트업 애니메이션이 작동합니다.
export type Stat = {
  label: string;
  value: string;          // 표시 폴백 / 실제 정보
  numericValue?: number;  // 카운트업 대상 (있을 때만 애니메이션)
  suffix?: string;
};

export const stats: Stat[] = [
  { label: "전국 설치 현장", value: "850+ 곳 [확인 필요]", numericValue: 850, suffix: "+" },
  { label: "운영 연수", value: "25년+ [확인 필요]", numericValue: 25, suffix: "년+" },
  { label: "AS 거점", value: "32곳 [확인 필요]", numericValue: 32, suffix: "곳" },
  { label: "공인 인증", value: "12건 [확인 필요]", numericValue: 12, suffix: "건" },
];
