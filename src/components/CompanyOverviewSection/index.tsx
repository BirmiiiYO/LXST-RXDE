import React from 'react'

import { Amount, Block, Content, Title } from './styles'
import { ICompanyOverviewProps } from './types'

export const CompanyOverviewSection = ({ blocks }: ICompanyOverviewProps) => (
  <Content>
    {blocks.map(({ name, amount }) => (
      <Block>
        <Amount>{amount}</Amount>
        <Title>{name}</Title>
      </Block>
    ))}
  </Content>
)
