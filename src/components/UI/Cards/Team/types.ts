export interface ITeamProps {
  avatar: string
  name: string
  position: string
}

export type IBackgroundStyleProps = Pick<ITeamProps, 'avatar'>
