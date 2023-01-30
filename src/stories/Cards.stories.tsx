import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Cards } from 'components/UI/Cards'

export default {
  title: 'All cards',
  component: Cards,
} as ComponentMeta<typeof Cards>

const Template: ComponentStory<typeof Cards> = () => <Cards />

export const Classic = Template.bind({})
Classic.args = {}
