import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "../../lib/dictionaries";
import { defaultLocale, isLocale, locales } from "../../lib/i18n";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : defaultLocale);
  return {
    metadataBase: new URL("https://slashworkspace.com"),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", es: "/es", pt: "/pt", "x-default": "/en" },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.ogDescription,
      url: `https://slashworkspace.com/${locale}`,
      siteName: "/workspace",
      type: "website",
    },
  };
}

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Nunito:wght@700;800&display=swap";

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_URL} />
      </head>
      <body>{children}</body>
    </html>
  );
}
