import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/store/CartContext";
import CartSidebar from "@/components/ui/CartSidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CampGear - 最高品質のキャンピング用品",
  description: "アウトドア愛好家のための厳選されたキャンピング用品を提供します。テント、寝具、調理用品、ファニチャーなど、自然との特別な時間をより快適にするアイテムが揃っています。",
  keywords: ["キャンプ", "アウトドア", "テント", "寝具", "調理用品", "キャンピング用品", "アウトドアギア"],
  authors: [{ name: "CampGear" }],
  creator: "CampGear",
  publisher: "CampGear",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://canp.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://canp.vercel.app",
    title: "CampGear - 最高品質のキャンピング用品",
    description: "アウトドア愛好家のための厳選されたキャンピング用品を提供します。",
    siteName: "CampGear",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CampGear - キャンピング用品",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CampGear - 最高品質のキャンピング用品",
    description: "アウトドア愛好家のための厳選されたキャンピング用品を提供します。",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2D5016" />
      </head>
      <body className="font-body antialiased">
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
