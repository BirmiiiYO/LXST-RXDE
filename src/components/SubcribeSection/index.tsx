import React from 'react'

import { InputWithButton } from 'components/UI/InputWithButton'
import { Title } from 'components/UI/Title'
import { theme } from 'styles/themes'

import { Container, Content, Info, Text } from './styles'

export const SubscribeSection = () => (
  <Container>
    <Content>
      {' '}
      <Info>
        <Title typography={theme.typography.EB_HEADLINE_2} margin="0 0 24px 0">
          Subscribe to our newsletter
        </Title>
        <Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </Text>
      </Info>
      <InputWithButton />
    </Content>
  </Container>
)
