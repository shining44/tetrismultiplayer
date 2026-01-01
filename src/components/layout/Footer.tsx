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
    <footer className="bg-slate-900 dark:bg-[#162a45] text-slate-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 lg:order-4">
            <Link href={`/${locale}`} className="flex items-center gap-3 mb-4">
              <div className="bg-primary rounded-xl p-2">
                <Mountain className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white">
                  {isRTL ? "کوهساران" : "Koohsaran"}
                </span>
                <span className="text-xs text-slate-400">
                  {isRTL ? "تهویه مطبوع" : "HVAC Solutions"}
                </span>
              </div>
            </Link>
            <p className={cn(
              "text-slate-400 text-sm leading-relaxed mb-6",
              isRTL && "leading-loose"
            )}>
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/tahvieh.koohsaran"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 dark:bg-[#1e3a5f] p-2.5 rounded-xl hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 dark:bg-[#1e3a5f] p-2.5 rounded-xl hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:order-3">
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
          <div className="lg:order-2">
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
          <div className="lg:order-1">
            <h3 className="font-semibold text-white mb-4">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 text-slate-400 hover:text-primary transition-colors text-sm"
                >
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className={isRTL ? "leading-relaxed" : ""}>{t.contact.info.address}</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+982188601973"
                  className="flex gap-3 text-slate-400 hover:text-primary transition-colors text-sm items-center"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span className="ltr-text">{t.contact.info.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@koohsaran.com"
                  className="flex gap-3 text-slate-400 hover:text-primary transition-colors text-sm items-center"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span className="ltr-text">{t.contact.info.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-slate-800 dark:bg-sky-800/50" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>
            © {yearDisplay} {isRTL ? "شرکت تهویه کوهساران." : "Koohsaran HVAC Company."} {t.footer.copyright}
          </p>
          <p className="flex items-center gap-1.5">
            {isRTL ? "طراحی و توسعه با" : "Designed & Developed with"}
            <span className="text-red-400">♥</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
