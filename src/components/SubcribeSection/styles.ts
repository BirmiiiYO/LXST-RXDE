import styled from 'styled-components'

import { CENTER, SPACE_BETWEEN, theme } from 'styles/themes'

export const Container = styled.div`
  background: ${theme.colors.secondary};
  color: ${theme.colors.white};
  width: 1110px;
  height: 306px;
  ${SPACE_BETWEEN}
`
export const Info = styled.div`
  max-width: 540px;
`
export const Title = styled.h2`
  font-family: ${theme.fonts.manrope};
  font-style: normal;
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  margin-bottom: 24px;
`
export const Text = styled.span`
  font-family: ${theme.fonts.openSans};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
`
export const Input = styled.input``
