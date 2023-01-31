import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Form } from 'components/UI/Form'

export default {
  title: 'Form',
  component: Form,
} as ComponentMeta<typeof Form>

const Template: ComponentStory<typeof Form> = args => <Form {...args} />

export const FormComponent = Template.bind({})
FormComponent.args = {
  fields: [
    { label: 'Name', value: 'Andrea' },
    { label: 'Email', value: 'andrea@gmaol.com' },
    { label: 'Theme', value: 'Job' },
    { label: 'Message', value: 'Your message' },
  ],
  title: 'Contact Us',
}
