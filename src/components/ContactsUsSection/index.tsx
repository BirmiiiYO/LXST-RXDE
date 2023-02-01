import React from 'react'

import { Button } from 'components/UI/Button'
import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import { Content } from './styles'

export const ContactUsSection = () => (
  <Container background={theme.colors.aliceBlue}>
    <Content>
      <Text typography={theme.typography.EB_HEADLINE_2}>Do you need help?</Text>
      <Text
        typography={theme.typography.R_PARAGRAPH_2}
        color={theme.colors.grey}
        margin="30px 0"
      >
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi.
      </Text>
      <Button>Contact Us</Button>
    </Content>
  </Container>
)
