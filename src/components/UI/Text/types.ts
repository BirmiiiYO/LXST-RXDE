import { ReactNode } from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'

export interface ITextProps {
  typography: FlattenSimpleInterpolation
  children: ReactNode
  color?: string
  maxWidth?: string
  padding?: string
  margin?: string
  сenter?: boolean
}
