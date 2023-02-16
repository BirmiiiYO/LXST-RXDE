import React from 'react'
import { useTranslation } from 'react-i18next'

import { ClientsSection } from 'components/ClientsSection'
import {
  BenefitsSection,
  CardsSection,
  CompanyOverviewSection,
  ContactUsSection,
  FeaturesSection,
  HeroSection,
  PricingSection,
} from 'components/forPages/Home'
import { SubscribeSection } from 'components/SubscribeSection'
import { BlogCard } from 'components/UI/Cards/Blog'
import { ReviewCard } from 'components/UI/Cards/Review'
import { useAppSelector } from 'hooks/Redux'

import { Container } from './styles'

const Home = () => {
  const { t } = useTranslation()
  const reviews = t('cards.review', { returnObjects: true }) as []
  const blogs = t('cards.blog', { returnObjects: true }) as []
  const isMobile = useAppSelector(state => state.PageWidthReducer.isMobile)
  return (
    <Container>
      <HeroSection />
      <FeaturesSection />
      <CompanyOverviewSection />
      <ClientsSection />
      <BenefitsSection />
      <CardsSection
        amount={isMobile ? 1 : 3}
        length={reviews.length}
        title={t('base.testImonalsTitle')}
        render={(activeCards, amount) =>
          reviews
            .slice(activeCards, activeCards + amount)
            .map(props => <ReviewCard {...props} />)
        }
      />
      <PricingSection />
      <CardsSection
        amount={isMobile ? 1 : 2}
        length={blogs.length}
        title={t('base.ourBlog')}
        render={(activeCards, amount) =>
          blogs
            .slice(activeCards, activeCards + amount)
            .map(props => <BlogCard {...props} />)
        }
      />
      <ContactUsSection />
      <SubscribeSection />
    </Container>
  )
}

export default Home
