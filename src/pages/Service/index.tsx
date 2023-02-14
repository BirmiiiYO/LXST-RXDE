import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { ArticleBlock } from 'components/forPages/Service/ArticleBlock'
import { AsideBlock } from 'components/forPages/Service/Aside'
import { Container } from 'components/UI/Container'
import { PageHeader } from 'components/UI/PageHeader'
import { Section } from 'components/UI/Section'

const Service = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const services = t('cards.service', { returnObjects: true }) as []
  const { icon, text, title } = services.find(
    arrayId => arrayId.id === Number(id),
  )
  return (
    <>
      <PageHeader
        title="Access control"
        breadcrumbs={['Home', 'Access control']}
        type="dark"
        subtitle="Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque laudantium, totam remiga aperiam, eaque ipsa."
      />
      <Section>
        <Container flex="space-between" width="1110px" padding="120px 0">
          <ArticleBlock />
          <AsideBlock />
        </Container>
      </Section>
    </>
  )
}

export default Service
