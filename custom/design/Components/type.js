export type ItemType = {
  children: Array<ItemType>,
  id: string, title: string,
  active: boolean,
  url: string
}
