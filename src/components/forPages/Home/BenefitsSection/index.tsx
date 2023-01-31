import React from 'react'

import { AdvantageServiceCard } from 'components/UI/Cards/AdvantageService'
import { Title } from 'components/UI/Title'
import { cards } from 'mocks/homePage/AdvantageCards'
import { theme } from 'styles/themes'

import { Cards, Container, Content, Info, Text } from './styles'

export const BenefitsSection = () => (
  <Container>
    <Content>
      <Info>
        <Title typography={theme.typography.EB_HEADLINE_2} margin="0 0 30px 0">
          The benefits of Ensome{' '}
        </Title>
        <Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Text>
      </Info>
      <Cards>
        {cards.map(({ icon, id, text, title }) => (
          <AdvantageServiceCard
            icon={icon}
            text={text}
            title={title}
            key={id}
          />
        ))}
      </Cards>
    </Content>
  </Container>
)
