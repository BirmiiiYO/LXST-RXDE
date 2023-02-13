import styled from 'styled-components'

import { CENTER, theme } from 'styles/themes'

import { IPageHeaderStyleProps } from './types'

export const PageHeaderContainer = styled.div<IPageHeaderStyleProps>`
  background: ${({ background }) => background};
  padding: 100px 0 160px;
  width: 100vw;
`

export const SubTitleContainer = styled.div`
  ${CENTER}
  margin-top:20px;
  & > * {
    &:not(:last-child):after {
      content: '|';
      margin: 10px;
    }
    &:last-child {
      color: ${theme.colors.black};
    }
  }
`
