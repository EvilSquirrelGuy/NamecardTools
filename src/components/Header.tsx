import { roboto_slab } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");
  return (
    <header className="flex w-full sticky top-0 justify-between p-4">
      <div className="container flex flex-row gap-4">
        <Image
          src="/images/iconmark_white.svg" alt="NT" width={0} height={0} className="w-8 h-full"
        />
        <h1 className={`${roboto_slab.className} text-2xl font-semibold self-start`}>{t("title")}</h1>
      </div>
      <button className="p-2 border-indigo-200 rounded-md self-end border-1 hover:animate-[spin_0.5s_ease-out]"><FontAwesomeIcon icon={faCog} className="fa-lg" title={t("settings")}></FontAwesomeIcon></button>
    </header>
  )
}