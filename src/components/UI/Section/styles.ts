import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { CENTER } from 'styles/themes'
import { getColor } from 'utils/getColor'

import { IContainerStyleProps, ISectionProps } from './types'

export const SectionContainer = styled.div<IContainerStyleProps>`
  background: ${({ backgroundColor }) =>
    backgroundColor && getColor(backgroundColor)};
  width: 100%;
  ${CENTER}
`
export const SectionContent = styled.div<ISectionProps>`
  width: ${({ full }) => (full ? '100%' : '1110px')};
  ${CENTER}
  flex-direction: column;
  @media ${devices.content} {
    width: 100%;
  }
`
