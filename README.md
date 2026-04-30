# NOVECO 홈페이지 (음식물처리기 + 수입 가구)

기존 ecostadisposal.com (Wayback 보존본)의 정보 구조를 참고하여 만든 NOVECO (구 ECOSTA) 브랜드의 현대적인 반응형 기업 사이트입니다. 음식물처리 솔루션과 TANNHOF 독일 수입 가구 라인업을 함께 다룹니다.

- **스택**: Next.js 14 (App Router, SSR) · TypeScript · Tailwind CSS
- **렌더링**: 기본 Server Components, 인터랙션 필요한 부분만 `'use client'`
  - 클라이언트 컴포넌트: `MobileMenu`, `InquiryForm`
- **디자인 톤**: 화이트 베이스 + 딥그린(emerald) 메인 + 라임 포인트, 제조업/환경기기 신뢰감

## 빠른 시작

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버
npm run dev
# → http://localhost:3000

# 3. 프로덕션 빌드
npm run build
npm run start
```

> Node.js 18.17+ 권장. `pnpm` / `yarn` 도 동일하게 작동합니다.

## 폴더 구조

```txt
my-website/
├─ app/
│  ├─ layout.tsx              # 루트 레이아웃 + 메타데이터
│  ├─ page.tsx                # 홈 (랜딩)
│  ├─ globals.css             # Tailwind base + Pretendard
│  ├─ not-found.tsx           # 404
│  ├─ about/page.tsx
│  ├─ products/
│  │  ├─ home/page.tsx        # 가정용 카탈로그
│  │  ├─ commercial/page.tsx  # 업소용 카탈로그
│  │  ├─ containers/page.tsx  # 수거함 카탈로그
│  │  └─ [category]/[model]/page.tsx  # 모델 상세 (SSG)
│  ├─ cases/page.tsx          # 인증·설치사례
│  ├─ support/page.tsx        # 고객센터·FAQ
│  └─ contact/page.tsx        # 문의 폼
├─ components/
│  ├─ layout/                 # Header, Footer, MobileMenu
│  ├─ sections/               # Hero, ProductCategory, WhyNoveco, Featured, SpecPreview, Installation, ContactCTA
│  ├─ ui/                     # Button, Container, Section, ProductCard, SpecTable
│  └─ forms/                  # InquiryForm
├─ data/
│  ├─ company.ts              # 회사 정보 placeholder
│  ├─ navigation.ts           # 메인/푸터 네비
│  ├─ products.ts             # 12개 모델 (가정 2 + 업소 6 + 수거함 4)
│  └─ cases.ts                # 사례·인증 더미
├─ lib/utils.ts
├─ tailwind.config.ts
├─ next.config.mjs
└─ tsconfig.json
```

## 데이터 교체 가이드

운영용으로 전환할 때는 다음 데이터 파일만 교체/연동하면 됩니다.

| 파일 | 교체 시점 |
|---|---|
| `data/company.ts` | 실제 사명/전화/이메일/주소 |
| `data/products.ts` | 모델별 정확한 스펙 (`[확인 필요]` 표기 제거) |
| `data/cases.ts` | 실제 인증·설치 사례 (CMS 연동 권장) |
| `app/layout.tsx` `metadataBase` | 실제 도메인 |

`InquiryForm`은 현재 콘솔 출력만 합니다. 실제 운영에서는 `app/api/contact/route.ts` 같은 Route Handler 또는 외부 폼 서비스(Formspree, Tally 등)에 연결하세요.

## 자체 점검 (체크리스트)

### SEO
- [x] `<html lang="ko">` 명시
- [x] `metadataBase` + 페이지별 `title`/`description` (`generateMetadata` 동적 적용)
- [x] OpenGraph 기본값
- [x] 시맨틱 헤딩 계층 (h1 → h2 → h3, 페이지당 h1 단 한 번)
- [x] `robots: index, follow`
- [ ] 운영 시 `sitemap.xml` / `robots.txt` 추가 (`app/sitemap.ts`)
- [ ] 운영 도메인 기준 OG 이미지 1200×630 추가

### 접근성 (a11y)
- [x] 본문 바로가기 스킵 링크
- [x] 시맨틱 `header / nav / main / section / article / footer`
- [x] 모바일 메뉴 `aria-expanded`, `aria-controls`, ESC 닫기
- [x] 폼 모든 필드 `<label>` 연결, 필수 항목 `aria-required` + 시각 표시
- [x] 폼 상태 `aria-live="polite"`로 안내
- [x] 장식용 요소 `aria-hidden="true"`
- [x] 포커스 링 명확 (`ring-brand`)
- [x] 색 대비: 본문 `gray-900`/`gray-600`, 브랜드 `emerald-700` 화이트 위 (WCAG AA 통과)
- [ ] 실제 이미지 도입 시 모두 의미 있는 `alt` 작성
- [ ] 키보드 탐색 순서 실기기 검증

### 반응형
- [x] 모바일 우선 (`sm` 768 미만 기본)
- [x] 햄버거 메뉴 (lg 미만)
- [x] 그리드 1 → 2 → 3 컬럼 점진 확장
- [x] 스펙 테이블 가로 스크롤 (`overflow-x-auto`)
- [x] 폰트 크기 모바일/데스크탑 분리 (`text-3xl sm:text-4xl ...`)
- [x] `text-balance`로 헤딩 줄바꿈 가독성

### 유지보수성
- [x] 데이터(`/data`)와 표현(`/components`) 분리
- [x] UI 프리미티브 5종으로 일관된 톤 (Button, Container, Section, ProductCard, SpecTable)
- [x] 카테고리 추가는 `data/products.ts`의 `ProductCategory` + `categories` 만 확장하면 자동 라우팅 (`generateStaticParams`)
- [x] 클라이언트 경계 최소화 (페이지/섹션은 모두 Server Component)
- [x] Tailwind `theme.extend.colors.brand` 단일 출처로 색 관리
- [ ] 운영 전 `eslint`, `prettier`, 단위 테스트(Jest/Playwright) 추가 권장

## 알려진 제한 / 주의

- 모든 제품 스펙·사례는 데모 더미입니다. 운영 전 `[확인 필요]` 항목을 모두 검증하세요.
- 이미지 자산은 자리표시자(그라디언트 박스)로 대체되어 있습니다. 실제 이미지를 `public/`에 추가한 뒤 `next/image`로 교체하세요.
- 회사·사업자 실데이터는 `data/company.ts`의 placeholder를 그대로 두었습니다. 환경변수 또는 CMS로 주입하는 흐름을 권장합니다.
