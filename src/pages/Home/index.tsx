import React from 'react'
import { useTranslation } from 'react-i18next'

import { ClientsSection } from 'components/ClientsSection'
import {
  BenefitsSection,
  BlogSection,
  CardsSection,
  CompanyOverviewSection,
  ContactUsSection,
  FeaturesSection,
  HeroSection,
  PricingSection,
} from 'components/forPages/Home'
import { SubscribeSection } from 'components/SubcribeSection'
import { ReviewCard } from 'components/UI/Cards/Review'

import { Container } from './styles'

const Home = () => {
  const { t } = useTranslation()
  const reviews = t('cards.review', { returnObjects: true }) as []
  return (
    <Container>
      <HeroSection />
      <FeaturesSection />
      <CompanyOverviewSection />
      <ClientsSection />
      <BenefitsSection />
      <CardsSection
        amount={3}
        length={reviews.length}
        title={t('homePage.testImonalsTitle')}
        render={(activeCards, amount) =>
          reviews
            .slice(activeCards, activeCards + amount)
            .map(props => <ReviewCard {...props} />)
        }
      />
      <PricingSection />
      <BlogSection />
      <ContactUsSection />
      <SubscribeSection />
    </Container>
  )
}

export default Home
