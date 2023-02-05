import React from 'react'

import { DescriptionSection } from 'components/forPages/OurTeam/DescriptionSection'
import { TeamCardsSection } from 'components/forPages/OurTeam/TeamCardsSection'
import { SubscribeSection } from 'components/SubcribeSection'
import { Container } from 'components/UI/Container'
import { Section } from 'components/UI/Section'
import { theme } from 'styles/themes'

const OurTeam = () => (
  <>
    <Section color={theme.colors.secondary}>
      <span>Home | Our Team</span>
      <DescriptionSection />
    </Section>
    <Section>
      <TeamCardsSection />
    </Section>
    <SubscribeSection />
  </>
)

export default OurTeam
