import React from 'react'

import { Container } from 'components/UI/Container'
import { useAppSelector } from 'hooks/Redux'
import { theme } from 'styles/themes'

import { DesktopFooter } from './DesktopFooter'
import { MobileFooter } from './MobileFooter'

export const Footer = () => {
  const isMobile = useAppSelector(state => state.PageWidthReducer.isMobile)

  return (
    <Container background={theme.colors.secondary} color={theme.colors.white}>
      {!isMobile ? <DesktopFooter /> : <MobileFooter />}
    </Container>
  )
}
