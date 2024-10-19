import { roboto_slab } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faCog } from "@fortawesome/free-solid-svg-icons";

import { useTranslations } from "next-intl";

import SettingsButton from "@/components/buttons/SettingsButton";

export default function Header() {
  const t = useTranslations("header");
  return (
    <header className="flex w-full sticky top-0 justify-between p-4 bg-violet-950/50 backdrop-blur">
      <div className="container flex flex-row gap-4">
        <Image
          src="/images/iconmark_white.svg" alt="NT" width={0} height={0} className="w-8 h-full"
        />
        <h1 className={`${roboto_slab.className} text-2xl font-semibold self-start`}>{t("title")}</h1>
      </div>
      <SettingsButton />
    </header>
  )
}