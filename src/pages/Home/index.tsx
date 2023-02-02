import React from 'react'
import { useTranslation } from 'react-i18next'

import { ClientsSection } from 'components/ClientsSection'
import {
  BenefitsSection,
  BlogSection,
  CompanyOverviewSection,
  ContactUsSection,
  FeaturesSection,
  HeroSection,
  PricingSection,
  TestImonialsSection,
} from 'components/forPages/Home'
import { SubscribeSection } from 'components/SubcribeSection'

import { Container } from './styles'

const Home = () => (
  <Container>
    <HeroSection />
    <FeaturesSection />
    <CompanyOverviewSection />
    <ClientsSection />
    <BenefitsSection />
    <TestImonialsSection />
    <PricingSection />
    <BlogSection />
    <ContactUsSection />
    <SubscribeSection />
  </Container>
)

export default Home
