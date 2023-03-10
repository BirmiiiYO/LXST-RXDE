import { ReactNode } from 'react'

export type TPosition = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

export interface IBreadcrumbProps {
  children: ReactNode
  position?: TPosition
  margin?: string
}

export type IBreadcrumbStyleProps = Omit<IBreadcrumbProps, 'children'>
