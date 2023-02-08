import React from 'react'

import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'

import { Amount, Block } from './styles'
import { ICompanyOverviewProps } from './types'

export const CompanyOverviewSection = ({ blocks }: ICompanyOverviewProps) => (
  <Container flex="space-between" padding="70px 10px" background="aliceBlue">
    {blocks.map(({ name, amount }) => (
      <Block>
        <Amount>{amount}</Amount>
        <Text typography="RParagraph1" color="grey">
          {name}
        </Text>
      </Block>
    ))}
  </Container>
)
