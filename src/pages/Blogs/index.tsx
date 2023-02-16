import React from 'react'
import { useTranslation } from 'react-i18next'

import { BlogCards } from 'components/forPages/OurBlog/BlogCards'
import { SubscribeSection } from 'components/SubscribeSection'
import { BlogCard } from 'components/UI/Cards/Blog'
import { PageHeader } from 'components/UI/PageHeader'
import { Section } from 'components/UI/Section'

const BlogsPage = () => {
  const { t } = useTranslation()
  const blogs = t('cards.blog', { returnObjects: true }) as []
  return (
    <>
      <PageHeader
        title="Blog"
        breadcrumbs={['Home', 'Blog']}
        type="dark"
        subtitle="Sed ut perspiciatis unde omnis iste natus error volupta accusantium doloremque laudantium, totam remiga aperiam, eaque ipsa."
      />

      <Section>
        <BlogCards>
          {blogs.slice(0, 8).map(data => (
            <BlogCard {...data} />
          ))}
        </BlogCards>
      </Section>
      <SubscribeSection />
    </>
  )
}

export default BlogsPage
