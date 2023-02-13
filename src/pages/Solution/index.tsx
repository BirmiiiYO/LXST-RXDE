import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { ContactUsSection } from 'components/ContactsUsSection'
import { DescriptionSection } from 'components/forPages/OurTeam/DescriptionSection'
import { ScrollIndicator } from 'components/forPages/Solution/ScrollIndicator'
import { ServiceArticle } from 'components/forPages/Solution/ServiceArticle'
import { SubscribeSection } from 'components/SubcribeSection'
import { Container } from 'components/UI/Container'
import { PageHeader } from 'components/UI/PageHeader'
import { PageHeaderContainer } from 'components/UI/PageHeader/styles'
import { Section } from 'components/UI/Section'
import { Text } from 'components/UI/Text'

const Solution = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const solutions = t('cards.service', { returnObjects: true }) as []
  const { title: topTitle, fullPage } = solutions.find(
    el => el.id === Number(id),
  )

  return (
    <>
      <Section>
        <PageHeader
          title={topTitle}
          subtitle={['Home', topTitle]}
          background="aliceBlue"
        />
        <Container flex="space-between" padding="120px 0">
          <ScrollIndicator tabs={fullPage.map(({ title }) => title)} />
          <ServiceArticle blocks={fullPage} />
        </Container>
      </Section>
      <ContactUsSection />
      <SubscribeSection />
    </>
  )
}

export default Solution
