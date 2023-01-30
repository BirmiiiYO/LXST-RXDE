import styled from 'styled-components'

import { IBackgroundStyleProps } from './types'

export const Container = styled.div<IBackgroundStyleProps>`
  background: url(${({ background }) => background});
`

export const Name = styled.h3``

export const Position = styled.h4``
