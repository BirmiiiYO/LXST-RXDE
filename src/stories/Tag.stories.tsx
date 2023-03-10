import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Tag } from 'components/UI/Tag'

export default {
  title: 'Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = args => <Tag {...args}>Proxy</Tag>

export const Classic = Template.bind({})
Classic.args = {}

export const Disabled = Template.bind({})
Classic.args = {
  disabled: true,
}
