import React from 'react'

import { Footer } from 'components/Footer'
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
    {/* <HeroSection />
    <FeaturesSection />
    <CompanyOverviewSection />
    <BenefitsSection />
    <TestImonialsSection /> */}
    <PricingSection />
    <BlogSection />
    {/* <ContactUsSection />
    <SubscribeSection />
    <Footer /> */}
  </Container>
)

export default Home
