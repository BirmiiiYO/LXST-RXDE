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

export const primary = learnMore.bind({})
primary.args = {
  buttonType: EButtonType.PRIMARY,
}
export const round = learnMore.bind({})
round.args = {
  buttonType: EButtonType.ROUND,
  padding: '100px 100px',
}

export const borderWatch = Watch.bind({})
borderWatch.args = {
  buttonType: EButtonType.BORDER_WATCH,
  padding: '100px ',
}
