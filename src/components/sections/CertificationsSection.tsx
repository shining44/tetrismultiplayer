"use client"

import { Award, Shield, Globe2, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Translation, Locale } from "@/types/i18n"
import { certifications, partners } from "@/lib/data"

interface CertificationsSectionProps {
  t: Translation
  locale: Locale
}

export function CertificationsSection({ t, locale }: CertificationsSectionProps) {
  const isRTL = locale === "fa"

  return (
    <section id="certifications" className="py-20 lg:py-28 bg-slate-50 dark:bg-[#264b73]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={cn(
          "max-w-3xl mb-16",
          !isRTL && "mx-auto text-center"
        )}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            {isRTL ? "گواهینامه‌ها" : "Certifications"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            {t.certifications.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-sky-200">
            {t.certifications.subtitle}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="border border-slate-100 dark:border-sky-700/50 shadow-sm hover:shadow-lg transition-all duration-300 group bg-white dark:bg-[#3a5a80]"
            >
              <CardContent className="p-6 text-center">
                <div className={cn(
                  "w-16 h-16 rounded-full bg-primary/8 border border-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform mx-auto"
                )}>
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl text-slate-800 dark:text-white mb-2">
                  {isRTL ? cert.nameFA : cert.name}
                </h3>
                <p className={cn(
                  "text-sm text-slate-600 dark:text-sky-100 mb-2",
                  isRTL && "leading-relaxed"
                )}>
                  {isRTL ? cert.descriptionFA : cert.description}
                </p>
                <p className="text-xs text-primary font-medium">
                  {isRTL ? cert.issuerFA : cert.issuer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partners Section */}
        <div>
          <h3 className={cn(
            "text-2xl font-bold text-slate-800 dark:text-white mb-8",
            !isRTL && "text-center"
          )}>
            {t.certifications.partners}
          </h3>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="border border-slate-100 dark:border-sky-700/50 shadow-sm hover:shadow-md transition-all duration-300 group bg-white dark:bg-[#3a5a80]"
              >
                <CardContent className="p-6 text-center">
                  {/* Logo Placeholder */}
                  <div className="w-20 h-20 rounded-xl bg-slate-50 dark:bg-[#264b73] flex items-center justify-center mb-4 group-hover:bg-primary/8 transition-colors mx-auto border border-slate-100 dark:border-sky-600">
                    <Globe2 className="h-10 w-10 text-slate-400 group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-1">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-primary font-medium mb-2">
                    {isRTL ? partner.countryFA : partner.country}
                  </p>
                  <p className={cn(
                    "text-xs text-slate-500 dark:text-sky-200",
                    isRTL && "leading-relaxed"
                  )}>
                    {isRTL ? partner.descriptionFA : partner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 p-8 bg-white dark:bg-[#3a5a80] rounded-2xl border border-slate-100 dark:border-sky-700/50 shadow-sm">
          {[
            {
              icon: Shield,
              titleFA: "استانداردهای بین‌المللی",
              titleEN: "International Standards",
              descFA: "رعایت استانداردهای ISO و LEED در تمامی پروژه‌ها",
              descEN: "Adherence to ISO and LEED standards in all projects",
            },
            {
              icon: CheckCircle,
              titleFA: "تضمین کیفیت",
              titleEN: "Quality Assurance",
              descFA: "گواهی TUV آلمان برای سیستم مدیریت کیفیت",
              descEN: "TUV Germany certification for quality management",
            },
            {
              icon: Globe2,
              titleFA: "شرکای جهانی",
              titleEN: "Global Partners",
              descFA: "همکاری با برندهای معتبر از هند، چین، آلمان و ایتالیا",
              descEN: "Partnership with leading brands from India, China, Germany & Italy",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <div className="bg-primary/8 p-3 rounded-xl flex-shrink-0 border border-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-1">
                  {isRTL ? feature.titleFA : feature.titleEN}
                </h4>
                <p className={cn(
                  "text-sm text-slate-600 dark:text-sky-100",
                  isRTL && "leading-relaxed"
                )}>
                  {isRTL ? feature.descFA : feature.descEN}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
