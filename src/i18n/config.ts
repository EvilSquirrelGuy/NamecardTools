export type Locale = (typeof locales)[number];

export const locales = ["en", "pl", "fr"] as const;
export const defaultLocale: Locale = "en";

export type LocaleData = {code: Locale, emoji: string, nativeName: string}

export const localeData: LocaleData[] = [
  {
    code: "en",
    emoji: "🇬🇧",
    nativeName: "English",
  },
  {
    code: "pl",
    emoji: "🇵🇱",
    nativeName: "polski",
  },
  {
    code: "fr",
    emoji: "🇫🇷",
    nativeName: "Français"
  }
]