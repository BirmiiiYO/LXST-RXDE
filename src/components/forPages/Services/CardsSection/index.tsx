import React from 'react'
import { useTranslation } from 'react-i18next'

import { ServiceCard } from 'components/UI/Cards/Service'

import { Cards } from './styles'

export const CardsSection = () => {
  const { t } = useTranslation()
  const cards = t('cards.service', { returnObjects: true }) as []
  return (
    <Cards>
      {cards.map(({ icon, id, title }) => (
        <ServiceCard
          icon={icon}
          text={t('base.smallText')}
          title={title}
          key={id}
          id={id}
        />
      ))}
    </Cards>
  )
}
