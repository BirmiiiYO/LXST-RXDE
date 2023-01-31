import styled from 'styled-components'

import { SPACE_BETWEEN, theme } from 'styles/themes'

export const Container = styled.div`
  max-width: 1110px;
  position: relative;
  ${SPACE_BETWEEN}
`
export const Text = styled.span`
  ${theme.typography.R_PARAGRAPH_2}
  color:${theme.colors.grey};
  max-width: 350px;
  padding: 10px;
`

export const ButtonContainer = styled.div`
  position: absolute;
  right: 20%;
  bottom: -60px;
`

export const HeroImage = styled.img`
  width: 100%;
`
