import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { COLUMN, SPACE_BETWEEN, theme } from 'styles/themes'

export const Content = styled.div`
  width: 1110px;
  ${COLUMN}
  padding:10px;
  align-items: flex-start;
  padding: 50px 20px 0 20px;
  @media ${devices.content} {
    width: 100%;
  }
`

export const Block = styled.div`
  ${COLUMN}
`
export const Icons = styled.div`
  margin: 20px;
`

export const Text = styled.div`
  max-width: 285px;
  ${theme.typography.R_PARAGRAPH_3}
  color:${theme.colors.grey};
  margin-bottom: 12px;
`

export const PrivacyInfo = styled.div`
  width: 100%;
  ${SPACE_BETWEEN}
  border-top:1px solid ${theme.colors.steelTeal};
  padding: 34px 0 30px 0;
`

export const SpaceBetween = styled.div`
  width: 250px;
  background: ${theme.colors.secondary};
  ${SPACE_BETWEEN}
`
export const CustomLink = styled(Link)`
  color: ${theme.colors.grey};
`

export const Mobile = styled.div`
  padding: 40px 0 20px 0;
`

export const LangIcon = styled.div`
  ${theme.typography.B_HEADLINE_6}
  color:${theme.colors.white};
  padding: 5px;
  cursor: pointer;
`
