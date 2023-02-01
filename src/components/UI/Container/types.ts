import { ReactNode } from 'react'

export type TFlex = 'center' | 'column' | 'space-between'

export interface IContainerProps {
  children: ReactNode
  margin?: string
  width?: string
  background?: string
  color?: string
  flex?: TFlex
}

export type IContainerStyleProps = Omit<IContainerProps, 'children'>
