"use client"

import * as React from "react"
import { MapPin, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Translation, Locale } from "@/types/i18n"
import { projects } from "@/lib/data"

interface ProjectsSectionProps {
  t: Translation
  locale: Locale
}

export function ProjectsSection({ t, locale }: ProjectsSectionProps) {
  const isRTL = locale === "fa"

  const categories = [
    { id: "all", label: t.projects.categories.all },
    { id: "commercial", label: t.projects.categories.commercial },
    { id: "industrial", label: t.projects.categories.industrial },
    { id: "healthcare", label: t.projects.categories.healthcare },
    { id: "hospitality", label: t.projects.categories.hospitality },
    { id: "educational", label: t.projects.categories.educational },
  ]

  const getFilteredProjects = (category: string) => {
    if (category === "all") return projects
    return projects.filter((p) => p.category === category)
  }

  return (
    <section id="projects" className="py-20 lg:py-28 bg-white dark:bg-[#1e3a5f]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={cn(
          "max-w-3xl mb-12",
          isRTL ? "ml-auto" : "mx-auto text-center"
        )}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            {isRTL ? "پروژه‌ها" : "Projects"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            {t.projects.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-sky-200">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Projects Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="flex-wrap h-auto gap-2 bg-slate-100 dark:bg-[#3a5a80] p-2 rounded-xl">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFilteredProjects(cat.id).map((project) => (
                  <Card
                    key={project.id}
                    className="group overflow-hidden border border-slate-100 dark:border-sky-700/50 shadow-sm hover:shadow-lg transition-all duration-300 bg-white dark:bg-[#3a5a80]"
                  >
                    {/* Project Image Placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Building2 className="h-16 w-16 text-slate-300 dark:text-sky-400" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <Badge className="absolute top-4 right-4" variant="secondary">
                        {t.projects.categories[project.category as keyof typeof t.projects.categories]}
                      </Badge>
                    </div>

                    <CardContent className="p-5">
                      <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-2 group-hover:text-primary transition-colors">
                        {isRTL ? project.nameFA : project.nameEN}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-sky-200">
                        <MapPin className="h-4 w-4" />
                        <span>{isRTL ? project.locationFA : project.locationEN}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gradient-to-r from-primary/5 via-blue-500/5 to-primary/5 rounded-2xl border border-primary/10">
          {[
            { value: isRTL ? "+۳۵" : "35+", label: isRTL ? "بیمارستان" : "Hospitals" },
            { value: isRTL ? "+۵۰" : "50+", label: isRTL ? "مجموعه ورزشی" : "Sports Facilities" },
            { value: isRTL ? "+۴۰" : "40+", label: isRTL ? "دانشگاه" : "Universities" },
            { value: isRTL ? "+۲۰" : "20+", label: isRTL ? "هتل" : "Hotels" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600 dark:text-sky-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
