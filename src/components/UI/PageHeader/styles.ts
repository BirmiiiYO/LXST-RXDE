import styled, { css } from 'styled-components'

import { CENTER, theme } from 'styles/themes'

import { IBreadCrumbStyleProps, IPageHeaderStyleProps } from './types'

export const PageHeaderContainer = styled.div<IPageHeaderStyleProps>`
  position: relative;
  background: ${({ type }) =>
    type === 'light' ? theme.colors.aliceBlue : theme.colors.secondary};
  padding: ${({ type }) =>
    type === 'light' ? '100px 0 160px' : '0 0 120px 0'};
  width: 100%;
`

export const BreadCrumbContainer = styled.div<IBreadCrumbStyleProps>`
  ${CENTER}

  margin: ${({ position }) => (position ? '20px' : '20px 0 120px 0')};
  & > * {
    &:not(:last-child):after {
      content: '|';
      margin: 10px;
    }
    &:last-child {
      color: ${({ position }) =>
        position ? theme.colors.black : theme.colors.white};
    }
  }
`
