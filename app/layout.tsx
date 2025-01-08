import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
//import "./page.module.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://my-next-project-35ec.vercel.app/'),
  title: {
    template: '%s | シンプルなコーポレートサイト',
    default: 'シンプルなコーポレートサイト',
  },
  description:
    '「Next.js＋ヘッドレスCMSではじめる！ かんたん・モダンWebサイト制作入門」で作成されるサイトです。',
  openGraph: {
    title: 'シンプルなコーポレートサイト',
    description:
      '「Next.js＋ヘッドレスCMSではじめる！ かんたん・モダンWebサイト制作入門」で作成されるサイトです。',
    images: ['/ogp.png'],
  },
  alternates: {
    canonical: 'https://my-next-project-35ec.vercel.app/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body> 
      <GoogleAnalytics gaId="G-YCH6HSWP8X" />   
    </html>
  );
}
