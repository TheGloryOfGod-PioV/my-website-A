// 단일 모션 시스템 — 두 브랜드 톤은 토큰 변주로만 분기
// 처리기 라인 = utility (빠릿·기능적), TANNHOF 가구 = luxury (느릿·우아)

export const motionTone = {
  utility: {
    ease: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    durationMs: 700,
    staggerMs: 60,
    splitStaggerMs: 80,
    countUpMs: 1400,
    revealClass:
      "duration-700 ease-utility",
    riseClass: "animate-rise-utility",
  },
  luxury: {
    ease: "cubic-bezier(0.16, 1, 0.3, 1)",
    durationMs: 1400,
    staggerMs: 120,
    splitStaggerMs: 120,
    countUpMs: 2000,
    revealClass: "duration-1400 ease-luxury",
    riseClass: "animate-rise-luxury",
  },
} as const;

export type Tone = keyof typeof motionTone;
