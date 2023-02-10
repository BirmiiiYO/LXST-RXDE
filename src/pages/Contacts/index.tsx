import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

import { Map } from 'components/Map'
import { Container } from 'components/UI/Container'
import { Form } from 'components/UI/Form'
import { Text } from 'components/UI/Text'

import { Containerr, CusContainer, MoreContainer } from './styles'

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
        <Container flex="space-between" width="1110px" margin="100px 0 120px 0">
          <CusContainer>
            <MoreContainer>
              <Text margin="50px 50px 250px 0">
                <Trans i18nKey="contactsPage.title" components={[<span />]} />
              </Text>
              <Containerr>
                {contacts.map(({ data, title }) => (
                  <Container flex="column">
                    <Text typography="SBHeadline7">{title}</Text>
                    <Text typography="RParagraph2" color="grey">
                      {data}
                    </Text>
                  </Container>
                ))}
              </Containerr>
            </MoreContainer>
            <Form />
          </CusContainer>
        </Container>
      </Container>
      <Map />
    </>
  )
}

export default Contacts
