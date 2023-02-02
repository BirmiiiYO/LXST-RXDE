import styled from 'styled-components'

import { setFlexStyle } from 'utils/setFlexStyle'

import { IContainerStyleProps } from './types'

export const StyledContainer = styled.div<IContainerStyleProps>`
  background: ${({ background }) => background};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  color: ${({ color }) => color};
  ${({ flex }) => flex && setFlexStyle(flex)}
  @media (max-width: 1110px) {
    width: 100vw;
  }
`
