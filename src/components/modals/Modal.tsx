import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { roboto_slab } from "@/app/fonts";


export default function Modal(
  {show, setter, title, children}:
  {show: boolean, setter: any, title: string, children: React.ReactNode}
) {
  // background-blur component to cover the background
  const ModalOverlay = () => (
    <div className="w-full h-full backdrop-blur-md z-30 fixed bg-black/15 top-0 bottom-0 left-0 right-0" onClick={() => {setter(false)}} />
  )

  const positionClassNames = "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed"

  return (
    <>
    <div
      className={`flex flex-col rounded-lg drop-shadow-lg z-40 border-2 bg-violet-500 border-violet-400 gap-4 p-4 pt-2 ${positionClassNames}`}
      role="dialog"
    >
      <div className="container flex justify-between">
        <h1 className={`${roboto_slab.className} text-lg font-semibold`}>{title}</h1>
        <button onClick={() => setter(false)}>
          <FontAwesomeIcon icon={faClose} className="fa-xl hover:animate-pulse" />
        </button>
      </div>
      <div className="container flex flex-col p-4 pt-0 gap-4">
        {children}
      </div>
    </div>
    <ModalOverlay />
    </>
  )

}