import React from 'react'

import player from 'assets/player.svg'
import whiteLogo from 'assets/svg/logo/Logo_white.svg'
import { Navigation } from 'components/Navigation'
import { Button } from 'components/UI/Button'
import { Menu } from 'components/UI/Menu'
import { Text } from 'components/UI/Text'
import { useAppSelector } from 'hooks/Redux'
import { theme } from 'styles/themes'

import { Container, Logo, Row } from './styles'

export const Header = () => {
  const isMobile = useAppSelector(state => state.PageWidthReducer.isMobile)
  return (
    <Container>
      <Row>
        <Logo src={whiteLogo} alt="logo" />
        {!isMobile ? (
          <>
            <Navigation />{' '}
            <Button
              padding="10px 14px"
              icon={player}
              background={theme.colors.white}
            >
              <Text
                typography={theme.typography.SB_HEADLINE_7}
                maxWidth="600px"
              >
                watch the demo
              </Text>
            </Button>
          </>
        ) : (
          <Menu />
        )}
      </Row>
    </Container>
  )
}
