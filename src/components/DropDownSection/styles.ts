import styled from 'styled-components'

import { theme } from 'styles/themes'

export const TabStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  gap: 12px;
  width: 100%;
  height: fit-content;
  border: 1px solid ${theme.colors.grey};
  border-radius: 6px;
  cursor: pointer;
`

export const QuestionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const Button = styled.button`
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  fill: ${theme.colors.primary};
`
