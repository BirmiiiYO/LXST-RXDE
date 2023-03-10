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
import { Text } from 'components/UI/Text'
import { contacts } from 'constants/contacts'
import { IServiceCardDataProps } from 'types/locales/Service'

import { InfoContainer, ServiceContainer } from './styles'

const Service = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const services = t('cards.service', {
    returnObjects: true,
  }) as IServiceCardDataProps[]
  const { title, fullPage } = services.find(
    arrayId => arrayId.id === Number(id),
  ) as IServiceCardDataProps
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
          <AsideBlock
            titles={services.map(({ title: asideTitle }) => asideTitle)}
          />
        </ServiceContainer>
      </Section>
      <Section backgroundColor="aliceBlue">
        <Container background="aliceBlue" margin="120px 0">
          <InfoContainer>
            <Text typography="EbHeadline2">Contact information</Text>
            <Text typography="RParagraph1" color="grey" margin="35px 0 45px 0">
              Fill up the form and our Team will get back to you with 25 hours.
            </Text>
            {contacts.map(text => (
              <Text typography="RParagraph2" margin="0 0 15px 0">
                {' '}
                {text}
              </Text>
            ))}
          </InfoContainer>
          <Form />
        </Container>
      </Section>
      <SubscribeSection />
    </>
  )
}

export default Service
