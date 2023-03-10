interface IShare {
  name: string
  link: string
}

export interface IBlogArticleProps {
  date: string
  image: string
  title: string
  topics: string[]
  views: number
  share: IShare[]
}
