import React from 'react'

import { heroImages } from 'assets/images/Clients'
import { Container } from 'components/UI/Container'

import { Sponsor } from './styles'

export const ClientsSection = () => (
  <Container width="1110px">
    {heroImages.map(logo => (
      <Sponsor src={logo} alt="sponsors" />
    ))}
  </Container>
)
