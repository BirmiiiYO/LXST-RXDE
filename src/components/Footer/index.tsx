import React from 'react'

import { Title } from 'components/SubcribeSection/styles'
import { links } from 'constants/links'

import {
  ContactInfo,
  Container,
  Content,
  Icon,
  Information,
  Logo,
  PrivacyInfo,
  QuickLine,
  Service,
  SpaceBetween,
  Text,
} from './styles'

const icons = ['', '', '']
const contacts = [
  'ensome@info.co.us',
  '+1 601-201-5580',
  '1642 Washington Avenue, Jackson, MS, Mississippi, 39201',
]
const services = ['Pages', 'Elements', 'FAQ', 'Pricing', 'Site map']

export const Footer = () => (
  <Container>
    <Content>
      <Information>
        <Logo />
        <Text>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi.
        </Text>
        {icons.map(icon => (
          <Icon src={icon} />
        ))}
        <QuickLine>
          <Title>Quick link</Title>
          {links.map(({ name }) => (
            <text>{name}</text>
          ))}
        </QuickLine>
        <Service>
          <Title>Service</Title>
          {services.map(link => (
            <text>{link}</text>
          ))}
        </Service>
        <ContactInfo>
          <Title>Cantact info</Title>
          {contacts.map(link => (
            <text>{link}</text>
          ))}
        </ContactInfo>
      </Information>
      <PrivacyInfo>
        <Text>Ensome© 2022 All Rights Reserved</Text>
        <SpaceBetween>
          <Text>Privacy policy</Text>
          <Text>Terms of us</Text>
        </SpaceBetween>
      </PrivacyInfo>
    </Content>
  </Container>
)
