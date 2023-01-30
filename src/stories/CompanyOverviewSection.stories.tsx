import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { CompanyOverviewSection } from 'components/CompanyOverviewSection'

export default {
  title: 'Company overview section',
  component: CompanyOverviewSection,
} as ComponentMeta<typeof CompanyOverviewSection>

const Template: ComponentStory<typeof CompanyOverviewSection> = () => (
  <CompanyOverviewSection />
)

export const Classic = Template.bind({})
Classic.args = {}
