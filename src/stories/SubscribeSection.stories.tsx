import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { SubscribeSection } from 'components/SubcribeSection'

export default {
  title: 'Subscribe section',
  component: SubscribeSection,
} as ComponentMeta<typeof SubscribeSection>

const Template: ComponentStory<typeof SubscribeSection> = () => (
  <SubscribeSection />
)

export const Classic = Template.bind({})
Classic.args = {}
