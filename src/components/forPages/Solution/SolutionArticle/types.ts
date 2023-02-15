interface IExtraList {
  extraTitle: string
  extraText: string
}

interface ISolution {
  icon: string
  text: string
  title: string
  extraList: IExtraList[]
}

export interface ISolutionArticleProps {
  blocks: ISolution[]
