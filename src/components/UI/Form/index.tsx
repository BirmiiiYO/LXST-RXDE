import React from 'react'

import { Container, Field, Input, Label, List, Title } from './styles'
import { IFormProps } from './types'
import { Button } from '../Button'

export const Form = ({ fields, title }: IFormProps) => (
  <Container>
    <Title>{title}</Title>
    <List>
      {fields.map(({ label, value }) => (
        <Field>
          <Label>{label}</Label>
          <Input value={value} placeholder="zxc" />
        </Field>
      ))}
    </List>
    <div>
      <Button type="small">Send</Button>
    </div>
  </Container>
)
