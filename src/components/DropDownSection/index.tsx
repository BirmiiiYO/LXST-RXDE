import React from 'react'
import { useTranslation } from 'react-i18next'

import { Question } from 'components/Question'
import { Section } from 'components/UI/Section'

export const DropDownSection = () => {
  const { t } = useTranslation()
  const questions = t('faqPage.faqs', { returnObjects: true }) as []
  return (
    <>
      <Section>
        {questions.map(({ id, question, text }) => (
          <Question answer={text} question={question} key={id} />
        ))}
      </Section>
    </>
  )
}
