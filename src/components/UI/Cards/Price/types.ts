export interface IPriceCardProps {
  name: string
  value: string
  infos: string[]
  active: boolean
  onClick: () => void
}

export interface IPriceCardStyleProps {
  active: boolean
}
