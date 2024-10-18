// import Image from "next/image";
import { roboto_slab } from "@/app/fonts";

// import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-middle sm:align-middle">
        <p>🚧 Under construction...</p>
        <a
          className="flex shadow-md hover:shadow-xl bg-violet-600 hover:bg-violet-500 transition-all duration-300 px-4 py-2 items-center rounded-lg" href="https://github.com/EvilSquirrelGuy/NamecardTools"
        >
          Follow Development
          <FontAwesomeIcon icon={faArrowRight} className="pl-2 fa-md"></FontAwesomeIcon>
        </a>
      </main>
    </div>
  );
}
