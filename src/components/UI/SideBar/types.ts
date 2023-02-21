import { ReactNode } from 'react'

import { TColor } from '../../../types/Color'

export interface ISideBarProps {
  children: ReactNode
  color?: TColor
  elements?: string[]
}

export type ISideBarStyleProps = Required<Pick<ISideBarProps, 'color'>>
