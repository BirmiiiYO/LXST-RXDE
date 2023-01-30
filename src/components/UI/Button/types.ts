import { ReactNode } from 'react'

export type TButtonType =
  | 'primary'
  | 'primary-watch'
  | 'watch'
  | 'big-watch'
  | 'small'
  | 'round'
  | 'round-small'
  | 'border-watch'
  | 'icon'

export interface IButtonProps {
  type?: TButtonType
  children?: ReactNode
  disabled?: boolean
  onClick?: () => void
}

export interface IButtonStyleProps {
  buttonType: TButtonType
}
