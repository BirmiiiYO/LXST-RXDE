import React from 'react'

import { DescriptionSection } from 'components/forPages/OurTeam/DescriptionSection'
import { TeamCardsSection } from 'components/forPages/OurTeam/TeamCardsSection'
import { SubscribeSection } from 'components/SubscribeSection'
import { Section } from 'components/UI/Section'

const OurTeam = () => (
  <>
    <Section backgroundColor="secondary">
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
