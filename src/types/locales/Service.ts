interface FullPage {
  title: string
  extraList: string[]
  icon: string
}

export interface IServiceCardDataProps {
  icon: string
  title: string
  id: number
  fullPage: FullPage[]
}
