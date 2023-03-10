interface IShare {
  name: string
  link: string
}

interface IShare {
  views: number
  share: IShare[]
}

export interface IBlogPageProps {
  id: number
  date: string
  title: string
  image: string
  topics: string[]
  fullPage: IShare
}
