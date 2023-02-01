import { TFlex } from 'components/UI/Container/types'
import { CENTER, COLUMN, SPACE_BETWEEN } from 'styles/themes'

export const setFlexStyle = (position: TFlex) => {
  switch (position) {
    case 'column':
      return COLUMN
    case 'space-between':
      return SPACE_BETWEEN
    case 'center':
    default:
      return CENTER
  }
}
