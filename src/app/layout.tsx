import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import {
  SITE_URL,
  HOSPITAL_NAME,
  HOSPITAL_TAGLINE,
  HOSPITAL_DESCRIPTION,
} from "@/config/site";
import { hospitalJsonLd } from "@/lib/seo";
import { departments } from "@/data/departments";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${HOSPITAL_NAME} — ${HOSPITAL_TAGLINE}`,
    template: `%s | ${HOSPITAL_NAME}`,
  },
  description: HOSPITAL_DESCRIPTION,
  applicationName: HOSPITAL_NAME,
  keywords: [
    "multi-specialty hospital",
    "emergency care",
    "critical care",
    "healthcare",
    "medical trust",
    "diagnostics",
  ],
  openGraph: {
    type: "website",
    siteName: HOSPITAL_NAME,
    title: `${HOSPITAL_NAME} — ${HOSPITAL_TAGLINE}`,
    description: HOSPITAL_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${HOSPITAL_NAME} — ${HOSPITAL_TAGLINE}`,
    description: HOSPITAL_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#28387C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = hospitalJsonLd(departments.map((d) => d.name));

  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AnnouncementBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
