export type ReducerType = {
  data: UsersType[]
  status: 'success' | 'loading' | 'fail' | null
  error: string
}

export type UsersType = {
  id: number
  firstname: string
  middlename: string
  surname: string
}