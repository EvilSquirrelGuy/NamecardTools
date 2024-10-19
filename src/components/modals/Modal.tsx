import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { roboto_slab } from "@/app/fonts";
import { useEffect } from "react";


export default function Modal(
  {show, setter, title, dismissable=true, children}:
  {show: boolean, setter: any, title: string, dismissable?: boolean, children: React.ReactNode}
) {
  // background-blur component to cover the background
  const ModalOverlay = () => (
    <div
      className="w-full h-full backdrop-blur-md z-30 fixed bg-black/15 top-0 bottom-0 left-0 right-0"
      onClick={dismissable ? () => {setter(false)} : () => {}}
    />
  )

  // function to dismiss modal when escape is pressed
  function dismissOnEsc(e: {key: string}) {
    if (e.key == "Esc" || e.key == "Escape"){
      setter(false)
    }
  }

  if (dismissable) {  // bind the dismissOnEscape to escape keypress if we can dismiss the dialog
    useEffect(() => {
      window.addEventListener("keyup", dismissOnEsc)

      return () => window.removeEventListener("keyup", dismissOnEsc)
    }, [dismissOnEsc])
  }

  const positionClassNames = "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed"

  return (
    <>
    <div
      className={`flex flex-col rounded-lg drop-shadow-lg z-40 border-2 bg-violet-500 border-violet-400 gap-4 p-4 pt-2 ${positionClassNames}`}
      role="dialog"
    >
      <div className="container flex justify-between">
        <h1 className={`${roboto_slab.className} text-lg font-semibold`}>{title}</h1>
        {dismissable ? 
        <button onClick={() => setter(false)}>
          <FontAwesomeIcon icon={faClose} className="fa-xl hover:animate-pulse" />
        </button>
      : <></>}
      </div>
      <div className="container flex flex-col p-4 pt-0 gap-4">
        {children}
      </div>
    </div>
    <ModalOverlay />
    </>
  )

}