import React from 'react'

import { Block, CustomTextField, Input, Label } from './styles'
import { ITextFieldProps } from './types'
import { Button } from '../Button'

export const TextFiled = ({ label, onChange, value }: ITextFieldProps) => (
  <CustomTextField>
    <Block>
      <Label>{label}</Label>
      <Input value={value} onChange={onChange} />
    </Block>

    <Button primary>Send</Button>
  </CustomTextField>
)
