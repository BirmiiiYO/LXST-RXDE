import React from 'react'

import { StyledContainer } from './styles'
import { IContainerProps } from './types'

export const Container = ({
  children,
  background = 'white',
  color = 'black',
  flex = 'center',
  margin = '0',
  width = '100%',
  padding = '0',
  mobileColumn = true,
}: IContainerProps) => (
  <StyledContainer
    background={background}
    color={color}
    flex={flex}
    margin={margin}
    width={width}
    padding={padding}
    mobileColumn={mobileColumn}
  >
    {children}
  </StyledContainer>
)
