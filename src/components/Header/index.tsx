import React from 'react'

import Logotype from 'assets/svg/logo/logo.svg'
import { Button } from 'components/Button'
import { Menu } from 'components/Menu'
import { Navigation } from 'components/Navigation'

import { Container, Logo, Row } from './styles'

export const Header = () => (
  <Container>
    <Row>
      <Logo src={Logotype} alt="logo" />
      <Navigation />
      <Button type="primary-watch">watch the demo</Button>
      {/* <Menu /> */}
    </Row>
  </Container>
)
