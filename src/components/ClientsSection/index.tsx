import React from 'react'
import styled from 'styled-components'

import { heroImages } from 'assets/images/HeroPage'
import { Container } from 'components/UI/Container'

const Sponsor = styled.img``

export const ClientsSection = () => (
  <Container margin="50px 10px 80px">
    {heroImages.map(logo => (
      <Sponsor src={logo} alt="sponsors" />
    ))}
  </Container>
)
