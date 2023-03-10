import React from 'react'
import { useTranslation } from 'react-i18next'

import { AsideContainer } from './styles'

export const AsideBlog = () => {
  const { t } = useTranslation()
  return <AsideContainer>{t('base.smallText')}</AsideContainer>
}
