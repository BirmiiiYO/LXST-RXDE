interface Share {
  name: string
  link: string
}

interface FullPage {
  views: number
  share: Share[]
}

export interface IBlogCardDataProps {
  id: number
  date: string
  image: string
  title: string
  topics: string[]
  fullPage: FullPage
}
