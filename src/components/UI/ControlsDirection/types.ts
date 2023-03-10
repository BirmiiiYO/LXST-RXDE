export interface IControlsDirectionProps {
  direction: 'right' | 'left'
  disabled?: boolean
  onClick: () => void
}

export type IControlsDirectionStyleProps = Pick<
  IControlsDirectionProps,
  'direction'
>
