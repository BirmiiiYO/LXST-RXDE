import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { theme } from 'styles/themes'

import { IBackgroundStyleProps } from './types'

export const Container = styled.div<IBackgroundStyleProps>`
  position: relative;
  width: 350px;
  height: 500px;
  color: ${theme.colors.white};
  background-image: url(${({ avatar }) => avatar});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 6px;
  @media ${devices.laptop} {
    width: 160px;
    height: 220px;
  }
`

export const Info = styled.div`
  position: absolute;
  bottom: 24px;
  left: 25px;
`

export const Name = styled.h3`
  ${theme.typography.B_HEADLINE_5}
`

export const Position = styled.h4`
  ${theme.typography.R_PARAGRAPH_2}
`
