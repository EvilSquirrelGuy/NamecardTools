'use client';

import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function SeeUIDButton() { 
  const status = useFormStatus()

  const t = useTranslations("home")
  
  return (
    <button
      className={`flex shadow-md hover:shadow-xl bg-violet-600 hover:bg-violet-500 transition-all duration-300 px-4 py-2 items-center rounded-lg gap-2 cursor-pointer ${status.pending ? "bg-violet-600/50" : ""}`}
      type="submit"
      disabled={status.pending ? true : false}
    >
      {t("see_namecards")}!
      <FontAwesomeIcon icon={faArrowRight} className="fa-md"></FontAwesomeIcon>
    </button>
  )
}