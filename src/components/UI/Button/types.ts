import { FunctionComponent, ReactNode, SVGProps } from 'react'

import { TTypography } from 'types/Typography'

export type TButtonType = 'primary' | 'round' | 'border-watch'

export interface IButtonProps {
  buttonType?: TButtonType
  children?: ReactNode | ReactNode[]
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>
  padding?: string
  disabled?: boolean
  primary?: boolean
  onClick?: () => void
  typography?: TTypography
}
export type IButtonStyleProps = Pick<
  IButtonProps,
  'buttonType' | 'primary' | 'padding' | 'typography'
>
