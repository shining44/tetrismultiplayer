import { fa } from "./fa"
import { en } from "./en"
import { Locale, Translation } from "@/types/i18n"

export const translations: Record<Locale, Translation> = {
  fa,
  en,
}

export function getTranslation(locale: Locale): Translation {
  return translations[locale] || translations.fa
}

export const locales: Locale[] = ["fa", "en"]
export const defaultLocale: Locale = "fa"
