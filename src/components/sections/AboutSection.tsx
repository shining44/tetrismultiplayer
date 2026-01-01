"use client"

import { CheckCircle2, Target, Eye, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Translation, Locale } from "@/types/i18n"

interface AboutSectionProps {
  t: Translation
  locale: Locale
}

export function AboutSection({ t, locale }: AboutSectionProps) {
  const isRTL = locale === "fa"

  return (
    <section id="about" className="py-20 lg:py-28 bg-white dark:bg-[#1e3a5f]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={cn(
          "max-w-3xl mb-16",
          !isRTL && "mx-auto text-center"
        )}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            {isRTL ? "درباره ما" : "About Us"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            {t.about.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-sky-200">
            {t.about.subtitle}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* History Column - Primary content, should be on RIGHT in RTL */}
          <div className={cn("lg:order-2", isRTL && "lg:order-1")}>
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -top-4 w-20 h-1 bg-primary rounded-full right-0" />

              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 pt-4">
                {isRTL ? "تاریخچه و سابقه" : "History & Background"}
              </h3>

              <p className={cn(
                "text-slate-600 dark:text-sky-100 leading-relaxed mb-8",
                isRTL && "leading-loose"
              )}>
                {t.about.history}
              </p>

              {/* Key Highlights */}
              <div className="grid gap-4">
                {[
                  { value: isRTL ? "۱۳۷۵" : "1997", label: isRTL ? "سال تأسیس" : "Year Founded" },
                  { value: isRTL ? "۸۰ میلیارد ریال" : "80B Rials", label: isRTL ? "سرمایه ثبتی" : "Registered Capital" },
                  { value: isRTL ? "+۷۰۰" : "700+", label: isRTL ? "پروژه تکمیل شده" : "Completed Projects" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-slate-50 dark:bg-[#264b73] rounded-xl p-4 border border-slate-100 dark:border-sky-700/50"
                  >
                    <div className="text-2xl font-bold text-primary">{item.value}</div>
                    <div className="text-slate-600 dark:text-sky-200">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values Column - Secondary content, should be on LEFT in RTL */}
          <div className={cn("space-y-6 lg:order-1", isRTL && "lg:order-2")}>
            {/* Mission Card */}
            <Card className="border border-slate-100 dark:border-sky-700/50 shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-primary/3 to-transparent dark:bg-[#3a5a80]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl flex-shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
                      {isRTL ? "مأموریت" : "Mission"}
                    </h4>
                    <p className={cn(
                      "text-slate-600 dark:text-sky-100 text-sm leading-relaxed",
                      isRTL && "leading-loose"
                    )}>
                      {t.about.mission}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="border border-slate-100 dark:border-sky-700/50 shadow-sm hover:shadow-md transition-shadow bg-gradient-to-br from-blue-500/3 to-transparent dark:bg-[#3a5a80]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-xl flex-shrink-0">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
                      {isRTL ? "چشم‌انداز" : "Vision"}
                    </h4>
                    <p className={cn(
                      "text-slate-600 dark:text-sky-100 text-sm leading-relaxed",
                      isRTL && "leading-loose"
                    )}>
                      {t.about.vision}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Values Card */}
            <Card className="border border-slate-100 dark:border-sky-700/50 shadow-sm hover:shadow-md transition-shadow dark:bg-[#3a5a80]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500/10 p-3 rounded-xl flex-shrink-0">
                    <Award className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">
                      {t.about.values.title}
                    </h4>
                    <ul className="space-y-2">
                      {t.about.values.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-sm text-slate-600 dark:text-sky-100"
                        >
                          <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
