import React from 'react'

import { InputWithButton } from 'components/InputWithButton'

import { Container, Content, Info, Text, Title } from './styles'

export const SubscribeSection = () => (
  <Container>
    <Content>
      {' '}
      <Info>
        <Title>Subscribe to our newsletter</Title>
        <Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </Text>
      </Info>
      <InputWithButton />
    </Content>
  </Container>
)
