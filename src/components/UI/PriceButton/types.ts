export interface IPriceButtonProps {
  active?: boolean
  onClick: () => void
}

export type TPriceButtonStyleProps = Omit<IPriceButtonProps, 'onClick'>
