import styled from 'styled-components'

import { CENTER, COLUMN, SPACE_BETWEEN, theme } from 'styles/themes'

export const Container = styled.div`
  max-width: 700px;
  box-shadow: ${theme.shadows.shadowCard3};
  padding: 45px;
  border-radius: 6px;
  ${COLUMN}
  background:${theme.colors.white};
`
export const Title = styled.h2`
  ${theme.typography.EB_HEADLINE_3}
`

export const List = styled.form`
  margin: 30px 0 83px;
`

export const Label = styled.label`
  ${theme.typography.SB_HEADLINE_8}
  color:${theme.colors.grey};
`

export const Input = styled.input`
  ${theme.typography.SB_PARAGRAPH_3}
  border: none;
  padding: 6px 0;
  border-bottom: 1px solid ${theme.colors.grey};
`

export const Field = styled.div`
  ${COLUMN}
  margin-bottom:20px;
`
