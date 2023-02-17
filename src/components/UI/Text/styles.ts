import styled from 'styled-components'

import { theme } from 'styles/themes'
import { getColor } from 'utils/getColor'
import { getTypography } from 'utils/getTypography'

import { ITextProps } from './types'

export const CustomTitle = styled.h1<ITextProps>`
  ${({ typography }) => typography && getTypography(typography)}
  color:${({ color }) => color && getColor(color)};
  max-width: ${({ maxWidth }) => maxWidth};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  ${({ center: сenter }) => (сenter ? `text-align:center;` : '')}
  & span {
    color: ${theme.colors.primary};
  }
`
