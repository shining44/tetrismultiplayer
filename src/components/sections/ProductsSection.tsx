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

const iconMap = {
  Snowflake,
  Wind,
  Thermometer,
  Droplets,
  Zap: Fan,
  Wrench: Box,
}

export function ProductsSection({ t, locale }: ProductsSectionProps) {
  const isRTL = locale === "fa"

  const products = [
    {
      icon: Snowflake,
      ...t.products.categories.chillers,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Wind,
      ...t.products.categories.ahu,
      gradient: "from-slate-500 to-slate-600",
    },
    {
      icon: Fan,
      ...t.products.categories.fancoil,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Box,
      ...t.products.categories.rooftop,
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Thermometer,
      ...t.products.categories.ductsplit,
      gradient: "from-red-500 to-rose-500",
    },
    {
      icon: Droplets,
      ...t.products.categories.coolingtower,
      gradient: "from-purple-500 to-violet-500",
    },
  ]

  return (
    <section id="products" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={cn("max-w-3xl mb-16", isRTL ? "mr-auto text-right" : "mx-auto text-center")}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            {isRTL ? "محصولات و خدمات" : "Products & Services"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
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
              className={cn(
                "group border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer",
                isRTL && "text-right"
              )}
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
                <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Grid */}
        <div className={cn("mt-20", isRTL && "text-right")}>
          <h3 className={cn(
            "text-2xl font-bold text-slate-900 dark:text-white mb-8",
            isRTL ? "text-right" : "text-center"
          )}>
            {isRTL ? "خدمات تخصصی" : "Specialized Services"}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-shadow",
                  isRTL && "flex-row-reverse"
                )}
              >
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <Snowflake className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {isRTL ? service.titleFA : service.titleEN}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
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
