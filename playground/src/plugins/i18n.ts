import type { Localization } from "@/locales/en.ts";
import type { SupportedLanguage } from "@/services/language/index.ts";
import { createI18n } from "vue-i18n";
import { de } from "@/locales/de.ts";
import { en } from "@/locales/en.ts";
import { BROWSER_LANGUAGE } from "@/services/language/index.ts";

export const i18n = createI18n<[Localization], SupportedLanguage>({
  legacy: false,
  locale: BROWSER_LANGUAGE,
  messages: {
    en,
    de,
  },
});

export function $t(key: keyof Localization, replacement?: Record<string, unknown>) {
  return i18n.global.t(key, replacement ?? {});
}
