import React, { FC } from 'react'

import { BreadCrumbContainer, PageHeaderContainer } from './styles'
import { IPageHeaderProps } from './types'
import { Container } from '../Container'
import { Section } from '../Section'
import { Text } from '../Text'

export const PageHeader: FC<IPageHeaderProps> = ({
  subtitle,
  title,
  breadcrumbs,
  type = 'light',
}) => (
  <PageHeaderContainer type={type}>
    {type === 'light' ? (
      <>
        {' '}
        <Text typography="EbHeadline1" center>
          {title}
        </Text>
        <BreadCrumbContainer position={type === 'light'}>
          {breadcrumbs.map(text => (
            <Text typography="MHeadline7" color="grey">
              {text}
            </Text>
          ))}
        </BreadCrumbContainer>
      </>
    ) : (
      <>
        <BreadCrumbContainer position={type === 'light'}>
          {breadcrumbs.map(text => (
            <Text typography="MHeadline7" color="grey">
              {text}
            </Text>
          ))}
        </BreadCrumbContainer>
        <Section backgroundColor="secondary">
          <Container flex="space-between" background="secondary" width="1110px">
            <Text typography="EbHeadline1" color="white">
              {title}
            </Text>
            <Text typography="RParagraph3" color="white" maxWidth="350px">
              {subtitle}
            </Text>
          </Container>
        </Section>
      </>
    )}
  </PageHeaderContainer>
)
