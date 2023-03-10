import React from 'react'

import { BreadcrumbContainer } from './styles'
import { IBreadcrumbProps } from './types'

export const Breadcrumb = ({
  children,
  margin = '0 0 0 0',
  position = 'topLeft',
}: IBreadcrumbProps) => (
  <BreadcrumbContainer margin={margin} position={position}>
    {children}
  </BreadcrumbContainer>
)
