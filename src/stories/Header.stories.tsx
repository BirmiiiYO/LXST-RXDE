import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Header } from 'components/Header'

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => <Header {...args} />

export const Info = Template.bind({})
Info.args = {
  setIsOpen: () => console.log('zxc'),
}
