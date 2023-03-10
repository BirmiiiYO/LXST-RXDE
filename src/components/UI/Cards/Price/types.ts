export interface IPriceCardProps {
  id: number
  name: string
  value: string
  infos: string[]
  active: boolean
  onClick: () => void
}

export type IPriceCardStyleProps = Pick<IPriceCardProps, 'active'>
