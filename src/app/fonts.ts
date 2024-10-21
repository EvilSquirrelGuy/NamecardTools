/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Roboto, Roboto_Slab } from "next/font/google";
import Font from "next/font";


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
