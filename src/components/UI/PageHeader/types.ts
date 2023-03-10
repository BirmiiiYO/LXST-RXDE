import { TColor } from 'types/Color'

export interface IPageHeaderProps {
  title: string
  subtitle?: string
  breadcrumbs: string[]
  type?: 'light' | 'dark'
}

export type IPageHeaderStyleProps = Pick<IPageHeaderProps, 'type'>

export type IBreadCrumbStyleProps = {
  position: boolean
}
