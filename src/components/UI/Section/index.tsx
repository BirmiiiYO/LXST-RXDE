import React from 'react'

import { theme } from 'styles/themes'

import { SectionContainer, SectionContent } from './styles'
import { ISectionProps } from './types'

export const Section = ({
  color = theme.colors.white,
  children,
}: ISectionProps) => (
  <SectionContainer color={color}>
    <SectionContent>{children}</SectionContent>
  </SectionContainer>
)
