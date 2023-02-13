export interface ITeamProps {
  avatar: string
  name: string
  position: string
  viewMore: () => void
}

export type IBackgroundStyleProps = Pick<ITeamProps, 'avatar'>
