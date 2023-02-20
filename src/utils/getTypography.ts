import { FlattenSimpleInterpolation } from 'styled-components'

import { theme } from 'styles/themes'
import { TTypography } from 'types/Typography'

export const getTypography = (
  type: TTypography,
): FlattenSimpleInterpolation => {
  const {
    B_HEADLINE_4,
    B_HEADLINE_5,
    B_HEADLINE_6,
    B_PARAGRAPH_1,
    EB_HEADLINE_1,
    EB_HEADLINE_2,
    EB_HEADLINE_3,
    R_PARAGRAPH_1,
    M_HEADLINE_7,
    R_PARAGRAPH_2,
    R_PARAGRAPH_3,
    SB_HEADLINE_7,
    SB_HEADLINE_8,
    SB_PARAGRAPH_3,
  } = theme.typography
  switch (type) {
    case 'EbHeadline2':
      return EB_HEADLINE_2
    case 'EbHeadline3':
      return EB_HEADLINE_3
    case 'BHeadline4':
      return B_HEADLINE_4
    case 'BHeadline5':
      return B_HEADLINE_5
    case 'BHeadline6':
      return B_HEADLINE_6
    case 'SBHeadline7':
      return SB_HEADLINE_7
    case 'SBHeadline8':
      return SB_HEADLINE_8
    case 'MHeadline7':
      return M_HEADLINE_7
    case 'BParagraph1':
      return B_PARAGRAPH_1
    case 'RParagraph1':
      return R_PARAGRAPH_1
    case 'RParagraph2':
      return R_PARAGRAPH_2
    case 'RParagraph3':
      return R_PARAGRAPH_3
    case 'SBParagraph3':
      return SB_PARAGRAPH_3
    case 'EbHeadline1':
    default:
      return EB_HEADLINE_1
  }
}
