import styled from 'styled-components'

import { theme } from 'styles/themes'

export const Container = styled.div`
  width: 540px;
  box-shadow: ${theme.shadows.shadowCard3};
  border-radius: 6px;
`

export const Icon = styled.img`
  width: 100%;
`

export const Title = styled.h1`
  ${theme.typography.B_HEADLINE_4}
  margin: 0 35px;
`

export const Text = styled.div`
  ${theme.typography.R_PARAGRAPH_2}
  color:${theme.colors.grey};
  margin: 17px 35px 20px;
`

export const Date = styled.div`
  ${theme.typography.R_PARAGRAPH_3}
  color:${theme.colors.grey};
  margin: 30px 0 17px 35px;
`

export const List = styled.div`
  padding: 0 0 30px 35px;
`

export const Topic = styled.span`
  font-family: 'Manrope';
  font-weight: 800;
  font-size: 14px;
  line-height: 24px;
  color: ${theme.colors.primary};
  padding: 3px 11px;
  border: 1px solid ${theme.colors.background};
  border-radius: 6px;
  margin-right: 17px;
`
