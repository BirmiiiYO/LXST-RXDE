import React from 'react'

import featureImage from 'assets/images/featuresSection.png'
import { Button } from 'components/UI/Button'
import { Title } from 'components/UI/Title'
import { theme } from 'styles/themes'

import {
  Description,
  DescriptionTitle,
  Image,
  SolutionContainer,
  Text,
  TextAndButton,
  TextContainer,
} from './styles'

export const FeaturesSection = () => (
  <>
    {' '}
    <TextContainer>
      <Title
        typography={theme.typography.EB_HEADLINE_1}
        maxWidth="540px"
        margin="0 200px 0 0"
      >
        The <span>newest</span> business analytics platform
      </Title>
      <TextAndButton>
        <Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis etquasi architecto beatae vitae dicta sunt
          explicabo.
        </Text>
        <div>
          {/*  почему так... */}
          <Button type="small">Discover more</Button>
        </div>
      </TextAndButton>
    </TextContainer>
    <SolutionContainer>
      <Image src={featureImage} />
      <Description>
        <DescriptionTitle>Radically new solutions for data</DescriptionTitle>
        <Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Text>
        <Button type="small">Learn more</Button>
      </Description>
    </SolutionContainer>
  </>
)
