import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@teispace/next-themes";
import { getLocale } from "next-intl/server";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html className="scroll-smooth" lang={locale} suppressHydrationWarning>
      <body
        className={clsx(
          "relative flex justify-center antialiased transition-colors duration-100",
          interSans.className,
          geistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
