import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { CENTER, SPACE_BETWEEN, theme } from 'styles/themes'

import { ITextProps } from './types'

export const CustomTitle = styled.h1<ITextProps>`
  ${({ typography }) => typography}
  color:${({ color }) => color};
  max-width: ${({ maxWidth }) => maxWidth};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  ${({ сenter }) => (сenter ? `text-align:center;` : '')}
  & span {
    color: ${theme.colors.primary};
  }
`
