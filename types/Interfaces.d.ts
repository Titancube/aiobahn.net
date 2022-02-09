declare interface IMenu {
  title: string
  isInternal: boolean
  url: string
}

declare interface INews {
  content: string
  date: Date
  link?: string
}

declare interface IArticle {
  title: string
  url?: string
}

declare interface IWork extends IArticle {
  rDate: string
}
declare interface ILink {
  image: string
  url: string
  content: string
  title: string
}
