import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Button } from 'components/Button'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button />

export const Info = Template.bind({})
Info.args = {
  title: 'Info',
}

export const Success = Template.bind({})
Success.args = {
  title: 'Success',
}

export const Warning = Template.bind({})
Warning.args = {
  title: 'Warning',
}

export const Error = Template.bind({})
Error.args = {
  title: 'Error',
}
