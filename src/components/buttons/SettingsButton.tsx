/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

'use client';

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
        title={t("settings")}
      >
        <FontAwesomeIcon icon={faCog} className="fa-lg" />
      </button>

      {isOpen && createPortal(
        <Settings show={isOpen} setter={() => setIsOpen(false)}/>,
        document.body
      )}
    </>
  )
}