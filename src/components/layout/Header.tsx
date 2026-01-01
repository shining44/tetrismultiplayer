"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, Mail, Globe, Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Translation, Locale } from "@/types/i18n"

interface HeaderProps {
  t: Translation
  locale: Locale
}

export function Header({ t, locale }: HeaderProps) {
  const pathname = usePathname()
  const isRTL = locale === "fa"
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}#about`, label: t.nav.about },
    { href: `/${locale}#products`, label: t.nav.products },
    { href: `/${locale}#projects`, label: t.nav.projects },
    { href: `/${locale}#certifications`, label: t.nav.certifications },
    { href: `/${locale}#contact`, label: t.nav.contact },
  ]

  const otherLocale = locale === "fa" ? "en" : "fa"
  const localeLabel = locale === "fa" ? "EN" : "فا"

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className={cn(
          "container mx-auto px-4 flex justify-between items-center text-sm",
          isRTL && "flex-row-reverse"
        )}>
          <div className={cn("flex items-center gap-6", isRTL && "flex-row-reverse")}>
            <a
              href="tel:+982188601973"
              className={cn(
                "flex items-center gap-2 hover:text-primary-foreground/80 transition-colors",
                isRTL && "flex-row-reverse"
              )}
            >
              <Phone className="h-4 w-4" />
              <span dir="ltr">{isRTL ? "۰۲۱-۸۸۶۰۱۹۷۳" : "+98 21 8860 1973"}</span>
            </a>
            <a
              href="mailto:info@koohsaran.com"
              className={cn(
                "flex items-center gap-2 hover:text-primary-foreground/80 transition-colors",
                isRTL && "flex-row-reverse"
              )}
            >
              <Mail className="h-4 w-4" />
              <span>info@koohsaran.com</span>
            </a>
          </div>
          <Link
            href={`/${otherLocale}${pathname.replace(`/${locale}`, "")}`}
            className={cn(
              "flex items-center gap-2 hover:text-primary-foreground/80 transition-colors",
              isRTL && "flex-row-reverse"
            )}
          >
            <Globe className="h-4 w-4" />
            <span>{localeLabel}</span>
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800"
            : "bg-white dark:bg-slate-950"
        )}
      >
        <div className="container mx-auto px-4">
          <div className={cn("flex h-16 items-center justify-between", isRTL && "flex-row-reverse")}>
            {/* Logo */}
            <Link href={`/${locale}`} className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
              <div className="bg-primary rounded-xl p-2">
                <Mountain className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className={cn("flex flex-col", isRTL && "items-end")}>
                <span className="font-bold text-lg leading-tight text-slate-800 dark:text-white">
                  {isRTL ? "کوهساران" : "Koohsaran"}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {isRTL ? "تهویه مطبوع" : "HVAC Solutions"}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className={cn("hidden lg:flex items-center gap-1", isRTL && "flex-row-reverse")}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary",
                    pathname === item.href && "bg-primary/8 text-primary"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA & Language */}
            <div className={cn("hidden lg:flex items-center gap-4", isRTL && "flex-row-reverse")}>
              <Link
                href={`/${otherLocale}${pathname.replace(`/${locale}`, "")}`}
                className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-primary transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>{localeLabel}</span>
              </Link>
              <Button asChild className="shadow-sm shadow-primary/20">
                <Link href={`/${locale}#contact`}>{t.hero.cta}</Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-slate-600">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side={isRTL ? "right" : "left"} className="w-[300px] bg-white dark:bg-slate-950">
                <SheetTitle className={cn(
                  "flex items-center gap-3 mb-8",
                  isRTL && "flex-row-reverse justify-end"
                )}>
                  <div className="bg-primary rounded-xl p-2">
                    <Mountain className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-slate-800 dark:text-white">
                    {isRTL ? "کوهساران" : "Koohsaran"}
                  </span>
                </SheetTitle>
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "px-4 py-3 text-base font-medium rounded-lg transition-colors text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800",
                        pathname === item.href && "bg-primary/8 text-primary"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t border-slate-100 dark:border-slate-800 my-4" />
                  <Link
                    href={`/${otherLocale}${pathname.replace(`/${locale}`, "")}`}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-3 text-slate-500 hover:text-primary transition-colors",
                      isRTL && "flex-row-reverse"
                    )}
                  >
                    <Globe className="h-4 w-4" />
                    <span>{locale === "fa" ? "English" : "فارسی"}</span>
                  </Link>
                  <Button asChild className="mt-4 shadow-sm shadow-primary/20">
                    <Link href={`/${locale}#contact`} onClick={() => setIsOpen(false)}>
                      {t.hero.cta}
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
