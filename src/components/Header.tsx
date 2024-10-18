import { roboto_slab } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="flex w-full sticky top-0 justify-between p-4">
      <h1 className={`${roboto_slab.className} text-2xl font-semibold self-start`}>Namecard Tools</h1>
      <button className="p-2 border-indigo-200 rounded-md self-end border-1"><FontAwesomeIcon icon={faBars} className="fa-lg"></FontAwesomeIcon></button>
    </header>
  )
}