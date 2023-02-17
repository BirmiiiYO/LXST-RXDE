import React from 'react'
import { useTranslation } from 'react-i18next'

import { Button } from 'components/UI/Button'
import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'
import { useAppSelector } from 'hooks/Redux'

import { Content } from './styles'

export const ContactUsSection = () => {
  const isMobile = useAppSelector(state => state.PageWidthReducer.isMobile)
  const { t } = useTranslation()
  return (
    <Container background="aliceBlue" margin="120px 0 0 0">
      <Content>
        <Text typography="EbHeadline2" center margin="0 0 20px 0">
          {t('base.doYouNeedHelp')}
        </Text>
        {!isMobile && (
          <Text typography="RParagraph2" color="grey" margin="30px 0" center>
            {t('base.mediumText')}
          </Text>
        )}
        <Button padding={!isMobile ? '10px 40px' : '20px 100px'}>
          {t('base.contactUs')}
        </Button>
      </Content>
    </Container>
  )
}
