import React from 'react'
import { useTranslation } from 'react-i18next'

import { SolutionCard } from 'components/UI/Cards/Solution'

import { SolutionsCards } from './styles'

export const SolutionCards = () => {
  const { t } = useTranslation()
  const solutions = t('cards.solutions', { returnObjects: true }) as []
  return (
    <SolutionsCards>
      {solutions.map(({ id, title, advantages }) => (
        <SolutionCard key={id} advantages={advantages} title={title} id={id} />
      ))}
    </SolutionsCards>
  )
}
