import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Link } from 'components/UI/Link'

export default {
  title: 'Link',
  component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = args => (
  <Link {...args}>Read more</Link>
)

export const LinkIcon = Template.bind({})
LinkIcon.args = { disabled: false, withIcon: false }

export const LinkComp = Template.bind({})
LinkComp.args = { disabled: true, withIcon: true }
