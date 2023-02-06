import { ReactNode } from 'react'

export interface ISectionProps {
  children: ReactNode
  color?: string
  full?: boolean
}

export type IContainerStyleProps = Pick<ISectionProps, 'color'>
export type IContentStyleProps = Pick<ISectionProps, 'full'>
