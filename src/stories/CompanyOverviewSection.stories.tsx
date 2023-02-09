import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { CompanyOverviewSection } from 'components/CompanyOverviewSection'

export default {
  title: 'Company overview section',
  component: CompanyOverviewSection,
} as ComponentMeta<typeof CompanyOverviewSection>

const Template: ComponentStory<typeof CompanyOverviewSection> = args => (
  <CompanyOverviewSection {...args} />
)

export const Classic = Template.bind({})
Classic.args = {
  blocks: [
    {
      amount: '1830+',
      name: 'Project executed',
    },
    {
      amount: '834+',
      name: 'Satisfied customers',
    },
    {
      amount: '390',
      name: 'Data management',
    },
  ],
}
