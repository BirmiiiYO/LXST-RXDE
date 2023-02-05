import React from 'react'
import { useTranslation } from 'react-i18next'

import { TeamCard } from 'components/UI/Cards/Team'

import { TeamCards } from './styles'

export const TeamCardsSection = () => {
  const { t } = useTranslation()
  const workers = t('cards.ourTeam', { returnObjects: true }) as []
  return (
    <TeamCards>
      {workers.map(({ avatar, id, name, position }) => (
        <TeamCard avatar={avatar} name={name} position={position} key={id} />
      ))}
    </TeamCards>
  )
}
