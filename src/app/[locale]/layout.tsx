import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "../globals.css";
import LocaleSwitcher from "./locale-switcher/LocaleSwitcher";
import clsx from "clsx";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "Metadata",
  });

  return {
    metadataBase: new URL("https://marvel-orleans.vercel.app"),
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        id: "/id",
        "zh-Hans": "/zh-Hans",
        "zh-Hant": "/zh-Hant",
      },
    },
    title: t("title"),
    description: t("desc"),
    authors: { name: "Marvel Orleans" },
    openGraph: {
      title: t("title"),
      description: t("desc"),
      siteName: t("title"),
      url: "https://marvel-orleans.vercel.app",
      images: "/src/projects/nextjs-portfolio-site.webp",
    },
    twitter: {
      title: t("title"),
      description: t("desc"),
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html className="scroll-smooth" lang={locale}>
      <body
        className={clsx(
          "relative flex justify-center antialiased",
          interSans.className,
          geistMono.variable,
        )}
      >
        <NextIntlClientProvider>
          <LocaleSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
