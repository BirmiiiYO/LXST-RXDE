import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { SideBar } from 'components/UI/SideBar'

export default {
  title: 'SideBar',
  component: SideBar,
} as ComponentMeta<typeof SideBar>

const Template: ComponentStory<typeof SideBar> = args => (
  <SideBar {...args}>{args.children}</SideBar>
)

export const Classic = Template.bind({})
Classic.args = {
  children: 'Software development',
  elements: ['zxc', 'dsa', 'qwe'],
}
