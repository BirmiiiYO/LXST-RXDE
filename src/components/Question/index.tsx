import React, { useState } from 'react'

import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import { Minus, Plus } from './icons'
import { Button, QuestionBlock, TabStyled } from './styles'
import { IQuestinProps } from './types'

export const Question = ({ answer, question }: IQuestinProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <TabStyled onClick={handleClick}>
      <QuestionBlock>
        <Text
          color={isOpen ? theme.colors.primary : theme.colors.black}
          typography={theme.typography.B_HEADLINE_4}
        >
          {question}
        </Text>
        <Button isOpen={isOpen}>{isOpen ? <Plus /> : <Minus />}</Button>
      </QuestionBlock>
      {isOpen && (
        <Text
          typography={theme.typography.R_PARAGRAPH_1}
          color="grey"
          margin={isOpen ? '15px 0 0 0' : '0'}
        >
          {answer}
        </Text>
      )}
    </TabStyled>
  )
}
