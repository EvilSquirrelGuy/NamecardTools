import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

import Modal from "@/components/modals/Modal";
import LanguageMenu from "../LanguageMenu";


export default function Settings({ show, setter }: {show: boolean, setter: any}) {
  // load translations
  const t = useTranslations("settings")

  return (
    <Modal show={show} setter={setter} title={t("settings")}>
      <div className="container items-center justify-start flex flex-row gap-8">
        <div>{t("language")}</div>
        <LanguageMenu />
      </div>
    </Modal>
  )
}