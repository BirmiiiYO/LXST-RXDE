import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import HomePage from 'pages/Home'

export default {
  title: 'Pages',
  component: HomePage,
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = () => <HomePage />

export const Home = Template.bind({})
Home.args = {
  title: 'Info',
}
