import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="flex flex-row gap-16 items-center sm:items-start w-full bottom-0 justify-center p-4 pb-12">
      <a className="text-violet-500 hover:text-violet-300 transition-all" href="https://github.com/EvilSquirrelGuy">
        <FontAwesomeIcon icon={faGithub} className="pr-2 fa-sm"></FontAwesomeIcon>
        Check out my GitHub
      </a>
      <a className="text-violet-500 hover:text-violet-300 transition-all" href="https://genshin.hoyoverse.com/en">
        <FontAwesomeIcon icon={faDownload} className="pr-2 fa-sm"></FontAwesomeIcon>
        Genshin Impact
      </a>
    </footer>
  )
}