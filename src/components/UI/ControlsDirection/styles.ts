import styled from 'styled-components'

import { devices } from 'styles/breakpoints'
import { CENTER, COLUMN, SPACE_BETWEEN, theme } from 'styles/themes'

import { IControlsDirectionStyleProps } from './types'

export const ControlButton = styled.button<IControlsDirectionStyleProps>`
  width: 110px;
  height: 60px;
  border: none;
  color: red;
  border-radius: 20px;
  ${CENTER}
  background: ${theme.colors.tertiary};
  &:disabled {
    color: grey;
    svg {
      stroke: ${theme.colors.rhythmicBlue};
    }
  }
  @media ${devices.laptop} {
    border-radius: 14px;
    width: 48px;
    height: 40px;
  }
  transform: rotate(
    ${({ direction }) => (direction === 'right' ? '180deg' : '0deg')}
  );
`
