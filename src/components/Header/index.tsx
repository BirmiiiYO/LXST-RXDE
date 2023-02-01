import React, { FC } from 'react'

import player from 'assets/player.svg'
import whiteLogo from 'assets/svg/logo/Logo_white.svg'
import { Navigation } from 'components/Navigation'
import { IModalProps } from 'components/Portal/types'
import { Button } from 'components/UI/Button'
import { Container } from 'components/UI/Container'
import { Menu } from 'components/UI/Menu'
import { Text } from 'components/UI/Text'
import { useAppSelector } from 'hooks/Redux'
import { theme } from 'styles/themes'

import { Logo, Row } from './styles'

type IHeaderProps = Pick<IModalProps, 'setIsOpen'>

export const Header: FC<IHeaderProps> = ({ setIsOpen }) => {
  const isMobile = useAppSelector(state => state.PageWidthReducer.isMobile)
  return (
    <Container background={theme.colors.secondary}>
      <Row>
        <Logo src={whiteLogo} alt="logo" />
        {!isMobile ? (
          <>
            <Navigation />{' '}
            <Button
              padding="10px 14px"
              icon={player}
              background={theme.colors.white}
              onClick={() => setIsOpen(true)}
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
