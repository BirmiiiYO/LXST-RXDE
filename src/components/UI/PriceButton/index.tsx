import React from 'react'
import { useTranslation } from 'react-i18next'

import { StyledPriceButton } from './styles'
import { IPriceButtonProps } from './types'

export const PriceButton = ({ active = false, onClick }: IPriceButtonProps) => {
  const { t } = useTranslation()

  return (
    <StyledPriceButton onClick={onClick} active={active}>
      {t('base.choosePlan')}
    </StyledPriceButton>
  )
}
