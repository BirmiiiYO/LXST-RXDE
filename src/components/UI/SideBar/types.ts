import { MouseEventHandler, ReactNode } from 'react'

export interface ISideBarProps {
  children: ReactNode
  onClick: MouseEventHandler<HTMLDivElement> | undefined
  disabled?: boolean
}
