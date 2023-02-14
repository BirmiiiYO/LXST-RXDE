import styled from 'styled-components'

import { CENTER } from 'styles/themes'

export const BlogCardsContainer = styled.div`
  padding: 120px 0;

  ${CENTER}
  flex-wrap: wrap;
  & > * {
    margin: 5px;
  }
`
