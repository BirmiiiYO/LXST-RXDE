export interface IBlogCardProps {
  id: number
  date: string
  title: string
  image: string
  topics: string[]
  size?: 'small' | 'default'
}

export type IBlogCardStyleProps = Required<Pick<IBlogCardProps, 'size'>>
