import { Roboto, Roboto_Slab } from "next/font/google";


export const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap"
})

export const roboto_slab = Roboto_Slab({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "latin-ext"],
  display: "swap"
})
