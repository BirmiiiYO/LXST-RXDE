import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface IModalProps {
  children: ReactNode
  containerElement: HTMLElement
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
