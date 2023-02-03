import { ReactNode } from 'react'

export interface ISwitchCardsProps {
  title: string
  length: number
  amount: number
  render: (activeCards: number, amount: number) => ReactNode
}
