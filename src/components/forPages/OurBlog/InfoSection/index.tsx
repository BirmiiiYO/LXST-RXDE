import React from 'react'
import { useTranslation } from 'react-i18next'

import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import upperImg from './img_10.png'
import bottomImg from './img_11.png'
import { Image } from './styles'

export const InfoSection = () => {
  const { t } = useTranslation()
  return (
    <Container flex="column" width="1110px">
      <Container flex="space-between" margin="120px 0">
        <Container width="445px" flex="column">
          <Text>{t('aboutUsPage.whoWeAre')}</Text>
          <Text typography="RParagraph1" color="grey" margin="30px 0">
            {t('aboutUsPage.text')}
          </Text>
        </Container>
        <Image src={upperImg} alt="who we are" />
      </Container>
      <Container flex="space-between" width="1110px" margin="0 0 134px 0">
        <Image src={bottomImg} alt="our mission" />
        <Container width="445px" flex="column">
          <Text>{t('aboutUsPage.ourMission')}</Text>
          <Text typography="RParagraph1" color="grey" margin="30px 0">
            {t('aboutUsPage.text')}
          </Text>
        </Container>
      </Container>
    </Container>
  )
}
