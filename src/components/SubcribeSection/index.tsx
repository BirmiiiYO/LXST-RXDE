import React from 'react'

import { Container } from 'components/UI/Container'
import { InputWithButton } from 'components/UI/InputWithButton'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import { Content, Info } from './styles'

export const SubscribeSection = () => (
  <Container background={theme.colors.secondary} color={theme.colors.white}>
    <Content>
      {' '}
      <Info>
        <Text
          typography={theme.typography.EB_HEADLINE_2}
          color={theme.colors.white}
          margin="0 0 24px 0"
        >
          Subscribe to our newsletter
        </Text>
        <Text
          typography={theme.typography.R_PARAGRAPH_1}
          color={theme.colors.white}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </Text>
      </Info>
      <InputWithButton />
    </Content>
  </Container>
)
