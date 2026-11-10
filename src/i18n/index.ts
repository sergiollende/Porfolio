import english from "./locales/en.json";
import spanish from "./locales/es.json";
import type { Locale, PortfolioContent } from "../types/content";

// Both languages are checked against one shape, without mixed-language fallbacks.
const translations: Record<Locale, PortfolioContent> = { en: english, es: spanish };
export function getLocale(url: URL): Locale {
  return url.pathname.split("/")[1] === "es" ? "es" : "en";
}
export function getContent(locale: Locale): PortfolioContent {
  return translations[locale];
}
export function localePath(locale: Locale): string {
  return locale === "es" ? "/es/" : "/";
}
