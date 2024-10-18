// import Image from "next/image";
import { roboto_slab } from "@/app/fonts";
import Header from "@/components/Header";

// import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header></Header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-middle sm:align-middle">
        <h1 className={`${roboto_slab.className} text-2xl font-semibold`}>
          Namecard Tools
        </h1>
        <p>🚧 Under construction...</p>
        <a className="flex shadow-md hover:shadow-xl bg-violet-600 border-violet-800 hover:bg-violet-500 transition-all px-4 py-2 items-center rounded-lg" href="https://github.com/EvilSquirrelGuy/NamecardTools">
          Follow Development
          <FontAwesomeIcon icon={faArrowRight} className="pl-2 fa-md"></FontAwesomeIcon>
        </a>
      </main>
      <footer className="flex flex-row gap-8 row-start-3 items-center sm:items-start">
        <a className="text-violet-500 hover:text-violet-300 transition-all" href="https://github.com/EvilSquirrelGuy">
          <FontAwesomeIcon icon={faGithub} className="pr-2 fa-sm"></FontAwesomeIcon>
          Check out my GitHub
        </a>
        <a className="text-violet-500 hover:text-violet-300 transition-all" href="https://genshin.hoyoverse.com/en">
          <FontAwesomeIcon icon={faDownload} className="pr-2 fa-sm"></FontAwesomeIcon>
          Genshin Impact
        </a>
      </footer>
    </div>
  );
}
