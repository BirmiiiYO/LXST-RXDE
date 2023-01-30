import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { CENTER, COLUMN, SPACE_BETWEEN, theme } from 'styles/themes'

export const Container = styled.div`
  ${CENTER}
  flex-direction:column;
  marin: 0 10px;
`

export const Title = styled.h1`
  ${theme.typography.EB_HEADLINE_2}
  margin-top:120px;
`

export const Data = styled.div`
  max-width: 540px;
  ${SPACE_BETWEEN}
`

export const Text = styled.div`
  max-width: 540px;
  ${theme.typography.R_PARAGRAPH_1}
  color:${theme.colors.grey};
  margin: 50px 0 50px 30px;
`

export const Row = styled.div``

export const SpaceBetween = styled.div`
  max-width: 1110px;
  ${SPACE_BETWEEN}
`

export const HowMuch = styled.div`
  ${COLUMN}
  justify-content:flex:start;
  margin-right: 30px;
`

export const Amount = styled.div`
  font-family: ${theme.fonts.openSans};
  font-weight: ${theme.fontWeight.ExtraBold};
  font-size: 50px;
  line-height: 112px;
  color: ${theme.colors.primary};
`

export const Name = styled.div`
  ${theme.typography.R_PARAGRAPH_2}
  color:${theme.colors.grey};
  width: 160px;
`

export const Sponsor = styled.img``
