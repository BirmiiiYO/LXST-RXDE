interface ExtraList {
  extraTitle: string
  extraText: string
}

interface FullPage {
  title: string
  extraList: ExtraList[]
  icon: string
}

export interface ISolutionCardDataProps {
  id: number
  title: string
  advantages: string[]
  fullPage: FullPage[]
}
