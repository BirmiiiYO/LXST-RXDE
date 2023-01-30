import React from 'react'

import logo_1 from 'assets/images/HeroPage/logo_1.png'
import logo_2 from 'assets/images/HeroPage/logo_2.png'
import logo_3 from 'assets/images/HeroPage/logo_3.png'
import logo_4 from 'assets/images/HeroPage/logo_4.png'
import logo_5 from 'assets/images/HeroPage/logo_5.png'
import logo_6 from 'assets/images/HeroPage/logo_6.png'

import {
  Amount,
  Container,
  Data,
  HowMuch,
  Name,
  Row,
  SpaceBetween,
  Sponsor,
  Text,
  Title,
} from './styles'

const heroImages = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6]

const overviews = [
  { amount: '1830+', name: 'Project executed' },
  { amount: '834+', name: 'Satisfied customers' },
  { amount: '390', name: 'Data management' },
]

export const CompanyOverviewSection = () => (
  <Container>
    <Title>We provide services that guarantee your success</Title>
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
    <Row>
      {heroImages.map(logo => (
        <Sponsor src={logo} alt="sponsors" />
      ))}
    </Row>
  </Container>
)
