import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { ContactUsSection } from 'components/ContactsUsSection'
import { ScrollIndicator } from 'components/forPages/Solution/ScrollIndicator'
import { SolutionArticle } from 'components/forPages/Solution/SolutionArticle'
import { SubscribeSection } from 'components/SubcribeSection'
import { PageHeader } from 'components/UI/PageHeader'
import { Section } from 'components/UI/Section'

import { SolutionContainer } from './styles'

const Solution = () => {
  const { id } = useParams()
  const [activeTitle, setActiveTitle] = useState('')
  const scrollRef = useRef()
  const { t } = useTranslation()
  const solutions = t('cards.solutions', { returnObjects: true }) as []
  const { title: topTitle, fullPage } = solutions.find(
    el => el.id === Number(id),
  )
  useEffect(() => {
    const scrollTracking = () => {
      const scrollDistance = window.scrollY
      document.querySelectorAll('#title').forEach((el, i) => {
        if (el.offsetTop <= scrollDistance) {
          setActiveTitle(fullPage[i].title)
        }
      })
    }
    window.addEventListener('scroll', scrollTracking)
    return () => {
      window.removeEventListener('scroll', scrollTracking)
    }
  }, [fullPage, scrollRef])
  return (
    <>
      <Section>
        <PageHeader
          title={topTitle}
          breadcrumbs={['Home', topTitle]}
          type="light"
        />
        <SolutionContainer ref={scrollRef}>
          <ScrollIndicator
            active={activeTitle}
            tabs={fullPage.map(({ title }) => title)}
          />
          <SolutionArticle blocks={fullPage} />
        </SolutionContainer>
      </Section>
      <ContactUsSection />
      <SubscribeSection />
    </>
  )
}

export default Solution
