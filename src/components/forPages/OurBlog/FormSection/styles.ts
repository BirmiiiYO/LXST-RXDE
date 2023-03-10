import styled from 'styled-components'

import { SPACE_BETWEEN } from 'styles/themes'

export const FormContainer = styled.div`
  width: 1110px;
  ${SPACE_BETWEEN}
  padding:120px 0;
  @media (max-width: 1110px) {
    width: 100vw;
  }
`
