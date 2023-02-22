import React, { FC } from 'react'

import { StyledInput } from './styles'
import { ISearchBarProps } from './types'
import { Button } from '../Button'
import { Container } from '../Container'

export const SearchBar: FC<ISearchBarProps> = ({ changeValue, value }) => (
  <Container flex="space-between" width="445px">
    <StyledInput placeholder="Search" value={value} onChange={changeValue} />{' '}
    <Button>Search</Button>
  </Container>
)
