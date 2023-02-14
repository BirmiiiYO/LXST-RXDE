import React, { useState } from 'react'

import { SearchBar } from 'components/UI/SearchBar'

import { AsideContainer } from './styles'

export const AsideBlock = () => {
  const [input, setInput] = useState('')
  return (
    <AsideContainer>
      <SearchBar value={input} changeValue={setInput} />
    </AsideContainer>
  )
}
