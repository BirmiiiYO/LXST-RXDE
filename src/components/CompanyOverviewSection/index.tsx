import React from 'react'

import { Amount, Block, Container, Content, Title } from './styles'

const blocks = [{ title: '', amount: 342 }]

export const CompanyOverviewSection = () => (
  <Container>
    <Content>
      {blocks.map(({ title, amount }) => (
        <Block>
          <Amount>{amount}</Amount>
          <Title>{title}</Title>
        </Block>
      ))}
    </Content>
  </Container>
)
