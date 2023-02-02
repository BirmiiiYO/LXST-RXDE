import React from 'react'
import { useTranslation } from 'react-i18next'

import { Breadcrumb } from 'components/Breadcrumb'
import { ClientsSection } from 'components/ClientsSection'
import { FormSection } from 'components/forPages/OurBlog/FormSection'
import { InfoSection } from 'components/forPages/OurBlog/InfoSection'
import { NumberSection } from 'components/forPages/OurBlog/NumberSection'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import { Container } from './styles'

const AboutUs = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Text typography={theme.typography.EB_HEADLINE_1}>
        {t('aboutUsPage.title')}
      </Text>
      <Breadcrumb>Home | About Us</Breadcrumb>
      <InfoSection />
      <NumberSection />
      <Text typography={theme.typography.EB_HEADLINE_1}>
        {t('aboutUsPage.ourCustomers')}
      </Text>
      <Text
        typography={theme.typography.R_PARAGRAPH_1}
        color={theme.colors.grey}
      >
        {t('base.mediumText')}
      </Text>
      <ClientsSection />
      <Text typography={theme.typography.EB_HEADLINE_1}>
        {t('aboutUsPage.reviewTitle')}
      </Text>
      {/* -------пропустил карточки------- */}
      <FormSection />
    </Container>
  )
}

export default AboutUs
