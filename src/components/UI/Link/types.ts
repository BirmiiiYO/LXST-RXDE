import { ReactNode } from 'react'

export interface ILinkProps {
  icon?: boolean
  disabled?: boolean
  children: ReactNode
}

export type ILinkStyleProps = Pick<ILinkProps, 'icon'>
