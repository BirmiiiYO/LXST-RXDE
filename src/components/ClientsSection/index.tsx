import React from 'react'
import styled from 'styled-components'

import { heroImages } from 'assets/images/HeroPage'

import { ClientContainer, Sponsor } from './styles'

export const ClientsSection = () => (
  <ClientContainer>
    {heroImages.map(logo => (
      <Sponsor src={logo} alt="sponsors" />
    ))}
  </ClientContainer>
)
