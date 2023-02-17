import { PayPalButtons } from '@paypal/react-paypal-js'
import styled, { css } from 'styled-components'

import { theme } from 'styles/themes'

import { IPriceCardStyleProps } from './types'

export const Container = styled.div<IPriceCardStyleProps>`
  height: 535px;
  width: 255px;
  box-shadow: ${theme.shadows.shadowCard3};
  padding: 50px 35px;
  margin: 10px auto;
  ${({ active }) =>
    active
      ? css`
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
          svg {
            fill: ${theme.colors.white};
            stroke: ${theme.colors.white};
          }
        `
      : ''}
`

export const Name = styled.h3`
  ${theme.typography.B_HEADLINE_6}
`

export const Price = styled.h4`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  font-size: 26px;
  line-height: 40px;
  margin: 16px 0;
`

export const List = styled.div`
  margin-top: 20px;
`

export const Info = styled.div`
  ${theme.typography.R_PARAGRAPH_3}
  margin-bottom: 15px;
  svg {
    margin-right: 10px;
    fill: ${theme.colors.primary};
    stroke: ${theme.colors.primary};
  }
`

export const PayPalButton = styled(PayPalButtons)``
