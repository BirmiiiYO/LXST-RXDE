import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import {
  FacebookLogo,
  LinkedinLogo,
  TwitterLogo,
} from 'assets/svg/socialsIcons'
import { SubscribeSection } from 'components/SubscribeSection'
import { Form } from 'components/UI/Form'
import { Section } from 'components/UI/Section'
import { Text } from 'components/UI/Text'

import { Image, TeamMemberContainer } from './styles'

const TeamMember = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const solutions = t('cards.ourTeam', { returnObjects: true }) as []
  const { avatar, name, position, facebook, twitter, linkedin } =
    solutions.find(el => el.id === Number(id))
  console.log(solutions)

  return (
    <>
      <Section>
        <TeamMemberContainer>
          <Image src={avatar} alt={`photo ${name}`} />
          <div>
            {' '}
            <Text typography="BHeadline6" color="primary">
              name:{' '}
            </Text>
            <Text typography="RParagraph1" margin="0 0 20px 0">
              {name}
            </Text>
            <Text typography="BHeadline6" color="primary">
              position:{' '}
            </Text>
            <Text typography="RParagraph1" margin="0 0 20px 0">
              {position}
            </Text>
            <Text typography="BHeadline6" color="primary">
              description:
            </Text>
            <Text typography="RParagraph1" margin="0 0 20px 0">
              {t('base.largeText')}
            </Text>
            <Text typography="BHeadline6" color="primary">
              socials:
            </Text>
            <FacebookLogo /> <LinkedinLogo />
            <TwitterLogo />
          </div>
        </TeamMemberContainer>
        <TeamMemberContainer>
          <Text typography="EbHeadline2" maxWidth="400px" margin="0 210px 0 0">
            Want Leo to share his expertise with you?
          </Text>
          <Form />
        </TeamMemberContainer>
      </Section>
      <SubscribeSection />
    </>
  )
}

export default TeamMember
