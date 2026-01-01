"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Building2, Clock, Handshake, Ruler } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Translation, Locale } from "@/types/i18n"

interface HeroSectionProps {
  t: Translation
  locale: Locale
}

export function HeroSection({ t, locale }: HeroSectionProps) {
  const isRTL = locale === "fa"
  const Arrow = isRTL ? ArrowLeft : ArrowRight

  const stats = [
    { icon: Building2, value: isRTL ? "+۷۰۰" : "700+", label: isRTL ? "پروژه موفق" : "Projects" },
    { icon: Clock, value: isRTL ? "+۲۷" : "27+", label: isRTL ? "سال تجربه" : "Years" },
    { icon: Handshake, value: isRTL ? "۵" : "5", label: isRTL ? "شریک بین‌المللی" : "Partners" },
    { icon: Ruler, value: isRTL ? "+۱۰M" : "10M+", label: isRTL ? "متر مربع" : "Sqm" },
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-[#1e3a5f]">
      {/* Clean Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white to-white dark:from-[#264b73] dark:via-[#1e3a5f] dark:to-[#1e3a5f]" />

      {/* Subtle Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={cn(
          "absolute -top-32 w-72 h-72 bg-primary/5 rounded-full blur-3xl",
          isRTL ? "-left-32" : "-right-32"
        )} />
        <div className={cn(
          "absolute -bottom-32 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl",
          isRTL ? "-right-32" : "-left-32"
        )} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/3 to-blue-400/3 rounded-full blur-3xl" />
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className={cn(
          "max-w-4xl",
          isRTL ? "mr-auto ml-0" : "ml-0 mr-auto"
        )}>
          {/* Badge */}
          <div className={cn(
            "inline-flex items-center gap-2 bg-primary/8 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8 border border-primary/10",
            isRTL && "flex-row-reverse"
          )}>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            {isRTL ? "از سال ۱۳۷۵ در خدمت صنعت ایران" : "Serving Iran's Industry Since 1997"}
          </div>

          {/* Main Heading */}
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6 leading-tight",
            isRTL && "leading-relaxed"
          )}>
            {t.hero.title}
            <span className="block text-primary mt-2">{t.hero.subtitle}</span>
          </h1>

          {/* Description */}
          <p className={cn(
            "text-lg md:text-xl text-slate-600 dark:text-sky-100 mb-10 max-w-2xl leading-relaxed",
            isRTL && "leading-loose"
          )}>
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className={cn("flex flex-wrap gap-4 mb-14", isRTL && "flex-row-reverse")}>
            <Button size="xl" asChild className="group shadow-lg shadow-primary/20">
              <Link href={`/${locale}#contact`} className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
                {t.hero.cta}
                <Arrow className={cn(
                  "h-4 w-4 transition-transform",
                  isRTL ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"
                )} />
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild className="border-slate-200 hover:border-primary/30 hover:bg-primary/5">
              <Link href={`/${locale}#projects`}>
                {isRTL ? "مشاهده پروژه‌ها" : "View Projects"}
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-10 border-t border-slate-100 dark:border-sky-700/50"
          )}>
            {stats.map((stat, index) => (
              <div key={index} className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
                <div className="bg-primary/8 p-3 rounded-xl border border-primary/10">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="text-2xl font-bold text-slate-800 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-slate-500 dark:text-sky-200">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs font-medium">{isRTL ? "اسکرول کنید" : "Scroll down"}</span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-200 dark:border-sky-600 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-slate-300 dark:bg-sky-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
