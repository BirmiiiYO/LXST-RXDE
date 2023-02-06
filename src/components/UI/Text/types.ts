import { ReactNode } from 'react'

import { TColor } from 'types/Color'
import { TTypography } from 'types/Typography'

export interface ITextProps {
  typography?: TTypography
  children: ReactNode
  color?: TColor
  maxWidth?: string
  padding?: string
  margin?: string
  сenter?: boolean
}
