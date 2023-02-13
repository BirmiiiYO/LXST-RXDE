import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'

import { Image } from './styles'

const TeamMember = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const solutions = t('cards.service', { returnObjects: true }) as []
  const { avatar, name, facebook, twitter, linkedin } = solutions.find(
    el => el.id === Number(id),
  )

  return (
    <Container flex="space-between">
      <Image src={avatar} alt={`photo ${name}`} />
      <Text typography="RParagraph1">name: {name}</Text>
    </Container>
  )
}

export default TeamMember
