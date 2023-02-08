import styled, { css } from 'styled-components'

import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import { IQuestinStyleProps } from './types'

export const TabStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 35px;
  margin: 10px;
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

export const Button = styled.button<IQuestinStyleProps>`
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  ${({ isOpen }) =>
    isOpen
      ? css`
          svg {
            fill: ${theme.colors.primary};
          }
        `
      : css`
          svg {
            fill: ${theme.colors.black};
          }
        `}
`
