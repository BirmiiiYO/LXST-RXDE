import React from 'react'

import { Button } from 'components/Button'

import { Container, Content, Text, Title } from './styles'

export const ContactUsSection = () => (
  <Container>
    <Content>
      <Title>Do you need help?</Title>
      <Text>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi.
      </Text>
      <Button type="primary">Contact Us</Button>
    </Content>
  </Container>
)

