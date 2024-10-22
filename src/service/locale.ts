'use server';

import { cookies, headers } from "next/headers";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { Locale, locales, defaultLocale } from "@/i18n/config";

// set the cookie name
const COOKIE_NAME = "NTS_LOCALE"

export async function getUserLocale() {
  const headerStore = await headers();
  const cookieStore = await cookies();

  const languageHeader = {"accept-language": headerStore.get("accept-language") || "en-GB,en;q=0.5"};
  const negotiator = new Negotiator({ headers: languageHeader });
  const languages = negotiator.languages();

  return cookieStore.get(COOKIE_NAME)?.value || ( // cookie -> headers -> default
    match(languages, locales, defaultLocale) || defaultLocale 
  );
}

export async function setUserLocale(locale: Locale) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, locale);
}