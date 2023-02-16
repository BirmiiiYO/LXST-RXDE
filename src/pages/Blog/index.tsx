import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { AsideBlog } from 'components/forPages/Blog/AsideBlog'
import { AsideBlock } from 'components/forPages/Service/Aside'
import { Container } from 'components/UI/Container'
import { PageHeader } from 'components/UI/PageHeader'
import { Section } from 'components/UI/Section'
import { Text } from 'components/UI/Text'

import { LeftBlock } from './styles'
import { BlogArticle } from '../../components/forPages/Blog/BlogArticle'

const OneBlogPage = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const blogs = t('cards.blog', { returnObjects: true }) as []
  const { date, image, title, topics, fullPage } = blogs.find(
    array => array.id === Number(id),
  )
  console.log(fullPage.share)

  return (
    <>
      <PageHeader type="light" title={title} breadcrumbs={['Home', title]} />
      <Section>
        <Container flex="space-between" padding="120px 0">
          <LeftBlock>
            <BlogArticle
              date={date}
              image={image}
              share={fullPage.share}
              title={title}
              topics={topics}
              views={fullPage.views}
            />
            <Text typography="EbHeadline3" margin="60px 0 30px">
              Related Post
            </Text>
            zxc
          </LeftBlock>
          <AsideBlog />
        </Container>
      </Section>
    </>
  )
}

export default OneBlogPage
