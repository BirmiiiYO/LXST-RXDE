import { css } from 'styled-components'

import { TFlex } from 'components/UI/Container/types'
import { devices } from 'styles/breakpoints'
import { CENTER, COLUMN, SPACE_BETWEEN } from 'styles/themes'

export const setFlexStyle = (position: TFlex) => {
  switch (position) {
    case 'column':
      return COLUMN
    case 'space-between':
      return css`
        ${SPACE_BETWEEN}
        @media ${devices.laptop} {
          flex-direction: column;
          justify-content: center;
        }
      `
    case 'center':
    default:
      return CENTER
  }
}
