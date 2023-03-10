import React from 'react'

import { SectionContainer, SectionContent } from './styles'
import { ISectionProps } from './types'

export const Section = ({
  backgroundColor = 'white',
  children,
  full = false,
}: ISectionProps) => (
  <SectionContainer backgroundColor={backgroundColor}>
    <SectionContent full={full}>{children}</SectionContent>
  </SectionContainer>
)
