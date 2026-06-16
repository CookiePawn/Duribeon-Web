import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "두리번 - 하루를 조금 다르게 만드는 1~5분 제안",
  description:
    "두리번은 익숙한 하루를 1~5분만 비틀어 주변을 새롭게 발견하도록 돕는 작은 경험 큐레이션 앱입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
