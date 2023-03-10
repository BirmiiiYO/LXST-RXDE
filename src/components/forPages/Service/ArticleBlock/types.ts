interface IServiceArticleBlock {
  title: string
  extraList: string[]
  icon: string
}

export interface IArticleBlockProps {
  blocks: IServiceArticleBlock[]
}

export interface IImageStyleProps {
  isExtraList: boolean
}
