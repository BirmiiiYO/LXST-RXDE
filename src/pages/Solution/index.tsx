import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { ContactUsSection } from 'components/ContactsUsSection'
import { ScrollIndicator } from 'components/forPages/Solution/ScrollIndicator'
import { ServiceArticle } from 'components/forPages/Solution/ServiceArticle'
import { SubscribeSection } from 'components/SubcribeSection'
import { Container } from 'components/UI/Container'
import { PageHeader } from 'components/UI/PageHeader'
import { Section } from 'components/UI/Section'

import { SolutionContainer } from './styles'

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
          breadcrumbs={['Home', topTitle]}
          type="light"
        />
        <SolutionContainer>
          <ScrollIndicator
            active={fullPage[1].title}
            tabs={fullPage.map(({ title }) => title)}
          />
          <ServiceArticle blocks={fullPage} />
        </SolutionContainer>
      </Section>
      <ContactUsSection />
      <SubscribeSection />
    </>
  )
}

export default Solution
