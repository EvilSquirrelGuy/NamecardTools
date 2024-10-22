/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import Namecard from "@/components/Namecard";
import { Wrapper } from "enkanetwork.js";
import { notFound } from "next/navigation";

const { genshin } = new Wrapper();


export default async function Profile(
  {params, searchParams}:
  {params: { uid: string }, searchParams: { [key: string]: string | string[] | undefined }
}) {

  const uid = (await params)["uid"]
  
  const enkaProfile = await genshin.getPlayer(uid).catch(
    notFound
  )
  const username = enkaProfile.player.username
  const signature = enkaProfile.player.signature
  
  const namecards = enkaProfile.player.namecardsList

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-12">
      <div className="w-auto p-4">
        <h1 className="text-xl font-semibold">{username}</h1>
        <p>{signature}</p>
      </div>
      <div className="container grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-rows-4 gap-4 mx-auto">
        {namecards.map((namecard) => (
          <Namecard id={namecard.id} role="profile" />
        ))}
      </div>
    </div>
  )
}