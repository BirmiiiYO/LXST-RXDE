import styled from 'styled-components'

import { theme } from 'styles/themes'

import check from './check.svg'

export const Container = styled.div`
  width: 350px;
  box-shadow: ${theme.shadows.shadowCard3};
  padding: 50px 35px;
`

export const Name = styled.h3`
  ${theme.typography.B_HEADLINE_4}
`

export const Price = styled.h4`
  ${theme.typography.EB_HEADLINE_2}
  margin:16px 0;
`

export const Text = styled.div`
  ${theme.typography.B_HEADLINE_4}
  margin-bottom:30px;
`

export const List = styled.div`
  margin-top: 20px;
`

export const Info = styled.div`
  ${theme.typography.R_PARAGRAPH_2}
  margin-bottom: 15px;
  &::before {
    content: url(${check});
    padding-right: 5px;
  }
`
