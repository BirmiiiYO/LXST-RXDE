import styled from 'styled-components'

import { getColor } from 'utils/getColor'
import { setFlexStyle } from 'utils/setFlexStyle'

import { IContainerStyleProps } from './types'

export const StyledContainer = styled.div<IContainerStyleProps>`
  background: ${({ background }) => background && getColor(background)};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  color: ${({ color }) => color && getColor(color)};
  ${({ flex }) => flex && setFlexStyle(flex)}
  @media (max-width: 1110px) {
    width: 100%;
  }
`
