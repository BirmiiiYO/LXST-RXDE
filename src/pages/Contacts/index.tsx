import React from 'react'
import { useTranslation } from 'react-i18next'

import { Map } from 'components/Map'
import { Container } from 'components/UI/Container'
import { Form } from 'components/UI/Form'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

const contacts = [
  { title: 'Email', data: 'ensome@info.co.us' },
  { title: 'Phone', data: '+1 601-201-5580' },
  {
    title: 'Address',
    data: '1642 Washington Avenue, Jackson, MS, Mississippi, 39201',
  },
]

const Contacts = () => {
  const { t } = useTranslation()
  return (
    <>
      <Container flex="center">
        <Container flex="space-between" width="1110px" padding="120px 0">
          <Container flex="column">
            <Text typography={theme.typography.EB_HEADLINE_1}>
              {t('contactsPage.title')}
            </Text>
            <Text typography={theme.typography.R_PARAGRAPH_3}>
              {contacts.map(({ data, title }) => (
                <>
                  <h1>{title}</h1>
                  <h2>{data}</h2>
                </>
              ))}
            </Text>
          </Container>
          <Form />
        </Container>
      </Container>
      <Map />
    </>
  )
}

export default Contacts
