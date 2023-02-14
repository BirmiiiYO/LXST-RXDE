import React, { FC } from 'react'

import { StyledInput } from './styles'
import { ISearchBarProps } from './types'
import { Button } from '../Button'
import { Container } from '../Container'

export const SearchBar: FC<ISearchBarProps> = ({ changeValue, value }) => {
  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    changeValue(e.target.value)
  }
  return (
    <Container flex="space-between" width="445px">
      <StyledInput placeholder="Search" value={value} onChange={onChange} />{' '}
      <Button>Search</Button>
    </Container>
  )
}
