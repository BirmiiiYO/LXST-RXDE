interface IExtraList {
  extraTitle: string
  extraText: string
}

interface ISolution {
  icon: string
  title: string
  extraList: IExtraList[]
}

export interface ISolutionArticleProps {
  blocks: ISolution[]
}
