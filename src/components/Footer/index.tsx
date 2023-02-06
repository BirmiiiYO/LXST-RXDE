import React from 'react'

import { Container } from 'components/UI/Container'
import { useAppSelector } from 'hooks/Redux'

import { DesktopFooter } from './DesktopFooter'
import { MobileFooter } from './MobileFooter'

export const Footer = () => {
  const isMobile = useAppSelector(state => state.PageWidthReducer.isMobile)

  return (
    <Container background="secondary" color="white">
      {!isMobile ? <DesktopFooter /> : <MobileFooter />}
    </Container>
  )
}
