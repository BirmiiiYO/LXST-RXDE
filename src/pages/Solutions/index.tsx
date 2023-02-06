import React from 'react'
import { useTranslation } from 'react-i18next'

import { CardsSection } from 'components/CardsSection'
import { ContactUsSection } from 'components/ContactsUsSection'
import { SolutionCards } from 'components/forPages/Solutions/SolutionCards'
import { WhyChooseUsSection } from 'components/forPages/Solutions/WhyChooseUsSection'
import { SubscribeSection } from 'components/SubcribeSection'
import { Cards } from 'components/UI/Cards'
import { ReviewCard } from 'components/UI/Cards/Review'
import { Section } from 'components/UI/Section'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

const Solutions = () => {
  const { t } = useTranslation()
  const solutions = t('cards.review', { returnObjects: true }) as []
  return (
    <>
      <Section>
        <Text
          typography={theme.typography.B_HEADLINE_6}
          color="blue"
          margin="100px 0 15px 0"
        >
          solutions
        </Text>
        <Text typography={theme.typography.EB_HEADLINE_1}>
          {t('solutionPage.title')}
        </Text>
        <Text
          typography={theme.typography.R_PARAGRAPH_1}
          сenter
          color="grey"
          maxWidth="450px"
          margin="15px 0 0 0"
        >
          {t('solutionPage.text')}
        </Text>
        <SolutionCards />
      </Section>
      <WhyChooseUsSection />
      <Section>
        <CardsSection
          amount={3}
          length={solutions.length}
          title={t('homePage.testImonalsTitle')}
          render={(activeCards, amount) =>
            solutions
              .slice(activeCards, activeCards + amount)
              .map(props => <ReviewCard {...props} />)
          }
        />
      </Section>
      <ContactUsSection />
      <SubscribeSection />
    </>
  )
}

export default Solutions
