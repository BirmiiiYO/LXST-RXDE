import React from 'react'
import { useTranslation } from 'react-i18next'

import ourMissionImg from 'assets/images/aboutUs/ourMission.png'
import whoWeAreImg from 'assets/images/aboutUs/whoWeAre.png'
import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'

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
        <Image src={whoWeAreImg} alt="who we are" />
      </Container>
      <Container flex="space-between" width="1110px" margin="0 0 134px 0">
        <Image src={ourMissionImg} alt="our mission" />
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
