import type { Metadata } from "next";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "한입폼",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-black">{children}</body>
    </html>
  );
}
