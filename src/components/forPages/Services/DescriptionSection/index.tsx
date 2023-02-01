import React from 'react'

import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import { Container, PageName } from './styles'

export const DescriptionSection = () => (
  <Container>
    <PageName>Services</PageName>
    <Text typography={theme.typography.EB_HEADLINE_1}>
      Data Analytics Services
    </Text>
    <Text typography={theme.typography.R_PARAGRAPH_2}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo
      inventore.
    </Text>
  </Container>
)
