import React from 'react'
import { useTranslation } from 'react-i18next'

import { ContactUsSection } from 'components/ContactsUsSection'
import { DropDownSection } from 'components/DropDownSection'
import { SubscribeSection } from 'components/SubcribeSection'
import { Section } from 'components/UI/Section'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

const FAQs = () => {
  const { t } = useTranslation()
  return (
    <>
      <Section>
        <Text
          typography={theme.typography.B_HEADLINE_6}
          color={theme.colors.primary}
          margin="140px 0 0 0"
        >
          FAQs
        </Text>
        <Text typography={theme.typography.EB_HEADLINE_1} margin="15px 0">
          {t('faqPage.title')}
        </Text>
        <Text
          typography={theme.typography.R_PARAGRAPH_1}
          color={theme.colors.grey}
          margin="0 0 120px 0"
          maxWidth="540px"
          сenter
        >
          {t('faqPage.text')}
        </Text>
      </Section>
      <DropDownSection />
      <ContactUsSection />
      <SubscribeSection />
    </>
  )
}

export default FAQs
