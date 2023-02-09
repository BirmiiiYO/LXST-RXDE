import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { ControlsDirection } from 'components/UI/ControlsDirection'

export default {
  title: 'ControlsDirection',
  component: ControlsDirection,
} as ComponentMeta<typeof ControlsDirection>

const Template: ComponentStory<typeof ControlsDirection> = args => (
  <ControlsDirection {...args} />
)

export const ControlsDirectionComponent = Template.bind({})
ControlsDirectionComponent.args = {
  direction: 'left',
  disabled: false,
}
