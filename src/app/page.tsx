// import Image from "next/image";
import { roboto_slab } from "@/app/fonts";
import { useTranslations } from "next-intl";

// import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Namecard from "@/components/Namecard";



export default function Home() {
  const t = useTranslations("home")
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-middle sm:align-middle">
        <p>🚧 {t("under_construction")}</p>
        <a
          className="flex shadow-md hover:shadow-xl bg-violet-600 hover:bg-violet-500 transition-all duration-300 px-4 py-2 items-center rounded-lg" href="https://github.com/EvilSquirrelGuy/NamecardTools"
        >
          {t("follow_dev")}
          <FontAwesomeIcon icon={faArrowRight} className="pl-2 fa-md"></FontAwesomeIcon>
        </a>
      </main>
    </div>
  );
}
