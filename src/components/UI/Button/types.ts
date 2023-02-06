import { FunctionComponent, ReactNode } from 'react'

export type TButtonType = 'primary' | 'round' | 'border-watch'

export interface IButtonProps {
  buttonType?: TButtonType
  children?: ReactNode | 
  icon?: FunctionComponent
  padding?: string
  disabled?: boolean
  background?: string
  color?: string
  onClick?: () => void
}
export type IButtonStyleProps = Pick<
  IButtonProps,
  'buttonType' | 'background' | 'color' | 'padding'
>
