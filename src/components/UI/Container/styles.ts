import styled, { css } from 'styled-components'

import { devices } from 'styles/breakpoints'
import { getColor } from 'utils/getColor'
import { setFlexStyle } from 'utils/setFlexStyle'

import { IContainerStyleProps } from './types'

export const StyledContainer = styled.div<IContainerStyleProps>`
  background: ${({ background }) => background && getColor(background)};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  color: ${({ color }) => color && getColor(color)};
  ${({ flex, mobileColumn }) =>
    flex && mobileColumn && setFlexStyle(flex, mobileColumn)};
  @media ${devices.content} {
    width: 100%;
  }
  @media ${devices.tablet} {
    flex-direction: column;
  }
  ${({ mobileColumn }) =>
    mobileColumn &&
    css`
      @media ${devices.tablet} {
        flex-direction: column;
        justify-content: center;
      }
    `}
`
