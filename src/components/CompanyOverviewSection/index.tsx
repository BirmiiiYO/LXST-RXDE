import React from 'react'

import { Amount, Block, Container, Content, Title } from './styles'

const blocks = [
  { title: 'Project executed', amount: '1830+' },
  { title: 'Data analytics', amount: '220' },
  { title: 'Data management', amount: '390' },
  { title: 'Satisfied customers', amount: '834+' },
]

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
