import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { Section } from 'components/UI/Section'
import { Text } from 'components/UI/Text'

const Image = styled.img`
  max-width: 200px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 10px;
`

const Service = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const services = t('cards.service', { returnObjects: true }) as []
  const { icon, text, title } = services.find(
    arrayId => arrayId.id === Number(id),
  )
  return (
    <Section>
      <Text margin="50px 0 20px">{title}</Text>
      <Image src={icon} alt="image service page" />
      <Text typography="BHeadline5" color="secondary" margin="20px 0 50px">
        {text}
      </Text>
    </Section>
  )
}

export default Service
