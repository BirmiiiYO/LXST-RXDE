import { ReactNode } from 'react'

import { TColor } from 'types/Color'

export type TFlex = 'center' | 'column' | 'space-between'

export interface IContainerProps {
  children: ReactNode
  margin?: string
  width?: string
  background?: TColor
  color?: TColor
  flex?: TFlex
  padding?: string
  mobileColumn?: boolean
}

export type IContainerStyleProps = Omit<IContainerProps, 'children'>
