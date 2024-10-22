/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { useTranslations } from "next-intl";

export default function Footer() {

  const t = useTranslations("footer");

  const FooterLink = ({text, url, icon}: {text: string, url: string, icon: IconDefinition}) => (
    <a className="text-violet-500 hover:text-violet-300 transition-all sm:text-center" href={url}>
      <FontAwesomeIcon icon={icon} className="pr-2 fa-sm" />
      {text}
    </a>
  )

  return (
    <footer className="flex flex-row gap-16 items-center w-full bottom-0 justify-center p-4 pb-12">
      <FooterLink text={t("github_link")} icon={faGithub} url="https://github.com/EvilSquirrelGuy/NamecardTools" />
      <FooterLink text={t("download_gi")} icon={faDownload} url="https://genshin.hoyoverse.com/en/home" />
    </footer>
  )
}