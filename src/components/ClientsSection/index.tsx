import React from 'react'

import { heroImages } from 'assets/images/Clients'

import { ClientContainer, Sponsor } from './styles'

export const ClientsSection = () => (
  <ClientContainer>
    {heroImages.map(logo => (
      <Sponsor src={logo} alt="sponsors" />
    ))}
  </ClientContainer>
)
