import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { theme } from 'styles/themes'

import { IBackgroundStyleProps } from './types'

export const Container = styled.div<IBackgroundStyleProps>`
  position: relative;
  width: 350px;
  height: 500px;
  color: ${theme.colors.white};
  background-image: linear-gradient(
      180deg,
      rgba(40, 50, 66, 0) 26.37%,
      #283850 103.66%
    ),
    url(${({ avatar }) => avatar});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
`

export const Info = styled.div`
  position: absolute;
  bottom: 24px;
  left: 25px;
  @media ${devices.laptop} {
    bottom: 14px;
    left: 14px;
  }
`

export const Name = styled.h3`
  ${theme.typography.B_HEADLINE_5}
`

export const Position = styled.h4`
  ${theme.typography.R_PARAGRAPH_2}
`
