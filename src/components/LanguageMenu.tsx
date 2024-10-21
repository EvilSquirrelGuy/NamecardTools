/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

'use client';

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useState, useTransition } from "react";
import { setUserLocale, getUserLocale } from "@/service/locale";
import { Locale, localeData } from "@/i18n/config";

//import Twemoji from "react-twemoji";
import { useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function LanguageMenu() {
  const lang = null;
  // find the index of the locale and set to state
  let [currLang, setCurrLang] = useState(localeData[0])

  const [isPending, startTransition] = useTransition()

  const t = useTranslations("settings.languages")

  function onChange(locale: Locale) {
    startTransition(() => {
      setUserLocale(locale)
    })
  }

  return (
    <Listbox value={currLang} onChange={(lc) => {setCurrLang(lc); onChange(lc.code)}}>
      <ListboxButton className={`px-4 py-2 rounded-md border-violet-300 border-2 data-[open]:bg-violet-400 flex gap-2 flex-row items-center` + (isPending ? `opacity-60 pointer-events-none` : ``)}>
        {t("select")}
        <FontAwesomeIcon icon={faCaretDown} />
      </ListboxButton>
      <ListboxOptions anchor="bottom" className="z-40 bg-violet-400 p-2 rounded-md drop-shadow-md">
        {localeData.map((locale) => (
          <ListboxOption key={locale.code} value={locale} className="flex flex-row p-2 rounded-md hover:bg-violet-300 cursor-pointer data-[focus]:bg-violet-300">
            {locale.emoji} {locale.nativeName} ({t(locale.code)})
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  )
}