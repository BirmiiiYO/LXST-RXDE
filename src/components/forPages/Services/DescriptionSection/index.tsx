import React from 'react'

import { Title } from 'components/UI/Title'
import { theme } from 'styles/themes'

import { Container, PageName, Text } from './styles'

export const DescriptionSection = () => (
  <Container>
    <PageName>Services</PageName>
    <Title typography={theme.typography.EB_HEADLINE_1}>
      Data Analytics Services
    </Title>
    <Text>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo
      inventore.
    </Text>
  </Container>
)
