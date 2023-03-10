import styled from 'styled-components'

import { IImageStyleProps } from './types'

export const Image = styled.img<IImageStyleProps>`
  max-width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
`

Image.defaultProps = {
  width: '100%',
  margin: '0',
}
