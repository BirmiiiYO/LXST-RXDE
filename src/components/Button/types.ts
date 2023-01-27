import { ReactNode } from 'react'

export interface IButtonProps {
  primary?: boolean
  border?: boolean
  size?: 'small' | 'medium' | 'large'
  circle?: boolean
  children: ReactNode
  icon?: string
  onClick?: () => void
}

export interface IStyleProps {
  primary: boolean
  border: boolean
  size: 'small' | 'medium' | 'large'
  circle: boolean
  icon?: string
}
