import { ReactNode } from 'react'
import { FlattenSimpleInterpolation } from 'styled-components'

export interface ITitleProps {
  typography: FlattenSimpleInterpolation
  children: ReactNode
  maxWidth?: string
  padding?: string
  margin?: string
}
