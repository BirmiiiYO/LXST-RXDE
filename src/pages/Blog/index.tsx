/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { SubscribeSection } from 'components/SubscribeSection'
import { BlogCard } from 'components/UI/Cards/Blog'
import { PageHeader } from 'components/UI/PageHeader'
import { SearchBar } from 'components/UI/SearchBar'
import { Section } from 'components/UI/Section'
import { SideBar } from 'components/UI/SideBar'
import { Tag } from 'components/UI/Tag'
import { Text } from 'components/UI/Text'

import { unique } from './helper'
import {
  BlogContainer,
  LeftBlock,
  PopularBlock,
  RelatedBlock,
  RightBlock,
} from './styles'
import { IBlogPageProps } from './types'
import { BlogArticle } from '../../components/forPages/Blog/BlogArticle'

const OneBlogPage = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const blogs = t('cards.blog', { returnObjects: true }) as IBlogPageProps[]
  const { date, image, title, topics, fullPage } = blogs!.find(
    ({ id: blogId }) => blogId === Number(id),
  ) as IBlogPageProps
  const [activeTag, setActiveTag] = useState(topics[0])

  const categories = t('blogPage.categories', { returnObjects: true }) as []

  const allTopics = unique(blogs.map(blog => blog.topics).flat())
  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setActiveTag(e.target.value)
  }
  return (
    <>
      <PageHeader type="light" title={title} breadcrumbs={['Home', title]} />
      <Section>
        <BlogContainer>
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
              {t('blogPage.relatedPost')}
            </Text>
            <RelatedBlock>
              {blogs
                .filter(({ topics: tags }) =>
                  activeTag ? tags.includes(activeTag) : true,
                )
                .map(data => (
                  <BlogCard {...data} size="small" />
                ))}
            </RelatedBlock>
          </LeftBlock>
          <RightBlock>
            <SearchBar value={activeTag} changeValue={changeInputValue} />
            <Text typography="BHeadline4" margin="60px 0 30px">
              {t('blogPage.popularPost')}
            </Text>
            <PopularBlock>
              {blogs
                .filter(({ fullPage: full }) => full.views > 2000)
                .map(data => (
                  <BlogCard {...data} size="small" />
                ))}
            </PopularBlock>
            <Text typography="BHeadline4" margin="60px 0 0 0">
              {t('blogPage.categoriesTitle')}
            </Text>
            {categories.map(item => (
              <SideBar elements={categories}>{item}</SideBar>
            ))}
            <Text typography="BHeadline4" margin="60px 0 30px">
              {t('blogPage.tags')}
            </Text>
            {allTopics.map(el => (
              <Tag>{el}</Tag>
            ))}
          </RightBlock>
        </BlogContainer>
      </Section>
      <SubscribeSection />
    </>
  )
}

export default OneBlogPage
