import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { COLUMN, SPACE_BETWEEN, theme } from 'styles/themes'

export const Content = styled.div`
  width: 1110px;
  ${COLUMN}
  align-items:flex-start;
  padding: 50px 20px 0 20px;
`

export const Information = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`

export const Logo = styled.img`
  max-width: 141px;
  margin-bottom: 20px;
`

export const Block = styled.div`
  ${COLUMN}
`
export const Icons = styled.div``

export const Text = styled.div`
  max-width: 285px;
  ${theme.typography.R_PARAGRAPH_3}
  color:${theme.colors.grey};
  margin-bottom: 12px;
`

export const Icon = styled.img`
  margin: 20px 15px 0 0;
`

export const PrivacyInfo = styled.div`
  width: 100%;
  ${SPACE_BETWEEN}
  border-top:1px solid ${theme.colors.steelTeal};
  padding: 34px 0 30px 0;
`

export const SpaceBetween = styled.div`
  width: 250px;
  ${SPACE_BETWEEN}
`
export const CustomLink = styled(Link)`
  color: ${theme.colors.grey};
`
