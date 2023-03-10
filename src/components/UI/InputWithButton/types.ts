export interface IInputWithButtonProps {
  disabled?: boolean
  isError?: boolean
}

export type IInputWithButtonStyleProps = Pick<IInputWithButtonProps, 'disabled'>
