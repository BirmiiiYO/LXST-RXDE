import { ReactNode } from 'react'

export interface ISectionProps {
  children: ReactNode
  color?: string
  full?: boolean
}

export type ISectionStyleProps = Pick<ISectionProps, 'color'>
