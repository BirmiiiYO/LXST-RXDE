import styled from 'styled-components'

import { SPACE_BETWEEN, theme } from 'styles/themes'

export const Container = styled.div`
  width: 540px;
  padding: 35px;
  box-shadow: ${theme.shadows.shadowCard3};
  border-radius: 6px;
`

export const Avatar = styled.img`
  border-radius: ${theme.BORDER_RADIUS.CIRCLE}%;
  margin-right: 25px;
`

export const Name = styled.h3`
  ${theme.typography.B_HEADLINE_6}
`

export const Position = styled.h4`
  ${theme.typography.M_HEADLINE_7}
  color:${theme.colors.grey};
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`

export const NameAndPos = styled.div``

export const Text = styled.div`
  ${theme.typography.R_PARAGRAPH_2}
  color:${theme.colors.grey};
`
