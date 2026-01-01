"use client"

import * as React from "react"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Translation, Locale } from "@/types/i18n"

interface ContactSectionProps {
  t: Translation
  locale: Locale
}

export function ContactSection({ t, locale }: ContactSectionProps) {
  const isRTL = locale === "fa"
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => setIsSubmitting(false), 2000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: isRTL ? "آدرس" : "Address",
      value: t.contact.info.address,
      href: "https://maps.google.com",
    },
    {
      icon: Phone,
      label: isRTL ? "تلفن" : "Phone",
      value: t.contact.info.phone,
      href: `tel:${t.contact.info.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      label: isRTL ? "ایمیل" : "Email",
      value: t.contact.info.email,
      href: `mailto:${t.contact.info.email}`,
    },
    {
      icon: Clock,
      label: isRTL ? "ساعات کاری" : "Working Hours",
      value: isRTL ? "شنبه تا چهارشنبه: ۸ تا ۱۷" : "Sat-Wed: 8AM - 5PM",
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white dark:bg-[#1e3a5f]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={cn(
          "max-w-3xl mb-16",
          !isRTL && "mx-auto text-center"
        )}>
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
            {isRTL ? "تماس با ما" : "Contact Us"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-sky-200">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 lg:order-2">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary to-primary/90 text-white overflow-hidden">
              <CardContent className="p-8 relative">
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/5 rounded-full" />

                <h3 className="text-xl font-bold mb-6 relative">
                  {isRTL ? "اطلاعات تماس" : "Contact Information"}
                </h3>
                <div className="space-y-6 relative">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4"
                    >
                      <div className="bg-white/15 p-2.5 rounded-xl flex-shrink-0">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-white/70 mb-1">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className={cn("text-sm font-medium hover:underline", item.icon === Phone && "ltr-text")}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-white/15 relative">
                  <p className="text-sm text-white/70 mb-4">
                    {isRTL ? "ما را در شبکه‌های اجتماعی دنبال کنید" : "Follow us on social media"}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com/tahvieh.koohsaran"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/15 p-2.5 rounded-xl hover:bg-white/25 transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/15 p-2.5 rounded-xl hover:bg-white/25 transition-colors"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 lg:order-1">
            <Card className="border border-slate-100 dark:border-sky-700/50 shadow-sm dark:bg-[#3a5a80]">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.contact.form.name}</Label>
                      <Input
                        id="name"
                        placeholder={isRTL ? "نام شما" : "Your name"}
                        required
                        className="border-slate-200 dark:border-sky-600 focus:border-primary dark:bg-[#264b73]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.contact.form.email}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        required
                        className="border-slate-200 dark:border-sky-600 focus:border-primary dark:bg-[#264b73] ltr-text"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t.contact.form.phone}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={isRTL ? "۰۹۱۲۳۴۵۶۷۸۹" : "09123456789"}
                        className="border-slate-200 dark:border-sky-600 focus:border-primary dark:bg-[#264b73] ltr-text"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">{t.contact.form.subject}</Label>
                      <Input
                        id="subject"
                        placeholder={isRTL ? "موضوع پیام" : "Message subject"}
                        className="border-slate-200 dark:border-sky-600 focus:border-primary dark:bg-[#264b73]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t.contact.form.message}</Label>
                    <Textarea
                      id="message"
                      placeholder={isRTL ? "پیام خود را بنویسید..." : "Write your message..."}
                      required
                      className={cn(
                        "min-h-[150px] border-slate-200 dark:border-sky-600 focus:border-primary dark:bg-[#264b73]",
                        isRTL && "leading-relaxed"
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full md:w-auto gap-2 shadow-lg shadow-primary/20"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                        </span>
                        {isRTL ? "در حال ارسال..." : "Sending..."}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        {t.contact.form.submit}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12">
          <Card className="border border-slate-100 dark:border-sky-700/50 shadow-sm overflow-hidden">
            <div className="h-[300px] bg-slate-50 dark:bg-[#3a5a80] flex items-center justify-center">
              <div className="text-center text-slate-400">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-slate-300" />
                <p className="text-lg font-medium text-slate-500">
                  {isRTL ? "نقشه موقعیت" : "Location Map"}
                </p>
                <p className="text-sm text-slate-400">
                  {isRTL ? "تهران، خیابان ملاصدرا" : "Molla Sadra St., Tehran"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
