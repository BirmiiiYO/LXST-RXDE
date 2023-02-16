import styled, { css } from 'styled-components'

import { devices } from 'styles/breakpoints'
import { theme } from 'styles/themes'

import { IBlogCardStyleProps } from './types'

export const Container = styled.div<IBlogCardStyleProps>`
  max-width: 540px;
  max-height: 600px;
  cursor: pointer;
  margin: 5px;
  border-radius: 6px;
  @media ${devices.laptop} {
    max-width: 272px;
  }
  ${({ size }) =>
    size === 'default'
      ? css`
          box-shadow: ${theme.shadows.shadowCard3};
        `
      : css`
          display: flex;
          vertical-align: middle;
        `}
`

export const Icon = styled.img<IBlogCardStyleProps>`
  width: 100%;
  height: 300px;
  border-radius: 6px;
  ${({ size }) =>
    size === 'default'
      ? css``
      : css`
          max-width: 190px;
          height: 100%;
        `}
`

export const List = styled.div`
  padding: 0 0 30px 35px;
`

export const InfoBlock = styled.div<IBlogCardStyleProps>``
