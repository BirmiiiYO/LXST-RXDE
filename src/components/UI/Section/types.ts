import { ReactNode } from 'react'

import { TColor } from 'types/Color'

export interface ISectionProps {
  children: ReactNode
  backgroundColor?: TColor
  full?: boolean
}

export type IContainerStyleProps = Pick<ISectionProps, 'backgroundColor'>
export type IContentStyleProps = Pick<ISectionProps, 'full'>
