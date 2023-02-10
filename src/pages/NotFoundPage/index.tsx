import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ContactUsSection } from 'components/ContactsUsSection'
import { Container } from 'components/UI/Container'
import { Section } from 'components/UI/Section'
import { Text } from 'components/UI/Text'

const NotFoundPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => navigate('/'), 3000)
  }, [navigate])
  return (
    <>
      <Section>
        <Container flex="center">
          <Text typography="RParagraph1" padding="120px 0 0" сenter>
            {' '}
            Error page, You will be redirected to the home page automatically in
            3 seconds
          </Text>
        </Container>
      </Section>
      <ContactUsSection />
    </>
  )
}

export default NotFoundPage
