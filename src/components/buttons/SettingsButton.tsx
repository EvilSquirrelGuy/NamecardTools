'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog } from "@fortawesome/free-solid-svg-icons"
import { useTranslations } from "next-intl"

import { useState } from "react";
import { createPortal } from "react-dom";
import Settings from "@/components/modals/Settings";


export default function SettingsButton() {

  let [isOpen, setIsOpen] = useState(false)

  const t = useTranslations("settings")

  return (
    <>
      <button
        className="p-2 border-indigo-200 rounded-md self-end border-1 hover:animate-[spin_0.5s_ease-out]"
        onClick={() => setIsOpen(true)}
      >
        <FontAwesomeIcon icon={faCog} className="fa-lg" title={t("settings")} />
      </button>

      {isOpen && createPortal(
        <Settings show={isOpen} setter={() => setIsOpen(false)}/>,
        document.body
      )}
    </>
  )
}