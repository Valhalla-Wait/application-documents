export type ReducerType = {
  message: ServerMessages | null
  status: 'success' | 'loading' | 'fail' | null
  error: string
}

export type FormDataType = {
  document_title: string
  user_id: number
}

export type ResponseType = {
  message: ServerMessages
}

export enum ServerMessages {
  success = 'Заявка создана',
  bidErr = 'Вы уже заявляли',
  serverErr = 'Server error',
}