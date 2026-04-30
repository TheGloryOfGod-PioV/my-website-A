import type { Metadata, Viewport } from "next";
import "./globals.css";
import CorporateHeader from "@/components/layout/CorporateHeader";
import Footer from "@/components/layout/Footer";
import { company } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: `${company.nameKo} | ${company.tagline}`,
    template: `%s | ${company.nameKo} ${company.name}`,
  },
  description: company.description,
  keywords: [
    "?꾨젅癒?",
    "NOVECO",
    "?뚯떇臾쇱쿂由ш린",
    "媛?뺤슜 ?뚯떇臾쇱쿂由ш린",
    "?낆냼???뚯떇臾쇱쿂由ш린",
    "?섍굅??",
    "?섏엯 媛援?",
    "TANNHOF",
    "?뚮?紐?",
    "移쒗솚寃?",
  ],
  openGraph: {
    title: `${company.nameKo} ${company.name}`,
    description: company.description,
    type: "website",
    locale: "ko_KR",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#047857",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-brand focus:text-white focus:px-3 focus:py-2 focus:rounded"
        >
          본문 바로가기
        </a>
        <CorporateHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
