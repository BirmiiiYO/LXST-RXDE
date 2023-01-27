import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Button } from 'components/Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = () => (
  <Button>Learn more</Button>
)

export const Info = Template.bind({})
Info.args = {}

export const Success = Template.bind({})
Success.args = {}
