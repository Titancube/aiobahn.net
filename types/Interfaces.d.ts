declare interface IMenu {
  title: string
  isInternal: boolean
  url: string
}

declare interface INews {
  title: string
  url?: string
}

declare interface IWork extends INews {}
declare interface ILink {
  image: string
  url: string
  content: string
}
