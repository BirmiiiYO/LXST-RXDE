import React from 'react'

import { Title } from 'components/UI/Title'
import { theme } from 'styles/themes'

import {
  Amount,
  Container,
  Data,
  HowMuch,
  Name,
  SpaceBetween,
  Text,
} from './styles'

const overviews = [
  { amount: '1830+', name: 'Project executed' },
  { amount: '834+', name: 'Satisfied customers' },
  { amount: '390', name: 'Data management' },
]

export const CompanyOverviewSection = () => (
  <Container>
    <Title typography={theme.typography.EB_HEADLINE_2} margin="0 120px 0 0">
      We provide services that guarantee your success
    </Title>
    <SpaceBetween>
      <Data>
        {overviews.map(({ amount, name }) => (
          <HowMuch>
            <Amount>{amount}</Amount>
            <Name>{name}</Name>
          </HowMuch>
        ))}
      </Data>
      <Text>
        Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quaeab illo
        inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.
      </Text>
    </SpaceBetween>
  </Container>
)
