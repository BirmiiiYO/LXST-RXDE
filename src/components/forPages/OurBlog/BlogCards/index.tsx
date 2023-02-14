import React, { FC } from 'react'

import { Section } from 'components/UI/Section'

import { BlogCardsContainer } from './styles'
import { IBlogCardsProps } from './types'

export const BlogCards: FC<IBlogCardsProps> = ({ children }) => (
  <BlogCardsContainer>{children}</BlogCardsContainer>
)
