"use client"

import { Snowflake, Wind, Thermometer, Droplets, Fan, Box } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Translation, Locale } from "@/types/i18n"
import { services } from "@/lib/data"

interface ProductsSectionProps {
  t: Translation
  locale: Locale
}

export function ProductsSection({ t, locale }: ProductsSectionProps) {
  const isRTL = locale === "fa"

  const products = [
    {
      icon: Snowflake,
      ...t.products.categories.chillers,
      gradient: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50",
    },
    {
      icon: Wind,
      ...t.products.categories.ahu,
      gradient: "from-slate-500 to-slate-600",
      bgLight: "bg-slate-50",
    },
    {
      icon: Fan,
      ...t.products.categories.fancoil,
      gradient: "from-emerald-500 to-green-500",
      bgLight: "bg-emerald-50",
    },
    {
      icon: Box,
      ...t.products.categories.rooftop,
      gradient: "from-amber-500 to-orange-500",
      bgLight: "bg-amber-50",
    },
    {
      icon: Thermometer,
      ...t.products.categories.ductsplit,
      gradient: "from-rose-500 to-red-500",
      bgLight: "bg-rose-50",
    },
    {
      icon: Droplets,
      ...t.products.categories.coolingtower,
      gradient: "from-violet-500 to-purple-500",
      bgLight: "bg-violet-50",
    },
  ]

  return (
    <section id="products" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={cn(
          "max-w-3xl mb-16",
          isRTL ? "mr-auto ml-0" : "mx-auto text-center"
        )}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            {isRTL ? "محصولات و خدمات" : "Products & Services"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            {t.products.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            {t.products.subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer bg-white dark:bg-slate-800"
            >
              <CardHeader className="pb-2">
                <div className={cn("flex items-start gap-4", isRTL && "flex-row-reverse")}>
                  <div className={cn(
                    "p-3 rounded-xl bg-gradient-to-br text-white transition-transform group-hover:scale-110",
                    product.gradient
                  )}>
                    <product.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {product.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className={cn(
                  "text-slate-600 dark:text-slate-400 leading-relaxed",
                  isRTL && "leading-loose"
                )}>
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-20">
          <h3 className={cn(
            "text-2xl font-bold text-slate-800 dark:text-white mb-8",
            isRTL ? "text-right" : "text-center"
          )}>
            {isRTL ? "خدمات تخصصی" : "Specialized Services"}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow",
                  isRTL && "flex-row-reverse"
                )}
              >
                <div className="bg-primary/8 p-3 rounded-xl flex-shrink-0 border border-primary/10">
                  <Snowflake className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-1">
                    {isRTL ? service.titleFA : service.titleEN}
                  </h4>
                  <p className={cn(
                    "text-sm text-slate-600 dark:text-slate-400",
                    isRTL && "leading-relaxed"
                  )}>
                    {isRTL ? service.descFA : service.descEN}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
