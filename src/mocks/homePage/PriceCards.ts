interface IPriceCardProps {
  infos: string[]
  value: string
  text: string
  name: string
  id: number
}

export const cards: IPriceCardProps[] = [
  {
    id: 1,
    infos: ['For small teams – 5 users', 'Community support'],
    name: 'Free trial',
    text: 'Trial plan for starters',
    value: '$00',
  },
  {
    id: 2,
    infos: [
      'For small teams – 15 users',
      'Individual support',
      'Individual data – 60GB',
    ],
    name: 'Lite',
    text: 'Trial plan for starters',
    value: '$99',
  },
  {
    id: 3,
    infos: [
      'For big teams – 30 users',
      'Individual support',
      'Individual data – 120GB',
      'Advanced permissions',
    ],
    name: 'Basic',
    text: 'Trial plan for starters',
    value: '$00',
  },
  {
    id: 4,
    infos: [
      'Unlimited team members',
      'Individual support',
      'Unlimited Individual data',
      'Advanced permissions',
      'Data history',
      'Audit log',
      'All functions included',
    ],
    name: 'For enterprises',
    text: 'Trial plan for starters',
    value: 'Custom',
  },
]
