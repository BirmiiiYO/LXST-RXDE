import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Form } from 'components/UI/Form'

export default {
  title: 'Form',
  component: Form,
} as ComponentMeta<typeof Form>

const Template: ComponentStory<typeof Form> = () => <Form />

export const FormComponent = Template.bind({})
FormComponent.args = {}
