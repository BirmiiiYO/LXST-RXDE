import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Button } from 'components/Button'
import { EButtonType } from 'constants/buttonType'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Button {...args}>Watch the demo</Button>
)
export const primary = Template.bind({})
primary.args = {
  type: EButtonType.PRIMARY,
}

export const primaryWatch = Template.bind({})
primaryWatch.args = {
  type: EButtonType.PRIMARY_WATCH,
}

export const watch = Template.bind({})
primaryWatch.args = {
  type: EButtonType.WATCH,
}
export const smallWatch = Template.bind({})
primaryWatch.args = {
  type: EButtonType.SMALL_WATCH,
}
export const small = Template.bind({})
primaryWatch.args = {
  type: EButtonType.SMALL,
}
export const round = Template.bind({})
primaryWatch.args = {
  type: EButtonType.ROUND,
}
export const roundSmall = Template.bind({})
primaryWatch.args = {
  type: EButtonType.ROUND_SMALL,
}
export const borderWatch = Template.bind({})
primaryWatch.args = {
  type: EButtonType.BORDER_WATCH,
}
export const icon = Template.bind({})
primaryWatch.args = {
  type: EButtonType.ICON,
}
