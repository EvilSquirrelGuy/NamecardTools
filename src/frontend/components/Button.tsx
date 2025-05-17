import React from "react";
import { button, type ButtonProps } from "@frontend/components/ui/Button";

type Props = ButtonProps & {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

export default function Button({ intent, size, disabled = false, onClick, children }: Props) {
  return (
    <button className={button({ intent, size })} disabled={disabled} >{children}</button>
  )
}