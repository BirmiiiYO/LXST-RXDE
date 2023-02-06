import { theme } from 'styles/themes'
import { TColor } from 'types/Color'

export const getColor = (type: TColor): string => {
  const {
    aliceBlue,
    black,
    bluberry,
    grey,
    indigo,
    primary,
    redError,
    rhythmicBlue,
    secondary,
    steelTeal,
    tertiary,
    white,
  } = theme.colors
  switch (type) {
    case 'aliceBlue':
      return aliceBlue
    case 'bluberry':
      return bluberry
    case 'grey':
      return grey
    case 'indigo':
      return indigo
    case 'primary':
      return primary
    case 'redError':
      return redError
    case 'rhythmicBlue':
      return rhythmicBlue
    case 'secondary':
      return secondary
    case 'steelTeal':
      return steelTeal
    case 'tertiary':
      return tertiary
    case 'white':
      return white
    case 'black':
    default:
      return black
  }
}
