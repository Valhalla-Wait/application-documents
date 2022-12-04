export type ReducerType = {
  message: string
  status: 'success' | 'loading' | 'fail' | null
  error: string
}

export type FormDataType = {
  document_title: string
  user_id: number
}

export type ResponseType = {
  message: string
}

export type ServerErrResponse = {
  message: string
}