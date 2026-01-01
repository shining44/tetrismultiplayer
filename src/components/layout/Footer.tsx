"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Linkedin, Mountain } from "lucide-react"
import { cn } from "@/lib/utils"
import { Translation, Locale } from "@/types/i18n"
import { Separator } from "@/components/ui/separator"

interface FooterProps {
  t: Translation
  locale: Locale
}

export function Footer({ t, locale }: FooterProps) {
  const isRTL = locale === "fa"
  const currentYear = new Date().getFullYear()
  const yearDisplay = isRTL ? "۱۴۰۳" : currentYear

  const quickLinks = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}#about`, label: t.nav.about },
    { href: `/${locale}#products`, label: t.nav.products },
    { href: `/${locale}#projects`, label: t.nav.projects },
  ]

  const serviceLinks = [
    { href: `/${locale}#products`, label: isRTL ? "چیلرهای صنعتی" : "Industrial Chillers" },
    { href: `/${locale}#products`, label: isRTL ? "هواساز" : "Air Handling Units" },
    { href: `/${locale}#products`, label: isRTL ? "فن‌کویل" : "Fan Coil Units" },
    { href: `/${locale}#products`, label: isRTL ? "داکت اسپلیت" : "Duct Split Systems" },
  ]

  return (
    <footer className="bg-slate-900 text-slate-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12",
          isRTL && "text-right"
        )}>
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className={cn("flex items-center gap-2 mb-4", isRTL && "flex-row-reverse justify-end")}>
              <div className="bg-primary rounded-lg p-2">
                <Mountain className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className={cn("flex flex-col", isRTL && "items-end")}>
                <span className="font-bold text-lg text-white">
                  {isRTL ? "کوهساران" : "Koohsaran"}
                </span>
                <span className="text-xs text-slate-400">
                  {isRTL ? "تهویه مطبوع" : "HVAC Solutions"}
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className={cn("flex gap-3", isRTL && "justify-end")}>
              <a
                href="https://instagram.com/tahvieh.koohsaran"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-lg hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-lg hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t.footer.services}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("flex gap-3 text-slate-400 hover:text-primary transition-colors text-sm", isRTL && "flex-row-reverse")}
                >
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>{t.contact.info.address}</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+982188601973"
                  className={cn("flex gap-3 text-slate-400 hover:text-primary transition-colors text-sm items-center", isRTL && "flex-row-reverse")}
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span dir="ltr">{t.contact.info.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@koohsaran.com"
                  className={cn("flex gap-3 text-slate-400 hover:text-primary transition-colors text-sm items-center", isRTL && "flex-row-reverse")}
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>{t.contact.info.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-slate-800" />
      <div className="container mx-auto px-4 py-6">
        <div className={cn("flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400", isRTL && "md:flex-row-reverse")}>
          <p>
            © {yearDisplay} {isRTL ? "شرکت تهویه کوهساران." : "Koohsaran HVAC Company."} {t.footer.copyright}
          </p>
          <p className={cn("flex items-center gap-1", isRTL && "flex-row-reverse")}>
            {isRTL ? "طراحی و توسعه با" : "Designed & Developed with"}
            <span className="text-red-500">❤</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
