import React from 'react'

import Logotype from 'assets/svg/logo/logo.svg'
import { Navigation } from 'components/Navigation'
import { Button } from 'components/UI/Button'
import { Menu } from 'components/UI/Menu'

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
