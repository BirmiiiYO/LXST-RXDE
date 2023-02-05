import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { CENTER, SPACE_BETWEEN, theme } from 'styles/themes'

import { ISectionStyleProps } from './types'

export const SectionContainer = styled.div<ISectionStyleProps>`
  background: ${({ color }) => color};
  width: 100%;
  flex-direction: column;
  ${CENTER}
`
export const SectionContent = styled.div`
  width: 1110px;
  @media ${devices.content} {
    width: 100%;
  }
`
