import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionRoot from "@/components/MotionRoot";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://equitrustsolutions.in"),
  title: "Equitrust Solutions Private Limited | Sub-broker to Kotak Securities",
  description:
    "Equitrust Solutions Private Limited is a sub-broker to Kotak Securities Limited. Meet directors Rubina Singla and Shiva Grover. Registered in Sirsa, Haryana.",
  keywords: [
    "Equitrust Solutions",
    "Kotak Securities sub broker",
    "Rubina Singla",
    "Shiva Grover",
    "Sirsa",
    "stock broker",
  ],
  authors: [{ name: "Equitrust Solutions Private Limited" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Equitrust Solutions Private Limited",
    description: "Sub-broker to Kotak Securities Limited. Directors Rubina Singla and Shiva Grover.",
    images: [{ url: "/logo.png" }],
  },
  twitter: {
    card: "summary",
    title: "Equitrust Solutions Private Limited",
    description: "Sub-broker to Kotak Securities Limited. Meet the directors.",
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Equitrust Solutions Private Limited",
  legalName: "Equitrust Solutions Private Limited",
  description: "Sub-broker to Kotak Securities Limited.",
  url: "https://equitrustsolutions.in/",
  logo: "https://equitrustsolutions.in/logo.png",
  taxID: "U67100HR2021PTC097213",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C/o Harbans Auto Store, 1st Floor Paradise Building, Arya Samaj Road",
    addressLocality: "Sirsa",
    addressRegion: "Haryana",
    postalCode: "125055",
    addressCountry: "IN",
  },
  founder: [
    { "@type": "Person", name: "Rubina Singla", jobTitle: "Director" },
    { "@type": "Person", name: "Shiva Grover", jobTitle: "Director" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <MotionRoot />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
