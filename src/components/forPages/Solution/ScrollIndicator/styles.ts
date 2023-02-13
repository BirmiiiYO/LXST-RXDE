import styled from 'styled-components'

import { theme } from 'styles/themes'

import { IScrollIndicatorStyleProps } from './types'

export const Tab = styled.div<IScrollIndicatorStyleProps>`
  ${theme.typography.SB_HEADLINE_7}
  padding:18px 50px;
  border-left: 5px solid
    ${({ active }) =>
      active ? theme.colors.primary : theme.colors.rhythmicBlue};
`

export const ScrollContainer = styled.div`
  padding-top: 135px;
`
