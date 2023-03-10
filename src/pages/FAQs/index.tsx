import React from 'react'
import { useTranslation } from 'react-i18next'

import { ContactUsSection } from 'components/ContactsUsSection'
import { DropDownSection } from 'components/DropDownSection'
import { SubscribeSection } from 'components/SubscribeSection'
import { Section } from 'components/UI/Section'
import { Text } from 'components/UI/Text'

const FAQs = () => {
  const { t } = useTranslation()
  return (
    <>
      <Section>
        <Text typography="BHeadline6" color="primary" margin="140px 0 0 0">
          FAQs
        </Text>
        <Text margin="15px 0" center>
          {t('faqPage.title')}
        </Text>
        <Text
          typography="RParagraph1"
          color="grey"
          margin="0 5px 120px 5px"
          maxWidth="540px"
          center
        >
          {t('base.mediumText')}
        </Text>
      </Section>
      <DropDownSection />
      <ContactUsSection />
      <SubscribeSection />
    </>
  )
}

export default FAQs
