// import Image from "next/image";
import { roboto_slab } from "@/app/fonts";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-middle sm:align-middle">
        <h1 className={`${roboto_slab.className} text-2xl font-semibold`}>
          Namecard Tools
        </h1>
        <p>🚧 Under construction...</p>
        <a className="flex shadow-md hover:shadow-xl bg-violet-600 border-violet-800 hover:bg-violet-500 transition-all px-4 py-2 align-middle rounded-lg" href="https://github.com/EvilSquirrelGuy/NamecardTools">Follow Development ➡️</a>
      </main>
      <footer className="flex flex-row gap-8 row-start-3 items-center sm:items-start">
        <a className="text-violet-500 hover:text-violet-300 transition-all" href="https://github.com/EvilSquirrelGuy">Check out my GitHub!</a>
        <a className="text-violet-500 hover:text-violet-300 transition-all" href="https://genshin.hoyoverse.com/en">Genshin Impact</a>
      </footer>
    </div>
  );
}
