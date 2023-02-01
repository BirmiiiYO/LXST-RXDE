import React from 'react'

import featureImage from 'assets/images/featuresSection.png'
import { Button } from 'components/UI/Button'
import { Container } from 'components/UI/Container'
import { Text } from 'components/UI/Text'
import { theme } from 'styles/themes'

import { Description, Image, SolutionContainer } from './styles'

export const FeaturesSection = () => (
  <>
    {' '}
    <Container width="1110px" flex="space-between" margin="120px 0">
      <Text
        typography={theme.typography.EB_HEADLINE_1}
        maxWidth="450px"
        margin="0 300px 0 0"
      >
        The <span>newest</span> business analytics platform
      </Text>
      <Container flex="column">
        <Text
          typography={theme.typography.R_PARAGRAPH_2}
          color={theme.colors.grey}
          maxWidth="400px"
          margin="0 0 30px 0"
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis etquasi architecto beatae vitae dicta sunt
          explicabo.
        </Text>
        <div>
          {/*  почему так... */}
          <Button>Discover more</Button>
        </div>
      </Container>
    </Container>
    <SolutionContainer>
      <Image src={featureImage} />
      <Description>
        <Text
          maxWidth="450px"
          padding="10px"
          color={theme.colors.black}
          typography={theme.typography.EB_HEADLINE_2}
        >
          Radically new solutions for data
        </Text>
        <Text
          typography={theme.typography.R_PARAGRAPH_2}
          color={theme.colors.grey}
          maxWidth="540px"
          margin="0 0 30px 0"
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Text>
        <Button>Learn more</Button>
      </Description>
    </SolutionContainer>
  </>
)
