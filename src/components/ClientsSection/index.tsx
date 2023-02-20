import React from 'react'

import { heroImages } from 'assets/images/Clients'
import { Container } from 'components/UI/Container'
import { Image } from 'components/UI/Image'


export const ClientsSection = () => (
  <Container width="1110px">
    {heroImages.map(logo => (
      <Image src={logo} alt="sponsors" />
    ))}
  </Container>
)
