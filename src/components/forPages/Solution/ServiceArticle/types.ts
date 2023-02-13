interface IExtraList {
  extraTitle: string
  extraText: string
}

interface IBlogProps {
  icon: string
  text: string
  title: string
  extraList: IExtraList[]
}

export interface IServiceArticleProps {
  blocks: IBlogProps[]
}
