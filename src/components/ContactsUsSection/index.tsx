import React from 'react'

import { Button } from 'components/UI/Button'
import { Title } from 'components/UI/Title'
import { theme } from 'styles/themes'

import { Container, Content, Text } from './styles'

export const ContactUsSection = () => (
  <Container>
    <Content>
      <Title typography={theme.typography.EB_HEADLINE_2}>
        Do you need help?
      </Title>
      <Text>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi.
      </Text>
      <Button type="primary">Contact Us</Button>
    </Content>
  </Container>
)
