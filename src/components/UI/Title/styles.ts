import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { SPACE_BETWEEN, theme } from 'styles/themes'

import { ITitleProps } from './types'

export const CustomTitle = styled.h1<ITitleProps>`
  ${({ typography }) => typography}
  max-width: ${({ maxWidth }) => maxWidth};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  & span {
    color: ${theme.colors.primary};
  }
`
