import React from 'react'

import { ServiceCard } from 'components/UI/Cards/Service'
import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'
import { cards } from 'mocks/homePage/ServiceCards'
import { theme } from 'styles/themes'

import { Cards, Content, Info } from './styles'

export const BenefitsSection = () => (
  <Container color={theme.colors.black} background={theme.colors.aliceBlue}>
    <Content>
      <Info>
        <Text typography={theme.typography.EB_HEADLINE_2} margin="0 0 30px 0">
          The benefits of Ensome{' '}
        </Text>
        <Text
          typography={theme.typography.R_PARAGRAPH_2}
          color={theme.colors.grey}
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Text>
      </Info>
      <Cards>
        {cards.map(({ icon, id, text, title }) => (
          <ServiceCard icon={icon} text={text} title={title} key={id} />
        ))}
      </Cards>
    </Content>
  </Container>
)
