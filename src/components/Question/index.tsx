import React, { useState } from 'react'

import { Text } from 'components/UI/Text'

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
        <Text color={isOpen ? 'primary' : 'black'} typography="BHeadline4">
          {question}
        </Text>
        <Button isOpen={isOpen}>{isOpen ? <Plus /> : <Minus />}</Button>
      </QuestionBlock>
      {isOpen && (
        <Text
          typography="RParagraph1"
          color="grey"
          margin={isOpen ? '15px 0 0 0' : '0'}
        >
          {answer}
        </Text>
      )}
    </TabStyled>
  )
}
