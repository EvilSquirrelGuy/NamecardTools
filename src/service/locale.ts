'use server'

import { cookies, headers } from "next/headers";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { Locale, locales, defaultLocale } from "@/i18n/config";

// set the cookie name
const COOKIE_NAME = "NTS_LOCALE"

const languageHeader = {"accept-language": headers().get("accept-language") || "en-GB,en;q=0.5"};
const negotiator = new Negotiator({ headers: languageHeader });
const languages = negotiator.languages();

export async function getUserLocale() {
  // console.log(languages, headers().get("accept-language"))
  return cookies().get(COOKIE_NAME)?.value || (
    match(languages, locales, defaultLocale) || defaultLocale 
  );
}

export async function setUserLocale(locale: Locale) {
  cookies().set(COOKIE_NAME, locale);
}