/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

// import Image from "next/image";
import { roboto_slab } from "@/app/fonts";
import { useTranslations } from "next-intl";

// import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Namecard from "@/components/Namecard";
import { Input } from "@headlessui/react";


export default function Home() {
  const t = useTranslations("home")
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-middle sm:align-middle">
        <h1 className={`${roboto_slab.className} text-lg`}>Enter UID:</h1>
        <Input type="text" pattern="[0-9]{9-10}" className="p-2 bg-violet-900 rounded-md focus:border-violet-200 border-b-2 border-transparent outline-none placeholder:text-violet-200/50" placeholder="Enter UID..." />
        <a
          className="flex shadow-md hover:shadow-xl bg-violet-600 hover:bg-violet-500 transition-all duration-300 px-4 py-2 items-center rounded-lg gap-2 cursor-pointer"
        >
          See Namecards!
          <FontAwesomeIcon icon={faArrowRight} className="fa-md"></FontAwesomeIcon>
        </a>
      </main>
    </div>
  );
}
