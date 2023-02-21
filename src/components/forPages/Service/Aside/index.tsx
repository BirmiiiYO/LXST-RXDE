import React, { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { SearchBar } from 'components/UI/SearchBar'
import { SideBar } from 'components/UI/SideBar'
import { Text } from 'components/UI/Text'

import { AsideContainer } from './styles'
import { IASideProps } from './types'

export const AsideBlock: FC<IASideProps> = ({ titles }) => {
  const { t } = useTranslation()
  const [input, setInput] = useState('')
  return (
    <AsideContainer>
      <SearchBar value={input} changeValue={setInput} />
      <Text typography="BHeadline4" margin="60px 0 30px">
        {t('base.services')}
      </Text>
      {titles.map(title => (
        <SideBar elements={titles}>{title}</SideBar>
      ))}
    </AsideContainer>
  )
}
