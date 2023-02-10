import React from 'react'
import { useTranslation } from 'react-i18next'

import { Article } from 'components/Article'
import { Breadcrumb } from 'components/Breadcrumb'
import { SubscribeSection } from 'components/SubcribeSection'
import { Container } from 'components/UI/Container'
import { Section } from 'components/UI/Section'
import { Text } from 'components/UI/Text'

import { ArticleContainer } from './styles'

const Blog = () => {
  const { t } = useTranslation()
  return (
    <>
      <Section backgroundColor="aliceBlue">
        <Text margin="100px 0 20px 0" сenter maxWidth="700px">
          {t('blogPage.title')}{' '}
        </Text>
        <Breadcrumb margin="0 0 100px 0">
          Home | {t('base.softwareTrends')}
        </Breadcrumb>
      </Section>
      <Section>
        <Container flex="space-between">
          <ArticleContainer>
            <Article />
          </ArticleContainer>
          <div>zxc</div>
        </Container>
      </Section>
      <SubscribeSection />
    </>
  )
}

export default Blog
