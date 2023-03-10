import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface IModalProps {
  children: ReactNode
  containerElement: HTMLElement
  width: string
  height: string
  isOpen?: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export type TModalStyleProps = Pick<IModalProps, 'height' | 'width'>
