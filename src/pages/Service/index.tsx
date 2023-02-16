import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { ArticleBlock } from 'components/forPages/Service/ArticleBlock'
import { AsideBlock } from 'components/forPages/Service/Aside'
import { SubscribeSection } from 'components/SubscribeSection'
import { Container } from 'components/UI/Container'
import { Form } from 'components/UI/Form'
import { PageHeader } from 'components/UI/PageHeader'
import { Section } from 'components/UI/Section'

import { ServiceContainer } from './styles'

const Service = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const services = t('cards.service', { returnObjects: true }) as []
  const { icon, title, fullPage } = services.find(
    arrayId => arrayId.id === Number(id),
  )
  return (
    <>
      <PageHeader
        title={title}
        breadcrumbs={['Home', title]}
        type="dark"
        subtitle="Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque laudantium, totam remiga aperiam, eaque ipsa."
      />
      <Section>
        <ServiceContainer>
          <ArticleBlock blocks={fullPage} />
          <AsideBlock titles={services.map(({ title }) => title)} />
        </ServiceContainer>
        <Form />
      </Section>
      <SubscribeSection />
    </>
  )
}

export default Service
