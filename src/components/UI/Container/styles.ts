import styled from 'styled-components'

import { setFlexStyle } from 'utils/setFlexStyle'

import { IContainerStyleProps } from './types'

export const StyledContainer = styled.div<IContainerStyleProps>`
  background: ${({ background }) => background};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  color: ${({ color }) => color};
  ${({ flex }) => flex && setFlexStyle(flex)}
`
