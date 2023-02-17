import styled, { css } from 'styled-components'

import { COLUMN, SPACE_BETWEEN, theme } from 'styles/themes'

import { IImageStyleProps } from './types'

export const MainContainer = styled.div`
  max-width: 650px;
  align-items: start;
  ${COLUMN}
`

export const Block = styled.div`
  margin: 15px 0;
`
export const Image = styled.img<IImageStyleProps>`
  ${({ isExtraList }) =>
    isExtraList
      ? css`
          width: 40%;
        `
      : css`
          width: 90%;
        `}
  margin-right: 30px;
  border-radius: 6px;
`

export const ExtraBlock = styled.div`
  max-width: 200px;
  svg {
    fill: ${theme.colors.primary};
  }
`

export const ImageBlock = styled.div`
  display: flex;
  margin-top: 30px;
`

export const ExtraList = styled.div`
  ${theme.typography.R_PARAGRAPH_2}
  max-width:230px;
  svg {
    fill: ${theme.colors.primary};
    stroke: ${theme.colors.primary};
    margin-right: 7px;
  }
  & > * {
    margin-bottom: 15px;
  }
`
