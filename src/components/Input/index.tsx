import { ChangeEvent } from "react";
import * as C from "./styles";

type Props = {
  label?: string
  id?: string
  name: string
  type: string
  value: any
  onChange: (e: ChangeEvent <HTMLInputElement>) => void
  [x: string ]: any
}

type SelectProps = {
  label?: string
  id?: string
  name: string
  value?: any
  onChange: ( e: ChangeEvent <HTMLInputElement | HTMLSelectElement> ) => void
  [x: string ]: any
}

// Input e Select Component CRUD

export const Input = ( { label, id, name, type, value, onChange, ...rest }: Props ) => {
  return(
    <C.InputWrapper>
      <label htmlFor={name}>
        {label}
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </label>
    </C.InputWrapper>
  )
}

export const Select = ( { label, id, name, value, onChange, children, ...rest }: SelectProps ) => {
  return (
    <C.SelectWrapper>
      <label htmlFor={name}>
        {label}
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          {...rest}
        >
          {children}
        </select>
      </label>
    </C.SelectWrapper>
  )
}