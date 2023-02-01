import React from 'react'

import { StyledContainer } from './styles'
import { IContainerProps } from './types'

export const Container = ({
  children,
  background = 'inherit',
  color = 'inherit',
  flex = 'center',
  margin = '0',
  width = '100%',
}: IContainerProps) => (
  <StyledContainer
    background={background}
    color={color}
    flex={flex}
    margin={margin}
    width={width}
  >
    {children}
  </StyledContainer>
)
