import { getTranslation } from "@/locales"
import { Locale } from "@/types/i18n"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ProductsSection } from "@/components/sections/ProductsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { CertificationsSection } from "@/components/sections/CertificationsSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: localeParam } = await params
  const locale = localeParam as Locale
  const t = getTranslation(locale)

  return (
    <>
      <HeroSection t={t} locale={locale} />
      <AboutSection t={t} locale={locale} />
      <ProductsSection t={t} locale={locale} />
      <ProjectsSection t={t} locale={locale} />
      <CertificationsSection t={t} locale={locale} />
      <ContactSection t={t} locale={locale} />
    </>
  )
}
