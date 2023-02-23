import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { ContactUsSection } from 'components/ContactsUsSection'
import { ScrollIndicator } from 'components/forPages/Solution/ScrollIndicator'
import { SolutionArticle } from 'components/forPages/Solution/SolutionArticle'
import { SubscribeSection } from 'components/SubscribeSection'
import { PageHeader } from 'components/UI/PageHeader'
import { Section } from 'components/UI/Section'
import { ISolutionCardDataProps } from 'types/locales/Solution'

import { SolutionContainer } from './styles'

const Solution = () => {
  const { id } = useParams()
  const [activeTitle, setActiveTitle] = useState('')
  const { t } = useTranslation()
  const solutions = t('cards.solutions', {
    returnObjects: true,
  }) as ISolutionCardDataProps[]
  const { title: topTitle, fullPage } = solutions.find(
    el => el.id === Number(id),
  ) as ISolutionCardDataProps
  useEffect(() => {
    const scrollTracking = () => {
      const scrollDistance = window.scrollY
      document.querySelectorAll<HTMLElement>('#title').forEach((value, i) => {
        if (value.offsetTop <= scrollDistance) {
          setActiveTitle(fullPage[i].title)
        }
      })
    }
    window.addEventListener('scroll', scrollTracking)
    return () => {
      window.removeEventListener('scroll', scrollTracking)
    }
  }, [fullPage])
  return (
    <>
      <PageHeader
        title={topTitle}
        breadcrumbs={['Home', topTitle]}
        type="light"
      />
      <Section>
        <SolutionContainer>
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
