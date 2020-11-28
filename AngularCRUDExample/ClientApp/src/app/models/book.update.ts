export interface BookUpdate {
  id: number
  name: string,
  year?: number,
  author: string,
  description: string,
  publishDate?: Date
}
