import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { TextFiled } from 'components/UI/TextFieild'

export default {
  title: 'TextFiled',
  component: TextFiled,
} as ComponentMeta<typeof TextFiled>

const Template: ComponentStory<typeof TextFiled> = args => (
  <TextFiled {...args} />
)

export const Classic = Template.bind({})
Classic.args = {
  label: 'Name',
  value: 'Artsiom',
  onChange: () => {
    console.log('change')
  },
}
