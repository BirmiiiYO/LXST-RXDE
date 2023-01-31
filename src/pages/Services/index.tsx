import React from 'react'

import { Breadcrumb } from 'components/Breadcrumb'
import { ClientsSection } from 'components/ClientsSection'
import { ContactUsSection } from 'components/ContactsUsSection'
import { CardsSection } from 'components/forPages/Services/CardsSection'
import { CompanyOverviewSection } from 'components/forPages/Services/CompanyOverviewSection'
import { DescriptionSection } from 'components/forPages/Services/DescriptionSection'
import { SubscribeSection } from 'components/SubcribeSection'

import { Container } from './styles'

const Services = () => (
  <Container>
    <Breadcrumb>Home | Services</Breadcrumb>
    <DescriptionSection />
    <CardsSection />
    <CompanyOverviewSection />
    <ClientsSection />
    <ContactUsSection />
    <SubscribeSection />
  </Container>
)

export default Services
