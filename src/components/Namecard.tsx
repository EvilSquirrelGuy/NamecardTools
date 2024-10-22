/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import Image from "next/image";
import { AssetFinder } from "enkanetwork.js";
import { hywenhei_85w } from "@/app/fonts";
import { getLocale } from "next-intl/server";
import { getUserLocale } from "@/service/locale";

const { genshin } = new AssetFinder();

const namecardRoles = ["list", "profile"]
type NamecardRole = (typeof namecardRoles)[number]

export default async function Namecard({id, role="banner"}: {id: number | string, role?: NamecardRole}) {
  
  const namecard = genshin.namecard(id)

  const namecardUrl = genshin.toLink(namecard.assets.picPath[
    id === 210001 ? 0 : // Genshin Impact: A New World - only has the "banner" style
    role === "list" ? 0 : 1  // the "friends-list" namecard style is at [0], the "banner" is at [1]
  ])

  return (
    <div
      className="p-4 rounded-md border-violet-300 border-2 w-full h-0 pt-[47.62%] hover:scale-105 transition-all duration-500 relative z-0"
      key={id}
      style={{backgroundImage: `url("${namecardUrl}")`, backgroundSize: "cover"}}
    >
      <div className="relative t-0 b-0 r-0 l-0 flex flex-col-reverse align-bottom h-full w-full">
        <span className={`${hywenhei_85w.className} self-start mt-auto drop-shadow-sm`}>{namecard.name}</span>
      </div>
    </div>
  )
}