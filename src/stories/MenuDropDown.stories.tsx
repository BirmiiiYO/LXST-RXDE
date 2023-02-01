import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Menu } from 'components/UI/Menu'

export default {
  title: 'Header menu',
  component: Menu,
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = () => <Menu />

export const Classic = Template.bind({})
Classic.args = {}
