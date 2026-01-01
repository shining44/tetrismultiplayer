import type { Metadata } from "next"
import { notFound } from "next/navigation"
import "../globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { getTranslation, locales } from "@/locales"
import { Locale } from "@/types/i18n"

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isRTL = locale === "fa"

  return {
    title: isRTL
      ? "تهویه کوهساران | پیشرو در صنعت تهویه مطبوع ایران"
      : "Koohsaran HVAC | Leading HVAC Solutions in Iran",
    description: isRTL
      ? "شرکت تهویه کوهساران با نزدیک به ۳۰ سال تجربه، ارائه‌دهنده راهکارهای جامع تهویه مطبوع و تأسیسات مکانیکی ساختمان"
      : "Koohsaran HVAC Company with nearly 30 years of experience, providing comprehensive HVAC and mechanical building installation solutions",
    keywords: isRTL
      ? ["تهویه مطبوع", "چیلر", "هواساز", "فن کویل", "کوهساران", "تاسیسات مکانیکی"]
      : ["HVAC", "Chiller", "AHU", "Fan Coil", "Koohsaran", "Mechanical Installations"],
    openGraph: {
      title: isRTL ? "تهویه کوهساران" : "Koohsaran HVAC",
      description: isRTL
        ? "پیشرو در صنعت تهویه مطبوع ایران"
        : "Leading HVAC Solutions in Iran",
      type: "website",
      locale: locale === "fa" ? "fa_IR" : "en_US",
      alternateLocale: locale === "fa" ? "en_US" : "fa_IR",
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  const locale = localeParam as Locale

  // Validate locale
  if (!locales.includes(locale)) {
    notFound()
  }

  const t = getTranslation(locale)
  const isRTL = locale === "fa"

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"}>
      <head>
        {/* Preload Vazirmatn font for Persian */}
        {isRTL && (
          <>
            <link
              rel="preconnect"
              href="https://cdn.jsdelivr.net"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/fonts/webfonts/Vazirmatn-Regular.woff2"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
          </>
        )}
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header t={t} locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer t={t} locale={locale} />
      </body>
    </html>
  )
}
