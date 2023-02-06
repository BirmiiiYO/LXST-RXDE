import React from 'react'
import { useTranslation } from 'react-i18next'

import { ServiceCard } from 'components/UI/Cards/Service'

import { SolutionsCards } from './styles'

export const SolutionCards = () => {
  const { t } = useTranslation()
  const solutions = t('cards.service', { returnObjects: true }) as []
  return (
    <SolutionsCards>
      {solutions.map(({ id, ...rest }) => (
        <ServiceCard key={id} {...rest} />
      ))}
    </SolutionsCards>
  )
}
