import Image from "next/image";
import { AssetFinder } from "enkanetwork.js";

const { genshin } = new AssetFinder();

const namecardRoles = ["list", "profile"]
type NamecardRole = (typeof namecardRoles)[number]

export default async function Namecard({id, role="banner"}: {id: number, role?: NamecardRole}) {
  
  const namecard = genshin.namecard(id)

  const namecardUrl = genshin.toLink(namecard.assets.picPath[
    role === "list" ? 0 : 1  // the "friends-list" namecard style is at [0], the "banner" is at [1]
  ])

  return (
    <div className="container flex flex-col p-4 rounded-md border-violet-300 border-2 w-fit">
      <Image
        src={namecardUrl}
        alt={namecard.name}
        width={0} height={0}
        className="h-auto w-64"
        unoptimized={true}
      />
      <span className="text-lg font-semibold">{namecard.name}</span>
    </div>
  )
}