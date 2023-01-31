import React from 'react'

import logo_1 from 'assets/images/HeroPage/logo_1.png'
import logo_2 from 'assets/images/HeroPage/logo_2.png'
import logo_3 from 'assets/images/HeroPage/logo_3.png'
import logo_4 from 'assets/images/HeroPage/logo_4.png'
import logo_5 from 'assets/images/HeroPage/logo_5.png'
import logo_6 from 'assets/images/HeroPage/logo_6.png'

import { Row, Sponsor } from './styles'

const heroImages = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6]

export const ClientsSection = () => (
  <Row>
    {heroImages.map(logo => (
      <Sponsor src={logo} alt="sponsors" />
    ))}
  </Row>
)
