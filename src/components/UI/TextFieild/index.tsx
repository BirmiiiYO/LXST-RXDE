import React from 'react'

import { Block, CustomTextField, EmailInput, Input, Label } from './styles'
import { ITextFieldProps } from './types'
import { Button } from '../Button'

export const TextFiled = ({ label, onChange, value }: ITextFieldProps) => (
  <CustomTextField>
    <Block>
      <Label>{label}</Label>
      <Input value={value} onChange={onChange} />
    </Block>
    <EmailInput />
    <Button type="small" background="white" color="black">
      Send
    </Button>
  </CustomTextField>
)
