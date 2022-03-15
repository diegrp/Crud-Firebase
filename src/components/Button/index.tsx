import { ReactNode } from "react";
import * as C from "./styles";

type Props = {
  path?: any
  type?: string
  active?: string
  onClick?: () => void
  children: ReactNode
}

// Button Component CRUD

export const Button = ( { path, type, active, onClick, children }: Props ) => {
  return(
    <div>
      ...
    </div>
  )
}