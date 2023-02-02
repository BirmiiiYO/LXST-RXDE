import React from 'react'

import { Breadcrumb } from 'components/Breadcrumb'
import { ClientsSection } from 'components/ClientsSection'
import { ContactUsSection } from 'components/ContactsUsSection'
import { CompanyOverviewSection } from 'components/forPages/Home/CompanyOverviewSection'
import { CardsSection } from 'components/forPages/Services/CardsSection'
import { DescriptionSection } from 'components/forPages/Services/DescriptionSection'
import { SubscribeSection } from 'components/SubcribeSection'

import { Container } from './styles'

const Services = () => (
  <>
    <Breadcrumb>Home | Services</Breadcrumb>
    <Container>
      <DescriptionSection />
      <CardsSection />
      <CompanyOverviewSection />
      <ClientsSection />
      <ContactUsSection />
      <SubscribeSection />
    </Container>
  </>
)

export default Services
