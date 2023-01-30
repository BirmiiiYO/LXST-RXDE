import React from 'react'

import { AdvantageServiceCard } from 'components/UI/Cards/AdvantageService'
import { BlogCard } from 'components/UI/Cards/Blog'
import { PriceCard } from 'components/UI/Cards/Price'
import { ReviewCard } from 'components/UI/Cards/Review'
import { SolutionCard } from 'components/UI/Cards/Solution'
import { TeamCard } from 'components/UI/Cards/Team'

export const Cards = () => (
  <>
    <AdvantageServiceCard icon="" text="test props" title="test props" />
    <BlogCard
      date="test props"
      image=""
      name="test props"
      text="test props"
      title="test props"
      topics={['zxc']}
    />
    <PriceCard
      infos={['zxc']}
      name="test props"
      text="test props"
      value={123}
    />
    <ReviewCard
      avatar=""
      name="test props"
      position="test props"
      text="test props"
    />
    <SolutionCard advantages={['zxc']} title="test props" />
    <TeamCard avatar="" name="test props" position="test props" />
  </>
)
