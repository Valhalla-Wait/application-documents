export type ReducerType = {
  data: DocumentType[]
  status: 'success' | 'loading' | 'fail' | null
  error: string
}

export type DocumentType = {
  id: number
  title: string
  count_bids: number
}