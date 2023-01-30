/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Button } from 'components/UI/Button'
import { EButtonType } from 'constants/buttonType'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const learnMore: ComponentStory<typeof Button> = args => (
  <Button {...args}>Learn more</Button>
)
const Watch: ComponentStory<typeof Button> = args => (
  <Button {...args}>Watch the demo</Button>
)

const send: ComponentStory<typeof Button> = args => (
  <Button {...args}>Send</Button>
)

const icon: ComponentStory<typeof Button> = args => <Button {...args} />

export const primary = learnMore.bind({})
primary.args = {
  type: EButtonType.PRIMARY,
}

export const primaryWatch = Watch.bind({})
primaryWatch.args = {
  type: EButtonType.PRIMARY_WATCH,
}

export const watch = Watch.bind({})
primaryWatch.args = {
  type: EButtonType.WATCH,
}
export const bigWatch = Watch.bind({})
primaryWatch.args = {
  type: EButtonType.BIG_WATCH,
}
export const small = send.bind({})
primaryWatch.args = {
  type: EButtonType.SMALL,
}
export const round = learnMore.bind({})
primaryWatch.args = {
  type: EButtonType.ROUND,
}
export const roundSmall = learnMore.bind({})
primaryWatch.args = {
  type: EButtonType.ROUND_SMALL,
}
export const borderWatch = Watch.bind({})
primaryWatch.args = {
  type: EButtonType.BORDER_WATCH,
}
export const iconType = icon.bind({})
icon.args = {
  type: EButtonType.ICON,
}
