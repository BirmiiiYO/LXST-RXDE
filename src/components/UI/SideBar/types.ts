import { ReactNode } from 'react'

export interface ISideBarProps {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
}
