import styled from 'styled-components'

import { theme } from 'styles/themes'
import { setPosition } from 'utils/setPosition'

import { IBreadcrumbStyleProps } from './types'

export const BreadcrumbContainer = styled.div<IBreadcrumbStyleProps>`
  ${theme.typography.SB_HEADLINE_7}
  ${({ position }) => position && setPosition(position)}
  margin:${({ margin }) => margin};
`
