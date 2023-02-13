import { TColor } from 'types/Color'

export interface IPageHeaderProps {
  title: string
  subtitle: string[]
  background?: TColor
}

export type IPageHeaderStyleProps = Pick<IPageHeaderProps, 'background'>
