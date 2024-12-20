import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "アートワインバー　コンペ",
  description: "アートワインバー名古屋デザインコンペティション2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <meta property="og:type" content="website" />
      <meta property="og:title" content="アートワインバー　コンペ" />
      <meta property="og:description" content="アートワインバー名古屋デザインコンペティション2024" />
      <meta property="og:url" content="https://competition-cst.vercel.app/" />
      <meta property="og:site_name" content="アートワインバー コンペ" />
      <meta property="og:image" content="https://competition-cst.vercel.app/opengraph-image.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta property="twitter:title" content="アートワインバー　コンペ" />
      <meta property="twitter:description" content="アートワインバー名古屋デザインコンペティション2024" />
      <meta property="twitter:image" content="https://competition-cst.vercel.app/twitter-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Tomas_engineer" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
