import { css } from 'styled-components'

import { TPosition } from 'components/Breadcrumb/types'

const setPosition = (position: TPosition) => {
  switch (position) {
    case 'topLeft':
      return css`
        left: 0;
        top: 0;
      `
    case 'topRight':
      return css`
        right: 0;
        top: 0;
      `
    case 'bottomLeft':
      return css`
        bottom: 0;
        left: 0;
      `
    default:
      return css`
        bottom: 0;
        right: 0;
      `
  }
}

export { setPosition }
