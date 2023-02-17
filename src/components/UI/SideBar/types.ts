import { MouseEventHandler, ReactNode } from 'react'

import { TColor } from '../../../types/Color'

export interface ISideBarProps {
  children: ReactNode
  onClick: MouseEventHandler<HTMLDivElement> | undefined
  color?: TColor
}

export type ISideBarStyleProps = Required<Pick<ISideBarProps, 'color'>>
