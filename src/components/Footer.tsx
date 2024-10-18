import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faD, faDownload, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Url } from "next/dist/shared/lib/router/router";

export default function Footer() {

  const FooterLink = ({text, url, icon}: {text: string, url: string, icon: IconDefinition}) => (
    <a className="text-violet-500 hover:text-violet-300 transition-all" href={url}>
      <FontAwesomeIcon icon={icon} className="pr-2 fa-sm" />
      {text}
    </a>
  )

  return (
    <footer className="flex flex-row gap-16 items-center sm:items-start w-full bottom-0 justify-center p-4 pb-12">
      <FooterLink text="Project Github" icon={faGithub} url="https://github.com/EvilSquirrelGuy/NamecardTools" />
      <FooterLink text="Download Genshin" icon={faDownload} url="https://genshin.hoyoverse.com/en/home" />
    </footer>
  )
}