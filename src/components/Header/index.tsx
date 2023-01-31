import React from 'react'

import whiteLogo from 'assets/svg/logo/Logo_white.svg'
import { Navigation } from 'components/Navigation'
import { Button } from 'components/UI/Button'
import { Menu } from 'components/UI/Menu'

import { Container, Logo, Row } from './styles'

export const Header = () => (
  <Container>
    <Row>
      <Logo src={whiteLogo} alt="logo" />
      <Navigation />
      <Button type="watch">watch the demo</Button>
      {/* <Menu /> */}
    </Row>
  </Container>
)
