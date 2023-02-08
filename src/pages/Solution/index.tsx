import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { Section } from 'components/UI/Section'
import { Text } from 'components/UI/Text'

const Solution = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const solutions = t('cards.service', { returnObjects: true }) as []
  const { title, advantages } = solutions.find(el => el.id === Number(id))

  return (
    <Section>
      <Text>{title}</Text>
      {advantages.map((item: string) => (
        <div>{item}</div>
      ))}
    </Section>
  )
}

export default Solution
