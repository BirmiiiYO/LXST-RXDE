import React from 'react'
import { useTranslation } from 'react-i18next'

import { ClientsSection } from 'components/ClientsSection'
import { InfoSection } from 'components/forPages/AboutUs/InfoSection'
import { CardsSection } from 'components/forPages/Home'
import { FormSection } from 'components/forPages/OurBlog/FormSection'
import { NumberSection } from 'components/forPages/OurBlog/NumberSection'
import { SubscribeSection } from 'components/SubscribeSection'
import { ReviewCard } from 'components/UI/Cards/Review'
import { Container } from 'components/UI/Container'
import { PageHeader } from 'components/UI/PageHeader'
import { Text } from 'components/UI/Text'

import { AboutContainer } from './styles'

const AboutUs = () => {
  const { t } = useTranslation()
  const reviews = t('cards.review', { returnObjects: true }) as []
  return (
    <AboutContainer>
      <PageHeader
        title="About Us"
        breadcrumbs={['Home', 'About Us']}
        type="light"
      />
      <InfoSection />
      <NumberSection />
      <Container flex="column" width="1110px" margin="120px 0 30px 0">
        <Text margin=" 0 0 30px 0">{t('aboutUsPage.ourCustomers')}</Text>
        <Text maxWidth="445px" typography="RParagraph1" color="grey">
          {t('base.mediumText')}
        </Text>
      </Container>
      <ClientsSection />
      <Container flex="column" width="1110px" margin="0 0 120px 0">
        <CardsSection
          amount={3}
          length={reviews.length}
          title={t('aboutUsPage.reviewTitle')}
          render={(activeCards, amount) =>
            reviews
              .slice(activeCards, activeCards + amount)
              .map(props => <ReviewCard {...props} />)
          }
        />
      </Container>
      <FormSection />
      <SubscribeSection />
    </AboutContainer>
  )
}

export default AboutUs
